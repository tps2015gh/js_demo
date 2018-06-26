
//var body = document.body;
//var root = document.getElementById("root"); 


var root = document.body ; 

root.style.marginLeft = "10px"
root.style.paddingLeft = "10px"

//=========================================================================
var form1 = add_Form("index_do.php")
var tx  = add_textNode("เลือกจังหวัด");
var d  = add_Div("Hello Div");
var s1 = add_SELECT ("sel_prov"
                ,[
                {text:"AAA",value:"AAAval"}     
                ,{text:"BBB",value:"BBBval"}
]);

var sel_amphur = add_SELECT ( "sel_amphur"
    ,    [
    {text:"อำเภอ1",value:"a1"}     
    ,{text:"อำเภอ2",value:"a2"}
    ,{text:"อำเภอ3",value:"a3"}
    ,{text:"อำเภอ4",value:"a4"}
    ,{text:"อำเภอ5",value:"a5" ,selected: "SELECTED"}
    ,{text:"อำเภอ6",value:"a6" }
]);

//=========================================



//=========================================
var banner = add_IMG("banner_nb.jpg");
banner.style.width = "100%"
banner.style.height= "80px"
form1.appendChild(banner)
//form1.appendChild(add_BR())
//=========================================

var nav = add_NAV(
    ["#","tools.php","data.php"]
    , ["Home","Tools","DATA"]
    ,0 
);
console.log(nav)
form1.appendChild(nav)


//=========================================

var row = add_ROW( 
    [   add_COL("col-sm-3" ,[tx] )
        ,add_COL("col-sm-5" ,[s1] )
    ]
)
form1.appendChild(add_BR())
form1.appendChild(row)
form1.style.width = "80%"; 

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

form1.appendChild(add_BR())

var row_submit = add_ROW(
    [
        add_COL("col-sm-12 text-right",[ add_input("submit","btn btn-success", "ค้นข้อมูล") ])
    ]
)
form1.appendChild (row_submit)

//=========================================


root.appendChild(form1)

