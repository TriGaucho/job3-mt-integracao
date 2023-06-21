Fluxo:

Inicializar projeto:
npm init -y

Typescript
instalação: npm install typescript ts-node-dev @types/node tsconfig-paths -D

Configuração: npx tsc --init --rootDir src --outDir build --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true
Configurar o tsconfig.json

Plugin .editorconfig e edição das configurações .editorconfig.

ESLint
npm i -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

npm i express cors express-async-errors
npm i dotenv knex moment mysql2 winston bcryptjs

npm i -D @types/express @types/cors
npm i -D @types/bcryptjs @types/jsonwebtoken @types/knex

Babel
npm i -D @babel/cli @babel/core @babel/node @babel/preset-env @babel/preset-typescript @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties babel-plugin-module-resolver babel-plugin-transform-typescript-metadata

Criar arquivo babel.config.js


Axios: https://vidafullstack.com.br/javascript/upload-de-arquivos-node-js-multer/
npm i axios
npm i -D @types/axios

Multer:
npm i multer
npm i -D  @types/multer


rm -Rf node_modules
rm -Rf dist
