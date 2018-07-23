<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
<style>
#form1   {background-color:thistle;width:80%;}
<? $hi  = 400; ?>
svg     {background-color:lightyellow;width: 800px;height: <?=$hi?>px;border:1px solid red;}
text   {transform: scale(1,-1) translate(0,-200); }
</style>
</head>
<body>
    index.html (labs\svg)

    <h2>use //@ts-check </h2>

    <svg id="svg1"  >
        
        <g transform="translate(400,200)">
            <g transform="scale(1,-1) ">
                <text x="100" y="0"  transform="rotate(180)" >X-Axis</text>
                <text x="10" y="10"  transform="" >TEST TEXT</text>
                <text x="0" y="100"  transform="" >YYYYYYYY</text>
            </g>
        <g transform="scale(1,-1) " >
            <g x="10" y="10" > 
            </g>
<?php
    for ($y = 0 ; $y <=100 ; $y+=10){
        echo "<line x1=-5 y1=$y x2=5 y2=$y style='stroke:red'></line>";
    }
    echo "<line x1=0 y1=0 x2=0 y2=100 style='stroke:red'></line>";
    echo "<circle cx=0 cy=100 r=5 style='stroke:red;fill:yellow;'></circle>";
    
    echo "<line x1=0 y1=0 x2=100 y2=0 style='stroke:green'></line>";
    echo "<circle cx=100 cy=0 r=5 style='stroke:green;fill:lightgreen;'></circle>";

    for($x = 0 ; $x <=100 ; $x+=10){
    }

?>            
        </g>
</g>
    </svg>


<script>
    
    function setViewPortXY (n){
        var svg1= document.querySelector("#svg1")
        svg1.setAttribute("viewBox" ,"0 0 " + n  + " " +  n  + "" )
    }



    
   // setViewPortXY(100)
</script>

 


</body>
</html>