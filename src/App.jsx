import { useState } from "react";

export default function Miportafolio() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="bg-slate-50 w-full">
      <div className="mx-auto w-11/12 mt-10">
        <div className="flex bg-gradient-to-t from-indigo-950 bg-black px-10 py-40 rounded-lg">
          <div className="w-full mt-5 text-white px-10">
            <h1 className="text-5xl">Hola!! soy samuel vasquez</h1>
            <p className="mt-5"> Soy Samuel Vásquez, estudiante de 20 años de análisis y desarrollo de software en Bogotá, Colombia, con experiencia en marketing digital. Mi fuerte lógica y capacidad analítica, combinadas con mi pasión por estar al tanto de las últimas tendencias, me hacen un candidato ideal para el puesto de investigador. Estoy comprometido con la excelencia y sé cómo mantener la mente fría mientras conservo un corazón cálido para tomar decisiones informadas y creativas. ¡Estoy emocionado por la oportunidad de contribuir a su equipo! </p>
            <button className="mt-5 bg-white text-black px-5 py-3 rounded-sm hover:bg-slate-200">Sobre mi</button>
          </div>
          <div className={`w-full ${hovered ? 'hover:bg-gradient-to-t from-indigo-800 hover:scale-105 hover:transition-all hover:rounded-xl' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img className={`w-4/12 block mx-auto rounded-full`} src="https://avatars.githubusercontent.com/u/105887697?v=4" alt="" />
            <div className="flex justify-around">
              <img className={`w-16 block ${hovered ? 'opacity-45 w-44 -m-20' : ''} `} src="https://media.tenor.com/dPsOXgYjb30AAAAi/pixel-pixelart.gif" alt="" />
            </div>
            <div className="w-full">
              <div className="flex justify-center">
                <p className={`text-white bg-indigo-500 p-2 rounded-sm ${hovered ? 'hidden' :''} `}>Atrévete a acercarte, humano.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-ful bg-blackl mt-20  bg-gradient-to-t from-indigo-950 bg-black px-10 py-40 rounded-lg text-white">
          <h1 className="text-white text-5xl" >Mis proyectos destacados</h1>
          <div className="flex">
            <div className="w-full mt-5 border p-2 rounded-lg">
              <h3 className="text text-3xl" >Sistema de gestion veterinaria</h3>
              <img src="" alt="" />
              <p>Este es una app web que permite registrar tus mascota y hacer gestion de sus servicios medicos</p>
              <button>Entrar</button>
            </div>

            <div className="w-full mx-5 mt-5 border p-2 rounded-lg">
              <h3>Anvic tienda onoline de productos</h3>
              <img src="" alt="" />
              <p>Este es un e-comerce online que esta en desarrollo</p>
              <button>Entrar</button>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1>Mis hablilidades tecnicas</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nisi quisquam odio est, nemo rem aperiam! Consequatur corrupti quia delectus, dolore inventore odit vel pariatur obcaecati exercitationem, praesentium, unde dolorum?</p>
          <div className="flex">
            <div className="w-full">
              <img src="" alt="" />
              <p>HTML</p>
            </div>
            <div className="w-full">
              <img src="" alt="" />
              <p>CSS</p>
            </div>
            <div className="w-full">
              <img src="" alt="" />
              <p>git hub</p>
            </div>
            <div className="w-full">
              <img src="" alt="" />
              <p>React</p>
            </div>
            <div className="w-full">
              <img src="" alt="" />
              <p>Tailwind css</p>
            </div>
            <div className="w-full">
              <img src="" alt="" />
              <p>Firabase</p>
            </div>
            <div className="w-full">
              <img src="" alt="" />
              <p>Mysql</p>
            </div>
            <div className="w-full">
              <img src="" alt="" />
              <p>node.jsl</p>
            </div>
            <div className="w-full">
              <img src="" alt="" />
              <p>node.jsl</p>
            </div>
          </div>
          <div className="w-full">
            <div className="flex">
              <div className="articulo">
                <h1>Mi blog</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque beatae sit iure at libero esse itaque eveniet facilis, aspernatur eaque numquam? Officia alias dolorum aut nihil cum veniam, similique fuga?</p>
              </div>
              <div className="articulo">
                <h1>Mi blog</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque beatae sit iure at libero esse itaque eveniet facilis, aspernatur eaque numquam? Officia alias dolorum aut nihil cum veniam, similique fuga?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h1>Contacto</h1>
          <div className="flex">
            <div className="w-full">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius pariatur provident optio natus porro, velit hic autem cupiditate doloremque voluptatum veniam sapiente cumque iste temporibus aut suscipit, nisi cum.</p>
            </div>
            <div className="flex w-full">
              <p>linkedin</p>
              <p>Intagram</p>
              <p>github</p>
              <p>correo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
