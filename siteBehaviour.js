console.log("Loaded");
var scrollLink = document.getElementById('scrollDown');
scrollLink.onclick = scrollToContent;
var scrollShop = document.getElementById('scrollShop');
scrollShop.onclick = scrollToContent;

function scrollToContent() {
    var objDiv = document.getElementById("content");
    objDiv.scrollIntoView(true);
}

function scrollToShop() {
    var objDiv = document.getElementById("shopSection");
    objDiv.scrollIntoView(true);
}