const cors = require("cors");
const express = require("express");
const { LOCAL_CLIENT,CLIENT } = require("../config/default");

const applyMiddleWare = (app) => {
  app.use(
    cors()
  );

  app.use(express.json());
};

module.exports = applyMiddleWare;
