import * as next from 'next'
import * as express from 'express';
import * as R from 'ramda';
import * as fetchImport from 'isomorphic-unfetch';

const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/buscar-cep/:cep', async ({ params }, res) => {
    const request = await fetch(`https://viacep.com.br/ws/${params.cep}/json/`);
    const data = await request.json();

    if (!request.ok || R.keys(data).length <= 1) {
      res.statusCode = 406;
      res.json({ error: 'CEP Inválido' });
      return;
    }

    res.send(R.pick(['cep', 'logradouro', 'localidade', 'uf'], data));
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err: Error) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`);
  })
})
