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


app.get('/api/inventory',function(req , res){
    var fs = require("fs")
    var path1 =  __dirname + "/data/inventory.json" 
    console.log (path1 )
    fs.readFile( path1,"utf8",function(err,data){
        console.log(data)
        res.end(data )
    })
})

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

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})