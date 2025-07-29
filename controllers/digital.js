const model = require("../models");
const digitalModel = require("../models/digital-model");

async function getDigitals(req, res) {
  try {
    const inventory = await model.getAll(req, res, "digital");
    res.send(inventory);
  } catch (error) {
    console.log(error);
  }
}

async function getDigitalById(req, res) {
  const inventory = await model.getOneById(req, res, "digital");
  res.send(inventory);
}

async function addDigital(req, res) {
  const inventory = await digitalModel.createNewDigital(req, res);
  res.send(inventory);
}

async function editDigitalById(req, res) {
  const inventory = await digitalModel.editDigital(req, res);
  res.send(inventory);
}

async function deleteDigitalById(req, res) {
  const inventory = await model.deleteById(req, res, "digital");
  res.send(inventory);
}

module.exports = {
  getDigitals,
  getDigitalById,
  addDigital,
  editDigitalById,
  deleteDigitalById,
};
