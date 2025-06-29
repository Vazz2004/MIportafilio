import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './assets/styles.css';

// Componentes personalizados
const SectionHeader = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-600 max-w-3xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 z-10"></div>
    <img
      src={project.image}
      alt={project.alt}
      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
      <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
      <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-300"
      >
        Ver proyecto
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  </motion.div>
);

const SkillPill = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between items-center mb-1">
      <span className="font-medium text-gray-800">{skill}</span>
      <span className="text-sm text-gray-600">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-indigo-600 h-2.5 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const TimelineItem = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}
  >
    <div className="order-1 w-5/12"></div>
    <div className="order-1 w-5/12 px-1 py-4">
      <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center mb-2">
          <div className="text-2xl mr-2">{item.icon}</div>
          <h4 className="text-lg font-bold text-gray-800">{item.title || item.name}</h4>
        </div>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <span className="text-xs text-indigo-600">{item.year}</span>
      </div>
    </div>
  </motion.div>
);

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
    <div className="flex items-center mb-4">
      <div className="text-yellow-400 text-2xl">★ ★ ★ ★ ★</div>
    </div>
    <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
    <div className="flex items-center">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full mr-4 object-cover"
      />
      <div>
        <h5 className="font-bold text-gray-900">{testimonial.name}</h5>
        <p className="text-sm text-gray-600">{testimonial.position}</p>
      </div>
    </div>
  </div>
);

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      name: "Tienda online Anvic",
      image: "images/anvic.jpg",
      alt: "Imagen del proyecto Tienda online Anvic",
      description: "eCommerce completo con carrito de compras, pasarela de pagos y panel administrativo. Desarrollado con React, Node.js y MySQL.",
      link: "https://anvicaccesorios.com/",
      tags: ['React', 'Node.js', 'MySQL']
    },
    {
      name: "Sistema de Gestión Veterinaria",
      image: "images/mcv.jpg",
      alt: "Imagen del proyecto Sistema de Gestión Veterinaria",
      description: "Sistema completo para gestión de pacientes, citas y historias clínicas en clínicas veterinarias.",
      link: "https://mvcfront.vercel.app/",
      tags: ['Angular', 'Firebase', 'Tailwind']
    },
    {
      name: "Constructor de PC",
      image: "images/cotizador.jpg",
      alt: "Imagen del proyecto Constructor de PC",
      description: "Herramienta interactiva para ensamblar PCs personalizadas con cálculo de compatibilidad y presupuesto.",
      link: "https://www.tecnostaringenieria.com/cotizador-2/",
      tags: ['JavaScript', 'CSS', 'HTML5']
    },
    {
      name: "Página Biblioteca",
      image: "images/mediacenter.jpg",
      alt: "Imagen del proyecto Página Biblioteca",
      description: "Plataforma digital para gestión de bibliotecas con catálogo en línea y sistema de préstamos.",
      link: "https://media.cas.edu.co/",
      tags: ['React', 'Firebase', 'Material UI']
    }
  ];

  const skills = [
    { name: 'React', level: 90, icon: '⚛️', description: 'Interfaces dinámicas e intuitivas, con hooks y manejo de estado' },
    { name: 'JavaScript', level: 85, icon: '📜', description: 'Manipulación del DOM, lógica interactiva, consumo de APIs' },
    { name: 'Node.js', level: 80, icon: '⚙️', description: 'Backends con Express, rutas, controladores y conexión a bases de datos' },
    { name: 'HTML/CSS', level: 95, icon: '🌐', description: 'Maquetación moderna, responsive design y buenas prácticas semánticas' },
    { name: 'Tailwind CSS', level: 85, icon: '🎨', description: 'Diseños modernos y rápidos, uso eficiente de utilidades' },
    { name: 'Git', level: 80, icon: '🌲', description: 'Control de versiones, manejo de ramas y colaboración en equipo' },
    { name: 'MySQL', level: 75, icon: '💾', description: 'Diseño de bases de datos, relaciones y consultas SQL' },
    { name: 'Angular', level: 70, icon: '🅰️', description: 'Componentes, servicios y routing para aplicaciones web' },
    { name: 'Python', level: 65, icon: '🐍', description: 'Automatización, scripts, manejo de archivos y redes con sockets' }
  ];


  const timelineData = [
    {
      year: 2021,
      icon: "📜",
      title: "Primeros pasos en programación",
      description: "Inicié mi viaje en el desarrollo web aprendiendo HTML, CSS y JavaScript básico."
    },
    {
      year: 2022,
      icon: "💻",
      title: "Desarrollo Frontend",
      description: "Profundicé en React y comencé a construir mis primeros proyectos personales."
    },
    {
      year: 2022,
      icon: "📚",
      title: "Página de biblioteca",
      description: "Mi primer proyecto real para una institución educativa."
    },
    {
      year: 2023,
      icon: "⚙️",
      title: "Aprendizaje Backend",
      description: "Expandí mis habilidades aprendiendo Node.js, Express y bases de datos."
    },
    {
      year: 2023,
      icon: "🛒",
      title: "E-commerce Anvic Store",
      description: "Desarrollé mi primer e-commerce completo con carrito y pasarela de pagos."
    },
    {
      year: 2024,
      icon: "🅰️",
      title: "Explorando Angular",
      description: "Ampliando mi stack de tecnologías con Angular y TypeScript."
    }
  ];

  const testimonials = [
    {
      quote: "Samuel transformó completamente nuestra presencia online. Su trabajo en nuestro e-commerce resultó en un aumento del 40% en ventas.",
      name: "Carlos Méndez",
      position: "CEO, Anvic Accesorios",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "El sistema de gestión que desarrolló para nuestra clínica veterinaria ha optimizado nuestros procesos de manera impresionante.",
      name: "Dra. Laura Gómez",
      position: "Veterinaria Jefe",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeTab));

  return (
    <div className="bg-gray-50">
      {/* Header/Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black shadow-md' : 'py-4 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            href="#"
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600"
          >
            SamuelV.dev
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Inicio', 'Proyectos', 'Habilidades', 'Experiencia', 'Contacto'].map((item) => (
              <motion.a
                key={item}
                whileHover={{ scale: 1.05, color: '#8e55da' }}
                href={`#${item.toLowerCase()}`}
                className="text-gray-50 hover:text-gray-900 font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg"
            >
              <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                {['Inicio', 'Proyectos', 'Habilidades', 'Experiencia', 'Contacto'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-900 hover:text-gray-900 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 pb-20 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Hola, soy <span className="text-indigo-300">Samuel Vásquez</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl"
            >
              Desarrollador Full Stack especializado en crear soluciones digitales impactantes y escalables.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contacto"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-semibold transition-colors shadow-lg"
              >
                Contáctame
              </a>
              <a
                href="#proyectos"
                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-indigo-900 rounded-lg font-semibold transition-colors"
              >
                Ver proyectos
              </a>
            </motion.div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-indigo-500 rounded-full opacity-20 blur-lg"></div>
              <img
                src="https://avatars.githubusercontent.com/u/105887697?v=4"
                alt="Samuel Vásquez"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Sobre mí"
            subtitle="Apasionado por crear soluciones tecnológicas que generen impacto real"
          />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg text-gray-700"
            >
              <p>
                Soy un <strong>desarrollador Full Stack</strong> con sede en Bogotá, Colombia, especializado en construir aplicaciones web modernas y eficientes. Con formación en <strong>Análisis y Desarrollo de Software</strong> del SENA, combino conocimientos técnicos sólidos con una mentalidad orientada a resolver problemas.
              </p>
              <p>
                Mi enfoque va más allá de escribir código; me preocupo por crear <strong>experiencias de usuario excepcionales</strong> y soluciones que agreguen valor real a los negocios. Cuando no estoy programando, me gusta mantenerme actualizado con las últimas tendencias tecnológicas y contribuir a proyectos de código abierto.
              </p>
              <p>
                Actualmente estoy enfocado en profundizar mis conocimientos en <strong>arquitectura de software</strong> y <strong>desarrollo de aplicaciones escalables</strong>, siempre buscando nuevos desafíos que me permitan crecer profesionalmente.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Mis habilidades principales</h3>

              {skills.map((skill, index) => (
                <div key={index} className="flex items-start gap-4 mb-4">
                  <div className="text-2xl">{skill.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">{skill.name}</h4>
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                    <div className="w-full bg-gray-200 h-2 rounded mt-1">
                      <div className="bg-indigo-500 h-2 rounded" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="mt-8">
                <a
                  href="#habilidades"
                  className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                >
                  Ver todas mis habilidades
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Mis Servicios"
            subtitle="Soluciones personalizadas para tus necesidades digitales"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Desarrollo Frontend",
                description: "Interfaces modernas y responsivas con React, Angular o Vue.js, optimizadas para performance y UX.",
                icon: "💻"
              },
              {
                title: "Desarrollo Backend",
                description: "APIs robustas y seguras con Node.js, Express o Laravel, integradas con bases de datos SQL/NoSQL.",
                icon: "⚙️"
              },
              {
                title: "Aplicaciones Web Completas",
                description: "Soluciones full-stack desde cero, con arquitectura escalable y buenas prácticas de desarrollo.",
                icon: "🚀"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Proyectos Destacados"
            subtitle="Algunos de mis trabajos recientes"
          />

          {/* Project Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {['all', 'React', 'Angular', 'Node.js', 'Firebase', 'Tailwind'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === tab ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {tab === 'all' ? 'Todos' : tab}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Vazz2004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg font-medium transition-colors"
            >
              Ver más proyectos en GitHub
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Habilidades Técnicas"
            subtitle="Tecnologías que domino y uso regularmente"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center border border-gray-200"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{skill.level}% dominio</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Mi Trayectoria"
            subtitle="Educación y experiencia profesional"
          />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                </svg>
                Educación
              </h3>

              <div className="space-y-6 border-l-2 border-indigo-200 pl-6">
                {[
                  {
                    title: "Análisis y Desarrollo de Software",
                    institution: "SENA",
                    year: "2022 - 2024",
                    description: "Carrera tecnológica en desarrollo de software con enfoque en aplicaciones web."
                  },
                  {
                    title: "Desarrollo Web con JavaScript",
                    institution: "Platzi",
                    year: "2023",
                    description: "Especialización en desarrollo frontend con React y backend con Node.js."
                  },
                  {
                    title: "Marketing Digital",
                    institution: "Google Actívate",
                    year: "2022",
                    description: "Fundamentos de marketing digital y estrategias para eCommerce."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-indigo-600"></div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{item.institution} · {item.year}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Experiencia
              </h3>

              <div className="space-y-6 border-l-2 border-indigo-200 pl-6">
                {[
                  {
                    title: "Desarrollador Full Stack Freelance",
                    company: "Autónomo",
                    year: "2023 - Presente",
                    description: "Desarrollo de aplicaciones web personalizadas para clientes en diversos sectores."
                  },
                  {
                    title: "Desarrollador Frontend",
                    company: "Anvic Accesorios",
                    year: "2023",
                    description: "Implementación y mantenimiento del eCommerce de la empresa."
                  },
                  {
                    title: "Practicante Desarrollo Web",
                    company: "Colegio Anglo Americano",
                    year: "2022",
                    description: "Desarrollo de la plataforma digital para la biblioteca del colegio."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-7 top-1 w-4 h-4 rounded-full bg-indigo-600"></div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{item.company} · {item.year}</p>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Mi Evolución"
            subtitle="Hitos importantes en mi carrera como desarrollador"
          />

          <div className="relative">
            <div className="hidden md:block absolute h-full w-0.5 bg-indigo-200 left-1/2 transform -translate-x-1/2"></div>

            <div className="space-y-8">
              {timelineData.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Lo que dicen de mi trabajo"
            subtitle="Testimonios de clientes y colegas"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Swiper
              modules={[Navigation, Autoplay, EffectFade]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 5000 }}
              effect={'fade'}
              className="pb-12"
              breakpoints={{
                768: {
                  slidesPerView: 2
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <TestimonialCard testimonial={testimonial} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <SectionHeader
            title="Trabajemos juntos"
            subtitle="¿Tienes un proyecto en mente? Contáctame y hablemos sobre cómo puedo ayudarte."
          />

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white bg-opacity-10 p-8 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a href="mailto:samuelvh2022@gmail.com" className="text-indigo-200 hover:text-white">samuelvh2022@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Teléfono</h4>
                    <a href="tel:+573123456789" className="text-indigo-200 hover:text-white">+57 312 345 6789</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 mr-4 mt-1 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h4 className="font-bold">Ubicación</h4>
                    <p className="text-indigo-200">Bogotá, Colombia</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold mb-4">Sígueme</h4>
                <div className="flex space-x-4">
                  {[
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samuel-alejandro-vasquez-hernandez-133644305/', icon: 'linkedin' },
                    { name: 'GitHub', url: 'https://github.com/Vazz2004', icon: 'github' },
                    { name: 'Instagram', url: 'https://www.instagram.com/samuel_v_v/?hl=es-la', icon: 'instagram' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all"
                      aria-label={social.name}
                    >
                      <img
                        src={`https://img.icons8.com/ios-filled/50/ffffff/${social.icon}.png`}
                        alt={social.name}
                        className="w-5 h-5"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíame un mensaje</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Enviar mensaje
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">SamuelV.dev</a>
              <p className="mt-2 text-sm">Desarrollador Full Stack · Bogotá, Colombia</p>
            </div>

            <div className="flex space-x-6">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/samuel-alejandro-vasquez-hernandez-133644305/', icon: 'linkedin' },
                { name: 'GitHub', url: 'https://github.com/Vazz2004', icon: 'github' },
                { name: 'Instagram', url: 'https://www.instagram.com/samuel_v_v/?hl=es-la', icon: 'instagram' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <img
                    src={`https://img.icons8.com/ios-filled/50/ffffff/${social.icon}.png`}
                    alt={social.name}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Samuel Vásquez. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}