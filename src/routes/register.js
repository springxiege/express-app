var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register.html', {
      title: 'Register'
  });
});
router.post('/register',(req, res, next) => {
    res.send(req.body);
})

module.exports = router;
