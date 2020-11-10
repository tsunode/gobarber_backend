# GoBarber Backend

[![node version](https://img.shields.io/node/v/react)](https://img.shields.io/node/v/react)
![npm](https://img.shields.io/npm/v/pg?label=Postgres)
<img src="https://img.shields.io/github/languages/top/tsunodajapa/gobarber_backend">

<a href="https://insomnia.rest/run/?label=Rotas%20Gobarber&uri=https%3A%2F%2Fgithub.com%2Ftsunodajapa%2Fgobarber_backend%2Fblob%2Fmaster%2FrotasInsomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>

#### API desenvolvida para o GoBarber, uma aplicação para agendamento de cabeleireiros

### Funcionalidades e Padrões de Arquitetura Utilizada:

 - API:
    1. Arquitetura SOLID;
    2. ORM para comunicação com banco de dados;
    3. Alguns Conceitos de DDD;
    4. Teste unitários TDD;
    5. Banco SQL (Postgres) e NoSQL (mongoDB);
    6. Cache utilzando REDIS;
    7. UUID como identificador de cada tabela;
    8. AWS para disparo de e-mail (SES) e armazenamento (S3);

## Requisitos de instalação

- npm >= 6.0.0
- node >= 10.0
- Postgres >= 10.0
- MongoDB
- Redis

## Como utilizar

#### 2. Na raiz do projeto crie um arquivo '.env' seguindo o parâmetro do arquivo .env.example., os parâmetros AWS_ACCESS_KEY_ID

#### 3. No mesmo arquivo .env, insisra a base_url da sua API (default port 3333).

#### 4. Dentro da API (cd API), existe um arquivo <b>ormconfig.example.json</b> na raiz do projeto. crie um arquivo no mesmo padrão dele porém sem o example (ormconfig.example.json -> ormconfig.json) e altere os seguintes dados de acordo com o seu banco POSTGRES: host, port, username, password, database. As demais informações desse arquivo já está configurado.

> Sem a configuração desse arquivo corretamente, a api não funcionará.

<br>

## Iniciando a API

#### Primeiro alterne para o diretório da API:
```
cd api
```

#### Execute o comando para instalações de dependências da API:

```
yarn

ou

npm install
```

#### Execute o comando para rodar as Migrations, que criará as tabelas no banco:
> É importante que o passo 4 da sessão "Como Utilizar" esteje apontando para o banco corretamente.

```
npm run typeorm migration:run

ou

yarn typeorm migration:run
```

#### Se tudo ocorreu bem até aqui, basta iniciar a API com o seguinte comando:

```
npm run dev:server

ou

yarn dev:server
```

## Iniciando o aplicativo Mobile

#### Primeiro alterne para o diretório do MOBILE:
> Caso esteja na pasta da API, não esqueça de retornar uma pasta primeiro (cd..)

```
cd mobile
```

#### Execute o comando para instalações de dependências do Mobile:

```
yarn

ou

npm install
```

#### Execute o comando para iniciar o aplicativo:
> Certifique de configurar o emulador ou plugar o celular no computador

```
yarn android

ou

npm run android
```

ou

```
yarn ios

ou

npm run ios
```
