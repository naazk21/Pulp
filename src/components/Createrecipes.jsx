import React, { useState } from 'react';

const Createrecipes = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    glass: '',
    instructions: '',
    image: '',
    ingredients: [{ name: '', measure: '' }],
  });

  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e, index, field) => {
    if (field === 'ingredient') {
      const updatedIngredients = [...formData.ingredients];
      updatedIngredients[index].name = e.target.value;
      setFormData({ ...formData, ingredients: updatedIngredients });
    } else if (field === 'measure') {
      const updatedIngredients = [...formData.ingredients];
      updatedIngredients[index].measure = e.target.value;
      setFormData({ ...formData, ingredients: updatedIngredients });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const addIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, { name: '', measure: '' }] });
  };

  const removeIngredient = (index) => {
    const updatedIngredients = formData.ingredients.filter((_, i) => i !== index);
    setFormData({ ...formData, ingredients: updatedIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, category, glass, instructions, image, ingredients } = formData;
    if (!name || !category || !glass || !instructions || ingredients.some(i => !i.name || !i.measure)) {
      setError('Please fill in all fields properly.');
      return;
    }

    setPreview(formData);
    setError('');
  };

  return (
    <div className='p-10 min-h-screen bg-gradient-to-b from-purple-700 to-purple-900 text-white'>
      <h1 className='text-4xl font-extrabold mb-6 text-center'>🍸 Create Your Own Recipe</h1>

      <form onSubmit={handleSubmit} className='bg-white text-black rounded-lg p-6 shadow-lg max-w-3xl mx-auto'>
        {error && <p className='text-red-500 mb-4'>{error}</p>}

        <input
          type='text'
          name='name'
          placeholder='Drink Name'
          value={formData.name}
          onChange={handleChange}
          className='w-full p-3 mb-4 border rounded'
        />
        <input
          type='text'
          name='category'
          placeholder='Category (e.g., Mocktail)'
          value={formData.category}
          onChange={handleChange}
          className='w-full p-3 mb-4 border rounded'
        />
        <input
          type='text'
          name='glass'
          placeholder='Glass Type'
          value={formData.glass}
          onChange={handleChange}
          className='w-full p-3 mb-4 border rounded'
        />
        <textarea
          name='instructions'
          placeholder='Instructions'
          value={formData.instructions}
          onChange={handleChange}
          className='w-full p-3 mb-4 border rounded'
        />
        <input
          type='text'
          name='image'
          placeholder='Image URL'
          value={formData.image}
          onChange={handleChange}
          className='w-full p-3 mb-4 border rounded'
        />

        <h2 className='text-xl font-bold mb-2'>Ingredients</h2>
        {formData.ingredients.map((ingredient, index) => (
          <div key={index} className='flex gap-2 mb-2'>
            <input
              type='text'
              placeholder='Measure (e.g., 1 oz)'
              value={ingredient.measure}
              onChange={(e) => handleChange(e, index, 'measure')}
              className='w-1/3 p-2 border rounded'
            />
            <input
              type='text'
              placeholder='Ingredient'
              value={ingredient.name}
              onChange={(e) => handleChange(e, index, 'ingredient')}
              className='w-2/3 p-2 border rounded'
            />
            {formData.ingredients.length > 1 && (
              <button
                type='button'
                onClick={() => removeIngredient(index)}
                className='bg-red-500 text-white px-3 rounded hover:bg-red-700'
              >
                ✕
              </button>
            )}
          </div>
        ))}
        <button
          type='button'
          onClick={addIngredient}
          className='bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-700'
        >
          ➕ Add Ingredient
        </button>

        <button
          type='submit'
          className='bg-green-600 text-white px-6 py-2 rounded hover:bg-green-800 w-full mt-4 font-semibold'
        >
          Save Recipe
        </button>
      </form>

      {preview && (
        <div className='mt-10 max-w-3xl mx-auto bg-white text-black rounded-lg shadow-lg p-6'>
          <h2 className='text-2xl font-bold mb-4'>🍹 {preview.name}</h2>
          <img src={preview.image} alt={preview.name} className='w-full h-64 object-cover rounded mb-4' />
          <p><strong>Category:</strong> {preview.category}</p>
          <p><strong>Glass Type:</strong> {preview.glass}</p>
          <p className='mt-2'><strong>Instructions:</strong> {preview.instructions}</p>
          <h3 className='text-lg font-semibold mt-4'>Ingredients:</h3>
          <ul className='list-disc list-inside'>
            {preview.ingredients.map((item, idx) => (
              <li key={idx}>{item.measure} {item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Createrecipes;
