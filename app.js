// import { crearArchivo } from './helpers/multiplicar';
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require("./config/yargs");

require('colors');

// tabla de multiplicar


console.clear();

crearArchivo( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log( nombreArchivo.rainbow, 'creado') )
.catch( err => console.log(err) );


// const [ , ,arg3 = 'bases=5' ] = process.argv;
// const [, base = 5] = arg3.split('=')