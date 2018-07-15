var refresh_sec = 60 
add_RELOAD_HTML_SEC(refresh_sec)
set_page_title("ทดสอบข้อมูล " + new Date().toLocaleTimeString())


var root = document.body ; 

root.style.marginLeft = "10px"
root.style.paddingLeft = "10px"
root.setAttribute("style","background-color:lightyellow;")

var h1 = spell_element("h1","") 
h1.innerText = "Index Page "
root.appendChild( h1 ) 

function add_ahref(url,text,className){
    var ah = spell_element("a",className)
    ah.setAttribute("href",url)
    ah.text =  text 
    console.log (ah )
    return ah  
}
function add_br(){
    var br = spell_element("br","")
    return br 
}

var ah = add_ahref("index2.html","Demo Form- index2","btn btn-default")
root.appendChild( ah  );
root.appendChild( add_br() )

