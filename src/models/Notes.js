const { Schema, model } = require ( 'mongoose' );

const noteSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  color: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = model( 'Note', noteSchema );