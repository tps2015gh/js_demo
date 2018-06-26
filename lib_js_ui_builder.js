
var add_input = function(type, classname   ,  value){
    var e = document.createElement("input")
    e.setAttribute("type",type)
    e.className = " form-control " + classname 
    e.value = value 
    return e 
}
var add_textNode = function(value)
{
    var node = document.createTextNode(value);
    root.appendChild(node);
    return node ;

} 
var add_Form = function(url){
    var e = document.createElement("form")
    e.setAttribute("id", "form1")
    e.setAttribute("class","form")
    e.action  = url  
    e.method = "POST"
     return e 
}
var add_Div = function(value){
    var e = document.createElement("div");
    //   e.style.border = "1px solid red";
    root.appendChild(e);
    return e ;
}
var add_SELECT = function( name , items ){
    var e = document.createElement("select");
    e.name = name 
    //e.style.border = "1px solid red";
    e.classList = ["form-control"]
    root.appendChild(e);
    items .forEach(element => {
        var opt = document.createElement("option")
        opt.text = element.text  ; 
        opt.value = element.value  ;
        opt.selected = element.selected  ;
        e.appendChild(opt) 
    });
    return e ;
} 

var add_IMG = function (src ){
    var e = document.createElement("img")
    e.src = src 
    return e 
}
var add_ROW = function (cols){
    var e = document.createElement("div");
    e.classList = ["row"]
    cols.forEach(element => {
        e.appendChild( element  )
    });
    return e ;    
}

var add_COL = function(col_style , elements ){
    var col = document.createElement("div");
    col.className  = col_style
    elements.forEach(element => {
        col.appendChild( element  )
    });
    return col ;        
}
var add_BR = function( ){
        var br = document.createElement("br");
        return br ;
}
