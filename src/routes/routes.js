const router = require( 'express' ).Router();
//traemos el modelo de datos:
const Note = require( '../models/Notes' );

router.get( '/notes', async ( req, res ) => {
  const notes = await Note.find();
  res.send( notes );
});

router.post( '/notes/new-note', async ( req, res ) => {
  const { title, body, color } = req.body;
  const newNote = new Note({ title, body, color });
  await newNote.save();
  res.json( newNote );
});

router.delete( '/notes/delete-note/:id', async ( req, res ) => {
  const id = req.params.id;
  await Note.deleteOne({ _id: id });
  res.send( 'Note removed!' );
});

router.delete( '/notes/delete-all', async ( req, res ) => {
  await Note.deleteMany({});
  res.send( 'Notes removed!' );
});

router.put( '/notes/edit-note/:id', async ( req, res ) => {
  const id = req.params.id;
  const { title, body, color } = req.body;


  await Note.updateOne(
    { _id: id },
    {
      title: title,
      body: body,
      color: color,
    }
  );
  res.send( 'Note edited!' );
});

module.exports = router;