<!DOCTYPE html>
<html>
<body>
<style> 
svg  {background-color:lightyellow;border:1px solid red;}
</style>
<svg id="svg" height="300" width="400" viewBox="-200 -150 400 300" >
   <g id="gdraw" transform="  scale(1,-1)" >
    <?php draw_xy_axist() ?>
     Sorry, your browser does not support inline SVG.
  </g>
</g>  
   
 
 
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
        

        echo "<circle cx=100 cy=100 r=5 style='stroke:green;fill:pink;'></circle>";


        echo "<g transform='scale(1,-1) ' >";
        echo "<text   transform='translate(0,-15)' x=100 y=0 fill='red'>X Axis </text>";
        echo "<text  transform='translate(0,-220)' x=0 y=100 fill='red'  >Y Axis  </text>";
        echo "</g>";
        // for($x = 0 ; $x <=100 ; $x+=10){
        // }
    }

?> 
