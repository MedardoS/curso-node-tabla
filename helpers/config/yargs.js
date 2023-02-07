const argv = require('yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Base de la tabla de multiplicacion'
                    })
                    .option	('l', {
                        alias: 'listar',
                        type: 'boolean',
                        default: false,
                        describe: 'Muesta lista de multiplicacion'
                    })
                    .option	('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'la cantidad de veces que se va a multiplicar la base'
                    })
                    .check((argv, options) => {
                        if ( isNaN( argv.b ) ) {
                            throw ' La base tiene que ser un numero'
                        }
                       return true;
                    })
                    .argv;


module.exports = argv;