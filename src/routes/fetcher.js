"use strict";
const resolver = require("../resolver");
const router = require("express").Router();

router.get("/:provider/:service/:template", resolver);
/**
 * @TODO: we can handle POST too if it s needed :)!!
 */


module.exports = router;
