# Consultor de CEP

## Buscador de CEP válido com NEXT.JS, React, TypeScript e Express.

Para buildar esse projeto você precisa do [Node LTS](https://nodejs.org/en/) e do seu gerenciador de pacotes preferido.

Tecnologias utilizadas nesse projeto:
- Next.js
- React
- TypeScript
- Express
- Jest
- Puppeteer
- Styled-Components

Para instalar as dependências basta rodar no terminal:

```
$ yarn install
```
ou
```
$ npm install
```

Após a instalação das dependências, rode o seguinte comando para a versão de desenvolvimento. Este comando levanta o servidor que é utilizado pelo Next.js e pelo BFF
```
$ yarn dev
````
ou
```
$ npm run dev
```

Para gerar o build de produção rodas os seguintes comandos:
```
$ yarn build
$ yarn start
````

ou
```
$ npm run build
$ npm run start
````

Para rodar os testes com jest e Puppeteer é necessário que o servidor esteja em pé. Você pode escolher entre rodar o ambiente de desenvolvimento ou o processo de build de produção. Para efeito de testes, levantaremos o desenvolvimento.
```
$ yarn dev
$ yarn test
````

