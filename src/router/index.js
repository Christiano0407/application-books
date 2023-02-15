//** === ==== Routers ===== ===  */
const { Router } = require(`express`);
const router = Router();

//** === Init === Pagination === */
router.get(`/`, (req, res) => {
  //res.send(`Hello Home, World`);
  res.render(`../views/index.ejs`);
});

router.get(`/new-entry`, (req, res) => {
  res.render(`../views/newEntry.ejs`);
});

router.get(`/page-404`, (req, res) => {
  res.render(`../views/404.ejs`);
});

//** === Module Export */
module.exports = router;
