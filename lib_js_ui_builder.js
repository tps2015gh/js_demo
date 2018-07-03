
var add_input = function(type, classname   ,  value){
    var e = document.createElement("input")
    e.setAttribute("type",type)
    e.className = " form-control " + classname 
    e.value = value 
    return e 
}
var add_ahref  = function(url,text){
    var e  = document.createElement("a")
    e.setAttribute("href",url)
    e.text =  text 
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

var add_NAV = function(links , texts , active_index){
    var nav = document.createElement("nav")
    //nav.className = "navbar navbar-expand-sm bg-light navbar-light"
    nav.className = "navbar navbar-expand-sm bg-dark navbar-dark"
    var navbar = document.createElement("ul")
    navbar.className = "navbar-nav"
    nav.appendChild(navbar)
    for (let index = 0; index < links.length; index++) {
        var li = document.createElement("li")
        if(active_index != index){
            li.className = "nav-item "
        }else{
            li.className = "nav-item active"
        }
        var a = document.createElement("a")
        a.className = "nav-link"
        a.href = links[index]
        a.text = texts[index]
        li.appendChild(a)
        navbar.appendChild(li)
    }
    return nav
}

var spell_element = function(elm_type , classname){
    var div = document.createElement(elm_type)
    div.className = classname 
    return div 
}

var add_NAV_DEFAULT = function(sitename, links , texts , active_index){
    var nav = spell_element("nav","navbar navbar-expand-sm bg-dark navbar-dark")
    var cont_fluid = spell_element("div","container-fluid")
    nav.appendChild(cont_fluid)
    var div_hd =  spell_element("div","navbar-header")
    var nav_hd =  spell_element("a","navbar-brand")
    nav_hd.setAttribute("href","#")
    nav_hd.text = sitename 

    nav.appendChild(cont_fluid)
    cont_fluid.appendChild(nav_hd)

    // body 
    var ul_body = spell_element("ul","navbar-nav")

    console.log(texts)
    for (let index = 0; index < links.length; index++) {
        var a1  = spell_element("a","nav-link")
        a1.setAttribute("href",links[index])
        a1.text = texts[index] 
        var li1 = spell_element("li","nav-item")
        if(index == active_index){
            li1.className  = "nav-item active"
        }  
        ul_body.appendChild(li1)
        li1.appendChild(a1)
        ul_body.appendChild(li1)            
    }
    cont_fluid.appendChild(ul_body)

    return nav
}