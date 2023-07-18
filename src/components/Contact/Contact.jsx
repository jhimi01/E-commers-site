import React from 'react';
import { BsFacebook, BsInstagram, BsPinterest, BsTwitter } from 'react-icons/bs';

const Contact = () => {
    return (
        <div className='bg-blue-500 w-full py-3 flex justify-around items-center'>
        <h1 className='text-white text-lg'>Be In Touch With Us :</h1>
       <div className="join">
  <input className="input h-8 input-bordered rounded-none join-item" placeholder="Enter your Email"/>
  <button className="bg-gray-800 text-white px-4 rounded-none">Subscribe</button>
</div>
<div className='flex items-center justify-center gap-4 text-white'>
    <a href="#"><BsFacebook /></a>
    
<a href="#"><BsInstagram /></a> 
   
<a href="#"><BsPinterest /></a>
   
<a href="#"> <BsTwitter /></a>
</div>
        </div>
    );
};

export default Contact;