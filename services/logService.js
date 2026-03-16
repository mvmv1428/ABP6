//persistencia en archivos planos usando modulo fs

const fs = require('fs');
const  path = require('path');

const LOG_PATH =path.join(__dirname, '..','logs','logs.txt');

const appendLog = (logLine) =>{
    fs.appendFile(LOG_PATH, logLine + '\n', (err)=>{
        if (err) console.error('Error escribiendo log:', err.message);
    });
};

module.exports = {appendLog};