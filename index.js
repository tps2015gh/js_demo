var refresh_sec = 60 
add_RELOAD_HTML_SEC(refresh_sec)
set_page_title("ทดสอบข้อมูล " + new Date().toLocaleTimeString())


var root = document.getElementById("root") ; 

root.style.marginLeft = "10px"
root.style.paddingLeft = "10px"
root.setAttribute("style","background-color:lightyellow;")

// var h1 = spell_element("h1","") 
// h1.innerText = "Index Page "
// root.appendChild( h1 ) 

function add_ahref_row(url,text,className){
    var divrow = spell_element("div","row")
    var ah = spell_element("a",className + " col-sm-12 ")
    ah.setAttribute("href",url)
    ah.text =  text 
    divrow.appendChild(ah )
    console.log (ah )
    return divrow  
}
function add_br(){
    var br = spell_element("br","")
    return br 
}

var ah = null  
ah = add_ahref_row("demos/form/index.html","Demo Form- index2","btn btn-info btn-sm   top-buffer ")
var divrow = spell_element("div","row")
root.appendChild( ah  );
//root.appendChild( add_br() )

ah = add_ahref_row("demos/EXAM/index.html","EXAM","btn btn-info btn-sm   top-buffer")
var divrow = spell_element("div","row")
root.appendChild( ah  );
//root.appendChild( add_br() )

ah = add_ahref_row("demos/lib_svg/svg1.html","SVG Library","btn btn-info btn-sm  top-buffer ")
var divrow = spell_element("div","row")
root.appendChild( ah  );
//root.appendChild( add_br() )

ah = add_ahref_row("demos/lib_svg/svg_xy.html","SVG Library - xy ","btn btn-info btn-sm")
var divrow = spell_element("div","row")
root.appendChild( ah  );
//root.appendChild( add_br() )

ah = add_ahref_row("demos/lib_svg/svg_timeline.html","SVG TimeLine Demo ","btn btn-info btn-sm")
var divrow = spell_element("div","row")
root.appendChild( ah  );
root.appendChild( add_br() )


root.appendChild( spell_element("hr","") )

