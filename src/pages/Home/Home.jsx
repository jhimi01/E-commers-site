import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';

const Home = () => {
    return (
      <>
          <div className='flex items-center justify-between gap-[130px]'>
          <div className='w-[70%]'>
          <img  src="https://i.ibb.co/nMW4LQH/pexels-ron-lach-10260876.jpg" alt="Model" className='grayscale' />
          </div>
          <div className='w-[40%]'>
            <h1 className='text-8xl  text-[#2b2b2b] absolute z-10 left-0 top-[200px]'>Exclusive <span className='pl-[45%] 
            '
            >Collections</span></h1>
            <div className="h-[2px] absolute bottom-[230px] w-[300px] bg-[#1b1b1b]"></div>
            <p className='text-2xl mt-4'>On Sale 50%</p>
            {/* border-b-2 border-black w-4 */}
          </div>
          <div className='w-[100%] mx-auto'>
           <img src="https://i.ibb.co/vBmw0cS/pexels-12193420.jpg" alt="model" className='grayscale w-full' />
          </div>
        </div>

        <FeaturedProducts />
      </>
    );
};

export default Home;