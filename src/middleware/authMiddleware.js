const checkSignupForm = (req, res, next) => {
  const { email, password } = req.body;
  const emailValidation =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

  if (!emailValidation.test(email)) {
    res.redirect("/auth/signup");

    return;
  }

  if (password.length < 8) {
    res.redirect("/auth/signup");

    return;
  }

  next();
};

module.exports = checkSignupForm;
