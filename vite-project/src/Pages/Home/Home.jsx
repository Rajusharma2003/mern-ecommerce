import React from 'react'
import HomeSlider from '../../Components/Header/HomeSlider/HomeSlider'
import CatSlider from '../../Components/Header/CatSlider/CatSlider'


// react icons
import { TbTruckDelivery } from "react-icons/tb";

const Home = () => {
  return (
    <>
      {/* this is the home slider */}
      <HomeSlider/>
      {/* this is the category slider */}
      <CatSlider/>
      

    {/* free shipping  section*/}
      <section className='bg-white py-5'>
        <div className='container'> 
           <div className='freeShipping w-full p-4 border border-[#ff5252] rounded-lg flex items-center justify-between'>
             <div className='col1 flex items-center gap-4'>
                 <TbTruckDelivery className='text-[50px] text-[#ff5252]' />
                 <span className='text-[20px] font-[600]'>Free Shipping</span>
             </div>

            {/* this is the col2 */}
             <div className='col2 '>
              <p className='mb-0 font-[500]'>
                Free Delivery Now On Your First Order And Over ₹2000
              </p>
             </div>

             {/* this is the col3 */}
              <p className='text-[30px] font-bold'>
                - Only ₹2000
              </p>
           </div>
        </div>
      </section>


      
      <br/> <br/>
<br/><br/><br/><br/><br/>
    </>
  )
}

export default Home
