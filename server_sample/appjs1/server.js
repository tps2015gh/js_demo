/**
 * @author  Thitipong Samranvanich 
 * 
 * REFER TO  :  https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm
 */
var express = require('express');
var app = express();

// folder for publish html/js/else
app.use(express.static('public'));

var bodyParser = require('body-parser');
// for   application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var cookieParser = require('cookie-parser')
app.use(cookieParser())

app.get('/cookie', function (req, res) {
    console.log("Cookies: ", req.cookies)
    res.send('Path: /cookie <br><br> Hello World' + "<br> Cookie is <br>" + JSON.stringify(req.cookies)
            + "<br><br><a href='/'>Back </a>"
            );
})

app.get('/data', function (req, res) {
    //res.send('Hello World / data');
    res.sendFile( __dirname+'/public' + "/" + "data1.txt" );
    console.log("Got a GET request  /data ");
})

app.get('/math_add_form',function(req,res){
    res.sendFile( __dirname + "/public/" + "math_add_form.htm" );    
    console.log( " math_add_form " )
})

app.post( '/math_add_do',urlencodedParser , function(req, res){
    // Prepare in JSON format
    response = {
        num1:req.body.num1,
        num2:req.body.num2
    };
    console.log(response);
    
    response.num3 = response.num1+ response.num2  ;
    var htm = response.num1 + " + " + response.num2 + " = " + response.num3
    htm += " <br> <a href='/'> Back </a>"
    res.send( htm  )
    console.log(response);
    //res.send( "<hr>" )  
    //res.send(JSON.stringify(response))
    //res.end();
})

app.get('/do*1*', function (req, res) {
    res.send('Hello World / do*1*');
    console.log("Got a GET request  /data ");
})

app.get('/api/',function(req , res){
    console.log("navigate to /api/ ");    
    res.sendFile( __dirname+ "/application/form/" + "api.html" );
})

app.get('/add/:a/:b/', function (req, res) {
    var p = req.params 
    
    res.send('/add/ a=' + p.a + ", b="  
                        + p.b + "/<br><br><br> " 
                        + p.a + "+" + p.b + "== " + (p.a+p.b)   )
    console.log(p)
})


app.get('/api/inventory',function(req , res){
    var fs = require("fs")
    var path1 =  __dirname + "/data/inventory.json" 
    console.log (path1 )
    fs.readFile( path1,"utf8",function(err,data){
        console.log(data)
        res.end(data )
    })
})


// REF  ==>  Thai Language 
// https://devahoy.com/posts/node-template-engine/
// https://stackoverflow.com/questions/16111386/error-cannot-find-module-html
// https://www.npmjs.com/package/consolidate
// https://twig.symfony.com/
// https://stackoverflow.com/questions/28266446/how-to-render-multiple-views-using-nodeexpress

//var swig = require('swig');
//app.engine('html', swig.renderFile);
//app.set('view engine', 'html');

var cons = require('consolidate');
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
 
// app.get('/timeline1_sample',function(req,res){
//     res.render('timeline1_sample.html', { user: 'tobi' }, function(err, html){
//       if (err) throw err;
//       console.log("html= " + html);
//     });
// })

app.get('/users', function(req, res){
    //res.render("_banner",{})
    res.render('users', {
      title: 'Users',
      users : ['AAA' , 'BBB' ,'CCC ', 'DDD'],
    });
  });

app.get('/api/inventory/sum_order_money',function(req , res){
    var fs = require("fs")
    var path1 =  __dirname + "/data/inventory.json" 
    console.log (path1 )
    fs.readFile( path1,"utf8",function(err,data){
        console.log(typeof data )
        var arr = JSON.parse(data )
        var sum = 0.0 
        console.log( typeof arr )
        console.log(arr.length)
        for(var i = 0 ; i< arr.length ; i++){
            var item = arr[i]
            console.log(item.amount  * item.order_price )
            sum = sum + (item.amount  * item.order_price )
        }
        var str_json = JSON.stringify({"sum_order_money":sum,"count" :  arr.length})

        res.end( str_json)
    })
})




//var server = app.listen(8081, function () {
var server = app.listen(8088, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})