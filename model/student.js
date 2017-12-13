
var {mongoose} = require('../db/mongoose');

module.exports = mongoose.model('students', {
  name : {
    type : String,
    required : true,
    trim : true,
    minlength : 2,
    maxlength : 18
  },
  age : {
  type : Number,
  required : false
  },
  gender : {
    type : String,
    default : 'Female'
  },
  dept : {
    type : String,
    required : true
  }
});
