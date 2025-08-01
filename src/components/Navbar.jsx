import { NavLink } from 'react-router-dom'; 
import logo from '../components/pulpplogo.png';


const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-black bg-[#FDD7E4]font-bold  rounded-md px-3 py-2 transition-all duration-300'
      : 'text-black hover:bg-[#8000FF] hover:text-white rounded-md px-3 py-2 transition-all duration-300';

  return (
    <nav className='bg-[#FDD7E4] border-b-4 border-[#FF007F] shadow-lg'>
      <div className='mx-auto max-w-7xl px-2 sm:px-9 lg:px-7'>
        <div className='flex h-14 items-center justify-between'>
          
          {/* ✅ Logo */}
          <div className='flex items-center'>
            <NavLink className='flex flex-shrink-0 items-center mr-7' to='/'>
              <img className='h-10 w-auto' src={logo} alt='Logo' />
              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                
              </span>
            </NavLink>
          </div>

          {/* ✅ Navigation Links */}
          <div className='hidden font-bold  md:flex md:space-x-4'>
            <NavLink to='/get-recipes' className={linkClass}>
              Get Recipes
            </NavLink>
            <NavLink to='/create-recipes' className={linkClass}>
              Create Recipes
            </NavLink>
          </div>

          {/* ✅ Sign In/Login */}
          <div>
            <NavLink 
              to='/Login_Signup' 
              className='text-black   border-[#8000FF] px-4 py-2 rounded-md font-bold transition-all duration-300 hover:bg-[#8000FF] hover:text-white'>
              Sign In/Login
            </NavLink>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
