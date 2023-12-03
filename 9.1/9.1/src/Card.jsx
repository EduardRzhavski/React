import React from 'react';

export default function Card({person}) {
  return (
    <div className='card'>
        <h2>{person.name}</h2>
        <h3>Birthday: {person.birthday}</h3>
        <h3>Favorite Meat Foods</h3>
        {person.favoriteFoods.meats.map((meal,index)=><h3 key={index}>{meal}</h3> )}
        <h3>Favorite Fish Foods</h3>
        {person.favoriteFoods.fish.map((meal,index)=><h3 key={index}>{meal}</h3> )}
    </div>
  )
}
