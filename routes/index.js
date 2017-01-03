var express = require('express');
var router = express.Router();
var request = require('request');

router.use('/api', function (req, res) {

    // req.pipe(request(options)).pipe(res);
});

/* GET home page. */
router.get('/:key?', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
