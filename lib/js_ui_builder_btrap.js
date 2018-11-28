HTMLDocument.prototype.e_set_parent = function(parent_div){
    this.e_parent = parent_div
}
HTMLDocument.prototype.div  = function(html,id  ){
    var obj = this.createElement("div")
    obj.innerHTML = html 
    obj.setAttribute("id",id )
    this.e_parent.appendChild(obj);
    this.e_last =  obj
    return {doc:this,div:obj}
};
HTMLDocument.prototype.e = function(element ){
    this.e_parent.appendChild(element);
    return this;
};

HTMLDocument.prototype.br   = function( ){
    var obj = this.createElement("br")
    var doc = this.e(obj)
    this.e_last = obj 
    return doc ;
};
HTMLDocument.prototype.container = function(){
    var cont = this.createElement("div")
    cont.className = "container"
    // cont.setAttribute("id",idname)
    document.body.appendChild(cont)
    document.e_set_parent(cont)
    this.e_last = cont  
    return {doc:this ,div:cont}
}
HTMLDocument.prototype.container_fluid = function(){
    var cont = this.createElement("div")
    cont.className = "container-fluid"
    // cont.setAttribute("id",idname)
    document.body.appendChild(cont)
    document.e_set_parent(cont)
    this.e_last = cont  
    return {doc:this,div:cont}
}

HTMLDocument.prototype.add_nav_default  = function(sitename , siteurl  , arr_url, arr_text ){
    var nav_def = add_NAV_DEFAULT(
        sitename
        ,siteurl
        ,arr_url  
        ,arr_text
        ,0 
    );
    console.log(nav_def)
    this.e_last = nav_def   
    var doc =  this.e(nav_def)
    return {doc:doc, div : nav_def }     
};
HTMLDocument.prototype.add_nav  = function( arr_url, arr_text ,selected_index,style ){
    var nav_def = add_NAV(
        arr_url  
        ,arr_text
        ,selected_index
        ,style
    );
    console.log(nav_def)
    this.e_last = nav_def   
    var doc =  this.e(nav_def)
    return {doc:doc, div: nav_def }     
}
HTMLDocument.prototype.img = function(src ,className ){
    var elm  = add_IMG(src)
    elm.setAttribute("class",className )
    // elm.style.height='25px';   
    this.e_last = elm   
    var doc = this.e(elm )
    return {doc:this,img:elm} ;
}
HTMLDocument.prototype.text = function(html ,className  , id  ){
    var tx = add_span_html(html, className )
    tx.setAttribute("id",id)
    this.e_last = tx   
    var doc =  this.e(tx )
    return doc ;
}
    
 HTMLDivElement.prototype.textNode = function(str){
    var nd =  add_textNode (str )
    this.appendChild( nd );
    return {doc:document,div:this,node:nd } 
}
HTMLDivElement.prototype.timeNode = function(str){
    var nd =  add_timeNode ( )
    this.appendChild( nd );
    return {doc:document,div:this,node:nd } 
}
HTMLDivElement.prototype.e = function(element ){
    this.appendChild( element );
    return {doc: document , div : this , e : element  }
}