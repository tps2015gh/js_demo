
//  //@ts-check

/** @type  {HTMLElement} root  */
//var root = document.body ;
//var back = add_ahref("index.html","กลับหน้า form")
//var container = add_Div()   ; container.className= "container"



var br = document.createElement("br");
document.container()
        .br()
        .add_nav_default("กลับหน้าแรก", "index.html" , ["#","#"],["Tools2","About"])
        //.e(back)
        .br()
        .br()
        .e(add_div_html("หน้านี้คือ tools.html .. "," text-success") )
        .br()
        .e(add_span_html("ไปที่ google คลิกที่นี่ >> ", "text-danger"  ))
        .e(add_ahref("google.com","https://www.google.com"))


// container.appendChild(back )
// container.appendChild(br)
// container.appendChild(add_textNode("tools.html "))

//root.appendChild(container )