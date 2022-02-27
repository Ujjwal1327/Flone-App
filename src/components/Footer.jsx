import React from 'react';

import { AiOutlineCopyright,AiOutlineLine } from 'react-icons/ai';
import { FaFacebookF , FaBasketballBall,FaPinterestP} from 'react-icons/fa';
import { BsTwitter} from 'react-icons/bs';

export default function footer() {
   var year = new Date().getFullYear();
  return <>
<div className="footer">
  <div className="footer-box">
      <p>Flone.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum fuga temporibus, quam recusandae nemo quasi ab ut <br /> adipisci minus neque in! Voluptatem debitis laboriosam iste eos.</p>
      <ul>
         <li> <FaFacebookF/></li>
         <li> <AiOutlineLine/> </li>
         <li> <FaBasketballBall/> </li>
         <li> <AiOutlineLine/> </li>
         <li> <BsTwitter/> </li>
         <li> <AiOutlineLine/> </li>
         <li> <FaPinterestP/> </li>
         
         
      </ul>
       <hr/>
       <h4> <AiOutlineCopyright  style={{position:'relative', top:'3px'}} />  {year} Flone. All Right Reserved </h4>
  </div>


</div>
  </>;
}
