set_page_title("ท่องศัพท์ " + new Date().toLocaleTimeString())

var root = document.body ; 
root.style.marginLeft = "10px"
root.style.paddingLeft = "10px"



var style = add_question_style() 
root.appendChild(style)


console.log(root)


var  arr_question_answer = [{q:"ดีลิเชียส",a:"delicius"}
                            ,{q:"ดีลิเวอร์",a:"deliver"}
                            ,{q:"ทีวี",a:"television"}
                            ,{q:"พระอาทิตย์",a:"sun"}]


var  ans_count = 5
arr_question_answer.forEach((element,index ) => {
    var q1 = add_question_block("Q" + index ,"คำว่า '" + element.q +  "' สะกดอย่างไร",element.a ,ans_count )
    console.log(q1)
    root.appendChild(q1)
    root.appendChild(spell_element("br",""))        
});



