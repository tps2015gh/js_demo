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