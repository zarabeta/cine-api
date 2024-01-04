const mongoose = require('mongoose');

let funcionSchema = new mongoose.Schema({
    nombre: {type: String},
    fecha: {type: String},
    hora: {type: String},
    duracion: {type: String}
});
/*
 nombre, director, año, duracion, genero 
*/
module.exports = mongoose.model('Funcion', funcionSchema, 'funcion');
