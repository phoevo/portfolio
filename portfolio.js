document.addEventListener("DOMContentLoaded", function(){

    let mid = document.querySelector(".mid");
    let workBtn = document.querySelector(".workBtn");
    let aboutBtn = document.querySelector(".aboutBtn");
    let linkedinBtn = document.querySelector("#linkedin");
    let emailBtn = document.querySelector("#email");
    let githubBtn = document.querySelector("#github");

    let livePreviewBtn = document.querySelector("#live-preview-rps");
    let viewCodeBtn = document.querySelector("#view-code-rps");

    let livePreviewDashBtn = document.querySelector("#live-preview-dashboard");
    let viewCodeDashBtn = document.querySelector("#view-code-dashboard");




    workBtn.addEventListener("click", function(){
        linkedinBtn.style.transform = "translateX(600px)";
        emailBtn.style.transform = "translateX(600px)";
        githubBtn.style.transform = "translateX(600px)";
        mid.style.transform = "translateX(2000px)";

        linkedinBtn.style.transition= "300ms";
        emailBtn.style.transition = "300ms";
        githubBtn.style.transition="300ms";
        mid.style.transition = "700ms";
        setTimeout(() => {
            location.replace("portfolio-work.html")
        }, 200);
    })

    aboutBtn.addEventListener("click", function(){
        linkedinBtn.style.transform = "translateX(-2000px)";
        emailBtn.style.transform = "translateX(-2000px)";
        githubBtn.style.transform = "translateX(-2000px)";
        mid.style.transform = "translateX(-2000px)";

        linkedinBtn.style.transition= "300ms";
        emailBtn.style.transition = "300ms";
        githubBtn.style.transition="300ms";
        mid.style.transition = "700ms";
        setTimeout(() => {
            location.replace("portfolio-about.html")
        }, 200);

    })


    linkedinBtn.addEventListener("mouseover", Lhover, false);
    linkedinBtn.addEventListener("mouseout", LhoverAfter, false);
    
    function Lhover(){ 
        linkedinBtn.className = "fa-solid fa-arrow-up-right-from-square";
        linkedinBtn.style.width = "70px";
        linkedinBtn.style.transition = "200ms";
    }

    function LhoverAfter(){  
        linkedinBtn.className = "fa-brands fa-linkedin";
        linkedinBtn.style.width = "50px";
    }   
  


    emailBtn.addEventListener("mouseover", Ehover, false);
    emailBtn.addEventListener("mouseout", EhoverAfter, false);
    
    function Ehover(){ 
        emailBtn.className = "fa-solid fa-envelope-open";
        emailBtn.style.height = "70px";
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
        githubBtn.style.height = "70px";
        githubBtn.style.width = "70px";
        githubBtn.style.transition = "200ms";
        
    }

    function GhoverAfter(){  
        githubBtn.className = "fa-brands fa-github";
        githubBtn.style.height = "50px";
        githubBtn.style.width = "50px";
    }   


    livePreviewBtn.addEventListener("click", function(){
        window.open("/projects/rock-paper-scissors/rock-paper-scissors/rock-paper-scissors.html")
    })
    viewCodeBtn.addEventListener("click", function(){
        window.open("https://github.com/phoevo/rock-paper-scissors")
    })

    
    livePreviewDashBtn.addEventListener("click", function(){
        window.open("/projects/dashboard/dashboard.html")
    })
    viewCodeDashBtn.addEventListener("click", function(){
        window.open("https://github.com/phoevo/dashboard")
    })




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


