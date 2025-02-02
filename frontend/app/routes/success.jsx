import { clearCart } from '@/api';
import { useEffect } from 'react';
import { Link } from 'react-router';

export function meta() {
  return [{ title: 'Compra Exitosa' }, { name: 'description', content: 'Compra Exitosa' }];
}

export default function Success() {
  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Compra Exitosa</h1>
      <p className="text-lg text-gray-600 mb-6">
        Gracias por su compra. Su pedido ha sido procesado con éxito.
      </p>
      <Link to="/">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
          Regresar al inicio
        </button>
      </Link>
    </div>
  );
}
