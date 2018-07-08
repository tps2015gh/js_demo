set_page_title("ท่องศัพท์ " + new Date().toLocaleTimeString())

var root = document.body ; 
root.style.marginLeft = "10px"
root.style.paddingLeft = "10px"

var style = spell_element("style","")
style.appendChild(add_textNode(".question  {border:1px solid orange;background-color:lightyellow;min-height:100px;"))
style.appendChild(add_textNode("padding:5px;}"))
style.appendChild(add_textNode(".qt_text  {font-size:20px;color:darkblue;}"))
style.appendChild(add_textNode(".ans_text  {font-size:16px;color:green;}"))

root.appendChild(style)

console.log(root)

var  add_question_text = function(text_thai){
    var div = spell_element("div","qt_text")
    var qt =  add_textNode(text_thai)
    div.appendChild(qt)
    return div
}
var  add_ans_text = function(q_name, is_correct ,text  ){
    var div = spell_element("div","ans_text")
    var chk = spell_element("input","")
    chk.setAttribute("type","radio")
    chk.setAttribute("is_correct" , is_correct)
    chk.setAttribute("name",q_name )
    div.appendChild(chk)
    var qt =  add_textNode(" " + text)
    div.appendChild(qt)
    return div
}

var add_question = function(){
    var q = spell_element("div","");
    q.className = "question"
    return q 
}

var add_question_block = function(q_name,q_text, vocab ,ans_count ) {
    var qt = add_question_text(q_text)
    console.log(qt)
    var q = add_question()
    q.appendChild(qt  )
    //root.appendChild(q)
    
    //var ans_count  = 5 ; 
    var random_correct0 = get_random_1toN(ans_count) -1 
    for(var i = 0 ; i < 5; i++ ){
        var hd =  String.fromCharCode(65+ i );
        if(i != random_correct0){
            var tx_error = get_text_error(vocab)
            q.appendChild( add_ans_text(q_name , false , hd + ". (ERR)" + i + "/" + random_correct0 + "/"  + tx_error ) )
            //console.log (" text error " + (i+1) + ": " + tx_error  )    
        }else{
            q.appendChild(add_ans_text(q_name , true , hd + ".  "  + vocab ,true ))
        }
    }
    return q 
}

var  ans_count = 5
var q1 = add_question_block("Q1","คำว่า ดีลิเชียส สะกดอย่างไร","delicius",ans_count )
console.log(q1)
root.appendChild(q1)

function get_random_1toN(  n  ){
    return Math.floor(Math.random() * n  ) +1 ;
}

function get_random_0toN(  n  ){
    return Math.floor(Math.random() * n  ) + 1;
}
function get_random_char_atoz(  ){
    var charcode_a = "a".charCodeAt(0)
    var countAtoZ =  "z".charCodeAt(0) - charcode_a  +1 ;
    console.log("count a-z = "  + countAtoZ)
    var random_charcode_from0  = Math.floor(Math.random() *  countAtoZ  )  ;
    return String.fromCharCode(random_charcode_from0 + charcode_a )    
}


function get_text_error(text){
    var buf= [] 
    var tlen =  text.length
    var rnd_pos = get_random_0toN(tlen)
    for(var i =  0 ; i < tlen  ; i ++ ){
        var ch  = text.charAt(i )
        if( i == rnd_pos ){
            ch = get_random_char_atoz()
        }
        buf.push(ch )
    }
    console.log("BUF = ")
    console.log(buf)
    return  buf.join("")
}

var UNITTEST_get_random_char_atoz = function(){
    var counter = {}  
    for(var i = 0 ; i < 2005 ; i ++){
        var ch  = get_random_char_atoz()
        console.log(ch )
        if( isNaN( counter[ch])){
            counter[ch] =  1    
        }else{
            counter[ch] =  counter[ch] + 1 
        }
    }
    console.log ( counter )
}
//UNITTEST_get_random_char_atoz();