<!DOCTYPE html>
<html>
<body>
<style> 
svg  {background-color:lightyellow;border:1px solid red;}
</style>
<svg id="svg" height="300" width="400" viewBox="-100 -100 400 300" >
   <g id="gdraw" transform="scale(1,-1) translate(0,-300)" >
  <text x="100" y="15" fill="red">I love SVG! ,x=100,y=15 </text>
    <text x="150" y="115" fill="red">I love SVG! ,x=150,y=115</text>
    <circle cx=0 cy=0 r=10 fill="red"></circle>
    <circle cx=100 cy=100 r=10 fill="red"></circle>
    <circle cx=200 cy=200 r=10 fill="red"></circle>
    <?php draw_xy_axist() ?>
  Sorry, your browser does not support inline SVG.
  </g>
  
   
    <g id="t1" transform=" "  > 
    <text  x="0" y="0" fill="blue">I love SVG! ,x=100,y=15</text> 
</g> 
    <g id="t2"   transform=" " >
    <text  x="0" y="0" fill="blue">I love SVG! ,x=150,y=115</text>
</g>
</svg>


<script>
function setSVG_WI_HI(svg_wi,svg_hi){
    var svg= document.getElementById("svg")
    svg.setAttribute("width", svg_wi )
    svg.setAttribute("height", svg_hi )
    svg.setAttribute("viewBox", "-20 20 "+svg_wi + " " + svg_hi)
    var gdraw = document.getElementById("gdraw")
    gdraw.setAttribute("transform","scale(1,-1) translate(0,-" + svg_hi + ")")
}
function setTextPosXY(idname , tx,ty){
    var svg= document.getElementById("svg")
    var svg_hi =  parseInt(svg.getAttribute("height"))
    var t1_y = ty 
    var t1 = document.getElementById(idname )
    t1.setAttribute("transform","translate(" + tx + "," + (svg_hi-t1_y) +")")
}
setSVG_WI_HI(400,400)
setTextPosXY("t1",100,15)
setTextPosXY("t2",150,115)
</script>
 
</body>
</html>

<?php
    function draw_xy_axist(){
        for ($y = 0 ; $y <=100 ; $y+=10){
            echo "<line x1=-5 y1=$y x2=5 y2=$y style='stroke:red'></line>";
        }
        echo "<line x1=0 y1=0 x2=0 y2=100 style='stroke:red'></line>";
        echo "<circle cx=0 cy=100 r=5 style='stroke:red;fill:yellow;'></circle>";
        
        echo "<line x1=0 y1=0 x2=100 y2=0 style='stroke:green'></line>";
        echo "<circle cx=100 cy=0 r=5 style='stroke:green;fill:lightgreen;'></circle>";

        // for($x = 0 ; $x <=100 ; $x+=10){
        // }
    }

?> 
