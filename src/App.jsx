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
                <p className={`text-white bg-indigo-500 p-2 rounded-sm ${hovered ? 'hidden' : ''} `}>Atrévete a acercarte, humano.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-t from-indigo-950 to-black mt-20 px-10 py-20 rounded-lg text-white">
          <h1 className="text-5xl font-bold mb-10">Mis proyectos destacados</h1>
          <div className="flex justify-center space-x-16">
            <div className="max-w-lg w-full border border-indigo-900 rounded-lg shadow-xl bg-white">
              <h3 className="text-3xl font-bold text-indigo-900 p-4">Sistema de Gestión Veterinaria</h3>
              <img className="w-full h-auto" src="https://i.ibb.co/S77FDSP/Captura-desde-2024-05-06-01-34-30.png" alt="Screenshot del Sistema de Gestión Veterinaria" />
              <p className="p-4 text-lg text-gray-800">¡Bienvenido a nuestra plataforma digital para el cuidado de tus mascotas! Registra a tus compañeros peludos y administra fácilmente sus servicios médicos.</p>
              <div className="flex justify-end p-4">
                <button className="bg-indigo-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Entrar</button>
              </div>
              <div className="flex justify-between p-4 border-t border-gray-300">
                <div className="flex items-center space-x-2">
                  <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" className="w-8 h-8" />
                  <span className="text-gray-800 font-semibold">React</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://img.icons8.com/color/48/000000/next.png" alt="Next.js" className="w-8 h-8" />
                  <span className="text-gray-800 font-semibold">Next.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MySQL" className="w-8 h-8" />
                  <span className="text-gray-800 font-semibold">MySQL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" className="w-8 h-8" />
                  <span className="text-gray-800 font-semibold">Node.js</span>
                </div>
              </div>
            </div>

            <div className="max-w-lg w-full border border-indigo-900 rounded-lg shadow-xl bg-white">
              <h3 className="text-3xl font-bold text-indigo-900 p-4">Sistema de Gestión Veterinaria</h3>
              <img className="w-full h-auto" src="https://i.ibb.co/S77FDSP/Captura-desde-2024-05-06-01-34-30.png" alt="Screenshot del Sistema de Gestión Veterinaria" />
              <p className="p-4 text-lg text-gray-800">¡Bienvenido a nuestra plataforma digital para el cuidado de tus mascotas! Registra a tus compañeros peludos y administra fácilmente sus servicios médicos.</p>
              <div className="flex justify-end p-4">
                <button className="bg-indigo-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Entrar</button>
              </div>
              <div className="flex justify-between p-4 border-t border-gray-300">
                <div className="flex items-center space-x-2">
                  <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" className="w-8 h-8" />
                  <span className="text-gray-800 font-semibold">React</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://img.icons8.com/color/48/000000/next.png" alt="Next.js" className="w-8 h-8" />
                  <span className="text-gray-800 font-semibold">Next.js</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MySQL" className="w-8 h-8" />
                  <span className="text-gray-800 font-semibold">MySQL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" className="w-8 h-8" />
                  <span className="text-gray-800 font-semibold">Node.js</span>
                </div>
              </div>
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
