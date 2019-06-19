const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017";
const dbName = "TodoApp";
const client = new MongoClient(url);

client.connect((err) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log("Connected to MongoDB server");
  const db = client.db(dbName);
  db.collection("Todos").insertMany(
    [
        {
      text: "Clean house",
      completed: true
    }
],
    (err, result) => {
      if (err) {
        return console.log("Unable to insert todo", err);
      }

      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );
  client.close();
});

// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection("documents");
//   // Insert some documents
//   collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function(err, result) {
//     assert.equal(err, null);
//     assert.equal(3, result.result.n);
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// };
