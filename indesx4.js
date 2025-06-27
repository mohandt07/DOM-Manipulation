// Write the code as shown in the video below:
 const mainHeading = document.querySelector("#main-heading");
 mainHeading.style.textAlign = "Right";

const BasketHeading = document.querySelector("#basket-heading");
BasketHeading.style.color = "brown";

const fruitItems = document.querySelectorAll(".fruits");
for (let i = 0; i < fruitItems.length; i++) {
    fruitItems[i].style.backgroundColor = "gray";
    fruitItems[i].style.margin = "30px";
    fruitItems[i].style.width = "80%";
    fruitItems[i].style.listStyleType = "none";
}

const oddfruitItems = document.querySelectorAll(".fruit:nth-child(odd)");
for (let i = 0; i < oddfruitItems.length; i++) {
    oddfruitItems[i].style.backgroundColor = "lightgray";
    
}

const evenfruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < evenfruitItems.length; i++) {
    evenfruitItems[i].style.backgroundColor = "brown";
    evenfruitItems[i].style.color = "white";

}


