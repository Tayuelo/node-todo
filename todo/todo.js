const fs = require('fs');

let listadoTodo = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoTodo);
    fs.writeFile('./db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
        console.log('Archivo guardado correctamente.');
    });
}

const cargarDB = () => {
    try {
        listadoTodo = require('../db/data.json');
    } catch (error) {
        listadoTodo = [];
    }
} 


const crear = (descripcion) => {

    cargarDB();

    let todo = {
        descripcion,
        completado: false
    };

    listadoTodo.push(todo);
    guardarDB();
    return todo;
}

const getList = () => {
    cargarDB();
    return listadoTodo;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoTodo.findIndex(todo => todo.descripcion === descripcion);
    if (index >= 0) {
        listadoTodo[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrarTodo = (descripcion) => {
    cargarDB();
    let nuevolistadoTodo = listadoTodo.filter(todo => todo.descripcion !== descripcion);
    if (nuevolistadoTodo.length === listadoTodo.length) {
        return false;
    } else {
        listadoTodo = nuevolistadoTodo;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getList,
    actualizar,
    borrarTodo
}