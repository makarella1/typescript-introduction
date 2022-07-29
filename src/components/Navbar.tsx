import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="h-20 bg-gray-600 flex items-center justify-between px-10">
      <h1 className="text-2xl font-black text-white">
        Typescript Introduction
      </h1>
      <div>
        <Link className="mr-2 font-bold text-white text-xl" to="/">
          Products
        </Link>
        <Link className="font-bold text-white text-xl" to="/about">
          About
        </Link>
      </div>
    </nav>
  );
};
