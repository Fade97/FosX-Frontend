console.log("Loaded");
var scrollLink = document.getElementById('scrollDown');
scrollLink.onclick = showFoo;

function showFoo() {
    var objDiv = document.getElementById("content");
    objDiv.scrollIntoView(true);
}