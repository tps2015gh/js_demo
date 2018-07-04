
var add_input = function(type, classname   ,  value){
    var e = document.createElement("input")
    e.setAttribute("type",type)
    e.className = " form-control " + classname 
    e.value = value 
    return e 
}
var add_input_props = function(type, classname   ,  props){
    console.log(props)
    var e = document.createElement("input")
    e.setAttribute("type",type)
    e.className = " form-control " + classname 
    for (var key in props) {
        if (e.hasOwnProperty(key)) {
            var val1 = props[key]
            console.log("set attribut of " +  key + " -> " + val1);
            e.setAttribute(key,val1)   
        }
    }    
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

var add_row_input = function(class_text , class_input, text , input_type, props){
    var  node_row = add_ROW( 
         [   add_COL(class_text ,[add_textNode(text)] )
             ,add_COL(class_input ,
                 [ add_input_props(input_type,"form-control",
                             props )
                 ]  
             )
         ]
     ) 
     return node_row
 }

 var add_row_input_event = function(class_text , class_input, text , input_type, props ,events){
    var input1  =add_input_props(input_type,"form-control",props )
    for (const [key, value] of Object.entries(events)) {
        console.log(`${key} val== ${value}`); // "a 5", "b 7", "c 9"
        var evname = key
        var blkcode = value  
        input1.addEventListener(evname , blkcode)  
    }
    
    for (const [key, value] of Object.entries(props)) {
        
        console.log(`ลงทะเบียน PROP : ${key} val== ${value}`); // "a 5", "b 7", "c 9" 
        
        console.log( input1 )

        input1.setAttribute(key , value)  
    }

    var  node_row = add_ROW( 
         [   add_COL(class_text ,[add_textNode(text)] )
             ,add_COL(class_input ,
                 [ input1
                 ]  
             )
         ]
     ) 
     return node_row
 }

 var add_row_nodes = function( class_text , class_node , text,  nodes){
 
    var  node_row = add_ROW( 
        [   add_COL(class_text ,[add_textNode(text)] )
            ,add_COL(class_node  ,  nodes )
        ]
    ) 
    return node_row

 }
 
var filter_province_amphur = function(sel_prov , sel_detail,sel_detail_data,filter_colname){
    //console.log(ev)
    //console.log(sel_prov.value)
    while (sel_amphur.options.length > 0 ){   
        sel_amphur.options.remove(0) 
    }
    var filter_ed = sel_amphur_data.filter( 
                obj => { 
                        //console.log("obj = ")
                        //console.log(obj)
                        return obj[filter_colname] == sel_prov.value ;  
                    }
            ) ;
    filter_ed.forEach(element => {
        var option = spell_element("option")
        option.text = element.text
        option.value = element.value
        option.s1   = element.s1 
        sel_amphur.options.add(option)    
    });    
}
