var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send('respond with a resource test');
});

router.get('/test/:stockId', function(req, res, next) {
  res.json({urlParam: req.params.stockId});
  //res.send('respond with a resource stockId ' + req.params.stockId);
});


module.exports = router;
