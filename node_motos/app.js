//1 paso: fichero que contiene todos los manejadores de la app (configuracion basica de nuestra app de express)

const express = require('express');
const cors = require('cors');

// 2 paso: crear la app , crear la variable q nos permite recibir peticiones y generar respuestas

const app = express();

//config app expres
app.use(cors());
app.use(express.json()); //para poder recibir objetos a traves del body
app.use(express.urlencoded({ extended: true })) // para poder pasar partes dinamicas en la url

app.use(express.static('public'));

//configuracion de los manejadores
app.use(require('./routes'));

//exportamos la app
module.exports = app;