const { Router } = require("express");
const asyncHandler = require("../utils/async-handler");
const { User } = require("../models");
const router = Router();
const { checkSignupForm } = require("../middleware");

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    res.render("login");
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      res.send("No user");
      return;
    }

    if (password !== user.password) {
      res.send("wrong password!");
      return;
    }

    res.redirect("/");
  })
);

router.get(
  "/signup",
  asyncHandler(async (req, res, next) => {
    res.render("signup");
  })
);

router.post(
  "/signup",
  checkSignupForm,
  asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.create({
      email,
      password,
    });

    res.json(user);
  })
);

module.exports = router;
