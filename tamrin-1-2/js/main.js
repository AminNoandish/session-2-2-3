var list = ['Pencil', 'pen', 'ruler', 'pencil case', 'eraser'];
var name = prompt("What product do you need? : pencil, pen, ruler, pencil case, eraser");
console.log(list.indexOf(name));
var a = list.indexOf(name);
var b = (a == -1) ? alert(' Not_Available') : alert(name + ' Available');