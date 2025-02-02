import { FaBoxOpen, FaCogs, FaUsers } from 'react-icons/fa';

export function meta() {
  return [{ title: 'Sobre Nosotros' }, { name: 'description', content: 'Sobre Nosotros' }];
}

export default function About() {
  return (
    <div className="mt-10 bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-600 min-h-screen text-white">
      <div className="flex flex-col items-center justify-center text-center py-12 px-6">
        <h1 className="text-5xl font-bold mb-6">Sobre Nosotros</h1>
        <p className="text-xl max-w-2xl mx-auto mb-12">
          En <span className="font-semibold">ComponentesTech</span>, nos apasiona ofrecer a nuestros
          clientes los mejores componentes de ordenador para que puedan construir equipos potentes y
          personalizados según sus necesidades. Con años de experiencia en la industria, nos
          dedicamos a ofrecer productos de alta calidad, atención al cliente excepcional y precios
          competitivos.
        </p>
        <img
          src="https://img.pccomponentes.com/pcblog/542/configuraciones-pc-gaming.jpg"
          alt="Tecnico de Componentes"
          className="w-[50%] mb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full px-6">
          <div className="flex flex-col items-center text-center">
            <FaCogs className="text-6xl mb-4 text-cyan-200" />
            <h3 className="text-2xl font-semibold mb-2">Componentes de Alta Calidad</h3>
            <p className="text-lg text-gray-200">
              Trabajamos solo con las marcas más confiables y los productos de mejor rendimiento.
              Desde procesadores hasta tarjetas gráficas, ofrecemos componentes que cumplen con los
              más altos estándares.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-6xl mb-4 text-cyan-200" />
            <h3 className="text-2xl font-semibold mb-2">Atención al Cliente Personalizada</h3>
            <p className="text-lg text-gray-200">
              Nuestro equipo está siempre dispuesto a ayudarte a elegir los productos adecuados. Te
              asesoramos en todo momento y respondemos a todas tus dudas para asegurarnos de que
              hagas la mejor compra.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaBoxOpen className="text-6xl mb-4 text-cyan-200" />
            <h3 className="text-2xl font-semibold mb-2">Envíos Rápidos y Seguros</h3>
            <p className="text-lg text-gray-200">
              Sabemos lo importante que es recibir tus productos a tiempo. Por eso, ofrecemos envíos
              rápidos y seguros, asegurando que tus componentes lleguen en perfectas condiciones.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Nuestra Misión</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            En <span className="font-semibold">ComponentesTech</span>, nuestra misión es permitir
            que cada persona, desde entusiastas hasta profesionales, pueda armar el ordenador de sus
            sueños. Nos dedicamos a ofrecer un servicio excelente y productos que se adapten a las
            necesidades de cada cliente. Siempre buscamos innovar, mejorar y seguir ofreciendo
            soluciones tecnológicas de vanguardia.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Únete a Nosotros</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Si estás buscando un equipo profesional y apasionado por la tecnología, ¡has llegado al
            lugar correcto! Únete a nuestra comunidad y descubre la mejor selección de componentes
            para armar tu PC ideal. Estamos aquí para hacer realidad tus proyectos tecnológicos.
          </p>
        </div>
      </div>
    </div>
  );
}
