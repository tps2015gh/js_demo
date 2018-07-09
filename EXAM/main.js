set_page_title("ท่องศัพท์ " + new Date().toLocaleTimeString())

var root = document.body ; 
root.style.marginLeft = "10px"
root.style.paddingLeft = "10px"



var style = add_question_style() 
root.appendChild(style)


console.log(root)

var demo = spell_element("div","")
demo.setAttribute("id","demo")
root.appendChild(demo)

var  arr_question_answer = [{q:"ดีลิเชียส",a:"delicius"}
                            ,{q:"ดีลิเวอร์",a:"deliver"}
                            ,{q:"ทีวี",a:"television"}
                            ,{q:"สะดวกสบาย",a:"convenience"}
                        ]
                        var xhttp = new XMLHttpRequest();
                        xhttp.onreadystatechange = function() {
                            if (this.readyState == 4 && this.status == 200) {
                                var jsontext = this.responseText;
                                arr_question_answer =  JSON.parse( jsontext)
                                alert(arr_question_answer)
                                display(arr_question_answer)
                            }
                          };
                        xhttp.open("GET", "data.php", true);
                        xhttp.send();

                    
function display( arr_question_answer ){
    var  ans_count = 5
    arr_question_answer.forEach((element,index ) => {
        var q1 = add_question_block("Q" + index ,"คำว่า '" + element.q +  "' สะกดอย่างไร",element.a ,ans_count )
        console.log(q1)
        root.appendChild(q1)
        root.appendChild(spell_element("br",""))        
    });    
}



