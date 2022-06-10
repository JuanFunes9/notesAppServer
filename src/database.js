const mongoose = require ( 'mongoose' );

const Note = require( './models/Notes' );

mongoose.connect('mongodb://localhost:27017/notesApp');

mongoose.connection.on( 'open', () => {
	console.log( 'DB connected to: mongodb://localhost:27017/notesApp' );
});

mongoose.connection.on( 'error', err => {
	console.log( 'DB error: ', err );
});