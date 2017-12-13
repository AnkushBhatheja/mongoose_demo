
const {ObjectID} = require('mongodb');
const bodyParser =require('body-parser');
const express = require('express');
var app = express();
app.use(bodyParser.json());

var operations = require('../mongodb-operation/operations');

var portNumber = process.env.PORT || 3000;
//

app.get('/', (req, res)=> {
  res.send("Welcom to Students Home Page");
});

//...................... adding a new stundent.............................

app.post('/Students', (req, res)=> {
  operations.addStudent(req.body).then((result)=> {
    res.send(result);
  }, (error) => {
    res.status(201).send(error);
  });
});


//...................... listing all stundets.............................
app.get('/Students', (req, res)=> {
  operations.getAllStudent().then((result)=> {
    res.send(result);
  }, (error) => {
    res.send(error);
  });
});

//...................... Details of a stundet.............................

app.get('/Students/:id', (req, res)=> {
  if(!ObjectID.isValid(req.params.id)){
    res.status(404).send({
      message : 'invalid id'
    });
    return console.log('invalid id');
  }
  operations.getStudent(req.params.id).then((result)=> {
    if(!result){
      res.status(404).send({
        message : 'invalid id'
      });
      return console.log('invalid id');
    }

    res.send(result);
  }, (error) => {
    res.status(400).send(error);
  });
});

//...................... deleting a stundent.............................

app.delete('/Students', (req, res)=> {

  operations.removeAllStundent().then((result)=> {
    if(!result){
      res.status(404).send({
        message : 'invalid id'
      });
      return console.log('invalid id');
    }

    res.send(result);
  }, (error) => {
    res.status(400).send(error);
  });
});

//...................... deleting a stundent.............................

app.delete('/Students/:id', (req, res)=> {
  if(!ObjectID.isValid(req.params.id)){
    res.status(404).send({
      message : 'invalid id'
    });
    return console.log('invalid id');
  }
  operations.removeStundent(req.params.id).then((result)=> {
    if(!result){
      res.status(404).send({
        message : 'invalid id'
      });
      return console.log('invalid id');
    }

    res.send(result);
  }, (error) => {
    res.status(400).send(error);
  });
});




app.listen(portNumber, ()=> {
  console.log('On port : '+portNumber);
});
