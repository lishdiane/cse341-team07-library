const mongoDB = require("../databases/connect");
const { ObjectId } = require("mongodb");
const model = require(".");

async function createNewMagazine(req, res) {
  const client = await mongoDB.connectToMongoDB();

  const magazine = {
    title: req.body.title,
    issueNumber: req.body.issueNumber,
    publisher: req.body.publisher,
    topic: req.body.topic,
    publicationDate: req.body.publicationDate,
  };

  await client
    .db("project2")
    .collection("magazine")
    .insertOne(magazine, (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error creating magazine");
        return;
      }
      console.log(result);
      res.send(`Magazine created with id: ${result.insertedId}`);
    });
}

async function editMagazine(req, res) {
  const client = await mongoDB.connectToMongoDB();
  const id = new ObjectId(req.params._id);

  await model.getOneById(req, res, "magazine");

  const magazine = {
    title: req.body.title,
    issueNumber: req.body.issueNumber,
    publisher: req.body.publisher,
    topic: req.body.topic,
    publicationDate: req.body.publicationDate,
  };

  await client
    .db("project2")
    .collection("magazine")
    .replaceOne({ _id: id }, magazine, (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error updating magazine");
        return;
      }
      console.log(result);
      res.send(`Magazine updated`);
    });
}

module.exports = { createNewMagazine, editMagazine };
