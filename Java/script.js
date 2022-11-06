window.onscroll = function(){
    /*almacena los datos cuando baja*/ 
    scrool=document.documentElement.scrollTop;

    header=document.getElementById("header");

    if (scrool>20) {
        header.classList.add('nav_mod');
    }else if (scrool <20) {
        header.classList.remove('nav_mod');
    }
}

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);


menu = document.getElementById("header");
body=document.getElementById("container_all");
nav = document.getElementById("nav");

function mostrar_menu(){
    
    menu.classList.toggle('moverconte');
    body.classList.toggle('moverconte');
    nav.classList.toggle('move_nav');
   
}

window.addEventListener("resize", function(){

    if(window.innerWidth > 760){
        menu.classList.remove('moverconte');
        body.classList.remove('moverconte');
        nav.classList.remove('move_nav');
    }

})

