import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Img1 from "../../Assets/header-img.png";
import WorksExport from './WorksExport';


export default function Works() {
    return (

        <div className="container">

            <Routes>
                <Route path='/' element={<Header />} />
            </Routes>

            <header className="pt-[140px] pb-[71px] ps-4 pe-4 w-full flex gap-[115px] justify-center">
                <div className=" max-w-[500px] flex flex-col gap-[40px] items-start">
                    <h1 className="text-[#21243D] text-[44px] font-bold">
                        Hi, I am John, Creative Technologist
                    </h1>
                    <p className="text-[#21243D]">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt nostrud amet.
                    </p>
                    <button className="pt-[9px] px-[20px] pb-[17px] bg-[#FF6464] text-white rounded-[2px]">
                        Download Resume
                    </button>
                </div>
                <div>
                    <img src={Img1} alt="Headerimg" />
                </div>
            </header>



            <section className="w-full pt-[30px] flex justify-center items-center bg-[#EDF7FA] py-10">
                <div className="h-[396px]">
                    <div className="flex w-full justify-between py-4">
                        <h5 className="text-[22px] font-normal">Recent posts</h5>
                        <p className="text-[#00A8CC] text-[16px]">View all</p>
                    </div>
                    <div className="flex gap-5">
                        <div className="w-[418px] h-[290px] flex justify-between flex-col bg-white p-[24px]">
                            <h1 className="text-[26px] font-[700]">
                                Making a design system from scratch
                            </h1>
                            <p className="text-[18px]">12 Feb 2020 | Design Pattern</p>
                            <p className="text-[16px]">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className="w-[418px] h-[290px] flex justify-between flex-col bg-white p-[24px]">
                            <h1 className="text-[26px] font-[700]">
                                Creating pixel perfect icons in Figma
                            </h1>
                            <p className="text-[18px]">12 Feb 2020 | Figma, Icon Design</p>
                            <p className="text-[16px]">
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                amet sint. Velit officia consequat duis enim velit mollit.
                                Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                    </div>
                </div>
            </section>





            <section className='py-10'>
            <h2 className="text-[22px] font-normal ml-[320px] py-4 ">Recent posts</h2>

                <Routes>
                    <Route path='/' element={<WorksExport />} />
                </Routes>

            </section>
            <Routes>
                <Route path='/' element={<Footer />} />
            </Routes>
        </div>

    )
}
