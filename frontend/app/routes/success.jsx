import { clearCart } from '@/api';
import { useEffect } from 'react';
import { IoIosCheckmark } from 'react-icons/io';
import { Link } from 'react-router';

export function meta() {
  return [{ title: 'Compra Exitosa' }, { name: 'description', content: 'Compra Exitosa' }];
}

export default function Success() {
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <IoIosCheckmark className="text-green-600 text-6xl mb-4 mx-auto" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Orden Completada</h1>
        <p className="text-lg text-gray-600 mb-6">
          Tu pedido ha sido completado con éxito. ¡Gracias por tu compra!
        </p>
        <Link to="/">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-200">
            Regresar al inicio
          </button>
        </Link>
      </div>
    </div>
  );
}
