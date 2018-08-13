var express = require('express');
var router = express.Router();

// REF -  https://www.w3schools.com/nodejs/nodejs_mysql_select.asp
var mysql = require('mysql');



/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource  / ')
  res.render("users",{msg: 'respond with a resource  / ',title:"Users"})
});

var get_con = function(){
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodejs_testdb"
  });
  console.log("get_con() return " + typeof con )
  return con  
}

/* GET users listing. */
router.post('/list/province_do', function(req, res, next) {
  var prov_code  = req.param('prov_code', 'none');
  
  //res.send('respond with a resource , list/province_do <br> param.prov_code=  ' + prov_code);
  res.render("list_province_do",{title:"list/province_do",prov_code:prov_code})
})

/* GET users listing. */
router.get('/list/province', function(req, res, next) {
 // res.send('respond with a resource , list/province ');
  var con = get_con()
  con.connect();
  con.query('SELECT * from province', function (error, results, fields) {
    if (error) throw error;
    console.log( results);

    var rs = [{ "name":"partnerx", "id": "imagex" }
            , { "name": "partnery", "id": "imagey" }]
    console.log("Load Data ok rowcount=" + results.length )
    res.render("list_province", { title: 'Users / list/province',
                                 "ps" : results
                                })
  });   
  con.end();
});

module.exports = router;
