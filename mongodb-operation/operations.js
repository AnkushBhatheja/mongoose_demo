var {mongoose} = require('../db/mongoose');

var Student = require('../model/student');


const getAllStudent = () => {
  return new Promise(function (resolve, reject) {
    Student.find().then((results)=>{
      resolve(results);
    }, (error)=>{
      reject(error);
    });
  });
}

const getStudent = (id) => {
  return new Promise(function (resolve, reject) {
    Student.findById(id).then((results)=>{
      resolve(results);
    }, (error)=>{
      reject(error);
    });
  });
}

const addStudent = (student) => {
  return new Promise(function(resolve, reject) {
    new Student(student).save()
    .then((result) => {
      resolve(result);
    }, (error) => {
      reject(error)
    });

  })
}



const removeStundent = (id) => {
  return new Promise(function (resolve, reject) {
    Student.findOneAndRemove({'_id' : ObjectID(id)}).then((results)=>{
      resolve(results);
    }, (error)=>{
      reject(error);
    });
  });
}

const removeAllStundent = () => {
  return new Promise(function (resolve, reject) {
    Student.remove({}).then((results)=>{
      resolve(results);
    }, (error)=>{
      reject(error);
    });
  });
}

module.exports = {
  getAllStudent,
getStudent,
  addStudent,
  removeAllStundent,
  removeStundent


};
