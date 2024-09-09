document.addEventListener("DOMContentLoaded", function(){

    let mid = document.querySelector(".mid");
    let workBtn = document.querySelector(".workBtn");
    workBtn.addEventListener("click", function(){
        mid.style.transform = "translateX(2000px)";
        mid.style.transition = "500ms";
    })



})
