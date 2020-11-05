const argv = require('./config/yargs').argv;
const todoFunctions = require('./todo/todo');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = todoFunctions.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let todoList = todoFunctions.getList(argv.completado);
        for(let todo of todoList) {
            console.log(colors.green('===================='));
            console.log(todo.descripcion);
            console.log(`Estado: ${ todo.completado }`);
            console.log(colors.green('===================='));
        }
        break;
    case 'actualizar':
        let actualizado = todoFunctions.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = todoFunctions.borrarTodo(argv.descripcion);
        console.log(borrado);
        break;
    default: console.log('Comando no es reconocido.');
}