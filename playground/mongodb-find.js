const {MongoClient,ObjectID} = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "TodoApp";
const client = new MongoClient(url);

client.connect(err => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db(dbName);
  // db.collection("Todos")
  //   .find({_id:new ObjectID('5d07d52bfcecd021713cac98')})
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err);
  //     }
  //   )
    
    db.collection("Todos")
    .find()
    .count()
    .then(
      count => {
        console.log(`Todos count: ${count}`);
      },
      err => {
        console.log("Unable to fetch todos", err);
      }
    )
    
    // client.close();
});
