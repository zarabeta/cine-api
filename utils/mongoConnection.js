const mongoose = require('mongoose');

mongoose.connect(
  `mongodb+srv://root:xhAjHpfW2q60oOfN@cluster0.xg9fack.mongodb.net/cine-db?retryWrites=true&w=majority`
  )
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));
  
module.exports = mongoose;