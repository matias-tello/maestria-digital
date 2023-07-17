import React from "react";
import  './hero.css';
import imgHero from './img-hero2.avif'
import NavBar from "./NavBar";


function Hero(){

return(
   
<section id="hero">

 <NavBar/>

   

        <div className="cont-hero">

            
                       <img src={imgHero} className="img-hero" />

                    <div className="title">

                            <h1>Descubre los Mejores Cursos y Libros en Línea para Superar tus Límites</h1>
                            <span>Potencia tu Conocimiento, Desarrolla Habilidades de Alto Nivel y Conviértete en un Experto en tu Campo</span>

                    </div> 


        </div>




</section>


)

}



export default Hero;



