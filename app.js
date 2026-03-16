// Archivo principal del servidor

const express = require('express');
const path = require('path');
const {loggerMiddleware} = require('./middlewares/logger');

const app = express();
const PORT = 3000;

//Middleware para parsear JSON
app.use(express.json());

//Registra cada visita en log.txt
app.use(loggerMiddleware);

// Archivos estaticos 
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
const homeRoutes = require('./routes/homeRoutes');
const statusRoutes = require('./routes/statusRoutes');

app.use('/', homeRoutes);
app.use('/status', statusRoutes);

//Iniciar servidor
app.listen(PORT, ()=>{
    console.log(`Servidor iniciado http://localhost:${PORT}`);
})
