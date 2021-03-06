const _ =require('lodash');
const express = require("express");
const bodyParser = require("body-parser");
const { ObjectID } = require("mongodb");

var { mongoose } = require("./db/mongoose");
var { Todo } = require("./models/todo");
var { User } = require("./models/user");

const port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  var todo = new Todo(req.body);

  todo.save().then(
    doc => {
      res.send(doc);
    },
    err => {
      res.status(400).send(err);
    }
  );
});

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    err => {
      res.status(400).send(e);
    }
  );
});

app.get("/todos/:id", (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        res.status(404).send();
      }
      res.send({todo});
    })
    .catch(err => {
      res.status(400).send();
    });
});

app.delete('/todos/:id',(req,res)=>{
  var id=req.params.id;
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }
  Todo.findByIdAndDelete(id).then(todo=>{
    if(!todo){
      res.status(404).send();
    }
    res.send({todo})
  })
  .catch(err=>{
    res.status(400).send();
  });
});

app.patch('/todos/:id',(req,res)=>{
  var id =req.params.id;
  var body = _.pick(req.body,['text','completed']);
  
  if(!ObjectID.isValid(id)){
    res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt=new Date().getTime();
  }else{
    body.completedAt=null;
    body.completed=false;
  }
  
  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then(todo=>{
    if(!todo){
      return res.status(404).send();
    }

    res.send({todo});
  }).catch(err=>{
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started up at ${port}`);
});

module.exports = { app };
