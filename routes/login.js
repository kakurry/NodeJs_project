var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
//引入数据库包
var db = require("./db.js");



router.get('/', function (req, res, next) {
    res.render('login', { title: '登录界面' });
});
router.post('/login', function (req, res) {
    debugger;
    var name = req.body.s_name;
    var age = req.body.s_age;
    var sql = "select * from person";

    if (name) {
        sql += " and name like '%" + name + "%' ";
    }
    if (age) {

        sql += " and age=" + age + " ";
    }

    sql = sql.replace("and","where");
    console.log(name+"等等等等等等等等"+age);
    db.query(sql , function (err, rows) {
        if (err) {
            debugger;
            res.end('登录失败：' + err);
        } else {
            debugger;
            res.redirect('/persons');
        }
    })
});


router.post('/ceshi', function (req, res) {
    debugger;
    var name = req.body.name;
    var data =req.body ;
    console.log(name);
    console.log("==========="+data.name);
})


router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

router.post('/addstudent', function (req, res) {
    var data =req.body ;
    console.log ('SName:' + data.SName + ';SNo:' + data.SNo) ;
});
module.exports = router;