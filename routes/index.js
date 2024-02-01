var express = require('express');
var router = express.Router();
var students=require('../controll/studentcontroller');
var admin=require('../controll/admincontroller');
var result=require('../controll/resultcontroller');


// router.get('/',students.stu_get);
// router.post('/stu_insert',students.stu_insert);
// router.post('/stu_login',students.stu_login);
// router.get('/stu_logout',students.stu_logout);//params

// router.get('/',admin.addget);
// router.post('/add_insert',admin.add_insert);
router.post('/add_login',admin.add_login);
router.get('/add_logout',admin.add_logout);//params

router.post('/res_insert',result.res_insert);





/* GET home page. */

module.exports = router;
