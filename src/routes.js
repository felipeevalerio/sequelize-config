const express = require('express');
const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.get("/",(req,res) => {
    return res.json({hello: 'world'})
})

routes.get("/users",UserController.index)
routes.post("/users",UserController.store)

module.exports = routes;
