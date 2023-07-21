import React from 'react';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';

const Home = () => {
    return (
      <>
          <div className='w-5/6 mx-auto text-center'>
          <div className='md:flex items-center justify-between gap-[130px]'>
          <div className='md:w-[70%]'>
          {/* <img  src="../../../public/allcountry.png" alt="Model" className='grayscale' /> */}
          <img  src="https://i.ibb.co/nMW4LQH/pexels-ron-lach-10260876.jpg" alt="Model" className='grayscale' />
          </div>
          <div className='md:w-[40%]'>
            <h1 className='md:text-8xl text-4xl  text-[#2b2b2b] md:absolute z-10 left-0 top-[200px]'>Exclusive <span className='md:pl-[45%] 
            '
            >Collections</span></h1>
            <div className="h-[2px] absolute bottom-[230px] w-[300px] bg-[#1b1b1b] hidden md:block"></div>
            <p className='md:text-2xl md:mt-4 text-xl'>On Sale 50%</p>
            {/* border-b-2 border-black w-4 */}
          </div>
          <div className='md:w-[100%] mx-auto w-0'>
           <img src="https://i.ibb.co/vBmw0cS/pexels-12193420.jpg" alt="model" className='grayscale w-full' />
          </div>
        </div>

        <FeaturedProducts type={'Feature'}/>
        <Categories />
        <FeaturedProducts type={'Trending'}/>
        </div>
        <Contact />
      </>
    );
};

export default Home;