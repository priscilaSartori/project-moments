<h1 align="center">Curso de Adonis.js</h1>

## Descrição do Projeto
<p align="center">

Adonis.js é um framework Node.js, para desenvolver aplicações web. Ele facilita muito a programação de apps, pois possui uma estrutura similar ao Laravel.
Utiliza arquitetura MVC e possui vários recursos, como CLI, File upload simples, validações e etc. E também pacotes externos de ORM, Autenticação e autorização.

Nessa aplicação foi criada uma API Restful, com um CRUD e relacionamento entre as entidades.
</p>

<hr>

<div align="center">
<img src="https://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/>
</div>

<br />

## Passo a passo
# Iniciando os trabalhos com o Adonis.JS
- Iniciar o projeto com o comando: npm init adonis-ts-app@latest .
  - api
  - escolher o nome do projeto
  - true
  - true

# Criando uma collection no Postman
- Inicar o servidor com o comando: node ace serve --watch
- Configurar a rota inicial no Postman

# Instalando um BD
- Instalar o lucid: npm i @adonisjs/lucid
Lucid é o SQL ORM oficial para AdonisJS. Ele vem com um Active Record ORM, Query Builder, Migrations, Seeds e Factories
- Configurar o lucid: node ace configure @adonisjs/lucid
  - SQLite
  - In the terminal

# Configurando o CORS
- Liberar o acesso da API: ir na pasta config > cors.ts e alterar:
  - enabled: false, por:
  - enabled: (request) => request.url().startsWith('/api'),
- Configurar o prefixo das URLs: ir na pasta start > routes.ts e alterar:
  - Route.get('/', async () => {
      return { hello: 'world' }
    }), por
  - Route.group(() => {
      Route.get('/', async () => {
        return { hello: 'world' }
      })
    }).prefix('/api')

# Models na estrutura MVC
- node ace make:model Moment -m
(-m é para criar a migration)
- Configurar a model criada na pasta app > Models > Moments.ts

# Migration
- Reflita a estrutura adicionada na model na migration
- Rodar a migration: node ace migration:run

# Visualizando as Migrations
- O banco de dados foi gerado na pasta tmp. Para visualizar podemos instalar a extenção SQLite Viewer

# Controller (Vai ficar as ações e as regras de negócio)
- node ace make:controller Moment
- Ir na Controller criada na pasta app > Controllers e desenvolver a regra de negocio
- Ir no arquivo router e configurar a rota desejada
- Visualizar as rotas cadastradas: node ace list:routes
- Adicionar a rota no Postman

# Simplificando rotas
- No arquivo de rotas, ao invés de colocar por exemplo post, eu colocar resource, tiramos os nomes das funções da rota e deixamos apenas a controller e ao executar o comando de listar as rotas, ganhamos as outras rotas complementares da aplicação:
Route.resource('/moments', 'MomentsController')
- O comando acima traz também rotas que não são de API, como a create, então podemos usar outro comando para trazer somente as rotas de API:
Route.resource('/moments', 'MomentsController').apiOnly()

# Inserindo dados no BD
- Descomentar a linha 1 da controller criada, que contem todas as informações da requisição
- Importar a Model e desenvolver a função no controller com a resposta
- Para visualizar no Postman, no campo body, marcar raw e Json 

# Upload de imagem
- Instalar o pacote: npm i uuid
- Importar o uuid na controller - versão 4: import { v4  as uuid4 } from 'uuid' 
- Importar Aplication: import Application from '@ioc:Adonis/Core/Application'
Ajuda a colocar a imagem no lugar que queremos
- Após desenvolver a controller com a image, para visualizar no Postman, não poderá ser mais em JSON, então selecionar o form-data e preencher os campos

# Buscando todos os registros


# Buscando por id


# Removendo registros


# Atualizando um registro


# Criando o model Comment


# Efetuando a relações


# Criando um controller


# Criando o método store


# Exibindo os comentários junto com os momentos
