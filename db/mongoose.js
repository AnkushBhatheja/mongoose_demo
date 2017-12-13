var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://13.126.205.251:27017/CollegeData');

module.exports = {
  mongoose
};
