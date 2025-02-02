import { FaEnvelope, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

export function meta() {
  return [{ title: 'Contacto' }, { name: 'description', content: 'Contacto' }];
}

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">¡Contáctanos!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Estamos aquí para ayudarte con tus compras de componentes de ordenador.
        </p>
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-4">
            <FaPhoneAlt className="text-2xl text-teal-600" />
            <p className="text-lg text-gray-700">+1 (555) 123-4567</p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <FaEnvelope className="text-2xl text-teal-600" />
            <p className="text-lg text-gray-700">contacto@componentesstore.com</p>
          </div>

          <div className="flex items-center justify-center space-x-4">
            <FaInstagram className="text-2xl text-teal-600" />
            <a
              href="https://www.instagram.com/componentesstore"
              className="text-lg text-teal-600 hover:text-teal-700"
            >
              @componentesstore
            </a>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm text-gray-500">
            ¡No dudes en ponerte en contacto con nosotros si tienes alguna pregunta!
          </p>
        </div>
      </div>
    </div>
  );
}
