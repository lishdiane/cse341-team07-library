const model = require("../models");
const bookModel = require("../models/books-model");

async function getBooks(req, res) {
  //#swagger.tags = ['Books']
  try {
    const inventory = await model.getAll(req, res, "book");

    res.send(inventory);
  } catch (error) {
    console.log(error)
  }
}

//search books by title or author
async function searchBooks(req, res) {
  const client = await require("../databases/connect").connectToMongoDB();
  const db = client.db("project2");

  const { author, title } = req.query;
  const query = {};

  if (author) {
    query.author = { $regex: author, $options: "i" };
  }
  if (title) {
    query.title = { $regex: title, $options: "i" };
  }

  try {
    const results = await db.collection("book").find(query).toArray();

    if (results.length === 0) {
      return res.status(404).json({ message: "No books found." });
    }

    res.status(200).json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error searching books." });
  }
}


async function getBookById(req, res) {
  //#swagger.tags = ['Books']
  const inventory = await model.getOneById(req, res, "book");

  res.send(inventory);
}

async function addBook(req, res) {
  //#swagger.tags = ['Books']
  const inventory = await bookModel.createNewBook(req, res);

  res.send(inventory);
}

async function editBookById(req, res) {
  //#swagger.tags = ['Books']
  const inventory = await bookModel.editBook(req, res);

  res.send(inventory);
}

async function deleteBookById(req, res) {
  //#swagger.tags = ['Books']
  const inventory = await model.deleteById(req, res, "book");

  res.send(inventory);
}

module.exports = {
  getBooks,
  getBookById,
  addBook,
  editBookById,
  deleteBookById,
  searchBooks
};
