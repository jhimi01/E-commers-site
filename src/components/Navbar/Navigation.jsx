import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import allcountry from '../../../public/allcountry.png';
import { BsFillCartPlusFill, BsFillHeartFill, BsFillSearchHeartFill } from 'react-icons/bs';
import { FaUserAlt} from 'react-icons/fa';
import { BiSolidDownArrow } from 'react-icons/bi';

const Navigation = () => {

  const location = useLocation()
  console.log(location.pathname)

    const NavigationsLink = ()=> (
        <>
        <img src={allcountry} className='h-7 hidden lg:flex' alt="" />
        <li><a>USD <BiSolidDownArrow /></a></li>
           <Link to='/products/1'><li><a>Women</a></li></Link>
      <Link to='/products/2'><li><a>Men</a></li></Link>
      <Link to='/products/3'><li><a>Children</a></li></Link> 
        </>
    )

    
// className='mt-0 w-5/6 mx-auto'
    return (
       <div className='mt-0 w-11/12 mx-auto'>
      {location?.pathname === '/' &&  <div className='bg-base-200  text-gray-500 py-3 px-5 flex items-center justify-between'>
        <div>
          <p>+0123456789</p>
        </div>
        <div>
          Summer Sale discount off <span className='text-red-500'>50%!</span> Shop now
        </div>
        <div>
          <span>Ecuador </span>
          <span>USD - US Dollar</span>
        </div>
       </div>}
         <div className="navbar bg-base-100">
        
        {/* starting part */}
        <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <NavigationsLink />
    </ul>
  </div>

  {/* center part */}
  <div className="navbar-center">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       <NavigationsLink />
      </ul>
    </div>
   <Link to='/'><p className='text-2xl'>Shoppy</p></Link>
  </div>
  
  {/* end part */}
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link to='/products/1'><li><a>Home</a></li></Link>
      <Link to='/products/2'><li><a>About</a></li></Link>
      <Link to='/products/3'><li><a>Contact</a></li></Link> 
      <Link to='/products/3'><li><a>Stores</a></li></Link> 
      <li><a><BsFillCartPlusFill /> <span>0</span></a></li> 
      <li><a><BsFillSearchHeartFill /></a></li>
      <li><a><BsFillHeartFill /></a></li>
      <li><a><FaUserAlt /></a></li>
      
    </ul>
  </div>
</div>
       </div>
    );
};

export default Navigation;