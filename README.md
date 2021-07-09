# final

## Project setup
```
npm install
```

### Compiles and hot-reloads for development  :shipit:
```
npm run serve :shipit:
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration

### Construido  Con :
Vue 2 - Framework javascript utilizado para aplicaciones Spa
se utilizo vue-clipboard2 dependencia para copiar texto a portapapeles, 
al principo la api no dejaba consumir el servicio por temas de cors
solucionandolo con la configuracion de un proxi local en el archivo vue.config.js
para la distribucion de datos entre los componentes padres e hijos utilizo vuex ,
axios como cliente HTTP, se trabajo en dos ramas (master, dev) en la que se fueron subiendo cambios
a dev para posteriormente pasarlos a master

See [Configuration Reference](https://cli.vuejs.org/config/).
