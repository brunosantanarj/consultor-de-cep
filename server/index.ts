import * as next from 'next'
import * as express from 'express';
import * as fetchImport from 'isomorphic-unfetch';
import * as R from 'ramda';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const fetch = (fetchImport.default || fetchImport) as typeof fetchImport.default;

app.prepare().then(() => {
  const server = express();

  server.get('/buscar-cep/:cep', async ({ params }, res) => {
    const request = await fetch(`https://viacep.com.br/ws/${params.cep}/json/`);
    if (!request.ok) {
      res.statusCode = 406;
      res.send({ error: 'CEP Inválido' });
      return;
    }

    const data = await request.json();
    res.send(R.pick(['cep', 'logradouro', 'localidade', 'uf'], data));
  });

  server.get('*', (req, res) => handle(req, res));

  server.listen(port, (err: Error) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`);
  })
})
