
let navtoggle = document.querySelector('.nav-toggle');
let sildedar = document.querySelector('.sildedar');

navtoggle.addEventListener("click",function(){
    if(navtoggle.firstElementChild.classList.contains("fa-bars"))
    {
        navtoggle.firstElementChild.classList.replace("fa-bars", "fa-times");
    }
    else
    {
        navtoggle.firstElementChild.classList.replace("fa-times","fa-bars");
    }
    sildedar.classList.toggle("show_sidebar")
   
})

