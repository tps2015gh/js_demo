/* 
for visual studio code 
Type checking  
Refer to  https://github.com/Microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files
*/

//@ts-check



var props  = {placeholder: "เลขที่บัตร...", value: "", maxlength: 5, style: "background-color:lightgreen;color:green;"}

document.write("<hr>")

document.write( props.toString() )
// REF  https://stackoverflow.com/questions/31096596/why-is-foreach-not-a-function-for-this-object/31096661
Object.keys(props).forEach((k) => {
    var str = " "  + k + " = " + props[k] 
    console.log(str )
    document.write( "<br> " + str  )
});

 