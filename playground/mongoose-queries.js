const { ObjectId } = require("mongodb");
const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

var id = "5d2201c4d8d44b1617e2ff4f";

if(!ObjectId.isValid(id)){
    console.log('ID not valid')
}
// Todo.find({ _id: id }).then(todos => {
//   console.log("TODOS:", todos);
// });

// Todo.findOne({ _id: id }).then(todo => {
//   console.log("TODO:", todo);
// });

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("Id not found");
    }
    console.log("TODO by id:", todo);
  })
  .catch(err => console.log(err));


  User.findById('5d205a05dbc82034fe14a96f')
  .then(user => {
    if (!user) {
      return console.log("Id not found");
    }
    console.log("USER by id:", user);
  })
  .catch(err => console.log(err));
