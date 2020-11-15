# Node Version

```node
node - v14.8.0
npm - 6.14.7
```

- If node version doesn't exsit automatically Installed specific node version via nvm.

```shell
nvm use
```

- Install node_modules dependencies.

```shell
npm install
```

## Get Started

- To development mode

```shell
npm run dev
```

- To production mode

```shell
npm run prod
```

- Watching files changes

```shell
npm run watch
```

## Add support for ES6 modules

- Add the line `"type": "module"` to your package.json.

- Add a "start" script in the "scripts" property like:
`"start": "node --es-module-specifier-resolution=node ./bin/www"`

### Tips

- Experimental flag

```shell
--es-module-specifier-resolution
```

- To configure eslint in node project

```shell
npm install -D eslint && npx eslint --init
```
