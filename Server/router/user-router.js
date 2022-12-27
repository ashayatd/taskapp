const express = require('express');
const routes = express.Router();
const login = require("../user/user-auth");
const register = require("../user/new-user");

routes.post("/register", register);
//routes.post("/login", login);

module.exports = routes;