"use strict";

/**
 * @see https://levelup.gitconnected.com/the-simplest-way-to-add-swagger-to-a-node-js-project-c2a4aa895a3c
 * @see https://blog.cloudboost.io/adding-swagger-to-existing-node-js-project-92a6624b855b
 * @see https://editor.swagger.io/
 * @see https://medium.com/wolox/documenting-a-nodejs-rest-api-with-openapi-3-swagger-5deee9f50420
 * @see https://itnext.io/setting-up-swagger-in-a-node-js-application-d3c4d7aa56d4
 * @see https://scotch.io/tutorials/speed-up-your-restful-api-development-in-node-js-with-swagger
 * @see https://editor.swagger.io/
 */

const router = require("express").Router();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const version = require("../../package").version;

var swaggerDocument = require("../../swagger");

if (!process.env.NODE_ENV) {
  swaggerDocument.swaggerDefinition.host = "localhost:4000";
}

swaggerDocument.swaggerDefinition.info.version = "v-" + version;

const swaggerSpec = swaggerJSDoc(swaggerDocument);

router.get("/json", function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = router;
