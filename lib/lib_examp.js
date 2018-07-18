/*  lib_exam.js   

    @author: Thitipong Samranvanich
    @since: 2018-07-11 
    @country: thailand
    @code_language :   javascript , no library 
    @test_on_browser:  Google Chrome  
*/
class ExamList
{

    constructor(root ){ 
        this.root = root 
        //this.text = text
        this.score_node = null
        this.click_count_node = null  
        //this.answer_list  = arr_question_answer 
        this.arr_question_answer = {}     
        this.correct_count = 0
    }
    
    // this.init = function( arr_question_answer){
    //     this.arr_question_answer = arr_question_answer
    // } 
    inc_click (num_add ){
        var num =   parseInt(  this.click_count_node.innerHTML ) 
        num += num_add 
        this.click_count_node.innerHTML = num         
    } 

    init(){
        this.add_question_style()
        console.log(emlist.root) 
        
        this.root.appendChild( add_textNode("Score : "))
        var score_node = spell_element("span","h2")    
        score_node.innerHTML = "0"
        score_node.setAttribute("id","score_node")
        this.score_node = score_node
        this.root.appendChild(score_node)
        this.root.appendChild( add_textNode(" , " ))

        this.root.appendChild( add_textNode("Click Count : "))

        this.click_count_node = spell_element("span","h2")
        this.click_count_node.innerHTML = "0"
        console.log(this.click_count_node )
        this.root.appendChild(this.click_count_node)
    
        this.inc_click(0) 
 
    }
    

    add_question_style(){
        var style = spell_element("style","")
        style.appendChild(add_textNode(".question  {border:1px solid orange;background-color:lightyellow;min-height:100px;"))
        style.appendChild(add_textNode("padding:5px;}"))
        style.appendChild(add_textNode(".qt_text  {font-size:20px;color:darkblue;}"))
        style.appendChild(add_textNode(".ans_text  {font-size:16px;color:green;}"))
        //return style
        this.root.appendChild(style)      
    }

    buildDom(){
        var  ans_count = 5
        this.arr_question_answer.forEach((element,index ) => {
                var q1 = this.add_question_block(element  , this /* PASS OBJECT ,ECMA6Script */ )
                console.log(q1)
                this.root.appendChild(q1)
                this.root.appendChild(spell_element("br",""))        
            });            
    }

    exam_display( arr_question_answer ,on_ans_click ){
        var  ans_count = 5
        arr_question_answer.forEach((element,index ) => {
            var q1 = this.add_question_block(element  , on_ans_click)
            console.log(q1)
            root.appendChild(q1)
            root.appendChild(spell_element("br",""))        
        });    
    }

    add_question (){
        var q = spell_element("div","");
        q.className = "question"
        return q 
    }
    
    /* 
        qa is question answer
        qa.idx is index start from 0
        qa.qtext = question text 
        qa.items = array of ans item  
    */
    add_question_block( qa , on_ans_click ) {
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

    on_ans_click(ev ){
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
        console.log(this.click_count_node  )
        var num =   parseInt(  this.click_count_node.innerHTML ) 
        num += 1 
        this.click_count_node.innerHTML = num

        this.calc_correct_count(ev.target )
    }

    calc_correct_count(obj){
        console.log(obj )
        if(obj.getAttribute("is_correct") == "true"){
           obj.parentNode.parentNode.setAttribute("is_correct",true )
            // this.correct_count +=1  
        }else{
            obj.parentNode.parentNode.setAttribute("is_correct",false )
        }
        console.log(obj.parentNode.parentNode.parentNode)

        var arr  = document.querySelectorAll("[class='question']");
        console.log( arr.length )
        var sum_correct  = 0 
        for(var i = 0 ; i<  arr.length ; i ++ ){
            var is_correct = arr[i].getAttribute("is_correct")
            if( is_correct == "true"){
                sum_correct +=1 
            }
        } 
        console.log(" correct = " + sum_correct)
        var score_node =document.getElementById("score_node")
        //score_node.setAttribute("style","font-size:16px")
        score_node.innerHTML = sum_correct
    }

    getQuestionNode(ans){
        return  ans.parentNode.parentNode 
    }

    add_question_text (text_thai){
        var div = spell_element("div","qt_text")
        var qt =  add_textNode(text_thai)
        div.appendChild(qt)
        var score = spell_element("span","")
        //score.setAttribute("id","score."+id )
        score.innerHTML = "score"
        div.appendChild(score)
        return div
    }

    add_ans_text ( qa ,idx , obj_onclick ){
        var div = spell_element("div","ans_text")
       // div.setAttribute("style","border : 1px solid orange;")
        var chk = spell_element("input","")
        chk.setAttribute("type","radio")
        chk.setAttribute("style","cursor:pointer;")
        chk.setAttribute("is_correct" , qa.items[idx].correct)
        chk.setAttribute("name",qa.qname)
        div.appendChild(chk)

        //===============================================
        chk.addEventListener("click",  this /* PASS OBJECT ,ECMA6Script */ )
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
    
    load_data (){
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
        
    handleEvent(evt) {
        switch(evt.type) {
        case "click":
          this.on_ans_click(evt);
          break;
        // case "dblclick":
        //   this.buttonDoubleClicked(evt);
        //   break;
        default:
          return;
        }
    }
    
}// class 



 