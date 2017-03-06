var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', {
      title: 'Express',
      list: [
          {
              id: 1,
              title: 'Jade'
          },
          {
              id: 2,
              title: 'Nunjucks'
          },
          {
              id: 3,
              title: 'HandleBar'
          }
      ]
  });
});

module.exports = router;
