import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './assets/styles.css'

// import required modules
import { Navigation } from 'swiper/modules';

export default function Miportafolio() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-slate-50 w-full">
      <div className="mx-auto w-11/12 mt-10">
        {/* Sección de Presentación */}
        <div className="flex flex-col md:flex-row bg-gradient-to-t from-indigo-950 bg-black px-10 py-20 rounded-lg shadow-lg">
          <div className="w-full text-white px-5 md:px-10">
            <h1 className="text-4xl font-bold">Hola, Soy Samuel Vásquez</h1>
            <p className="mt-3 text-md leading-relaxed">
            Soy un desarrollador de software en Bogotá, Colombia, especializado en eCommerce, desarrollo de páginas web y marketing digital. Con una sólida capacidad analítica y un enfoque lógico, me apasiona resolver problemas complejos y crear soluciones tecnológicas efectivas. Mi experiencia en proyectos de tecnología me permite aportar valor real a los equipos y a los resultados de negocio. Estoy siempre en búsqueda de nuevas oportunidades para innovar y crecer en el campo del desarrollo.            </p>
            <div className="flex flex-col items-center mt-10"> {/* Contenedor padre */}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/samuel-alejandro-vasquez-hernandez-133644305/"
                className="mt-10 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all"
              >
                Contáctame
              </a>
            </div>

          </div>

          {/* Contenedor de la imagen con animación */}
          <div
            className="w-full relative mt-5 md:mt-0"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img
              className={`w-32 md:w-40 block mx-auto rounded-full shadow-xl transform transition-transform duration-500 ${hovered ? "scale-105 opacity-40" : ""
                }`}
              src="https://avatars.githubusercontent.com/u/105887697?v=4"
              alt="Foto de Samuel"
            />

            {hovered && (
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center space-y-3 animate-fadeIn">
                  <h2 className="text-md font-bold text-white">Sígueme</h2>
                  <div className="flex space-x-2 justify-center">
                    <a
                      href="https://www.linkedin.com/in/samuel-alejandro-vasquez-hernandez-133644305/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="w-8 h-8 transform hover:scale-110 transition-transform duration-300"
                        src="https://img.icons8.com/color/48/000000/linkedin.png"
                        alt="LinkedIn"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/samuel_v_v/?hl=es-la"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="w-8 h-8 transform hover:scale-110 transition-transform duration-300"
                        src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                        alt="Instagram"
                      />
                    </a>
                    <a
                      href="https://github.com/Vazz2004"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        className="w-8 h-8 transform hover:scale-110 transition-transform duration-300"
                        src="https://img.icons8.com/color/48/000000/github--v1.png"
                        alt="GitHub"
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Nueva Sección "Sobre mí" */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Sobre mí</h2>
          <p className="mt-3 text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Soy un apasionado del desarrollo de software, con una fuerte inclinación por la resolución de problemas a través de la tecnología. Mi objetivo es contribuir a proyectos innovadores, creando soluciones eficientes y escalables. Tengo experiencia en varios lenguajes y frameworks como <strong>JavaScript, React, Node.js y Laravel</strong>. Me encanta trabajar en equipo y siempre estoy dispuesto a aprender nuevas tecnologías.
            <br />
            Además, tengo conocimientos en <strong>marketing digital</strong>, lo que me permite entender mejor cómo la tecnología puede impulsar negocios en el mundo digital.
          </p>
        </div>

        {/* Sección de Servicios */}
        <div className="w-full mt-10 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-5">¿Cómo puedo ayudarte?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Desarrollo Frontend"
              description="Creación de interfaces interactivas y dinámicas con React, HTML, CSS y JavaScript."
            />
            <ServiceCard
              title="Desarrollo Backend"
              description="Implementación de APIs robustas y eficientes utilizando Node.js y Laravel."
            />
            <ServiceCard
              title="Marketing Digital"
              description="Estrategias para aumentar la presencia online a través de técnicas de SEO y campañas digitales."
            />
          </div>
        </div>

        {/* Sección de Proyectos */}
        <div className="w-full mt-10 px-5 md:px-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">
            Proyectos destacados
          </h2>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="flex justify-center w-full">
                <div className="border border-indigo-900 rounded-lg shadow-lg bg-white p-5 mx-auto max-w-md">
                  <h3 className="text-2xl font-bold text-indigo-900 text-center">
                    Tienda online Anvic
                  </h3>
                  <img
                    className="w-full h-auto rounded-t-lg my-3"
                    src="images/anvic.jpg"
                    alt="Sistema de Gestión Veterinaria"
                  />
                  <p className="text-md text-gray-800 text-center">
                    Este es un eCommerce dedicado a la venta de productos tecnológicos y accesorios, diseñado con una interfaz intuitiva y funcional. Utilizo las últimas tecnologías para garantizar una experiencia de usuario fluida y atractiva, integrando sistemas de pago seguros y un catálogo dinámico que permite a los usuarios explorar y adquirir productos fácilmente.
                  </p>
                  <div className="mt-5 text-center">
                    <a href="https://anvicaccesorios.com/" target="_blank" className="bg-indigo-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-800">
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center w-full">
                <div className="border border-indigo-900 rounded-lg shadow-lg bg-white p-5 mx-auto max-w-md">
                  <h3 className="text-2xl font-bold text-indigo-900 text-center">
                    Sistema de Gestión Veterinaria
                  </h3>
                  <img
                    className="w-full h-auto rounded-t-lg my-3"
                    src="images/mcv.jpg"
                    alt="Sistema de Gestión Veterinaria"
                  />
                  <p className="text-md text-gray-800 text-center">
                    Plataforma digital para el cuidado de tus mascotas. Registra y administra los servicios médicos de tus compañeros peludos.
                  </p>
                  <div className="mt-5 text-center">
                    <a href="https://mvcfront.vercel.app/" target="_blank" className="bg-indigo-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-800">
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center w-full">
                <div className="border border-indigo-900 rounded-lg shadow-lg bg-white p-5 mx-auto max-w-md">
                  <h3 className="text-2xl font-bold text-indigo-900 text-center">
                    Constructor de pc
                  </h3>
                  <img
                    className="w-full h-auto rounded-t-lg my-3"
                    src="images/cotizador.jpg"
                    alt="Sistema de Gestión Veterinaria"
                  />
                  <p className="text-md text-gray-800 text-center">
                    Este programa permite ensamblar PCs a medida, ofreciendo una amplia gama de opciones de personalización para adaptarse a las necesidades y preferencias de cada usuario. Desde la selección de componentes hasta la configuración final, cada detalle se puede ajustar para crear un sistema único y optimizado.
                  </p>
                  <div className="mt-5 text-center">
                    <a href="https://www.tecnostaringenieria.com/cotizador-2/" target="_blank" className="bg-indigo-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-800">
                      Ver más
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center w-full">
                  <div className="border border-indigo-900 rounded-lg shadow-lg bg-white p-5 mx-auto max-w-md">
                    <h3 className="text-2xl font-bold text-indigo-900 text-center">
                      Pagina biblioteca
                    </h3>
                    <img
                      className="w-full h-auto rounded-t-lg my-3"
                      src="images/mediacenter.jpg"
                      alt="Sistema de Gestión Veterinaria"
                    />
                    <p className="text-md text-gray-800 text-center">
                      Esta es una página informativa dedicada a la biblioteca de un colegio, diseñada para proporcionar a estudiantes, padres y profesores acceso fácil a recursos educativos. La plataforma incluye catálogos de libros, información sobre eventos y actividades, y herramientas para facilitar la búsqueda y gestión de materiales de estudio.
                    </p>
                    <div className="mt-5 text-center">
                      <a href="https://media.cas.edu.co/" target="_blank" className="bg-indigo-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-800">
                        Ver más
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </SwiperSlide>
          </Swiper>

        </div>

        {/* Habilidades Técnicas */}
        <div className="w-full mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-5">
            Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <SkillItem
              name="HTML"
              logoUrl="images/html.png"
              description="Amplios conocimientos en HTML, permitiéndome crear maquetaciones estructuradas y semánticas. Puedo implementar formularios, tablas y listas, garantizando una buena accesibilidad y usabilidad."
            />
            <SkillItem
              name="CSS"
              logoUrl="images/css.png"
              description="Experiencia en la creación de diseños responsivos utilizando CSS, incluyendo Flexbox y Grid. Soy capaz de aplicar estilos modernos y atractivos, además de animaciones para mejorar la experiencia del usuario."
            />
            <SkillItem
              name="GitHub"
              logoUrl="images/github.png"
              description="Conocimiento sólido de Git y GitHub, incluyendo comandos para gestionar repositorios, realizar 'pull requests', 'push' y 'pull'. Puedo colaborar efectivamente en proyectos de equipo utilizando flujos de trabajo basados en Git."
            />
            <SkillItem
              name="React"
              logoUrl="images/react.png"
              description="Dominio de React con Vite, utilizando hooks para manejar el estado y los efectos secundarios. Experiencia en la creación de componentes reutilizables y en la integración de API mediante Axios, además de implementar autenticación de usuarios con Google."
            />
            <SkillItem
              name="Tailwind CSS"
              logoUrl="images/tailwind.png"
              description="Experiencia en el uso de Tailwind CSS para crear diseños personalizados y adaptativos, aprovechando sus utilidades para aplicar estilos y paletas de colores de forma eficiente y moderna."
            />
            <SkillItem
              name="Firebase"
              logoUrl="images/firebase.png"
              description="Habilidad para gestionar bases de datos en tiempo real y autenticación de usuarios en Firebase. Puedo crear colecciones, actualizar documentos y manejar datos de forma efectiva en aplicaciones web."
            />
            <SkillItem
              name="MySQL"
              logoUrl="images/mysql.jpg"
              description="Experiencia en el diseño, creación y gestión de bases de datos en MySQL. Puedo realizar consultas SQL complejas, gestionar relaciones entre tablas y optimizar el rendimiento de las bases de datos."
            />
            <SkillItem
              name="Node.js"
              logoUrl="images/nodejs.jpg"
              description="Conocimiento en el desarrollo de servidores utilizando Node.js y Express. Soy capaz de construir APIs RESTful, gestionar autenticación, encriptar contraseñas con Bcrypt y aplicar el patrón Modelo-Vista-Controlador (MVC) en mis aplicaciones."
            />
          </div>
        </div>



        {/* Pie de Página */}
        <footer className="bg-indigo-950 text-white py-10 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Sígueme en redes sociales</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/samuel-alejandro-vasquez-hernandez-133644305/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform transform hover:scale-110"
                  >
                    <img
                      className="w-10 h-10"
                      src="https://img.icons8.com/color/48/000000/linkedin.png"
                      alt="LinkedIn"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/samuel_v_v/?hl=es-la"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform transform hover:scale-110"
                  >
                    <img
                      className="w-10 h-10"
                      src="https://img.icons8.com/fluency/48/000000/instagram-new.png"
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="https://github.com/Vazz2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform transform hover:scale-110"
                  >
                    <img
                      className="w-10 h-10"
                      src="https://img.icons8.com/color/48/000000/github--v1.png"
                      alt="GitHub"
                    />
                  </a>
                </div>
              </div>
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Contacto</h3>
                <p className="text-sm">Email: <a href="mailto:samuelvh2022@gmail.com" className="underline">samuelvh2022@gmail.com</a></p>
                <p className="text-sm">Teléfono: <a href="tel:+573213119578" className="underline">+57 (321) 311-95-78</a></p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Sobre mí</h3>
                <p className="text-sm max-w-xs text-center md:text-left">Soy un programador apasionado por la tecnología y el desarrollo web. Me encanta crear soluciones innovadoras y eficaces.</p>
              </div>
            </div>
            <div className="mt-6 border-t border-gray-700 pt-4 text-center">
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} Samuel Vasquez. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

function ServiceCard({ title, description }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg bg-white p-5">
      <h3 className="text-2xl font-bold text-indigo-900">{title}</h3>
      <p className="text-md text-gray-800 mt-2">{description}</p>
    </div>
  );
}

function SkillItem({ name, logoUrl, description }) {
  return (
    <div className="flex flex-col items-center">
      <img src={logoUrl} alt={`${name} logo`} className="w-16 h-16 mb-2" />
      <span className="text-md font-semibold text-gray-700">{name}</span>
      <p className="text-sm text-center text-gray-600 mt-1">{description}</p>
    </div>
  );
}