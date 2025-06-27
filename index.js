// Write your code below:

const mainHeading = document.getElementById("main-heading");
mainHeading.textContent = "Fruit World";
mainHeading.style.color = "orange";
const header = document.getElementById("header");
header.style.backgroundColor = "green";
header.style.borderBottom = "4px solid orange";
document.getElementById("basket-heading").style.color = "green";
const para = document.createElement("p");
para.textContent = "Please visit us again";
document.getElementById("thanks").appendChild(para);
