import React, { useState, useEffect } from 'react';
// import image from './image/landscape.webp';

const Card = (props) => {

  let items = props.items
  
  const [itemState,setItemState]=useState(items)
 
  function AddItem(){
     
      items.push(items[0])
      console.log(itemState)
      setItemState([...items])
   
  }


  function RemoveItem(){

  items.pop()
  setItemState([...items])

    console.log(items)
  }
  return (
    <>
  <div style={{display:"flex", justifyContent:"space-between"}}>
    <button onClick={AddItem}>ADD</button>
    <button onClick={RemoveItem}>REMOVE</button>
    </div>

<div className='container' >
      {items.map((item, index) => (

          <div key={index} className='card' >

            <div className='image'>
              <img src={item.image} alt="" />
            </div>
            <section>
              <div>
                <h2>{item.heading}</h2>
              </div>
              <div className='paragraph'>
                <p> {item.text} </p>
               
              </div>
              <div className='btn'>
                <button>Read article</button>
              </div>
            </section>
          </div>
      ))
      
    }
    </div>

    </>
  )
};



export default Card;