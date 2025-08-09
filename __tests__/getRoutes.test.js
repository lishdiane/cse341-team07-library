/* eslint-disable no-undef */
const path = require("path");
const fs = require("fs");

function loadJson(filename) {
  const filepath = path.join(__dirname, "..", "json", filename);
  const data = fs.readFileSync(filepath, "utf8");
  return JSON.parse(data);
}

describe("Local JSON Collections Tests", () => {
  test("should load all books", () => {
    const books = loadJson("book.json");
    expect(Array.isArray(books)).toBe(true);
    expect(books.length).toBeGreaterThan(0);
    expect(books[0]).toHaveProperty("title");
  });

  test("should find book by ID", () => {
    const books = loadJson("book.json");
    const id = books[0]._id;
    const book = books.find((b) => b._id === id);
    expect(book).toBeDefined();
    expect(book._id).toBe(id);
  });

  test("should load all accounts", () => {
    const accounts = loadJson("user.json");
    expect(Array.isArray(accounts)).toBe(true);
    expect(accounts.length).toBeGreaterThan(0);
    expect(accounts[0]).toHaveProperty("fname");
  });

  test("should find account by ID", () => {
    const accounts = loadJson("user.json");
    const id = accounts[0]._id;
    const account = accounts.find((a) => a._id === id);
    expect(account).toBeDefined();
    expect(account._id).toBe(id);
  });

  test("should load all magazines", () => {
    const magazines = loadJson("magazine.json");
    expect(Array.isArray(magazines)).toBe(true);
    expect(magazines.length).toBeGreaterThan(0);
    expect(magazines[0]).toHaveProperty("title");
  });

  test("should find magazine by ID", () => {
    const magazines = loadJson("magazine.json");
    const id = magazines[0]._id;
    const mag = magazines.find((m) => m._id === id);
    expect(mag).toBeDefined();
    expect(mag._id).toBe(id);
  });

  test("should load all digital items", () => {
    const digital = loadJson("digital.json");
    expect(Array.isArray(digital)).toBe(true);
    expect(digital.length).toBeGreaterThan(0);
    expect(digital[0]).toHaveProperty("title");
  });

  test("should find digital item by ID", () => {
    const digital = loadJson("digital.json");
    const id = digital[0]._id;
    const item = digital.find((d) => d._id === id);
    expect(item).toBeDefined();
    expect(item._id).toBe(id);
  });
});
