import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  return (
    <nav className="bg-linear-to-r from-slate-900 to-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center cursor-pointer" onClick={handleNavigation}>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Shop<span className="text-emerald-400">Hub</span>
            </h1>
          </div>


          <div className="hidden md:flex items-center space-x-8">
            <a onClick={handleNavigation} className="text-gray-300 hover:text-emerald-400 transition duration-300 font-medium cursor-pointer">
              Home
            </a>
            <a onClick={handleNavigation} className="text-gray-300 hover:text-emerald-400 transition duration-300 font-medium cursor-pointer">
              Shop
            </a>
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition duration-300 font-medium">
              Products
            </a>
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition duration-300 font-medium">
              About Us
            </a>
          </div>


          <div className="flex items-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition duration-300 flex items-center space-x-2">

              <span className="font-medium">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;