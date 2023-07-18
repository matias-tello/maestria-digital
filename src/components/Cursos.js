import React,{useEffect} from "react";
import "./cursos.css";
import aprendetodoemprendimiento from "./imagenes/aprende de todo sobre emprendimiento.png";
import bolsanovatos from "./imagenes/bolsa para novatos.png";
import cursoprogramacion from "./imagenes/curso programacion.png";
import desarrollowebcompleto from "./imagenes/desarrollo web completo.png";
import desarrollowebvendedor from "./imagenes/desarrollo web vendedores.png";
import webyprogramacion from "./imagenes/desarrollo web y programacion.png";
import emprendimiento from "./imagenes/emprendimiento.png";
import expertodesarrolloweb from "./imagenes/experto en desarrollo web.png";
import fundamentoprogramacion from "./imagenes/fundamentos de programacion.png";
import instagrammarketing from "./imagenes/instagram marketing.png";
import jsavanzado from "./imagenes/javascript avanzado.png";
import marketingafiliados from "./imagenes/marketing digital afiliados.png";
import marketingdigital from "./imagenes/marketing digital.png";
import marketingdigital2 from "./imagenes/marketing digital2.png";
import marketingredes from "./imagenes/marketing en redes sociales.png";
import marketingredessociales from "./imagenes/marketing redes.png";
import podcastmarketing from "./imagenes/podcast marketing.png";
import programacion0 from "./imagenes/programacion desde 0.png";
import programacionweb from "./imagenes/programacion web.png";
import webbasicoavanzado from "./imagenes/web de basico a avanzado.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS


