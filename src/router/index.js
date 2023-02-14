//** === ==== Routers ===== ===  */
const { Router } = require(`express`);
const router = Router();

//** === Init */
router.get(`/`, (req, res) => {
  //res.send(`Hello Home, World`);
  res.render(`../views/index.ejs`);
});
//** === Module Export */
module.exports = router;
