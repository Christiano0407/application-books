//** === ==== Routers ===== ===  */
const { Router } = require(`express`);
const router = Router();

//**? ==== Array Books */
const books = [];

//** === Init === Pagination === */
router.get(`/`, (req, res) => {
  //res.send(`Hello Home, World`);
  res.render(`../views/index.ejs`, {
    //books: books,
    books,
  });
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
    title,
    author,
    image,
    description,
  };
  // === Add new Book to the Array ===
  //console.log(req.body);
  books.push(newBooks);
  res.send(`received`);
});

//** === Module Export */
module.exports = router;
