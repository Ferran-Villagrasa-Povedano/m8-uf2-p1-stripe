import { Link } from 'react-router';
import { FaShoppingCart } from 'react-icons/fa';
import { getCart } from '@/api';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5173';

const Navbar = () => {
  return (
    <nav className="bg-teal-800 p-3 fixed top-0 left-0 w-full z-50">
      <ul className="flex space-x-6 relative">
        <li>
          <Link to="/" className="text-white text-lg hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white text-lg hover:text-gray-300">
            Contacto
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white text-lg hover:text-gray-300">
            Sobre nosotros
          </Link>
        </li>
        <li className="relative group">
          <button className="text-white text-lg hover:text-gray-300">Componentes ▼</button>
          <ul className="absolute left-0 mt-2 w-48 bg-teal-700 shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 group-focus-within:opacity-100 group-focus-within:visible z-50">
            <li>
              <Link
                to={`/filterHome?filter=cpu`}
                className="block px-4 py-2 text-white hover:bg-teal-600"
              >
                CPU
              </Link>
            </li>
            <li>
              <Link
                to={`/filterHome?filter=ram`}
                className="block px-4 py-2 text-white hover:bg-teal-600"
              >
                RAM
              </Link>
            </li>
            <li>
              <Link
                to={`/filterHome?filter=motherboard`}
                className="block px-4 py-2 text-white hover:bg-teal-600"
              >
                Placa Base
              </Link>
            </li>
            <li>
              <Link
                to={`/filterHome?filter=case`}
                className="block px-4 py-2 text-white hover:bg-teal-600"
              >
                Caja
              </Link>
            </li>
            <li>
              <Link
                to={`/filterHome?filter=powersupply`}
                className="block px-4 py-2 text-white hover:bg-teal-600"
              >
                Fuente de Alimentación
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to={`/filterHome?filter=peripherics`}
            className="text-white text-lg hover:text-gray-300"
          >
            Perifericos
          </Link>
        </li>
        <li className="ml-auto">
          <Link to="/cart" className="text-white text-lg hover:text-gray-300 flex items-center">
            <FaShoppingCart className="mr-4 w-6 h-6" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
