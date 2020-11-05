const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción del todo.'
}

const completado = {
    alias: 'c',
    desc: 'Marca como completado o pendiente el todo.'
}

const argv = require('yargs')
    .command('crear', 'Crear un todo.', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de un todo.', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un todo.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}