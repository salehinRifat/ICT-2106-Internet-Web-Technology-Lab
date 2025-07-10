let paraID = document.getElementById("paraID");
let removeID = document.getElementById("removeStyle");
function addStyle(){
   paraID.classList.toggle("paraStyle");
}
removeID.addEventListener("click", removeStyle);
function removeStyle(){
    paraID.classList.remove("paraStyle");
}
function nextPage(){
    location.href = "templates/next.html";
}
function prevPage(){
    location.href = "../index.html";
}