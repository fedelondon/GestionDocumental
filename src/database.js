import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/gestiondocdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('DB is connected'))
  .catch((error) => console.error(error));
