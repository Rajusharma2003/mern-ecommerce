import Button  from '@mui/material/Button'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// icon menu
import { RiMenu2Line } from "react-icons/ri";

// angle icon
import { TfiAngleDown } from "react-icons/tfi";
import CategoryPanel from './CategoryPanel';

// import css file
import './style.css';

const NavigationB = () => {

    const[isOpenCatPanel, setIsOpenCatPanel] = useState(false)

    const openCategoryPanel = () => {
        setIsOpenCatPanel(true);
    }

    return (
        <>
            <nav className='py-2'>
                <div className="container flex items-center justify-end gap-8">
                    <div className="col_1 w-[20%]">
                        <Button className='!text-black gap-2 w-full' onClick={openCategoryPanel}>
                            <RiMenu2Line />
                            Shop By Categories
                            <TfiAngleDown className='text-[13px] ml-auto font-bold '/>
                        </Button>
                    </div>
                    <div className="col_2 w-[80%] ">
                    {/* there is a nav and this is the main class to handle all the dropdown both submenu and innersubmenu */}
                        <ul className="flex items-center justify-around gap-3 nav">

                            {/* Home section */}
                            <li className="list-none">
                                <Link to="/" className='link transition font-[500] text-[14px]'>Home</Link>
                            </li>

                            {/* fashion section */}
                            <li className="list-none relative">
                                <Link to="/" 
                                    className='link transition font-[500] text-[14px] '>
                                    Fashion
                                </Link>

                                {/* Hover table submenu*/}
                                <div className='submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all'>
                                    <ul className='flex flex-col gap-2 p-3'>
                                        <li className="list-none w-full relative">
                                            <Link to="/">
                                                <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>
                                                Men
                                                </Button>
                                            </Link>

                                             {/* men Hover table innerSubmenu*/}
                                            <div className='submenu absolute top-[0%] left-[100%] min-w-[200px] bg-white shadow-md opacity-0 transition-all'>
                                                <ul className='flex flex-col gap-2 p-3'>
                                                    <li className="list-none w-full">
                                                        <Link to="/">
                                                            <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>T-Shirt</Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/">
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans</Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/">
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Footwear</Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/">
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Watch</Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/">
                                                    <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Pents</Button>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* End */}
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/">
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/">
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/">
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                                            </Link>
                                        </li>

                                        <li className="list-none w-full">
                                            <Link to="/">
                                           <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>


                            <li className="list-none">
                                <Link to="/" className='link transition font-[500] text-[14px]'>Electronics</Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className='link transition font-[500] text-[14px]'>Bags</Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className='link transition font-[500] text-[14px]'>Footwear</Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className='link transition font-[500] text-[14px]'>Groceries</Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className='link transition font-[500] text-[14px]'>Beauty</Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className='link transition font-[500] text-[14px]'>Wellness</Link>
                            </li>
                            <li className="list-none">
                                <Link to="/" className='link transition font-[500] text-[14px]'>Jewellery</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* import Category section */}
            <CategoryPanel  isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>

        </>
    );
    
};

export default NavigationB
