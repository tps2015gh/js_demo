//@ts-check

var smells = [];
const TIMESEC = 50
const SMELL_RADIUS = 100 
setTimeout( doLoop ,TIMESEC );

function doLoop(){
    delSmell()
    addSmell(200,110)
    dogMove("c1")
}

function svg1mouseup( ){
    
    var x = event.offsetX 
    var y = 300 - event.offsetY
    //console.log( x +" " + y )
    c1.setAttribute("cx",x +"")
    c1.setAttribute("cy",y +"")    
    console.log(event.offsetX +" " + event.offsetY + " ==> " + x + "," + y ) 
}

function delSmell(){
    var gsmell = document.getElementById("foodsmell")
    while(gsmell.hasChildNodes() ){
        gsmell.removeChild(gsmell.childNodes[0]);
    }
    //console.log("delSmell / " + gsmell.length)
}

function addSmell(x,y){
    var g1 = (/** (@type {SVGGElement}) */document.getElementById("foodsmell"))
    for(var i = 0 ; i <10 ;i ++ ){
        var x1 = random1toN(SMELL_RADIUS )-SMELL_RADIUS/2 + x  
        var y1 = random1toN(SMELL_RADIUS )-SMELL_RADIUS/2+ y 

        /** @type {SVGGElement}  g1 */
        //console.log(g1)
        var smell = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        smell.setAttribute("cx",x1);
        smell.setAttribute("cy",y1 );
        smell.setAttribute("r",5);
        smell.setAttribute("fill","lightblue");
       // g1.appendChild(smell)
        smells.push(smell)
        g1.appendChild(smell )
    }
}

function random1toN(n ){
    return Math.floor(Math.random() * n) + 1;
}

function onfinishload(){
    addSmell(200,110)
}

function dogMove(name_c1){
    var c1 = document.getElementById(name_c1)
    var x = c1.getAttribute("cx")
    var y = c1.getAttribute("cy")
    var newx =  parseInt(x) +1 
    var newy =  parseInt(y) +1 

    if (newx > 300 ){
        newx =  1 
        newy = 1 + random1toN(100) 
    }
    c1.setAttribute("cx",newx+"")
    c1.setAttribute("cy",newy+"")

    var c1cx = document.getElementById("c1cx")
    var  time1 =  new Date().toUTCString()
    c1cx.innerHTML= newx + " /  " + time1

    var c1name = document.getElementById("c1name")
    var tr = "translate("+ (newx-20) + " " + (newy-40) + ") scale(1 -1)"
    c1name.setAttribute("transform",tr )
    

    setTimeout(doLoop,TIMESEC)   
}