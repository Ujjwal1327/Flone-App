import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { BsSearch ,BsShuffle } from 'react-icons/bs';
import { RiAdminLine } from 'react-icons/ri';
import { AiOutlineShoppingCart ,AiOutlineHeart,AiOutlineToTop} from 'react-icons/ai';
import {Link} from 'react-scroll';
import mainImg from "./image/pmv-chamara-inMtJzduxIg-unsplash.jpg";
export default function Header()


{
   const[arrow, setarrow]=useState('hidden');
  const arrowstyle = {
    position:'fixed',
    bottom:"100px",
    backgroundColor:'rgb(162, 0, 255)',
    color:'white',
    fontSize:'40px',
    right:'40px',
    zIndex:20,
    borderRadius:'50%',
    visibility:arrow,
  }
    const [mystyle, setmystyle] = useState("white");
    const changeNavbarColor = () =>{
        if(window.pageYOffset > 700){
          setmystyle('black');
          setarrow('visible')
          document.querySelector(".header").style.background="rgb(240,240,240)";
          
        }
        else{
          setarrow('hidden')
          document.querySelector(".header").style.background="black";
          setmystyle('white');
        }
     };
    window.addEventListener('scroll', changeNavbarColor);
  return <>
   <div className="img" id='top'>
      <img src={mainImg} alt="" />
    </div>
   <div className='header'   style={{"color":mystyle}}>
  
      <div className="menu" >
          <ul>
              <li>Home <FiChevronDown  style={{position:'relative', top:'5px'}}/> 
              <div className='Home-sub-menu'>
                 <table >
                      <tr>
                        <th>HOME  ONE</th>
                        <th>HOME TWO</th>
                        <th>HOME  THREE</th>                        
                      </tr>
                      <tr>
                        <td>Alfreds </td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Alfreds </td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Alfreds </td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Alfreds </td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Alfreds </td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          
                        </tr>
                      <tr>
                        <td>Centro  </td>
                        <td>Francisco </td>
                       
                      </tr>
                    </table>
                 </div>
              
              </li>
                 
              <li>Shop <FiChevronDown style={{position:'relative', top:'5px'}} />
              <div className='Home-sub-menu'>
                 <table >
                      <tr>
                        <th>SHOP ONE</th>
                        <th>SHOP TWO</th>
                        <th>SHOP THREE</th>                        
                      </tr>
                      <tr>
                        <td>Alfreds </td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Alfreds </td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Alfreds </td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Alfreds </td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                      <tr>
                        <td>Alfreds </td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                      </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          <td>Germany</td>
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          
                        </tr>
                        <tr>
                          <td>Alfreds </td>
                          <td>Maria Anders</td>
                          
                        </tr>
                      <tr>
                        <td>Centro  </td>
                        <td>Francisco </td>
                       
                      </tr>
                    </table>
                 </div>
               </li>
              <li>Collection </li>
              <li> Pages <FiChevronDown style={{position:'relative', top:'5px'}}/> </li>
              <li> Blog <FiChevronDown style={{position:'relative', top:'5px'}}/> </li>
              <li> Contact</li>
          </ul>
          </div>
          <div className="logo">
              <h1>Flone.</h1>
          </div>
         <div className="icons">
         <ul>
              <li><BsSearch/></li>
              <li><RiAdminLine/></li>
              <li><BsShuffle/></li>
              
              <li><AiOutlineHeart/></li>
              <li><AiOutlineShoppingCart/></li>
           
          </ul>
         </div>
      </div>

      <div className="textArea">
      <p>New Arrival</p>
      <p>Final sale</p>
      <p>30% off Winter Vacation</p>
       <Link to="main-card-container" smooth={true}  duration={1100}style={{cursor:'pointer'}} >Shop Now</Link>
       <hr />
      </div>
       <Link to="top" smooth={true}  duration={500} style={{cursor:'pointer'}} > < AiOutlineToTop style={arrowstyle}/></Link>

      
  </>;
}
