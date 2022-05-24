## Features

- A aplicação é responsiva, com design mobile first
- Input com possibilidade de inclusão de CEPs
- Listagem dos endereços correspondentes aos CEPs informados
- Tratamento de erros, caso o CEP informado não exista ou sejá inválido, a aplicação irá ignorá-lo
- Não é possível adicionar 2 CEPs iguais, o mesmo referente a endereços
- Os endereços buscados ficam salvos no localStorage do browser, assim, após uma consulta ou exclusão de um ou mais CEPs, você poderá atualizar a página e ainda terá os endereços listados anteriormente disponíveis
- Os endereços listados terão seu conteúdo abreviado, de forma que **Rua** será impresso como **R**, **Avenida** como **Av.** e **Travessa** como **Tv.**

<br/><br/>

## increazy-frontendtest

### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
