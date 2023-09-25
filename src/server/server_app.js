const express = require('express');
class ServerApp{
    static  _conteo = 0;
    #port;
    static  get conteo(){
        return ServerApp.conteo + ' Initilization'
    }
    app = express();
    constructor(port) {
        this.#port = port;
        this.configuracion();
        this.middlewares();
        this.routes();
    }
    configuracion(){
        this.app.set('port', this.#port || process.env.PORT_SERVE || 3000);
    };
    async listen(){
        await this.app.listen(this.app.get('port'));
        console.log('Servidor en localhost:', this.app.get('port'));
    };
    middlewares() {
        // Middleware para el manejo de datos JSON
        this.app.use(express.json());
        // Middleware para el manejo de datos urlencoded
        this.app.use(express.urlencoded({ extended: true }));
    }
    routes() {
        // Ruta de ejemplo
        this.app.get('/', (req, res) => {
            res.json({ message: '¡Hola, mundo!' });
        });
    }
    async connectionDB(){
        //Conection Database
        try{
            console.log('Conexion exitosa');
        }
        catch(e){
            console.log(`Error en la conexion  de DB ${e}`); //muetra el error en caso de false
        }
    }
}
module.exports = ServerApp ;