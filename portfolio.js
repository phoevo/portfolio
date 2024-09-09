document.addEventListener("DOMContentLoaded", function(){

    let mid = document.querySelector(".mid");
    let workBtn = document.querySelector(".workBtn");
    let aboutBtn = document.querySelector(".aboutBtn");
    workBtn.addEventListener("click", function(){
        mid.style.transform = "translateX(2000px)";
        mid.style.transition = "700ms";
        setTimeout(() => {
            location.replace("portfolio-work.html")
        }, 200);
        
    })

    aboutBtn.addEventListener("click", function(){
        mid.style.transform = "translateX(-2000px)";
        mid.style.transition = "700ms";
        setTimeout(() => {
            location.replace("portfolio-about.html")
        }, 200);

    })


})


