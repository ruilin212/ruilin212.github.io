let myHeading = document.querySelector("h1")
myHeading.textContent = "Hello World!"

let myImage = document.querySelector("img");
myImage.onclick = function() {
let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/output.jpeg") {
    myImage.setAttribute("src", "images/output.gif");
  } else {
    myImage.setAttribute("src", "images/output.jpeg");
  }
}


let myButton = document.querySelector("button")

function setUseName() {
    let myName = prompt("输入你的名字");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello " + localStorage.getItem("name");
}

if (localStorage.getItem("name") == null) {
    setUseName();
}else {
    myHeading.textContent = "Hello " + localStorage.getItem("name");
}

myButton.onclick = function () {
    setUseName();
}