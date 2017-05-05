const mongoose = require('mongoose');

const objectId = require('mongodb').ObjectId;

module.exports = function(conn) {

  let personType = {
    _id: new objectId(),
    id: 2,
    name: 'Student'
  }

  conn.collection('personType').insert(personType);


}
