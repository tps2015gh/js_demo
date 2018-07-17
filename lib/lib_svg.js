/* LIB SVG 
https://github.com/tps2015gh/js_ui_builder
https://github.com/tps2015gh/js_ui_builder/blob/master/lib_svg/
@author: Thitipong samranvanich 
@country: Thailand 
@dependency: no-dependency library 
@since: 2018-07-10 
*/
var svg_circle = function(cx,cy,r){
	var svgNS = "http://www.w3.org/2000/svg"
	var c    = document.createElementNS(svgNS,"circle")
	c.setAttribute("cx",cx )
	c.setAttribute("cy",cy )
	c.setAttribute("r",r )
	c.setAttribute("stroke","blue")
	c.setAttribute("stroke-width","2")
	c.setAttribute("fill","yellow")
	return c 
}	
var svg_root = function(wi,hi){
	var svgNS = "http://www.w3.org/2000/svg"
	var svg   = document.createElementNS(svgNS, "svg");
	svg.setAttribute("width",wi)
	svg.setAttribute("height",hi)
	//svg.setAttribute("style","border:1px solid silver;")
	return svg
}

var svg_line = function (xy1 , xy2 ,  style,  ){
	var svgNS = "http://www.w3.org/2000/svg"
	var line   = document.createElementNS(svgNS, "line");
	line.setAttribute("x1",xy1.x)
	line.setAttribute("y1",xy1.y)	
	line.setAttribute("x2",xy2.x)
	line.setAttribute("y2",xy2.y)	
	line.style =  style 
	return line 
}
var svg_line_xy = function (x1 ,y1,x2,y2 ,  style  ){
	var svgNS = "http://www.w3.org/2000/svg"
	var line   = document.createElementNS(svgNS, "line");
	line.setAttribute("x1",x1)
	line.setAttribute("y1",y1)	
	line.setAttribute("x2",x2)
	line.setAttribute("y2",y2)	
	line.style =  style 
	return line
}

/* <g transform="translate(0,400) scale(1,-1)"> 
	var g  = svg_g_graphxy(0,400,1,-1)
	var svg = svg_root(500,400)
	svg.appendChild(g)
*/
var svg_g_graphxy = function(translate_x,translate_y,scale_x,scale_y ){
	var svgNS = "http://www.w3.org/2000/svg"
	var g1   = document.createElementNS(svgNS, "g");
	var transform  = "translate("+ translate_x + ","+ translate_y +")"
			+ " " + "scale("+scale_x+","+scale_y+ ")"
	g1.setAttribute("transform",transform)
	return g1
}

/* for create axis */
var svg_line_leftright = function(left, right, bottom_up ,line_style ){
    return  svg_line_xy(left,bottom_up,right,bottom_up,line_style)
}
var svg_line_bottomup = function( bottom, up,  left_right ,line_style ){
    return  svg_line_xy(left_right,bottom,left_right,up,line_style)
} 
