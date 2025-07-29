const model = require("../models");
const magazineModel = require("../models/magazine-model");

async function getMagazines(req, res) {
  try {
    const inventory = await model.getAll(req, res, "magazine");
    res.send(inventory);
  } catch (error) {
    console.log(error);
  }
}

async function getMagazineById(req, res) {
  const inventory = await model.getOneById(req, res, "magazine");
  res.send(inventory);
}

async function addMagazine(req, res) {
  const inventory = await magazineModel.createNewMagazine(req, res);
  res.send(inventory);
}

async function editMagazineById(req, res) {
  const inventory = await magazineModel.editMagazine(req, res);
  res.send(inventory);
}

async function deleteMagazineById(req, res) {
  const inventory = await model.deleteById(req, res, "magazine");
  res.send(inventory);
}

module.exports = {
  getMagazines,
  getMagazineById,
  addMagazine,
  editMagazineById,
  deleteMagazineById,
};
