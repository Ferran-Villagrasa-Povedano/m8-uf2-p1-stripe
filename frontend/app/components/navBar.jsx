import { Link } from 'react-router';

const Navbar = () => {
  return (
    <nav className="bg-teal-800 p-3">
      <ul className="flex space-x-6">
        <li>
          <Link to="/" className="text-white text-lg hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/cart" className="text-white text-lg hover:text-gray-300">
            Carrito
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white text-lg hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
