const { Router } = require("express");
const UserModel = require("../models/user.model");
const router = Router();

router.post("/login",async (req, res) => {
    const { email, password } = req.body
    const user = await UserModel.find({ email, password })
    if (user.length > 0) {
        let { name, email, _id } = user[0]
        return res.send(_id)
    }
    res.send({ message: "Wrong credentials" })
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  const payload ={email,password,name}
  let existingUser = await UserModel.find({ email });
  if (existingUser.length > 0) {
    return res.send({
      isError: true,
      Message: "User already exist with this email address",
    });
  }
  const user = await UserModel(payload);
  user.save((err, user) => {
    if (err) return res.send({ isError: true, Message: err.message });
    res.send({isError: false });
  });
});
module.exports = router;
