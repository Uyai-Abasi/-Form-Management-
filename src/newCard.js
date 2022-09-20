import React from 'react';
import image from './image/landscape.webp';

export default function Card(item) {


  return (
    <>
      <div className='card'>
        <div className='image'>
          <img src={image} alt="" />
        </div>
        <section>
          <div>
            <h2>Fire Up Your Motivation</h2>
          </div>
          <div className='paragraph'>
            <p>When striving towards a goal, you must focus on what you want to obtain and avoid the impulse to go back to what you know and to what is comfortable </p>
            <p>by <a href="./">Kyle Patterson </a></p>
          </div>
          <div className='btn'>
            <button>Read article</button>
          </div>
        </section>
      </div>
    </>
  )
}