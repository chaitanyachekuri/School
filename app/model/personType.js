const mongoose = require('mogoose');

let personTypeSchema = mongoose.Schema({

  id: Number,
  name: String

});

module.exports = mongoose.model('PersonType', personTypeSchema);

