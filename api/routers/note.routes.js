module.exports = (app) => {
  const notes = require('../controllers/note.controller.js');

  // Create a new Note
  app.post('/notes', notes.create);

  // Retrieve all Notes
  app.get('/notes', notes.findAll);

  // Retrieve a single Note with id
  app.get('/notes/:id', notes.findOne);

  // Update a Note with id
  app.patch('/notes/:id', notes.update);

  // Delete a Note with id
  app.delete('/notes/:id', notes.delete);
};
