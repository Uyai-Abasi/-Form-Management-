import { useState } from 'react';
import Card from './card';
import Input from './input';
import './style.css';
import Image1 from './card component/ship.jfif'
import Image2 from './card component/nikola.jfif'
import Image3 from './card component/tesla.jfif'

function App() {

  const items = [
    {
      image:Image1,
     heading: 'Royal Caribbean to use Starklink Internet', 
     id:'1',
     text: 'After SpaceX announced its Starlink Maritime service last month,it was only a matter of time before some household name in...'
    },
    {
      image:Image2, 
      heading: 'Nikola,Lucid tries to raise more cash', 
      id:'2',
      text: 'Two EV manufacturers are seeking cash  infusions this week to bring their delayed vehicles to market ,Nikola,a Phoenix based...'
    },
    {
      image:Image3, 
      id:'3',
      heading: 'Tesla owner seeks class action over phantom braking', 
      text: 'A Tesla Model 3 owner who filed a lawsuit against the automaker Friday alleging unintended braking is seeking class...',
    },

  ]
// const [values, setValue]=useState(items )

// function Add(){
//   console("i have been clicked")
 
// }


  return(
<>
<Input items={items}/>
{/* <Card items={items}/> */}

</>
  );
}

export default App;
