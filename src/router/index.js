//** === ==== Routers ===== ===  */
const { Router } = require(`express`);
const router = Router();

//** === File System JSON === */
const fs = require(`fs`);
//const uuidv4 = require('uuid/v4');
/* const path = require(`path`);
 */
//**? ==== Array Books */
const json_books = fs.readFileSync(`/src/books.json`, `utf-8`);
//const books = [];
let books = JSON.parse(json_books);

//** === Init === Pagination === */
router.get(`/`, (req, res) => {
  //res.send(`Hello Home, World`);
  res.render(`../views/index.ejs`, { books });
});

router.get(`/new-entry`, (req, res) => {
  res.render(`../views/newEntry.ejs`);
});

router.get(`/page-404`, (req, res) => {
  res.render(`../views/404.ejs`);
});

//** ==== POST ====  */
router.post(`/new-entry`, (req, res) => {
  const { title, author, image, description } = req.body;
  // === Validation ===
  if (!title || !author || !image || !description) {
    res.status(404).send(`Entries must have a title and description`);
    return;
  }

  let newBooks = {
    // id: uuidv4(),
    title,
    author,
    image,
    description,
  };
  // === Add new Book to the Array ===
  //console.log(req.body);
  books.push(newBooks);

  // === Write file Sync / reed rout ===
  const json_books = JSON.stringify(books);
  fs.writeFileSync(`/src/books.json`, json_books, `utf-8`);

  res.redirect(`/`);
});

//** === Module Export */
module.exports = router;
