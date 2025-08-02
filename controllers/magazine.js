const model = require("../models");
const magazineModel = require("../models/magazine-model");
const { connectToMongoDB } = require("../databases/connect");

async function searchMagazinesByTitle(req, res) {
  try {
    const client = await connectToMongoDB();
    const db = client.db(process.env.DB_NAME || "project2"); 

    const { title } = req.query;
    if (!title) {
      return res.status(400).json({ message: "Title query parameter is required." });
    }

    // Case-insensitive partial match for title
    const query = { title: { $regex: title, $options: "i" } };

    const magazines = await db.collection("magazine").find(query).toArray();

    if (magazines.length === 0) {
      return res.status(404).json({ message: "No magazines found matching that title." });
    }

    res.status(200).json(magazines);
  } catch (error) {
    console.error("Error searching magazines:", error);
    res.status(500).json({ message: "Server error" });
  }
}

async function getMagazines(req, res) {
  //#swagger.tags = ['Magazines']

  try {
    const inventory = await model.getAll(req, res, "magazine");
    res.send(inventory);
  } catch (error) {
    console.log(error);
  }
}

async function getMagazineById(req, res) {
  //#swagger.tags = ['Magazines']

  const inventory = await model.getOneById(req, res, "magazine");
  res.send(inventory);
}

async function addMagazine(req, res) {
  //#swagger.tags = ['Magazines']

  const inventory = await magazineModel.createNewMagazine(req, res);
  res.send(inventory);
}

async function editMagazineById(req, res) {
  //#swagger.tags = ['Magazines']

  const inventory = await magazineModel.editMagazine(req, res);
  res.send(inventory);
}

async function deleteMagazineById(req, res) {
  //#swagger.tags = ['Magazines']

  const inventory = await model.deleteById(req, res, "magazine");
  res.send(inventory);
}

module.exports = {
  searchMagazinesByTitle,
  getMagazines,
  getMagazineById,
  addMagazine,
  editMagazineById,
  deleteMagazineById,
};
