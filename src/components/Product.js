import React, { useState } from 'react';
import img from './image/Shoe.jpg'
import { AiOutlineShoppingCart ,AiOutlineHeart} from 'react-icons/ai';
import { ImEye,ImLoop } from 'react-icons/im';
import list from './ProductList'


export default function () {
  const [List, setList] = useState(list);
  console.log(List);
  return <>
  
  <div id="main-card-container">
    { List.map((elem) =>{
     return (
          <>  
          <div className="each-card">
              <div className="img-section">
                <img src={img} alt=""/>
                <h4>New</h4>
                <h5>-20%</h5>
                
              </div>
              <div className="text-area">
                  <p>
                  {elem.name}
                  </p>
                  <span>€ {elem.price-5}</span> - <span style={{textDecoration:"line-through"}} >€ {elem.price}</span> 
                  <ul>
                  <li><AiOutlineHeart style={{position:'relative', top:'10px'}}/></li>
                    <li><AiOutlineShoppingCart style={{position:'relative', top:'10px'}}/></li>
                    <li><ImLoop style={{position:'relative', top:'10px'}}/></li>
                    <li><ImEye style={{position:'relative', top:'10px'}}/></li>
                   
                   
                   
                  </ul>
              </div>
      </div>
         
      </>
   )


    })}
      



 </div>
 


  </>;
}
