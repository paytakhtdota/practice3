const idToDoList = document.getElementById("to-do-list");
const classToDoItem = document.getElementsByClassName("to-do-item");
const classTitle = document.getElementsByClassName("title");
const tagNamesList = document.getElementsByTagName("li");

console.log(tagNamesList);   //بین اجتمل کالکشن و آرایه تفاوت وجود دارد
console.log(Array.from(tagNamesList)); // شما نمی توانید از فوریچ برای اجتمل کالکشن  استفاده کنید پس باید آن را با یان متود به یک آرایه تبدیل کنید

Array.from(tagNamesList).forEach(element => {
    console.log(element);
});
 
let htmlDoc = document.childNodes[1];
console.log(htmlDoc);
let myBody = htmlDoc.childNodes[2];

console.log(myBody.children); //تمام االمنت های که فرزند بادی است 
let mainTag = myBody.children[1]; // انتخاب تگ مین و قرار دادنش در مقدار 
console.log(mainTag);

let partentNodeOfListid = idToDoList.parentNode;
console.log(partentNodeOfListid);

let partentElementOfListid = idToDoList.parentElement;
console.log(partentElementOfListid);


console.log("---------------------");

// چطور نودهای هم سطح (برادران) یک نود را پیدا کنیم
let result = document.querySelector("#to-do-list").parentNode;
console.log(result);

result = document.querySelector("#to-do-list").parentNode.children;
console.log(result);

result = document.querySelector("#to-do-list").parentNode.childNodes;
console.log(result);

result = document.querySelector("#to-do-list").nextSibling;
console.log(result);

result = document.querySelector("#to-do-list").previousSibling;
console.log(result);

result = document.querySelector("#to-do-list").nextElementSibling;
console.log(result);

result = document.querySelector("#to-do-list").previousElementSibling;
console.log(result);
console.log("---------------------");
// چطور به یک تگ اتریبیوت اضافه کنیم
 let att =document.createAttribute("target");
 att.value = "_self";
 document.getElementById("ref-link").setAttributeNode(att);

 // به یک تگ اتریبیوت اضافه کنیم

 att = document.createAttribute("calss");
 att.value = "red-text";
document.getElementById("ref-link").setAttributeNode(att);
document.getElementById("ref-link").setAttribute("class","red-text");
 console.log(result);
 document.getElementById("ref-link").classList.add("new-class");
 document.getElementById("ref-link").classList.remove("new-class");
 console.log("---------------------");
 // ایجاد یک تگ جدید
let newLi = document.createElement("li");
let newSpan = document.createElement("span");
let liText = document.createTextNode("dummy item five");
newLi.setAttribute("class","to-do-item");
newSpan.setAttribute("class","to-do-span");
newLi.appendChild(newSpan);
newSpan.appendChild(liText);
document.querySelector(".to-do-section ul").appendChild(newLi);
console.log(document.querySelector("ul").tagName); // نام تگ را مشخص می کند
console.log(document.querySelector("ul").matches("a")); // چک می کند که سلکتور با مقداری که میخواهید مچ است یا نه
console.log(document.querySelector("ul").matches("#to-do-list"));
console.log(document.querySelector("img"));
//از متود requestFullscreen() می توان برای فول اسکرین کردن المنت ها استفاده کرد


