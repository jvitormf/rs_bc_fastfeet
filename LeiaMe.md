
<!-- PROJECT LOGO -->
<h1 align="center">
  <a href="https://github.com/jvitormf/rs_bc_fastfeet">
    <img src=".github/logo_fastfeet.png" alt="Logo" width="473" height="80">
  </a>
</h1>

<!-- BADGES -->
<p align="center">
  <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/jvitormf/rs_bc_fastfeet?color=green">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/jvitormf/rs_bc_fastfeet">
  <img alt="GitHub stars" src="https://img.shields.io/github/stars/jvitormf/rs_bc_fastfeet">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/jvitormf/rs_bc_fastfeet">
  <img alt="GitHub" src="https://img.shields.io/github/license/jvitormf/rs_bc_fastfeet">
  <a href="https://www.linkedin.com/in/jvitormf/">
    <img alt="LinkedIn" src="https://img.shields.io/badge/-LinkedIn-black.svg?style=flat&logo=linkedin&colorB=555">
  </a>
</p>
<p align="center">
  <a href="https://github.com/jvitormf/rs_bc_fastfeet">
    Click here for English version.
  </a>
</p>


<!-- TABLE OF CONTENTS -->
# Índice

* [Sobre o Projeto](#boom-sobre-o-projeto)
  * [Tecnologias](#gear-tecnologias)
    * [Ferramentas](#ferramentas)
    * [Comum (Back-end, Front-end)](#comum-(Back-end,-Front-end))
    * [Back-end](#back-end)
    * [Fron-end](#front-end)
* [Começando](#rocket-começando)
  * [Pré-requisitos](#clipboard-pré-requisitos)
  * [Configuração](#zap-configuração)
    * [Docker](#configuração-docker)
    * [FastFeet](#configuração-fastfeet)
    * [Back-end](#configuração-back-end)
    * [Front-end](#configuração-front-end)
* [Licença](#memo-licença)
* [Contribuir](#bulb-contribuir)
* [Contato](#e-mail-contato)
* [Reconhecimentos](#exclamation-reconhecimentos)
<!-- * [Usage](#usage)
* [Roteiro](#arrows_clockwise-roadmap) -->



<!-- ABOUT THE PROJECT -->
# :boom: Sobre o Projeto

<!-- Project image -->
<img src=".github/orders.png" alt="Orders">


### Descrição

"FastFeet" é um desafio criado pela [Rocketseat](https://rocketseat.com.br/) para seus alunos criarem uma aplicação do zero até seu completo funcionamento. A ideia é para usar as habilidades adquiridas no Bootcamp GoStack, com as tecnologias Node.js, React e React Native.

O software é uma aplicação de transporte fictícia e tem os seguintes recursos:

* Criação, edição e exclusão de entregadores, pedidos e destinatários;
* O entregador recebe um e-mail quando um pedido é criado ou cancelado;
* Cada entregador pode somente fazer 5 entregas por dia;
* Upload de arquivos;
* Confirmação de coleta e entrega e pedidos;
* As coletas somente podem ser feitas entre 08h as 18h


### Mais detalhes
  * [FastFeet etapa 1](https://github.com/jvitormf/bootcamp-gostack-desafio-02)
  * [FastFeet etapa 2](https://github.com/jvitormf/bootcamp-gostack-desafio-03)
  * [FastFeet etapa 3](https://github.com/jvitormf/bootcamp-gostack-desafio-09)
  * [FastFeet etapa 4](https://github.com/jvitormf/bootcamp-gostack-desafio-10)

## :gear: Tecnologias
  ### Ferramentas
  * [VSCode](https://code.visualstudio.com/)
  * [Docker](https://www.docker.com/)
  * [Yarn](https://yarnpkg.com/)
  * [Insomnia](https://insomnia.rest/)
  * [Postbird](https://www.electronjs.org/apps/postbird)
  * [Reactotron](https://infinite.red/reactotron)

  [:arrow_up: Voltar ao índice](#índice)

  ### Comum (Back-end, Front-end)
  * [Eslint](https://eslint.org/)
  * [Prettier](https://prettier.io/)
  * [Date-fns](https://date-fns.org/)
  * [Yup](https://github.com/jquense/yup)

  [:arrow_up: Voltar ao índice](#índice)

  ### Back-End
  * [Bcryptjs](https://github.com/dcodeIO/bcrypt.js)
  * [Bee-queue](https://github.com/bee-queue/bee-queue)
  * [Cors](https://github.com/expressjs/cors)
  * [Dotenv](https://github.com/motdotla/dotenv)
  * [Express](http://expressjs.com/)
  * [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
  * [Multer](https://github.com/expressjs/multer)
  * [Nodemailer](https://nodemailer.com/about/)
  * [Pg](https://github.com/brianc/node-postgres)
  * [Pg Hstore](https://github.com/scarney81/pg-hstore)
  * [Sentry](https://sentry.io/welcome/)
  * [Sequelize](https://sequelize.org/)
  * [Youch](https://github.com/poppinss/youch)
  * [Nodemon](https://nodemon.io/)
  * [Sucrase](https://sucrase.io/)

  [:arrow_up: Voltar ao índice](#índice)

  ### Front-End
  * [Axios](https://github.com/axios/axios)
  * [History](https://github.com/ReactTraining/history)
  * [Immer](https://immerjs.github.io/immer/docs/introduction)
  * [Polished](https://polished.js.org/)
  * [React](https://pt-br.reactjs.org/)
  * [React Avatar](https://www.sitebase.be/react-avatar/)
  * [React Icons](https://react-icons.netlify.com/#/)
  * [React Redux](https://react-redux.js.org/)
  * [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
  * [React Select](https://react-select.com/home)
  * [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
  * [Styled Components](https://styled-components.com/)
  * [Unform](https://unform.dev/)
  * [Customize Cra](https://github.com/arackaf/customize-cra)
  * [React App Rewired](https://github.com/timarney/react-app-rewired)

[:arrow_up: Voltar ao índice](#índice)

<!-- * [React Native](https://reactnative.dev/) -->


<!-- GETTING STARTED -->
# :rocket: Começando

Para rodar uma cópia deste projeto, sigas estes passos.

## :clipboard: Pré-requisitos

* Node.js - [Guia de instalação](https://nodejs.org/en/download/package-manager/)
* Yarn - [Guia de instalação](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
* Docker - [Guia de instalação](https://docs.docker.com/get-docker/)

[:arrow_up: Voltar ao índice](#índice)


## :zap: Configuração

  ### Configuração Docker

  * Execute os comandos abaixo para criar os containers necessários.
    ```sh
    #Cria um contêiner Postgres com o banco de dados fastfeet
    docker run --name pg_fastfeet -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=fastfeet -p 5432:5432 -d postgres
    ```

    ```sh
    #Cria um contêiner do Redis
    docker run --name rds_fastfeet -p 6379:6379 -d -t redis:alpine
    ```

  [:arrow_up: Voltar ao índice](#índice)

***

  ### Configuração FastFeet

  * Clone o projeto rs_bc_fastfeet

    ```sh
    git clone https://github.com/jvitormf/rs_bc_fastfeet.git
    ```

  [:arrow_up: Voltar ao índice](#índice)

***

  ### Configuração Back-end

  * Dentro da pasta **backend** crie um arquivo com o nome `.env` o cole nele o conteúdo do arquivo `.env.example` e preencha o restante das variáveis (APP_SECRET e Mail).

    * Você pode usar o [Mailtrap](https://mailtrap.io/how-it-works) para obter as informações das variáveis de **Mail**.

  * Dentro da pasta **backend** execute o comando abaixo para instalar os pacotes necessários
    ```sh
    yarn
    ```

  * Execute o comando abaixo para criar o banco de dados.

    ```sh
      yarn sequelize db:migrate
      ```

  * Execute o comando abaixo para popular o banco de dados.

    ```sh
      yarn sequelize db:seed:all
      ```

  * E para iniciar a API execute o comando abaixo.

    ```sh
      yarn dev
      ```

  * Abra um novo terminal e execute o comando `yarn queue` para iniciar o processo de e-mails.

  * Utilize o usuário `admin@fastfeet.com` e senha `123456` para fazer o login na aplicação

  [:arrow_up: Voltar ao índice](#índice)

***

  ### Configuração Front-end

  * Abra um novo terminal e acessar a pasta **frontend** e execute o comando abaixo para instalar os pacotes necessários.

    ```sh
    yarn
    ```

  * Para iniciar o Front-end execute o seguinte comando.

    ```sh
    yarn start
    ```

  [:arrow_up: Voltar ao índice](#índice)


<!-- ROADMAP -->
<!-- # :arrows_clockwise: Roadmap

See the [open issues](https://github.com/jvitormf/rs_bc_fastfeet/issues) for a list of proposed features (and known issues). -->


<!-- CONTRIBUTING -->
# :bulb: Contribuir

Qualquer contribuição será **muito bem-vinda**

1. Crie um Fork do projeto
2. Crie uma Branch (`git checkout -b feature`)
3. Faça um commit de suas alterações (`git commit -m 'Add some Feature'`)
4. Faça um push (`git push origin Feature`)
5. Abra uma Pull Request

[:arrow_up: Voltar ao índice](#índice)


<!-- USAGE EXAMPLES -->
<!-- # Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->


<!-- LICENSE -->
# :memo: Licença

Distribuído sobre a licença MIT. Veja [LICENSE](LICENSE.md) para mais informações.

[:arrow_up: Voltar ao índice](#índice)


<!-- CONTACT -->
# :e-mail: Contato

João Vitor - <j.vitor.mf@gmail.com>

LinkedIn - <https://www.linkedin.com/in/jvitormf/>

Link do projeto: [https://github.com/jvitormf/rs_bc_fastfeet](https://github.com/jvitormf/rs_bc_fastfeet)

[:arrow_up: Voltar ao índice](#índice)


<!-- ACKNOWLEDGEMENTS -->
# :exclamation: Reconhecimentos

* [Rocketseat GoStack Bootcamp](https://rocketseat.com.br/gostack)

[:arrow_up: Voltar ao índice](#índice)
