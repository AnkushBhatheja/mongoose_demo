var mongoose = require('mongoose');
var http      = require('http');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://ankush:12345678@13.126.205.251:27017/CollegeData');

module.exports = {
  mongoose
};
