//@ts-check

//var body = document.body;
//var root = document.getElementById("root"); 
var refresh_sec = 60 
add_RELOAD_HTML_SEC(refresh_sec)
set_page_title("ทดสอบข้อมูล " + new Date().toLocaleTimeString())

/** @type  {HTMLElement} root  */
var root = document.body ; 


root.style.marginLeft = "10px"
root.style.paddingLeft = "10px"


//=========================================================================
var form1 = add_Form("index_do.php")
var tx  = add_textNode("เลือกจังหวัด");
var d  = add_Div();
var s1 = add_SELECT ("sel_prov"
                ,[
                {text:"AAA",value:"A"}     
                ,{text:"BBB",value:"B"}
                ,{text:"CCC",value:"C"}
            ]);
s1.setAttribute("id","prov")


var sel_amphur_data =   [
    {text:"อำเภอ1 A",value:"a1",s1:"A"}     
    ,{text:"อำเภอ2 A",value:"a2",s1:"A"}
    ,{text:"อำเภอ3 B",value:"a3",s1:"B"}
    ,{text:"อำเภอ4 B",value:"a4",s1:"B"}
    ,{text:"อำเภอ5 C",value:"a5" ,selected: "SELECTED",s1:"C"}
    ,{text:"อำเภอ6 C ",value:"a6" ,s1:"C"}
];

var sel_amphur = add_SELECT ( "sel_amphur"
    ,   sel_amphur_data.filter( obj => { return obj.s1 == "A";  }) );


s1.addEventListener("change",
    ev => { 
        filter_province_amphur(s1, sel_amphur,sel_amphur_data,"s1")
    }
)

sel_amphur.setAttribute("id","id_amphur")
sel_amphur.addEventListener("change",
        function(ev){
            console.log(ev) 
        }
)
//=========================================



//=========================================
//=========================================

var row1 = spell_element("div","row")
var col1 = spell_element("div","col-sm-12")
row1.appendChild(col1)
var text_title = "TITLE (use Boostrap 4.0) ," + new Date().toLocaleTimeString()
            + ", refresh every " + refresh_sec + " sec(s)"
col1.appendChild(add_textNode(text_title ))
form1.appendChild(row1)

//=========================================

var nav_def = add_NAV_DEFAULT(
    "SITENAME"
    ,"#"
    ,["#","tools.php","data.php"]
    , ["Home2","Tools2","DATA2"]
    ,0 
);
console.log(nav_def)
form1.appendChild(nav_def)


//=========================================
var row = add_ROW( 
    [   add_COL("col-sm-3" ,[tx] )
        ,add_COL("col-sm-5" ,[s1] )
    ]
)
form1.appendChild(add_BR())
form1.appendChild(row)
form1.style.width = "80%"; 
form1.style.marginLeft = "10%";
//=========================================
row = add_ROW( 
    [   add_COL("col-sm-3" ,[add_textNode("เลือกอำเภอ")] )
        ,add_COL("col-sm-5" ,
            [sel_amphur
            , add_ahref("https://th.wikipedia.org/wiki/%E0%B8%AD%E0%B8%B3%E0%B9%80%E0%B8%A0%E0%B8%AD","เกี่ยวกับอำเภอ")
            ]  
        )
    ]
)
form1.appendChild(row)

//=========================================
var props_idcard = {"placeholder":"เลขที่บัตร...","value":"","maxlength":5
                       ,"style":"background-color:lightgreen;color:green;" }
var row_idcard = add_row_input_event("col-sm-3","col-sm-4","ป้อนเลขที่บัตร(ุ5อักษร)","text",props_idcard,{})

form1.appendChild(row_idcard)

//=========================================
var props_date = {"placeholder":"วันที่รับของ"}
var row_date = add_row_input("col-sm-3","col-sm-4","วันที่รับของ(ปี ค.ศ.)","date",props_date)
form1.appendChild(row_date)


//=========================================
var props_range = {"value":20
                    ,"max":50
                    ,"min":0 
                    ,"id":"range1"
                    } 
var events_range    =  {"change": 
                            function(ev){ 
                                var st = document.getElementById("tx_stat") 
                                /** @type {HTMLInputElement} html_range */
                                var html_range = (/** @type {HTMLInputElement} */document.getElementById("range1"))
                                var val1 = html_range.value
                                st.innerHTML = val1   
                                //alert('ok'); 
                            }
                    };
var row_range = add_row_input_event("col-sm-3","col-sm-4","ช่วงข้อมูล","range",props_range,events_range)
form1.appendChild(row_range)



var tx_stat = spell_element("span" ,"bg-info h2" )
tx_stat.innerHTML = "สถานะ.." //document.getElementById("range1").value ;
tx_stat.setAttribute("id","tx_stat")
var row_stat   = add_row_nodes("col-sm-3","col-sm-4", "...", [ tx_stat ])
form1.appendChild(row_stat)

//=========================================

form1.appendChild(add_BR())

var row_bar = add_ROW(
    [
        add_COL("col-sm-12 text-center", [
            spell_element("hr","")
        ])
    ]
)
form1.appendChild (row_bar)

var row_submit = add_ROW(
    [
        add_COL("col-sm-4 text-center", [ add_textNode("เลือกกระบวนการ : ") ])
        ,add_COL("col-sm-4 text-right",[ add_input("reset","btn btn-info", "คืนค่าเดิม") ])        
        ,add_COL("col-sm-4 text-right",[ add_input("submit","btn btn-success", "ค้นข้อมูล") ])
    ]
)
form1.appendChild (row_submit)

//=========================================

var dropdown = add_dropdown("Button Menu" ,['#','#','#'] ,["เมนู 1","เมนู 2","menu 3"])        
        document.container_fluid().doc
        .add_nav(["index.html","tools.html","#"],["Home","Tools","Data"] , 0 ,"background-color:lightgreen;").doc
        .img("../../img/banner_nb.jpg","banner").doc
    
        .container().doc
        .add_nav_default("กลับหน้าแรก", "index.html" , ["#","#"],["Tools2","About"]).doc
        .div("html","divtx").div
            .textNode("Use Boostrap 4.0 , ขณะนี้เวลา  ").div
            .timeNode(); 
        //divtx.appendChild( add_timeNode ()) ;

// root.appendChild(form1)

