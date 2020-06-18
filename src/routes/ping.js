var router = require("express").Router();

/**
 * @description: basic ping endpoint to be used by k8s.
 */
router.get("/ping", function (req, res) {
  res.sendStatus(200);
});

module.exports = router;
