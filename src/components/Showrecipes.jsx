import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Showrecipes = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        setRecipe(response.data.drinks[0]);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) return <div className='text-center text-white'>Loading...</div>;

  return (
    <div className='p-10 min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 text-white'>
      <button 
        onClick={() => navigate(-1)}
        className='bg-pink-500 text-white px-4 py-2 rounded mb-6'>
        ← Back
      </button>

      <div className='max-w-3xl mx-auto bg-white text-black rounded-lg shadow-lg overflow-hidden'>
      <img
      src={recipe.strDrinkThumb}
      alt={recipe.strDrink}className='w-full max-h-[450px] object-contain rounded-t-lg shadow-lg'
      />

        <div className='p-6'>
          <h1 className='text-3xl font-extrabold mb-4'>{recipe.strDrink}</h1>
          <p><strong>Category:</strong> {recipe.strCategory}</p>
          <p><strong>Glass Type:</strong> {recipe.strGlass}</p>
          <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
          <h2 className='text-xl font-bold mt-4'>Ingredients:</h2>
          <ul>
            {Array.from({ length: 15 }).map((_, index) => {
              const ingredient = recipe[`strIngredient${index + 1}`];
              const measure = recipe[`strMeasure${index + 1}`];
              if (ingredient) {
                return <li key={index}>{measure} {ingredient}</li>;
              }
              return null;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Showrecipes;