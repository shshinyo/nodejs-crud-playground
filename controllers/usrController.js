const { User } = require("../models/user");

async function getusrs(req, res) {
  try {
    User.find({}, (err, data) => {
      if (!err) {
        res.json(data);
      } else {
        res.status(500).send({ message: "boo:(", error:err });
      }
    });
  } catch (error) {
    res.status(500).send({ message: "boo:(",error });
  }
}

async function getusr(req, res) {
    try {
     let usrId = req.params.id;
      User.find({_id:usrId}, (err, user) => {
        if (!err) {
          res.json(user);
        } else {
          res.status(500).send({ message: "boo:(", error:err });
        }
      });
    } catch (error) {
      res.status(500).send({ message: "boo:(",error });
    }
  }

async function addusr(req, res) {
  try {
    const usr = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    usr.save((err, data) => {
      if (err) return res.status(500).send({ message: "boo:(", error:err });
      res.status(201).json({
        code: 201,
        message: "User added susccessfully!",
        User: data,
      });
    });
  } catch (error) {
    res.status(500).send({ message: "boo:(",error });
  }
}
async function deleteusr(req, res) {
  try {
    let usrId = req.params.id;
    let response = await User.findByIdAndRemove(usrId);
    response ? res.status(200).json({
      code: 200,
      message: "User deleted susccessfully!",
      response,
    }):res.status(404).send({ message: "boo:( user not exist" });
  } catch (error) {
    res.status(500).send({ message: "boo:(", error });
  }
}

async function updateusr(req, res) {
    try {
      let usrId = req.params.id;
      let usrNewInfo = req.body;
      let response = await User.findByIdAndUpdate(usrId,usrNewInfo,{new:true})
      response ? res.status(200).json({
        code: 200,
        message: "User updated susccessfully!",
        response,
      }):res.status(404).send({ message: "boo:( user not exist" });
    } catch (error) {
      res.status(500).send({ message: "boo:(", error });
    }
  }

module.exports = {
  getusrs,
  getusr,
  deleteusr,
  addusr,
  updateusr
};
