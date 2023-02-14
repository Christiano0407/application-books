//** === ==== Routers ===== ===  */
const { Router } = require(`express`);
const router = Router();

//** === Init */
router.get(`/`, (req, res) => {
  res.send(`Hello Home, World`);
});
//** === Module Export */
module.exports = router;
