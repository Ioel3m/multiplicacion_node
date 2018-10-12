const { crearTabla, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const colors = require('colors')

let comando = argv._[0]

switch (comando.toLocaleLowerCase()) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then(res => {
            console.log(res)
        }, err => {
            console.log(err)
        })
        break;
    case 'crear':
        crearTabla(argv.base, argv.limite).then(res => {
            console.log(res.green)
        }, err => {
            console.log(err.red)
        })
        break;
}



// console.log(argv2)


// let parametro = argv[2]
// let base = parametro.split('=')[1]

// console.log(base)



