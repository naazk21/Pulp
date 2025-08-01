import { useState } from 'react';
import Getrecipes from './Getrecipes';
import heroBg from '../components/herobgd.jpg';

const Hero = () => {
  const [showRecipes, setShowRecipes] = useState(false);

  return (
    <>
      {!showRecipes ? (
        <section 
          className='relative bg-cover bg-center h-screen'
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className='absolute inset-0 bg-black bg-opacity-60'></div>

          <div className='relative z-10 max-w-7xl mx-auto h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8'>
            <h1 className='text-5xl font-extrabold text-[#00FFFF] sm:text-6xl md:text-7xl tracking-wider'>
              Sip, Savor, and Celebrate
            </h1>
            <p className='my-4 text-xl text-white max-w-2xl'>
              Discover & Create the <span className='text-[#1C0535] font-semibold'>perfect drink recipes</span>, 
              anytime, anywhere with <span className='text-[#1C0535] font-bold'>pulp!</span>
            </p>
            <div className="mt-6 flex gap-6">
              <button 
                onClick={() => setShowRecipes(true)}
                className="bg-[#C4A6B1] text-black px-6 py-3 rounded-md font-bold hover:bg-[#431670] transition-all transform hover:scale-105 shadow-lg"
              >
                Get Recipes
              </button>
              <button className="bg-[#C4A6B1] text-black px-6 py-3 rounded-md font-bold hover:bg-[#431670] transition-all transform hover:scale-105 shadow-lg">
                Create Recipe
              </button>
            </div>
          </div>
        </section>
      ) : (
        <Getrecipes />
      )}
    </>
  );
};

export default Hero;
