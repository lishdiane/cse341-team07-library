require("dotenv").config();
const { MongoClient } = require("mongodb");

async function connectToMongoDB() {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    return client;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectToMongoDB };
