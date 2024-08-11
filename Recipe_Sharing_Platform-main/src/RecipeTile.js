import React from 'react';
import './RecipeTile.css';

export default function RecipeTile({recipe}) {
    return (
        <div className="RecipeTile"
            onClick={() => {
            window.open(recipe["recipe"]["shareAs"]);
        }}>
            <img className='recipeTile_img' src={recipe["recipe"]["image"]} />
            <p className='recipeTile_name'>{recipe["recipe"]["label"]}</p>
      
        </div>
    );
}
