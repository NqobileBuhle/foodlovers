import React, { useState, useEffect } from 'react';

const Recipes = () => {
  // Step 1: Create state to hold the image URL
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);

  // Step 2: Fetch the image using useEffect when the component mounts
  useEffect(() => {
    const fetchFoodImage = async () => {
      try {
        const response = await fetch('https://foodish-api.com/');
        
        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }
        const data = await response.json();
        console.log(data);

        // Step 3: Update state with the fetched image URL
        setImageUrl(data.image);
      } catch (error) {
        console.error('Error fetching food image:', error);
        setError(error.message);
      } 
    };

    fetchFoodImage();
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <div>
      <h1 className='text-white'>Random Food Image</h1>
      {/* Display the fetched image or an error message */}
      {error ? (
        <p className='text-white'>Error: {error}</p>
      ) : (
        imageUrl && <img id="food-image" src={imageUrl} alt="Random Food" width="300" />
      )}
    </div>
  );
};

export default Recipes;

