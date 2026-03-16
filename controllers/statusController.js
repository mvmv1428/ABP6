//Lógica de la ruta /status

const getStatus = (req, res) =>{
    res.json({
        status: 'ok',
        message: 'El servidor está funcionando correctamente',
        data: {
            uptime: Math.floor(process.uptime()) + ' segundos',
            timestamp: new Date().toISOString()
        }
    });
};

module.exports = {getStatus};