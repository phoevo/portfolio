document.addEventListener("DOMContentLoaded", function(){

    let mid = document.querySelector(".mid");
    let workBtn = document.querySelector(".workBtn");
    let aboutBtn = document.querySelector(".aboutBtn");
    let linkedinBtn = document.querySelector("#linkedin");
    let emailBtn = document.querySelector("#email");
    let githubBtn = document.querySelector("#github");

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


    linkedinBtn.addEventListener("mouseover", Lhover, false);
    linkedinBtn.addEventListener("mouseout", LhoverAfter, false);
    
    function Lhover(){ 
        linkedinBtn.className = "fa-solid fa-arrow-up-right-from-square";
        linkedinBtn.style.width = "80px";
        linkedinBtn.style.transition = "300ms";
    }

    function LhoverAfter(){  
        linkedinBtn.className = "fa-brands fa-linkedin";
        linkedinBtn.style.width = "50px";
    }   
  


    emailBtn.addEventListener("mouseover", Ehover, false);
    emailBtn.addEventListener("mouseout", EhoverAfter, false);
    
    function Ehover(){ 
        emailBtn.className = "fa-solid fa-envelope-open";
        emailBtn.style.height = "80px";
        emailBtn.style.transition = "200ms";
    }

    function EhoverAfter(){  
        emailBtn.className = "fa-solid fa-envelope";
        emailBtn.style.height = "50px";
    }   


    githubBtn.addEventListener("mouseover", Ghover, false);
    githubBtn.addEventListener("mouseout", GhoverAfter, false);
    
    function Ghover(){ 
        githubBtn.className = "fa-brands fa-github";
        githubBtn.style.height = "80px";
        githubBtn.style.width = "80px";
        githubBtn.style.transition = "200ms";
    }

    function GhoverAfter(){  
        githubBtn.className = "fa-brands fa-github";
        githubBtn.style.height = "50px";
        githubBtn.style.width = "50px";
    }   





        /* emailBtn.className.replace = "fa-solid fa-envelope-open";
        if(emailBtn.className = "fa-solid fa-envelope"){
           
        }
        else{emailBtn.className = "fa-solid fa-envelope"}
    })

   /*-------TESTING--------
   window.addEventListener('scroll', function(){
        linkedinBtn.animate([
            {transform: 'translateY(50px)'},
            {transform: 'translateY(0px)'}
        ], {
            duration: 300,
          });
          
        emailBtn.animate([
            {transform: 'translateY(70px)'},
            {transform: 'translateY(0px)'}
        ], {
            duration: 300,
          });
   }) 
          */

    
        
})


