/*  lib_exam.js   

    @author: Thitipong Samranvanich
    @since: 2018-07-11 
    @country: thailand
    @code_language :   javascript , no library 
    @test_on_browser:  Google Chrome  
*/
function ExampList(){

}


var add_question_style = function(){
    var style = spell_element("style","")
    style.appendChild(add_textNode(".question  {border:1px solid orange;background-color:lightyellow;min-height:100px;"))
    style.appendChild(add_textNode("padding:5px;}"))
    style.appendChild(add_textNode(".qt_text  {font-size:20px;color:darkblue;}"))
    style.appendChild(add_textNode(".ans_text  {font-size:16px;color:green;}"))
    return style      
}
var  add_question_text = function(text_thai){
    var div = spell_element("div","qt_text")
    var qt =  add_textNode(text_thai)
    div.appendChild(qt)
    var score = spell_element("span","")
    score.innerHTML = "1.2"
    div.appendChild(score)
    return div
}
var  add_ans_text = function( qa ,idx , onclick ){
    var div = spell_element("div","ans_text")
    div.setAttribute("style","border : 1px solid orange;")
    var chk = spell_element("input","")
    chk.setAttribute("type","radio")
    chk.setAttribute("is_correct" , qa.items[idx].correct)
    chk.setAttribute("name",qa.qname)
    div.appendChild(chk)
    chk.addEventListener("click", onclick)
    var qt =  add_textNode(" " + qa.items[idx].val )
    div.appendChild(qt)
    var tx =  spell_element("span","")
    tx.innerHTML = "(ถูกต้อง)"
    tx.setAttribute("style","visibility :visible;")
    tx.setAttribute("style","visibility :hidden;")
 
    div.appendChild(tx)
    return div
}

var add_question = function(){
    var q = spell_element("div","");
    q.className = "question"
    //q.setAttribute("score" , "")
    //q.setAttribute("style","color:orange;")
    return q 
}

var add_question_block = function( qa , on_ans_click ) {
    console.log( "add_question_block ( QA)  = " )
    console.log( qa )
    var line_of_q = "Q" + (qa.idx+1) + ". คำว่า " + qa.qtext + " แปลว่าอะไร ?"
    var qt = add_question_text(line_of_q)
    qt.setAttribute("style","border:1px solid silver;")
     console.log(qt)
    var qblock = add_question()
    qblock.appendChild(qt  )
    console.log( qa.items)
    for(var i = 0 ; i < qa.items.length  ; i++ ){
        var hd =  String.fromCharCode(65+ i );
        var ans_text = add_ans_text(qa ,i ,on_ans_click  )
        qblock.appendChild(  ans_text )
    }
    return qblock 
}

function exam_display( arr_question_answer ,on_ans_click ){
    var  ans_count = 5
    arr_question_answer.forEach((element,index ) => {
        var q1 = add_question_block(element  , on_ans_click)
        console.log(q1)
        root.appendChild(q1)
        root.appendChild(spell_element("br",""))        
    });    
}
 