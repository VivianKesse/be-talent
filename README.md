# Be Talent

## Sobre o Projeto

O **Be Talent** é uma aplicação web desenvolvida com React e TypeScript para gestão de funcionários. A aplicação exibe uma lista de funcionários com suas informações, permitindo a filtragem por nome, cargo e telefone. 

## Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- JSON Server (para simulação de API REST)
- ESLint (para linting)
- CSS puro (para estilização)

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Como Rodar o Projeto

### 1. Clonar o Repositório
```sh
git clone https://github.com/VivianKesse/be-talent.git
cd be-talent
```

### 2. Instalar as Dependências
```sh
npm install
# ou
yarn install
```

### 3. Iniciar a API Fake com JSON Server

Se o arquivo `db.json` já está pronto, basta rodar o seguinte comando para iniciar o servidor:

```sh
npx json-server --watch db.json --port 3000
```

### 4. Configurar a Variável de Ambiente

Certifique-se de que seu arquivo `.env` na raiz do projeto contém:
```sh
VITE_API_URL=http://localhost:3000/employees
```

### 5. Rodar a Aplicação
```sh
npm run dev
# ou
yarn dev
```

Acesse a aplicação no navegador: [http://localhost:5173](http://localhost:5173)

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento com Vite.
- `npm run build`: Compila a aplicação para produção.
- `npm run preview`: Exibe a versão de produção localmente.
- `npm run lint`: Verifica erros de linting no código.

