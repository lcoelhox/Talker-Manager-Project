# Boas-vindas ao repositório do projeto Talker Manager!

## Sobre
Um projeto onde construí uma aplicação de cadastro de talkers (palestrantes) em que foi possível cadastrar, visualizar, pesquisar, editar e excluir informações. Para isso precisei Desenvolver uma API de um CRUD de palestrantes e Desenvolvi alguns endpoints que irão ler e escrever em alguns arquivos utilizando o módulo fs.

## Stacks e habilidades utilizadas
- API Rest
- NodeJs
- Express
- MySQL
- Thunder Client
- Docker

## Como testar localmente:
1. Clone o repositório `git@github.com:lcoelhox/Talker-Manager-Project.git`
2. Certifique-se que o node está na versão 16 ou superior, com comando: `node -v`
3. Se não estiver na versão 16 basta usar o comando: `nvm use 16`
4. Em seguida o comando: `npm install`

## Como testar com Docker:
1. Clone o repositório `git@github.com:lcoelhox/Talker-Manager-Project.git`
2. Certifique-se que o node está na versão 16 ou superior, com comando: `node -v`
3. Se não estiver na versão 16 basta usar o comando: `nvm use 16`

- Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior. Veja aqui ou na documentação como instalá-lo. No primeiro artigo, você pode substituir onde está com 1.26.0 por 1.29.2.

4. Rode os serviços node e db com o comando: `docker-compose up -d`.

Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queria fazer uso da aplicação em containers;
Esses serviços irão inicializar um container chamado store_manager e outro chamado store_manager_db;
A partir daqui você pode rodar o container store_manager via CLI ou abri-lo no VS Code.

Opção 1: Use o comando `docker-compose run node npm test`, ou para acessar o container e executar lá:

Opção 2: Use o comando `docker exec -it store_manager bash` e siga o passo abaixo.

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
5. Instale as dependências [Caso existam] com `npm install`

## Fontes de consultas:
* [NodeJs.org](https://nodejs.org/en/docs/)
* [Docker.com](https://docs.docker.com/)
* [Mysql.com](https://dev.mysql.com/doc/)

## Direitos Autorais:
Este projeto foi desenvolvido para fins de aprendizado por Lucas Coelho. É permitido baixar ou clonar o repositório para fins de estudo, porém não é permitida a publicação de cópias totais ou parciais do mesmo. Esta isenção de responsabilidade não abrange bibliotecas e dependências, que estão sujeitas às suas respectivas licenças.

