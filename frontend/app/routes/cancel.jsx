import { IoIosCloseCircle } from 'react-icons/io';
import { Link } from 'react-router';

export default function Cancel() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <IoIosCloseCircle className="text-red-600 text-6xl mb-4 mx-auto" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Orden Cancelada</h1>
        <p className="text-lg text-gray-600 mb-6">
          Tu pedido no fue completado. Lo sentimos por los inconvenientes.
        </p>
        <Link to="/">
          <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition duration-200">
            Regresar al inicio
          </button>
        </Link>
      </div>
    </div>
  );
}
