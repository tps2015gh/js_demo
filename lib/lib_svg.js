/* LIB SVG 
https://github.com/tps2015gh/js_ui_builder
https://github.com/tps2015gh/js_ui_builder/blob/master/lib_svg/
@author: Thitipong samranvanich 
@country: Thailand 
@dependency: no-dependency library 
@since: 2018-07-10 
*/

//@ts-check

var line_style_grid = "stroke:silver;stroke-width:1px;"

/**
 * @param {number} cx
 * @param {number} cy
 * @param {number} r  
 */ 
var svg_circle = function(cx,cy,r){
	var svgNS = "http://www.w3.org/2000/svg"
	/** @type {SVGCircleElement} c */
	var c  = (/** @type {SVGCircleElement} */document.createElementNS(svgNS,"circle"))
	c.setAttribute("cx",cx + "" )
	c.setAttribute("cy",cy + "" )
	c.setAttribute("r",r + "" )
	c.setAttribute("stroke","blue")
	c.setAttribute("stroke-width","2")
	c.setAttribute("fill","yellow")
	return c 
}	

/**
 * 
 * @param {number} wi 
 * @param {number} hi 
 */
var svg_root = function(wi,hi){
	var svgNS = "http://www.w3.org/2000/svg"
	var svg   = document.createElementNS(svgNS, "svg");
	svg.setAttribute("width",wi + "")
	svg.setAttribute("height",hi + "")
	//svg.setAttribute("style","border:1px solid silver;")
	return svg
}

/**
 * 
 * @param {object} xy1 
 * @param {object} xy2 
 * @param {string} style 
 */
var svg_line = function (xy1 , xy2 ,  style,  ){
	var svgNS = "http://www.w3.org/2000/svg"
	/** @type {SVGLineElement} line */
	var line   = (document.createElementNS(svgNS, "line"))
	line.setAttribute("x1",xy1.x)
	line.setAttribute("y1",xy1.y)	
	line.setAttribute("x2",xy2.x)
	line.setAttribute("y2",xy2.y)	
	line.setAttribute("style",style) 
	return line 
}
/**
 * 
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @param {string} style 
 */
var svg_line_xy = function (x1 ,y1,x2,y2 ,  style  ){
	var svgNS = "http://www.w3.org/2000/svg"

	// CAST TYPE FROM Element ==> to SVGLineElement 
	/** @type {SVGLineElement} line */
	var line   = ( /** @type {SVGLineElement}*/  document.createElementNS(svgNS, "line")) 
	
	line.setAttribute("x1",x1 + "" )
	line.setAttribute("y1",y1 + "" )	
	line.setAttribute("x2",x2 + "" )
	line.setAttribute("y2",y2 + "" )	
	line.setAttribute("style",   style )
	return line
}

/* <g transform="translate(0,400) scale(1,-1)"> 
	var g  = svg_g_graphxy(0,400,1,-1)
	var svg = svg_root(500,400)
	svg.appendChild(g)
*/

/**
 * 
 * @param {number} translate_x 
 * @param {number} translate_y 
 * @param {number} scale_x 
 * @param {number} scale_y 
 */
var svg_g_graphxy = function(translate_x,translate_y,scale_x,scale_y ){
	var svgNS = "http://www.w3.org/2000/svg"
	
	/** @type {SVGGElement} g1 */
	var g1   = (/** @type {SVGGElement} */ document.createElementNS(svgNS, "g"))
	var transform  = "translate("+ translate_x + ","+ translate_y +")"
			+ " " + "scale("+scale_x+","+scale_y+ ")"
	g1.setAttribute("transform",transform)
	return g1
}
/** @type {SVGGElement} g1 */
var g1 

/* for create axis */
/**
 * @param {number} left 
 * @param {number} right 
 * @param {number} bottom_up 
 * @param {string} line_style 
 */
var svg_line_leftright = function(left, right, bottom_up ,line_style ){
    return  svg_line_xy(left,bottom_up,right,bottom_up,line_style)
}

/**
 * @param {number} bottom 
 * @param {number} up 
 * @param {number} left_right 
 * @param {string} line_style 
 */
var svg_line_bottomup = function( bottom, up,  left_right ,line_style ){
    return  svg_line_xy(left_right,bottom,left_right,up,line_style)
} 

var svg_rect = function(x,y,width,fillcolor){
    //var r = spell_element("rect","svg_rect")
	var svgNS = "http://www.w3.org/2000/svg"
	/** @type {SVGRectElement} r */
	var r   = (/** @type {SVGRectElement} */ document.createElementNS(svgNS, "rect"))
    r.setAttribute("style","fill:" +  fillcolor + ";stroke-width:3;stroke:rgb(0,0,0);" ) 
    r.setAttribute("x",x)
    r.setAttribute("y",y)
    r.setAttribute("width",width)
    r.setAttribute("height","30")
    console.log(r )
    return r  
}
var svg_text = function(x,y, fillcolor , text ){
    //var r = spell_element("rect","svg_rect")
	var svgNS = "http://www.w3.org/2000/svg"
	/** @type {SVGTextElement} t */
	var t   = (/** @type {SVGTextElement}  */document.createElementNS(svgNS, "text"))
    t.setAttribute("style","fill:" +  fillcolor  ) 
    t.setAttribute("x",x)
	t.setAttribute("y",y)
	t.textContent = text 
    console.log(t )
    return t  
}

/* g1 must be exist  
    var g1 =  svg_g_graphxy(0 , 0 ,1,-1)
*/
/**
 * 
 * @param {number} bottom 
 * @param {number} top 
 */
var draw_grid_bottom_top = function(bottom , top ){
var x1 ,x2, y1 ,y2  
    y1 = bottom
    y2 = top 
    for(var x = -200 ; x <= 200; x +=50){
        x1 = x ;x2 = x 
        var ln = svg_line_xy( x1,y1,x2,y2,line_style_grid)
        g1.appendChild(ln)
        console.log(ln )
    }
    console.log(g1)
    console.log("draw_grid ok ")
}

/* g1 must be exist  
    var g1 =  svg_g_graphxy(0 , 0 ,1,-1)
*/
var draw_grid_left_right = function(left , right ){
var x1 ,x2, y1 ,y2  
    x1 = left 
    x2 = right 
    for(var y = -200 ; y <= 200; y +=50){
        y1 = y ;y2 = y 
        var ln = svg_line_xy( x1,y1,x2,y2,line_style_grid)
        g1.appendChild(ln)
        console.log(ln )
    }
    console.log(g1)
    console.log("draw_grid ok ")
}
