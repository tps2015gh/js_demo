set_page_title("ท่องศัพท์ " + new Date().toLocaleTimeString())

var root = document.body ; 
root.style.marginLeft = "10px"
root.style.paddingLeft = "10px"



var style = add_question_style() 
root.appendChild(style)


console.log(root)


var on_ans_click = function(ev){
    console.log(ev)
    console.log(this)
    var ans = ev.target
    console.log(ans.getAttribute("is_correct"))
    ans.setAttribute("readonly","readonly")
    var qt = ans.parentNode.parentNode
    console.log(qt) 
    qt.setAttribute("style","background-color:lightblue")
    qt.childNodes.forEach( div  => {
        div.setAttribute("style","")
    });
    

    ans.parentNode.setAttribute("style","color:blue;font-weight:bold")


    //if(ans.getAttribute("is_correct") == "true" ){
    //    console.log("SET COLOR")
    //    ans.parentNode.setAttribute("style","background-color:red;")
    //}
}

var demo = spell_element("div","")
demo.setAttribute("id","demo")
root.appendChild(demo)
                        
                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                var jsontext = this.responseText;
                                var ar_qa   =  JSON.parse( jsontext)
                                //alert(arr_question_answer)
                                exam_display(ar_qa ,on_ans_click)
                                
                            }
                          };
                        xhttp.open("GET", "data.php", true);
                        xhttp.send();
                    



