import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import WorksExport from './WorksExport'
import Components from '../../Assets/Components.png'

export default function Work() {
    return (
        <div className='container'>

            <Routes>
                <Route path='/' element={<Header />} />
            </Routes>

            <div className='flex flex-col gap-[40px] items-start pl-11 py-10'>
                <h1 className='font-extrabold text-[44px] ml-72 '>Work</h1>
            </div>

            <Routes>
                <Route path='/' element={<WorksExport />} />
            </Routes>

            <header className=' flex flex-col gap-[40px] items-center py-10'>
                <div className="flex gap-4 border-b-2 pb-10">
                    <div>
                        <img src={Components} alt="dashboard" />
                    </div>
                    <div className="w-[600px] flex flex-col justify-between h-[180px]">
                        <h1 className="font-[700] text-[30px] text-[#21243D]">
                            Components
                        </h1>
                        <div className="flex gap-[26px] items-center">
                            <div className="px-[10px] h-[25px] text-white text-[18px] font-[900] rounded-[16px] bg-[#142850] mt-[-10px]">
                                2018
                            </div>
                            <p className="text-[#8695A4] text-[20px]">Components, Design</p>
                        </div>
                        <p className='text-[#000]'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>
            </header>

            <Routes>
                <Route path='/' element={<Footer />} />
            </Routes>

        </div>
    )
}
