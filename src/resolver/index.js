"use strict";

const resolver = async (req, res) => {
  const template = Object.values(req.params).join("/");
  const main = await require(`../providers/${template}/main`);
  res.send(await main(req));
};

module.exports = resolver;

