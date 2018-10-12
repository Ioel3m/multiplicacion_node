const fs = require('fs');

let listarTabla = (base = 'x', limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!/^([0-9])*$/.test(base) || !/^([0-9])*$/.test(limite)) {
            reject('Utilice solo números'.red)
            return
        }
        console.log(base)
        for (let index = 1; index <= limite; index++) {
            console.log(`${base} * ${index} = ${base * index}`)
        }
    })
}


let crearTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!/^([0-9])*$/.test(base) || !/^([0-9])*$/.test(limite)) {
            reject('Utilice un número como base')
            return
        }
        let data = ''

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index} \n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            resolve(`Tabla del ${base} creada`);
        });
    })

}

module.exports = {
    crearTabla,
    listarTabla
}


