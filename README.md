# 🚀 Sobre

![FastFeet-WEB](https://user-images.githubusercontent.com/49761746/76643523-f36d8580-6533-11ea-9a69-06b7bbdb9213.gif) 
![FastFeetApp](https://user-images.githubusercontent.com/49761746/77583845-84434a00-6ec0-11ea-9303-d8847a5d9c20.gif)

Esse projeto faz parte do Desafio Final, que é uma aplicação completa (Back-end, Front-end e Mobile) que é avaliada para emissão do Certificado do Bootcamp GoStack!

# 📚 Instruções

## 🚨 Requisitos

Para rodar esse projeto, você precisará dos seguintes pacotes instalados:

* [NodeJS v10.16 or higher](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)
* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/)

## ⚡ Passo-a-Passo

### 1. Clonar o repositório

    $ git clone https://github.com/enrickdaltro/fastfeet.git

### 2. Inicializar o container utilizando DOCKER

    $ docker run --name somename -e POSTGRES_PASSWORD=password -d postgres

Se você já possuir um container com Postgres, rode:
    
    $ docker start "CONTAINER DOCKER ID"

### 3 .Inicializar Redis usando Docker

    $ docker run --name some-redis -d redis

Se você já possuir um container com Redis, rode:
    
    $ docker start "CONTAINER DOCKER ID"

### 4. Rode os seguintes comandos na pasta BACKEND para inicializar o servidor:

    $ cd backend

para instalar as dependências:

    $ yarn

Rodar as migrations e seed:

    $ yarn sequelize db:create

    $ yarn sequelize db:migrate

    $ yarn sequelize db:seed:all

Inicializar o servidor:

    $ yarn dev

### 5. Rode os seguintes comandos na pasta FRONTEND para iniciar a versão web:

para instalar as dependências:

    $ yarn

Inicializar o servidor:

    $ yarn start

### 6. Rode os seguintes comandos na pasta MOBILE para iniciar a versão mobile (Apenas iOS)

para instalar as dependências:

    $ yarn

Inicializar o simulador:

    $ yarn react-native run-ios




# 👨‍💻 Tecnologias

## Backend

* NodeJS
* Express
* Docker
* Sequelize
* Mongoose
* Axios
* Immer
* date-fns
* bcrypt.js
* cors
* jsonwebtoken
* multer
* Reactotron
* Yup
* multer
* pg
* ESLint
* Prettier

## Frontend

* ReactJs
* Redux
* Redux-Saga
* Axios
* Immer
* React-Icons
* @rocketseat/unform
* History
* styled-components
* React-Select
* React-Toastify
* Reactotron
* Yup
* ESLint
* Prettier

## Mobile (Apenas iOS)

* React-Native
* Redux
* Redux-Saga
* React-Navigation
* React-Native-Camera
* date-fns
* Axios
* Immer
* styled-components
* Reactotron
* ESLint
* Prettier


Made with ❤️by [Enrick Daltro](https://www.linkedin.com/in/enrickdaltro/) 🤙
