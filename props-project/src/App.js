import React from 'react';
import './App.css';
import Fruit from './Fruit'


const data = [
  {id:1,img:'https://st.depositphotos.com/1642482/1904/i/600/depositphotos_19049353-stock-photo-fruit.jpg'
  ,title:'Apple',uom:'02',size:'02',unit:'$8.99',total:'$17.88'},
  {id:2,img:'https://st.depositphotos.com/1642482/1904/i/600/depositphotos_19049353-stock-photo-fruit.jpg',title:'Banana',uom:'02',size:'02',unit:'$18.99',total:'$17.88'},
  {id:3,img:'https://st.depositphotos.com/1642482/1904/i/600/depositphotos_19049353-stock-photo-fruit.jpg',title:'Olma',uom:'02',size:'02',unit:'$7.99',total:'$17.88'},
  {id:4,img:'https://st.depositphotos.com/1642482/1904/i/600/depositphotos_19049353-stock-photo-fruit.jpg',title:'Gilos',uom:'02',size:'02',unit:'$6.99',total:'$17.88'},
  {id:5,img:'https://st.depositphotos.com/1642482/1904/i/600/depositphotos_19049353-stock-photo-fruit.jpg',title:'Apple',uom:'02',size:'02',unit:'$9.99',total:'$17.88'},
  {id:6,img:'https://st.depositphotos.com/1642482/1904/i/600/depositphotos_19049353-stock-photo-fruit.jpg',title:'shaftoli',uom:'02',size:'02',unit:'$8.99',total:'$17.88'},
  {id:7,img:'https://st.depositphotos.com/1642482/1904/i/600/depositphotos_19049353-stock-photo-fruit.jpg',title:'Anor',uom:'02',size:'02',unit:'$8.99',total:'$17.88'},
  {id:8,img:'https://st.depositphotos.com/1642482/1904/i/600/depositphotos_19049353-stock-photo-fruit.jpg',title:'Ananas',uom:'02',size:'02',unit:'$10.99',total:'$17.88'},
]
function App() {
  return (
    <div className="container">
              {
                data.map((value,index)=>{
                  return(
                    <div>
                      <Fruit data={value} />
                    </div>
                  )
                })
              }
   
    </div>
  );
}

export default App;
