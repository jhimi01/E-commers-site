import React from 'react';
import "./Categories.css"
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <div className='flex h-[80vh] gap-2 my-20'>
            <div className="col">
                <div className="row">
                <img src="https://i.ibb.co/6mnpKqN/pexels-mahdi-chaghari-11593225.jpg" alt="" />
             
                   <button className='btncustom absolute'>
                   <Link to='/products/1' >Women</Link>
                   </button>
               
                </div>

                <div className="row">
                <img src="https://i.ibb.co/JQXjrR3/pexels-godisable-jacob-818992.jpg" alt="" />
                <button className='btncustom absolute'>
                   <Link to='/products/1' >Sale</Link>
                   </button></div>
            </div>
            <div className="col">
                <div className="row">
                <img src="https://i.ibb.co/NmD7HFv/pexels-rulo-davila-11588267.jpg" alt="" />
                <button className='btncustom absolute'>
                   <Link to='/products/1' >Accessorise</Link>
                   </button></div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                        <img src="https://i.ibb.co/q1n868n/pexels-michelle-leman-6774977.jpg" alt="" />
                        <button className='btncustom absolute'>
                   <Link to='/products/1' >New Season</Link>
                   </button></div>
                    </div>
                    <div className="col">
                    <div className="row">
                    <img src="https://i.ibb.co/smL5PfR/pexels-brianna-swank-2343826.jpg" alt="" />
                    <button className='btncustom absolute'>
                   <Link to='/products/1' >Shoes</Link>
                   </button></div>
                    </div>
                </div>
                <div className="row">
                    
                    <img src="https://images.pexels.com/photos/5120180/pexels-photo-5120180.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <button className='btncustom absolute'>
                   <Link to='/products/1' >Men</Link>
                   </button>
                </div>
            </div>
        </div>
    );
};

export default Categories;