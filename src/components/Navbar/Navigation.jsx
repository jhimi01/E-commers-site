import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import allcountry from '../../../public/allcountry.png';
import { BsFillCartPlusFill, BsFillHeartFill, BsFillSearchHeartFill } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { FaUserAlt} from 'react-icons/fa';
import { BiSolidDownArrow, BiSearch } from 'react-icons/bi';
import Cart from '../Cart/Cart';

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
     <div className='flex items-center text-xl'>
     <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item badge-info">8</span>
        </div>
      </label>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          {/* <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div> */}
          <Cart />
        </div>
      </div>
    </div> 
      <li><p><BiSearch /></p></li>
      <li><p><AiOutlineHeart /></p></li>
      <li><p><AiOutlineUser /></p></li>
 
     </div>
      
    </ul>
  </div>
</div>
       </div>
    );
};

export default Navigation;