const model = require("../models");
const bookModel = require("../models/books-model");

async function getBooks(req, res) {
  try {
    const inventory = await model.getAll(req, res, "book");

    res.send(inventory);
  } catch (error) {
    console.log(error)
  }
}

async function getBookById(req, res) {
  const inventory = await model.getOneById(req, res, "book");

  res.send(inventory);
}

async function addBook(req, res) {
  const inventory = await bookModel.createNewBook(req, res);

  res.send(inventory);
}

async function editBookById(req, res) {
  const inventory = await bookModel.editBook(req, res);

  res.send(inventory);
}

async function deleteBookById(req, res) {
  const inventory = await model.deleteById(req, res, "book");

  res.send(inventory);
}

module.exports = {
  getBooks,
  getBookById,
  addBook,
  editBookById,
  deleteBookById,
};
