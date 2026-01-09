const { mongoose } = require("mongoose")
const mongoose = require("../config/db.config")

let db = {}

db.mongoose = mongoose

db.Users = require("./users.model")(mongoose)
db.Roles = require("./roles.model")(mongoose)

module.exports = db