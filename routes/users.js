var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  if (!req.body.username) {
    return res.status(200).json({
      success: false,
      message: "Invalid. Username is required!!!"
    });
  }
  if (!req.body.email) {
    return res.status(200).json({
      success: false,
      message: "Invalid. Email is required!!!"
    });
  }
  if (!req.body.password) {
    return res.status(200).json({
      success: false,
      message: "Invalid. Password is required!!!"
    });
  }
  if (!req.body.confirmPassword) {
    return res.status(200).json({
      success: false,
      message: "Invalid. Confirm password is required!!!"
    });
  }
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(200).json({
      success: false,
      message: "Invalid. Password and confirm password must be same!!!"
    });
  }

  const user = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  }

  return res.status(200).json({ success: true, massage: "Register successful", data: { user } });
})

module.exports = router;
