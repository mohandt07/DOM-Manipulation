// Write your code below:
const fruits = document.getElementsByClassName("fruit");
for (let i = 0; i < fruits.length; i++){
    fruits[i].style.fontWeight = "bold";
}
if (fruits.length >= 3) {
    fruits[2].style.backgroundColor="yellow";
}
