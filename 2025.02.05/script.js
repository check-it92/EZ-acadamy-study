// console.log(document.querySelectorAll("p")[0]);

const newP = document.createElement("p");
const textNode = document.createTextNode("TypeScript");

newP.appendChild(textNode);
document.body.appendChild(newP);
