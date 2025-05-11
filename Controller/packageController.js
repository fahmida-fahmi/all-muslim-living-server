const Connection = require("../Model/Connections")

exports.getAllPackage = async (req, res) =>{
    const users = await Connection.find()
    res.send(users)
  }