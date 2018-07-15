/*  lib_exam.js   

    @author: Thitipong Samranvanich
    @since: 2018-07-11 
    @country: thailand
    @code_language :   javascript , no library 
    @test_on_browser:  Google Chrome  
*/
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
    return div
}
var  add_ans_text = function( qa ,idx  ){
    var div = spell_element("div","ans_text")
    var chk = spell_element("input","")
    chk.setAttribute("type","radio")
    chk.setAttribute("is_correct" , qa.items[idx].correct)
    chk.setAttribute("name",qa.qname)
    div.appendChild(chk)
    var qt =  add_textNode(" " + qa.items[idx].val )
    div.appendChild(qt)
    return div
}

var add_question = function(){
    var q = spell_element("div","");
    q.className = "question"
    return q 
}



var add_question_block = function( qa ) {
    console.log( "add_question_block ( QA)  = " )
    console.log( qa )
    var line_of_q = "Q" + (qa.idx+1) + ". คำว่า " + qa.qtext + " แปลว่าอะไร ?"
    var qt = add_question_text(line_of_q)
    console.log(qt)
    var q = add_question()
    q.appendChild(qt  )
    console.log( qa.items)
    for(var i = 0 ; i < qa.items.length  ; i++ ){
        var hd =  String.fromCharCode(65+ i );
        q.appendChild( add_ans_text(qa ,i  ) )
    }
    return q 
}

 