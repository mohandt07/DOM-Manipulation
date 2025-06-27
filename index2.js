// Write your code below:
const listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.fontStyle = "italic";
}
if (listItems.length >= 5) {
    listItems[4].style.color = "blue";
}