function Cursos() {
 
const Productos = [
  {
    titulo:"Todo sobre emprendimiento",
    imgUrl: aprendetodoemprendimiento,
    id: 1,
    descripcion:
      "En este curso aprenderás de forma sencilla, personalizada y de por vida los procesos y conocimientos necesarios para que tu negocio, emprendimiento o marca personal de una vez por toda la rompa de ahora en adelante.",
    link:"https://go.hotmart.com/O84785259F"   
    
    },
  {
    titulo:"Invertir en la bolsa",
    imgUrl: bolsanovatos,       
    id: 2,
    descripcion:
      "Es un curso esencial que te brinda los conocimientos fundamentales y estrategias clave para comenzar en el mundo de la inversión en bolsa. Aprende de expertos en el campo y descubre cómo tomar decisiones informadas y maximizar tus oportunidades de inversión. ¡Inicia tu viaje hacia el éxito financiero ahora!",
      link:"https://go.hotmart.com/L84785124N"  
  },
  {
    titulo:"Programacion",
    imgUrl: cursoprogramacion,
    id: 3,
    descripcion:
      "¡Ingresa al mundo de la programación! Desarrolla el pensamiento lógico detrás de las aplicaciones, comprende cómo darle instrucciones a tu computadora, crea algoritmos y aplica soluciones para comenzar a programar desde cero. Si quieres convertirte en desarrollador, este curso te enseñará los fundamentos para crear software en cualquier lenguaje.",
      link:"https://go.hotmart.com/A84784517D?dp=1"  
  },
  {
    titulo:"Desarrollo web",
    imgUrl: desarrollowebcompleto,
    id: 4,
    descripcion:
      "Este curso está integrado por MÁS DE 90 SECCIONES, 797 CLASES EN VIDEOS y PDF explicativos que te guiarán para ingresar en el fantástico mundo de la programación web. Aprende a dominar cada uno de los lenguajes y tecnologías esenciales en el desarrollo web. Obtén habilidades sólidas en HTML5 para estructurar tu contenido, CSS3 para darle estilo, JS para agregar interactividad, AJAX para comunicarte con servidores, PHP para el lado del servidor y MySQL para la gestión de bases de datos.",
      link:"https://go.hotmart.com/I84784624W?dp=1"  
  },
  {
    titulo:"Desarrollo web para vendedores",
    imgUrl: desarrollowebvendedor,
    id: 5,
    descripcion:
      "Con el Master Class DESARROLLO WEB PARA VENDEDORES, aprenderás las bases para utilizar HTML, CSS y JAVASCRIPT para crear páginas de venta efectivas que conviertan a tus prospectos en clientes.",
      link:"https://go.hotmart.com/A84784714M?dp=1"  
  
    },
  {
    titulo:"Tendencia sobre programacion",
    imgUrl: webyprogramacion,
    id: 6,
    descripcion:
      "En este ebook, encontrarás información detallada y clara sobre las últimas tendencias y técnicas de programación para el desarrollo web. Aprenderás a diseñar y construir aplicaciones web dinámicas, usando los lenguajes de programación más populares en el mercado.",
      link:"https://go.hotmart.com/V84784690L?dp=1"  
  },
  {
    titulo:"Emprendimiento",
    imgUrl: emprendimiento,
    id: 7,
    descripcion:
      "En este contenido quiero compartir contigo algo muy importante que a la mayoría de personas nos ha sucedido sobre todo al comienzo de nuestros emprendimientos, es que nos cuesta conseguir clientes y aparte los pocos clientes que vamos consiguiendo al principio quieren que bajemos nuestros precios entonces nos vemos en una disyuntiva de bajar el precio o perder el cliente y como no tengo mucho pues por lo menos lo agarro para no quedarme sin nada y así vamos bajando el precio devaluando nuestro conocimiento, nuestro trabajo, nuestro esfuerzo.",
      link:"https://go.hotmart.com/S84785232T"  
  },
  {
    titulo:"Experto en desarrollo web",
    imgUrl: expertodesarrolloweb,
    id: 8,
    descripcion:
      "¡Aprende los fundamentos de la Ingeniería de Software para aplicaciones web! Este curso te enseñará HTML, CSS y Bootstrap para crear y diseñar páginas web. También explorarás lenguajes de programación como TypeScript y frameworks como Angular para agregar funcionalidades dinámicas a tus sitios. ¡Sumérgete en el fascinante mundo de la programación web y desata tu potencial!",
      link:"https://go.hotmart.com/D84784752G?dp=1"  
  },
  {
    titulo:"Fundamentos de la programacion",
    imgUrl: fundamentoprogramacion,
    id: 9,
    descripcion:
      "El curso pretende desarrollar el pensamiento lógico, introducir el uso de algoritmos y realizar programaciones básicas en HTML. Al terminar este curso, podrás aprender la lógica de la programación y el uso de algoritmos.",
      link:"https://go.hotmart.com/C84784583T?dp=1"  
  },
  {
    titulo:"Instagram marketing",
    imgUrl: instagrammarketing,
    id: 10,
    descripcion:
      "Con esta guía vas a conocer los 5 consejos más sencillos pero poderosos para crear o mejorar tu perfil de Instagram de negocios y así empezar a comercializar tus productos y/o servicios para que miles de personas te conozcan y así tus ventas se eleven.",
      link:"https://go.hotmart.com/J84784903N?dp=1"  
  },
  {
    titulo:"Javascript avanzado",
    imgUrl: jsavanzado,
    id: 11,
    descripcion:
      "En este curso, explorarás los aspectos más profundos de JavaScript y ampliarás tus habilidades de programación. Aprenderás a manipular el DOM, trabajar con APIs, programar de forma asíncrona y utilizar patrones de diseño para construir aplicaciones robustas y eficientes.",
      link:"https://go.hotmart.com/I84784763T"  
  },
  {
    titulo:"Marketing de afiliados",
    imgUrl: marketingafiliados,
    id: 12,
    descripcion:
      "Métodos, estrategias, planes de acción, herramientas dentro de una plataforma ya hecha para generar ingresos ilimitados. Solo aplicando redes o netamente aprendes y aplicas los cursos de marketing digital. Te capacitas mediante todos los cursos que obtienes y generas o emprendes un nuevo negocio sea físico o digital.",
      link:"https://go.hotmart.com/S84785189N?dp=1"      
    },
  {
    titulo:"Marketing digital",
    imgUrl: marketingdigital,
    id: 13,
    descripcion:
      "El marketing digital es el componente de la mercadotecnia que utiliza internet y tecnologías digitales en línea, como computadoras de escritorio, teléfonos móviles y otras plataformas y medios digitales para promover productos y servicios.",
      link:"https://go.hotmart.com/Y84785171T?dp=1"  
    },
  {
    titulo:"Marketing digital",
    imgUrl: marketingdigital2,
    id: 14,
    descripcion:
      "Te enseñaré a trabajar en Marketing Digital, voy a dominar las redes sociales. Te mostraré cómo crear un negocio en línea o hacerlo funcionar si ya tienes uno y muchas cosas más.",
      link:"https://go.hotmart.com/R84785044U?dp=1"  
    },
  {
    titulo:"Marketing de redes sociales",
    imgUrl: marketingredes,
    id: 15,
    descripcion:
      "Dentro de este libro electrónico, descubrirás los temas sobre cómo crear tu perfil de sitio web de redes sociales, sitios web de redes sociales populares, si te unes a un sitio web de redes sociales, por qué los sitios de redes sociales son tan populares, qué no poner en tu perfil de red social, qué son las redes sociales y el uso de sitios web.",
      link:"https://go.hotmart.com/H84785458B?dp=1"  
  },
  {
    titulo:"Marketing de redes sociales",
    imgUrl: marketingredessociales,
    id: 16,
    descripcion:
      "En este curso de marketing digital aprenderás a aplicar una serie de estrategias orientadas a la comercialización de una marca, ventas de productos o servicios mediante el uso de las redes sociales y el Internet. Es fácil de aprender, solo necesitas ganas de triunfar en el mundo digital.",
      link:"https://go.hotmart.com/S84785489L?dp=1"  
    },
  {
    titulo:"Podcast de marketing",
    imgUrl: podcastmarketing,
    id: 17,
    descripcion:
      "Un buen podcast puede brindarte diversas oportunidades y beneficios. Por un lado, te permite desarrollar un plan bien diseñado y estructurado para tu contenido. Además, recibirás consejos sobre cómo hacer crecer tu audiencia utilizando diferentes plataformas para difundir tu podcast. Al embarcarte en este formato, también tendrás la posibilidad de seguir un programa educativo de tres pasos que te enseñará cómo diseñar, producir y publicar tu propio podcast. Esto te permitirá crear tu propia comunidad digital y conectarte con personas interesadas en tus contenidos.",
      link:"https://go.hotmart.com/N84784918J"  
  },
  {
    titulo:"Programacion desde 0",
    imgUrl: programacion0,
    id: 18,
    descripcion:
      "Aprende los fundamentos de la programación para empezar a introducirte en este nuevo mundo, especialmente diseñado para quienes quieren arrancar desde 0 y entender cómo funciona todo. Inicia con la lectura de nuestro libro y comienza a abrirte fronteras laborales.",
      link:"https://go.hotmart.com/U84784549J?dp=1"  
  },
  {
    titulo:"Programacion web",
    imgUrl: programacionweb,
    id: 19,
    descripcion:
      "Crea sitios aprovechando las características de las plataformas web para satisfacer a los usuarios, planea y genera la estructura técnica y el contenido multimedia audiovisual (imágenes, audio y video) que permita cumplir con los objetivos y requerimientos derivados del análisis de las necesidades de tu cliente, tanto con fines lucrativos (negocios) como informativos. Verifica la funcionalidad, accesibilidad y usabilidad del sitio web y registra tus observaciones para analizar y detectar áreas de oportunidad en implementación de mejoras y correcciones. Vigila aspectos básicos de la seguridad de la información en la interacción de los usuarios con el contenido del portal.",
      link:"https://go.hotmart.com/N84784494E?dp=1"  
  }
];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="cont-padre">
      <h1>TU PUERTA HACIA EL EXITO</h1>
      <div className="cont-todos-cursos">
        {Productos.map((curso, item) => (
          <div key={curso.id} className="cont-curso" data-aos="flip-up" >
            <h2 data-aos="flip-up">{curso.titulo}</h2>
            <img src={curso.imgUrl} alt="" className="img-curso"   />
            <p className="texto-curso">
              {curso.descripcion}
            </p>
            <button>
              <a href={curso.link}>Comprar</a>
            </button>
          </div>
        ))}
      </div>
      <footer>
        <p className="texto-footer">
          © 2023 Maestría Digital, Todos los derechos reservados. (Prohibida la reproducción total o parcial).<br/>
          Este sitio participa en el Programa de Afiliados de Hotmart, un programa diseñado para proporcionar un medio
          de ingresos a los sitios web mediante la inclusión de enlaces a productos y cursos.
        </p>
      </footer>
    </div>
  );
}

export default Cursos;
