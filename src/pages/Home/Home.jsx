import React from 'react';

const Home = () => {
    return (
        <div className='flex justify-between gap-[130px]'>
          <div className='w-[80%]'>
          <img  src="https://i.ibb.co/8XL3nZf/pexels-mahdi-chaghari-12975837.jpg" alt="Model" className='grayscale' />
          </div>
          <div >
            <h1 className='text-8xl text-[#1b1b1b] absolute z-10 left-5'>Exclusive <span className='pl-[40%]'>Collections</span> <br /> On sale</h1>
          </div>
          <div className='w-[90%] mx-auto'>
           <img src="https://i.ibb.co/vBmw0cS/pexels-12193420.jpg" alt="model" className='grayscale w-full' />
          </div>
        </div>
    );
};

export default Home;