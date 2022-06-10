//Imports
const express = require ( 'express' );
require( './database' )

//Inicializar express
const app = express();
//Settings
app.set( 'port', process.env.PORT || 8080 )

//middlewares
app.use( express.json() );                            //leer JSON
app.use( express.urlencoded({ extended: true }) );    //leer JSON

//Global variables

//Routes
app.use( require( './routes/routes' ) );

//static files

//Server listen
const server = app.listen( app.get( 'port' ), () => {
  console.log( `Server on PORT: ${ app.get('port') }` );
});
server.on( 'error', ( err ) => console.log( 'Error en el servidor: ' + err ) );