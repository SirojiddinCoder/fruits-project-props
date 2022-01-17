import React from 'react';
import './App.css';
import Fruit from './Fruit'


const data = [
  {id:1,img:'./',title:'Apple',uom:'02',size:'02',tit:'$8.99',tota:'$17.88'},
  {id:2,img:'./',title:'Banana',uom:'02',size:'02',tit:'$8.99',tota:'$17.88'},
  {id:3,img:'./',title:'Olma',uom:'02',size:'02',tit:'$8.99',tota:'$17.88'},
  {id:4,img:'./',title:'Gilos',uom:'02',size:'02',tit:'$8.99',tota:'$17.88'},
]
function App() {
  return (
    <div className="container">
     {
       
         data.map((value,index)=>{
           return(
             
            <div>
              <Fruit />
              </div>

           )

       })
     }
   
    </div>
  );
}

export default App;
