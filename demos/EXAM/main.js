set_page_title("ท่องศัพท์ " + new Date().toLocaleTimeString())

var root = document.body ; 
root.style.marginLeft = "10px"
root.style.paddingLeft = "10px"



// class Menu {
//     handleEvent(event) {
//       // mousedown -> onMousedown
//       let method = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
//       this[method](event);
//     }

//     onMousedown() {
//       root.innerHTML = "Mouse button pressed";
//     }

//     onMouseup() {
//       root.innerHTML += "...and released.";
//     }
//   }

//   let menu = new Menu();
//   root.addEventListener('mousedown', menu);
//   root.addEventListener('mouseup', menu);



var emlist = new ExamList(root)

emlist.init()


// var demo = spell_element("div","")
// demo.setAttribute("id","demo")
// root.appendChild(demo)
                        


emlist.load_data()


