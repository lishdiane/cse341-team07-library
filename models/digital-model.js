const mongoDB = require("../databases/connect");
const { ObjectId } = require("mongodb");
const model = require(".");

async function createNewDigital(req, res) {
  const client = await mongoDB.connectToMongoDB();

  const digital = {
    type: req.body.type, // eBook, audiobook, video
    title: req.body.title,
    author: req.body.author,
    format: req.body.format,
    fileURL: req.body.fileURL,
  };

  await client
    .db("project2")
    .collection("digital")
    .insertOne(digital, (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error creating digital resource");
        return;
      }
      console.log(result);
      res.send(`Digital resource created with id: ${result.insertedId}`);
    });
}

async function editDigital(req, res) {
  const client = await mongoDB.connectToMongoDB();
  const id = new ObjectId(req.params._id);

  await model.getOneById(req, res, "digital");

  const digital = {
    type: req.body.type,
    title: req.body.title,
    author: req.body.author,
    format: req.body.format,
    fileURL: req.body.fileURL,
  };

  await client
    .db("project2")
    .collection("digital")
    .replaceOne({ _id: id }, digital, (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error updating digital resource");
        return;
      }
      console.log(result);
      res.send(`Digital resource updated`);
    });
}

module.exports = { createNewDigital, editDigital };
