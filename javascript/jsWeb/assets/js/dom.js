/* algunas cosas que podemos hacer con DOM */

console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.links);
console.log(document.images);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(()=> {
    console.log(document.getSelection().toString());
}, 3000);

document.write("hola que hace desde document write");
document.write("<h2>hola que hace desde document write</h2>");

