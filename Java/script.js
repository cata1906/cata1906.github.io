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
document.getElementById("Inicio").addEventListener("click", borrar_menu);
document.getElementById("Planes").addEventListener("click", borrar_menu);
document.getElementById("Servici").addEventListener("click", borrar_menu);
document.getElementById("Nosot").addEventListener("click", borrar_menu);
document.getElementById("App").addEventListener("click", borrar_menu);
document.getElementById("Planes").addEventListener("click", borrar_menu);
document.getElementById("Contactanos").addEventListener("click", borrar_menu);



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

function borrar_menu(){
    
    menu.classList.remove('moverconte');
    body.classList.remove('moverconte');
    nav.classList.remove('move_nav');
   
}

let pagina_actual = "#Pagina_Inicio";
document.querySelectorAll("boot").forEach((evento)=> {
    evento.addEventListener("click", (e)=>{
        
        document.querySelector(pagina_actual).style.
        animate = `animacionSalir 300s ease forwarsd 0s`

        pagina_actual="#Pagina_"+e.target.id
        document.querySelector(pagina_actual).style.
        animate =`animacionEntrar 300s ease forwarsd 20s`
    })
})

/*$(document).ready(function(){

    var ir_a=$(".desplazar");

    ir_a.click(function(e){
        e.preventDefault();
        $("body. html").animate({
            screenTop: $(this.hash).offset().top
        },1000
        );
    })

})*/
