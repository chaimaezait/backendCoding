var router = require("express").Router();
/**
 * @description: do some serious health-checks (free memory, number of chrome instances running)
 */
router.get("/health", function (req, res) {
  res.sendStatus(200);
});

module.exports = router;