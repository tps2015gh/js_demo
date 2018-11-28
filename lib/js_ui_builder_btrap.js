HTMLDocument.prototype.e_set_parent = function(parent_div){
    this.e_parent = parent_div
}
HTMLDocument.prototype.e   = function(){
    var obj = this.createElement("div")
    obj.innerHTML = "TEST DIV "
    obj.setAttribute("styel","background-color:red;"); 
    this.e_parent.appendChild(obj);
    return this;
};
HTMLDocument.prototype.e = function(element ){
    this.e_parent.appendChild(element);
    return this;
};

HTMLDocument.prototype.br   = function( ){
    var obj = this.createElement("br")
    var doc = this.e(obj)
    return doc ;
};
HTMLDocument.prototype.container = function(){
    var cont = this.createElement("div")
    cont.className = "container"
    // cont.setAttribute("id",idname)
    document.body.appendChild(cont)
    document.e_set_parent(cont)
    return this 
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
    var doc =  this.e(nav_def)
    return doc     
};
