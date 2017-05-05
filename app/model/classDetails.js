const mongoose = require('mogoose');

let classDetailsSchema = mongoose.Schema({

  id: Number,
  name: String,
  createdBy: String,
  createdDate: new Date(),

});

module.exports = mongoose.model('classDetails', classDetailsSchema);
