import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Getrecipes = () => {
  const [occasion, setOccasion] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleGenerateRecipe = async () => {
    if (!ingredients.trim()) {
      setError('Please enter ingredients!');
      return;
    }

    setLoading(true);
    setRecipe([]);
    setError('');

    try {
      console.log('👉 SENDING REQUEST TO COCKTAILDB API...');

      const ingredientList = ingredients.split(',').map(ing => ing.trim());
      let allDrinks = [];

      for (let ingredient of ingredientList) {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (response.data.drinks) {
          allDrinks.push(...response.data.drinks);
        }
      }

      const uniqueDrinks = Array.from(new Set(allDrinks.map(drink => drink.idDrink)))
        .map(id => allDrinks.find(drink => drink.idDrink === id));

      if (uniqueDrinks.length > 0) {
        setRecipe(uniqueDrinks);
      } else {
        setRecipe([]);
        setError('No results found. Try different ingredients.');
      }

    } catch (error) {
      console.error('🚨 ERROR IN API CALL:', error);
      setError('Failed to generate recipe. Please try again later.');
    }

    setLoading(false);
  };

  const handleCardClick = (id) => {
    navigate(`/recipe/${id}`);
  };

  return (
    <div className='p-10 min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 text-white'>
      <h1 className='text-4xl font-extrabold mb-6 text-center'>🍹Discover delicious Beverage Recipes</h1>

      <div className='flex flex-wrap justify-center gap-4 mb-6'>
        <select
          className='border border-gray-300 bg-white text-black p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300'
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value=''>Select Occasion</option>
          <option value='Birthday'>Birthday</option>
          <option value='Wedding'>Wedding</option>
          <option value='Party'>Party</option>
          <option value='Casual Hangout'>Casual Hangout</option>
        </select>
        
        <input
          type='text'
          placeholder='Enter Ingredients (comma separated)'
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className='border border-gray-300 bg-white text-black p-3 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-all duration-300 w-72'
        />

        <button
          onClick={handleGenerateRecipe}
          className='bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg'
        >
          {loading ? 'Generating...' : 'Generate Recipe'}
        </button>
      </div>

      {error && <p className='text-red-500 text-center mb-4'>{error}</p>}

      {recipe.length > 0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {recipe.map((drink) => (
            <div
              key={drink.idDrink}
              className='bg-white text-black rounded-lg shadow-lg w-full max-h-[450px] object-contain overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer'
              onClick={() => handleCardClick(drink.idDrink)}
            >
              <img
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                className='w-full h-40 object-cover'
              />
              <div className='p-4'>
                <h3 className='text-xl font-bold'>{drink.strDrink}</h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Getrecipes;
