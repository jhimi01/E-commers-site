import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    const NavigationsLink = ()=> (
        <>
           <Link to='/products/1'><li><a>Women</a></li></Link>
      <Link to='/products/2'><li><a>Men</a></li></Link>
      <Link to='/products/3'><li><a>Children</a></li></Link> 
        </>
    )
    

    return (
        <div className="navbar bg-base-100">

        {/* starting part */}
        <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {/* <Link to='/products/1'><li><a>Women</a></li></Link>
      <Link to='/products/2'><li><a>Men</a></li></Link>
      <Link to='/products/3'><li><a>Children</a></li></Link> */}
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
   <Link to='/'> <a className="btn btn-ghost normal-case text-xl">Shoppy</a></Link>
  </div>
  
  {/* end part */}
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <Link to='/products/1'><li><a>Home</a></li></Link>
      <Link to='/products/2'><li><a>About</a></li></Link>
      <Link to='/products/3'><li><a>Contact</a></li></Link> 
      <Link to='/products/3'><li><a>Stores</a></li></Link> 
    </ul>
  </div>
</div>
    );
};

export default Navigation;