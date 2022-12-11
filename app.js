const express =require('express');
const path =require('path')
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app =express();

// importing routes
const clientesRoutes = require('./routes/clientes');
const medicosRoutes = require('./routes/medicos');
const medicamentosRoutes = require('./routes/medicamentos');

// setings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// middleware
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '2609',
    port: 3306,
    database: 'dbcitas'
},'single'));

app.use(express.urlencoded({extended:false}));

// routes
app.use('/', clientesRoutes);
app.use('/medicos', medicosRoutes);
app.use('/medicamentos', medicamentosRoutes);

// Static files
app.use(express.static(path.join(__dirname,'public')));


// Inicializamos el servidor
/*
app.listen(3000), ()=> {
    console.log('Server listen on port 3000');
 */

app.listen(app.get('port'), ()=> {
    console.log('Server listen on port 3000');
});

