const mongoose = require('mogoose');

let personToClassSchema = mongoose.Schema({

  personId: String,
  classId: String,
  personType: String,

});

module.exports = mongoose.model('personToClass', personToClassSchema);
