import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function Blog() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Header />} />
            </Routes>

            <header className='flex flex-col items-center gap-[55px] mt-[60px]'>
        <h1 className='w-[680px] font-extrabold text-[44px] '>Blog</h1>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[680px] pb-[42px]">
          <div className="w-[672px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[500] text-[30px] text-[#21243D]">
            UI Interactions of the week
            </h1>
            <div className="flex gap-[26px]">
              <h5 className='text-[#21243D] text-xl'>12 Feb 2019</h5>
              <span>|</span>
              <p className="text-[#8695A4] text-[20px] mt-[-3px]">Express, Handlebars</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[680px] pb-[42px]">
          <div className="w-[672px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[500] text-[30px] text-[#21243D]">
            UI Interactions of the week
            </h1>
            <div className="flex gap-[26px]">
              <h5 className='text-[#21243D] text-xl'>12 Feb 2019</h5>
              <span>|</span>
              <p className="text-[#8695A4] text-[20px] mt-[-3px]">Express, Handlebars</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[680px] pb-[42px]">
          <div className="w-[672px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[500] text-[30px] text-[#21243D]">
            UI Interactions of the week
            </h1>
            <div className="flex gap-[26px]">
              <h5 className='text-[#21243D] text-xl'>12 Feb 2019</h5>
              <span>|</span>
              <p className="text-[#8695A4] text-[20px] mt-[-3px]">Express, Handlebars</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[680px] pb-[42px]">
          <div className="w-[672px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[500] text-[30px] text-[#21243D]">
            UI Interactions of the week
            </h1>
            <div className="flex gap-[26px]">
              <h5 className='text-[#21243D] text-xl'>12 Feb 2019</h5>
              <span>|</span>
              <p className="text-[#8695A4] text-[20px] mt-[-3px]">Express, Handlebars</p>
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[20px] h-[180px] border-solid border-b-2 w-[680px] pb-[42px]">
          <div className="w-[672px] flex flex-col justify-between h-[180px]">
            <h1 className="font-[500] text-[30px] text-[#21243D]">
            UI Interactions of the week
            </h1>
            <div className="flex gap-[26px]">
              <h5 className='text-[#21243D] text-xl'>12 Feb 2019</h5>
              <span>|</span>
              <p className="text-[#8695A4] text-[20px] mt-[-3px]">Express, Handlebars</p>
            </div>
            <p>
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
