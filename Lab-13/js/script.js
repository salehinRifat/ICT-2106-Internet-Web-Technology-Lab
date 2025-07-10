let paraID = document.getElementById("paraID");
function addStyle(){
   paraID.classList.add("paraStyle");
}
function removeStyle(){
    paraID.classList.remove("paraStyle");
}
function nextPage(){
    location.href = "templates/next.html";
}
function prevPage(){
    location.href = "../index.html";
}