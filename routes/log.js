var express = require('express');
var controller = require('../controller/control_users')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hi hello")
  res.render('log');

});
router.post('/A',function(req, res, next){
  console.log("there")
  var ctr = controller.ctr_users(req,res,next)
  if(ctr.v){
    module.exports = {user:ctr.user}
    res.redirect('/user/goto_user');
  }
  else{
    console.log(ctr.v)
    res.redirect('/log/goto_log');
  }
})
/*
router.post('/goto_user',function(req,res,next){
  console.log("there")
  var ctr = controller.ctr_users(req,res,next)

  if(ctr.v == true){
    module.exports = {user:ctr.user}
    res.redirect('/user/goto_user');
  }
  else{
    res.redirect('/log/goto_log');
  }

});
*/
  router.get('/goto_log',function(req, res, next) {
    res.redirect('/log');
  });


module.exports = router;