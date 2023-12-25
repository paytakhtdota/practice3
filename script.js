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
document.getElementById("ref-link").setAttribute("class","red-text2");
 console.log(result);
 document.getElementById("ref-link").classList.add("new-class");
 document.getElementById("ref-link").classList.remove("new-class");;
 document.getElementById("ref-link").classList.remove("red-text2");
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
// document.querySelector("img").requestFullscreen();
// برای ایجاد شرتکات برای المنت ها از پروپرتی accessKey استفاده میکنم
document.querySelector("#myform input").accessKey = "i";
document.querySelector("#ref-link").accessKey = "l";
// برای استفاده از کلید شرتکات ها باید از Aly+key استفاده کرد

result = document.querySelector("#ref-link").attributes;
console.log(result);

// همه ی اتریبیوت ها نود هستند
// در این جا سه پراپرتی هست که فقط برای نود های پراپرتی قابل استفاده است

console.log(document.querySelector("#ref-link").attributes[1].name);
console.log(document.querySelector("#ref-link").attributes[1].value);
console.log(document.querySelector("#ref-link").attributes[1].ownerElement);
// دریافت نود اتریبیوت با متود getNamedItem
console.log(document.querySelector("#ref-link").attributes.getNamedItem("href"));

document.querySelector("#ref-link").removeAttribute("class"); // با این متود می توان یک اتریبیوت را حذف کرد removeAttribute
result = document.querySelector("#ref-link").attributes;// 
console.error(result , `\n------------------------`);


//مثالی زیبا از استفاده از متود append برای اضافه کردن فرزند به تگ های متفاوت
document.addEventListener('DOMContentLoaded', function () { // این یک اوند لیسنر است کل کد داخل این اونت لیسنر قرار گرفته است برای این مطمئن شود این کد قبل از لود شدن کامل فایل اجتمل اجرا نخواهد شد
    const parentElement = document.getElementById('parent');
  
    // اضافه کردن چند المان به انتهای المان والد
    parentElement.append(
      createChildElement("1 added dummy element"),
      createChildElement("2 added dummy element"),
      createChildElement("3 added dummy element")
    );
  
    function createChildElement(content) {  //یک فانکشن برای ساخت سریع المنت و گذاشتن یک تکس داخل این المنت 
      const childElement = document.createElement('div');
      childElement.textContent = content;
      return childElement;
    }
  });

  console.log("______________________")
