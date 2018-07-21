/**
 * 
 * @author Thitipong Samranvanich 
 * @since  2018-07-xx
 * 
 * @license  MIT  
 * @requires  Javascript in Web Browser / Google Chrome Web Browser 
 * @description
 * @see         https://github.com/tps2015gh/js_ui_builder 
 *           
 */


/*
    CAST TYPE IS REFER TO This link https://github.com/Microsoft/TypeScript/issues/16881
*/


//@ts-check 

/**
 * @param {string} type 
 * @param {string} type
 * @param {string} value 
 */
var add_input = function(type, classname   ,  value){
    /** @type {HTMLInputElement} */
    var e = document.createElement("input")
    e.setAttribute("type",type)
    e.className = " form-control " + classname 
    e.value = value 
    return e 
}

/**
 * 
 * @param {string} type 
 * @param {string} classname 
 * @param {string[]} props 
 */
var add_input_props = function(type, classname   ,  props){
    console.log(props)

    /** @type {HTMLInputElement} */
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

/**
 * 
 * @param {string} url 
 * @param {string} text 
 */
var add_ahref  = function(url,text){
    /** @type {HTMLAnchorElement} */
    var e  = document.createElement("a")
    e.setAttribute("href",url)
    e.text =  text 
    return e 
}
/**
 * 
 * @param {string} value 
 * @see  
 *          Node Interface :  https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1950641247
 *          Text Interface : https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1312295772
 */
var add_textNode = function(value)
{
    /** @type {Text} text */                            // Create Text 
    var text = document.createTextNode(value) 
    /** @type {Node} node */    
    var node =  (/** @type {Node} */ text );            // CAST Text ==>  To Node 
    
    root.appendChild(node);                             // Append Node to  root 
    return node ;

} 

/**
 * 
 * @param {string} url 
 */
var add_Form = function(url){
    var e = document.createElement("form")
    e.setAttribute("id", "form1")
    e.setAttribute("class","form")
    e.action  = url  
    e.method = "POST"
     return e 
}

/**
 *  
 */
var add_Div = function(){
    /** @type {HTMLDivElement} e */
    var e = document.createElement("div");
    //   e.style.border = "1px solid red";
    root.appendChild(e);
    return e ;
}
/**
 * 
 * @param {string} name 
 * @param {Array} items 
 */
var add_SELECT = function( name , items ){
    /** @type {HTMLSelectElement} e */
    var e = document.createElement("select");
    e.name = name 
    //e.style.border = "1px solid red";
    e.classList.add( "form-control" ) 
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

/**
 * 
 * @param {string} src 
 */
var add_IMG = function (src ){
    var e = document.createElement("img")
    e.src = src 
    return e 
}

/**
 * 
 * @param {HTMLElement[]} cols 
 */
var add_ROW = function (cols){
    /** @type {HTMLDivElement} */
    var e = document.createElement("div");
    e.classList.add("row")
    cols.forEach(element => {
        e.appendChild( element  )
    });
    return e ;    
}

/**
 * 
 * @param {string} col_style 
 * @param {Node[]} elements 
 * @see  
 *        Node :  https://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1950641247
 */
var add_COL = function(col_style , elements ){
    var col = document.createElement("div");
    col.className  = col_style
    elements.forEach(element => {
        col.appendChild( element  )
    });
    return col ;        
}

/**
 * 
 */
var add_BR = function( ){
        /** @type {HTMLBRElement} br */
        var br = document.createElement("br");
        return br ;
}

/**
 * 
 * @param {string[]} links 
 * @param {string[]} texts 
 * @param {number} active_index 
 */
var add_NAV = function(links , texts , active_index){

    /** @type {HTMLElement} nav  */
    var nav = document.createElement("nav")
    //nav.className = "navbar navbar-expand-sm bg-light navbar-light"
    nav.className = "navbar navbar-expand-sm bg-dark navbar-dark"
    
    /** @type {HTMLUListElement} navbar */
    var navbar = document.createElement("ul")
    navbar.className = "navbar-nav"
    nav.appendChild(navbar)

    /** @type {number} index  */
    for (let index = 0; index < links.length; index++) {

        /** @type {HTMLLIElement} li */
        var li = document.createElement("li")
        if(active_index != index){
            li.className = "nav-item "
        }else{
            li.className = "nav-item active"
        }

        /** @type {HTMLAnchorElement} a */
        var a = document.createElement("a")
        a.className = "nav-link"
        a.href = links[index]
        a.text = texts[index]
        li.appendChild(a)
        navbar.appendChild(li)
    }
    return nav
}

/**
 * 
 * @param {string} elm_type 
 * @param {string} classname 
 */
var spell_element = function(elm_type , classname){
    /** @type {HTMLElement} div */
    var div = document.createElement(elm_type)
    div.className = classname 
    return div 
}

/**
 * 
 * @param {string} sitename 
 * @param {string[]} links 
 * @param {string[]} texts 
 * @param {number} active_index 
 */
var add_NAV_DEFAULT = function(sitename, links , texts , active_index){
    var nav = spell_element("nav","navbar navbar-expand-sm bg-dark navbar-dark")
    var cont_fluid = spell_element("div","container-fluid")
    nav.appendChild(cont_fluid)
    var div_hd =  spell_element("div","navbar-header")

    /*
     CAST TYPE IS REFER TO This link https://github.com/Microsoft/TypeScript/issues/16881
    */

    /** @type {HTMLAnchorElement} nav_hd */
    var nav_hd =   (/** @type {HTMLAnchorElement}*/spell_element("a","navbar-brand"))           // CAST TYPE  HTMLElement => TO Anchor 
    nav_hd.setAttribute("href","#")
    nav_hd.text = sitename 

    nav.appendChild(cont_fluid)
    cont_fluid.appendChild(nav_hd)

    // body 
    var ul_body = spell_element("ul","navbar-nav")

    console.log(texts)
    for (let index = 0; index < links.length; index++) {

        /** @type {HTMLAnchorElement} a1  */
        var a1  = (/** @type {HTMLAnchorElement} */ spell_element("a","nav-link"))          // CAST TYPE 
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

/**
 * 
 * @param {string} class_text 
 * @param {string} class_input 
 * @param {string} text 
 * @param {string} input_type 
 * @param {object} props 
 */
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

/**
 * 
 * @param {string} button_text 
 * @param {string[]} links 
 * @param {string[]} texts 
 */
var add_dropdown = function (button_text, links , texts ){

    /* <div class="dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
  <span class="caret"></span></button>
  <ul class="dropdown-menu">
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
  </ul>
</div>     */

    var dd  = spell_element("div","dropdown");
    var btn = spell_element("button","btn btn-default dropdown-toggle")
    //console.log(btn)
    btn.setAttribute("type","button")
    btn.setAttribute("data-toggle","dropdown")
    btn.setAttribute("aria-haspopup","true")
    btn.setAttribute("aria-expanded","false")
    btn.appendChild( add_textNode(button_text))     // add button text
    //console.log(btn)
    btn.appendChild(spell_element("span","caret"))                       
    dd.appendChild(btn)                             // add button to dropdown

    var ul = spell_element("ul","dropdown-menu");
    //ul.setAttribute("role","menu")
    ul.setAttribute("aria-labelledby","dropdownMenuButton")
    ul.setAttribute("aria-labelledby","menu1")
    for(var i=0; i < links.length ; i++  ){
        var li = spell_element("li","")
        li.setAttribute("role","presentation")
        var ahref = add_ahref(links[i],texts[i])
        ahref.className = "dropdown-item"
        li.appendChild(ahref)                       // li  > ahref 
        ul.appendChild(li)                          // ul  > li > ahref  
    }
    dd.appendChild(ul)
    
    console.log( dd )
    return dd      
}

/**
 * 
 * @param {string} class_text 
 * @param {string} class_input 
 * @param {string} text 
 * @param {string} input_type 
 * @param {object} props 
 * @param {object} events 
 */
 var add_row_input_event = function(class_text , class_input, text , input_type, props ,events){
    var input1  =add_input_props(input_type,"form-control",props )


    // for (const [key, value] of Object.entries(events)) {
    //     console.log(`${key} val== ${value}`); // "a 5", "b 7", "c 9"
    //     var evname = key
    //     var blkcode = value  
    //     input1.addEventListener(evname , blkcode)  
    // }

    // Typescript not accept  Object.entries(events)  
    Object.keys(events).forEach((key) => {
        var value = events[key]
       console.log(`${key} val== ${value}`); // "a 5", "b 7", "c 9"
        var evname = key
        var blkcode = value  
        input1.addEventListener(evname , blkcode)  
    });

    console.log(props)
    // for (const [key, value] of Object.entries(props)) {        
    //     console.log(`ลงทะเบียน PROP : ${key} val== ${value}`); // "a 5", "b 7", "c 9" 
    //     console.log( input1 )
    //     input1.setAttribute(key , value)  
    // }

    // Typescript not accept  Object.entries(props)  
    Object.keys(props).forEach((key) => {
        var value = events[key]
        console.log(`ลงทะเบียน PROP : ${key} val== ${value}`); // "a 5", "b 7", "c 9" 
        console.log( input1 )
        input1.setAttribute(key , value)  
    });


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

 /**
  * 
  * @param {string} class_text 
  * @param {string} class_node 
  * @param {string} text 
  * @param {Node[]} nodes 
  */
 var add_row_nodes = function( class_text , class_node , text,  nodes){
 
    var  node_row = add_ROW( 
        [   add_COL(class_text ,[add_textNode(text)] )
            ,add_COL(class_node  ,  nodes )
        ]
    ) 
    return node_row

 }
 
/**
 * 
 * @param {HTMLSelectElement} sel_prov 
 * @param {HTMLSelectElement} sel_detail 
 * @param {object[]} sel_detail_data 
 * @param {string} filter_colname 
 */
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
        /** @type {HTMLOptionElement} option */
        var option = (/** @type {HTMLOptionElement} */spell_element("option",""))
        option.text = element.text
        option.value = element.value
        option.setAttribute("s1", element.s1) 
        sel_amphur.options.add(option)    
    });    
}

var add_RELOAD_HTML_5000 = function ( ){
    setTimeout(function(){
        window.location.reload(true );
     }, 5000);    
}
var add_RELOAD_HTML_SEC = function ( sec  ){
    setTimeout(function(){
        window.location.reload(true);
    },  sec * 1000 );    
}

var set_page_title = function(title){
    document.title = title 
}

var redirect = function(url){
    document.location = url
}