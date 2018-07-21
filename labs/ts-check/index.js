/* 
for visual studio code 
Type checking  
Refer to  https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
*/

//@ts-check


/** @type {number} */
var x ;
x = 20 ; 

/**
 * @type {HTMLElement}
 */
function getRoot(){
    var root = document.getElementById("root")
    return root  
}
/**
 * @param {string}  text 
 */
function newButton(text){
    /** @type {HTMLButtonElement} */
    var bt = document.createElement("button")
    bt.innerText = text  
    return bt  
}

function newBr(){
    /** @type {HTMLBRElement} */
    var br = document.createElement("br")
    return br 
}


class Content{
    constructor(){
    }
    build(){
        /** @type {HTMLElement} root  */
        var root = getRoot()
        root.appendChild( newButton("Button1") )
        root.appendChild( newButton("Button2") )                
    }
}

class Page{
    
    /** @param {Content} ct  */
    constructor(ct ){
        this.ct = ct 
    } 
    build(){
        this.ct.build()
    }
}

var ct   = new Content()
var page = new Page(ct )
page.build()