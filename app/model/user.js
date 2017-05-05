const mongoose = require('mogoose');

let userSchema = mongoose.Schema({

  id: Number,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  personType: Number

});

module.exports = mongoose.model('user', userSchema);
