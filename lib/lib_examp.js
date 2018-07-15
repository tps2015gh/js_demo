/*  lib_exam.js   

    @author: Thitipong Samranvanich
    @since: 2018-07-11 
    @country: thailand
    @code_language :   javascript , no library 
    @test_on_browser:  Google Chrome  
*/
function ExamList(root ){

    this.root = root 
    //this.text = text
    this.score_node = null
    this.click_count_node = null  
    //this.answer_list  = arr_question_answer 
    this.arr_question_answer = {} 
    
    // this.init = function( arr_question_answer){
    //     this.arr_question_answer = arr_question_answer
    // } 
     this.inc_click = function(num_add ){
        var num =   parseInt(  this.click_count_node.innerHTML ) 
        num += num_add 
        this.click_count_node.innerHTML = num         
    } 

    this.init = function(){
        this.add_question_style()
        console.log(emlist.root) 
        var score_node = spell_element("div","")
        score_node.innerHTML = "10.123"
        this.score_node = score_node
        this.root.appendChild(score_node)

        this.click_count_node = spell_element("div","")
        this.click_count_node.innerHTML = "0"
        console.log(this.click_count_node )
        this.root.appendChild(this.click_count_node)
    
        this.inc_click(20) 
 
    }
    

    this.add_question_style = function(){
        var style = spell_element("style","")
        style.appendChild(add_textNode(".question  {border:1px solid orange;background-color:lightyellow;min-height:100px;"))
        style.appendChild(add_textNode("padding:5px;}"))
        style.appendChild(add_textNode(".qt_text  {font-size:20px;color:darkblue;}"))
        style.appendChild(add_textNode(".ans_text  {font-size:16px;color:green;}"))
        //return style
        this.root.appendChild(style)      
    }

    this.buildDom  = function (){
        var  ans_count = 5
        this.arr_question_answer.forEach((element,index ) => {
                var q1 = this.add_question_block(element  ,this.on_ans_click)
                console.log(q1)
                this.root.appendChild(q1)
                this.root.appendChild(spell_element("br",""))        
            });            
    }

    this.exam_display = function( arr_question_answer ,on_ans_click ){
        var  ans_count = 5
        arr_question_answer.forEach((element,index ) => {
            var q1 = this.add_question_block(element  , on_ans_click)
            console.log(q1)
            root.appendChild(q1)
            root.appendChild(spell_element("br",""))        
        });    
    }

    this.add_question = function(){
        var q = spell_element("div","");
        q.className = "question"
        return q 
    }
    
    this.add_question_block = function( qa , on_ans_click ) {
        console.log( "add_question_block ( QA)  = " )
        console.log( qa )
        var line_of_q = "Q" + (qa.idx+1) + ". คำว่า " + qa.qtext + " แปลว่าอะไร ?"
        var qt = this.add_question_text(line_of_q)
        qt.setAttribute("style","border:1px solid silver;")
         console.log(qt)
        var qblock = this.add_question()
        qblock.appendChild(qt  )
        console.log( qa.items)
        for(var i = 0 ; i < qa.items.length  ; i++ ){
            var hd =  String.fromCharCode(65+ i );
            var ans_text = this.add_ans_text(qa ,i ,on_ans_click  )
            qblock.appendChild(  ans_text )
        }
        return qblock 
    }

    // handleEvent(event) {
    //     // mousedown -> onMousedown
    //     let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
    //     this[method](event);
    //   }

    this.on_ans_click = function(ev ){
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
        console.log(ans)
        if(ans.getAttribute("is_correct") != "true"){
            console.log("true")
            ans.parentNode.setAttribute("style","color:red;font-weight:bold")
            ans.parentNode.parentNode.setAttribute("style","background-color:yellow")
        }else{
            console.log("false")
            ans.parentNode.setAttribute("style","color:blue;font-weight:bold")            
            ans.parentNode.parentNode.setAttribute("style","background-color:lightgreen")
        }
        console.log( ev.target  )
        console.log( this )
        // var num =   parseInt(  this.click_count_node.innerHTML ) 
        // num += 1 
        // this.click_count_node.innerHTML = num
        
    }

    this.getQuestionNode = function (ans){
        return  ans.parentNode.parentNode 
    }

    this.add_question_text = function(text_thai){
        var div = spell_element("div","qt_text")
        var qt =  add_textNode(text_thai)
        div.appendChild(qt)
        var score = spell_element("span","")
        score.innerHTML = "1.2"
        div.appendChild(score)
        return div
    }

    this.add_ans_text = function( qa ,idx , obj_onclick ){
        var div = spell_element("div","ans_text")
       // div.setAttribute("style","border : 1px solid orange;")
        var chk = spell_element("input","")
        chk.setAttribute("type","radio")
        chk.setAttribute("is_correct" , qa.items[idx].correct)
        chk.setAttribute("name",qa.qname)
        div.appendChild(chk)

        //===============================================
        chk.addEventListener("click", this.on_ans_click )
        //chk.attachEvent("onclick" ,onclick )
        //===============================================

        var qt =  add_textNode(" " + qa.items[idx].val )
        div.appendChild(qt)
        var tx =  spell_element("span","")
        tx.innerHTML = "(ถูกต้อง)"
        tx.setAttribute("style","visibility :visible;")
        tx.setAttribute("style","visibility :hidden;")
     
        div.appendChild(tx)
        return div
    }
    
    this.load_data = function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var jsontext = this.responseText;
                var ar_qa   =  JSON.parse( jsontext)
                //alert(arr_question_answer
                emlist.exam_display(ar_qa , function(){ return  emlist; } )
            }
          };
        xhttp.open("GET", "data.php", true);
        xhttp.send();
    }                    
        
    
}// class 



 