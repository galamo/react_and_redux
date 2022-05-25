# React And Redux

#### Before we start

1. check your node version run `node -v`
2. check your npm version run `npm -v`

<!-- s -->

## Async programing

- Callback
- Promise
- Async Await

## Typescript

### Configure Typescript

- `npm install -g typescript`
- `npm install ts-node`
- `npm install -g concurrently`
- `npm install nodemon -g`
  ` "_run-all": "concurrently -k -p \"[{name}]\" -n \"TypescriptCompiler,application\" -c \"red.bold,yellow.bold,\" \"npm run build_watch\" \"npm run dev\"",`

### React

Creating typescript app
`npx create-react-app vacations --template typescript`

### Docker

1. Overview
2. From File to container
3. Dockerizing nodejs application

### Api

- External : https://restcountries.com/

1. navigate to the `api` directory
2. make sure docker-desktop is running
3. run `docker-compose up`
