import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Child1 from '../../Assets/works_child1.png'
import Child2 from '../../Assets/works_child2.png'
import Child3 from '../../Assets/works_child3.png'

export default function Contact() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Header />} />
            </Routes>

            <header className="flex justify-center mt-[70px]">
                <div className="w-[675px]">
                    <h1 className="text-[#21243D] text-3xl font-[700] w-[500px]">Designing Dashboards with usability in mind</h1>
                    <div className="flex gap-[26px] items-center py-4">
                        <div className="px-[10px] h-[25px] text-white text-[18px] font-[900] rounded-[16px] bg-[#FF6464] mt-[-10px]">
                            2020
                        </div>
                        <p className="text-[#21243D] text-[20px]">Dashboard, User Experience Design</p>
                    </div>
                    <p className="w-[675px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </header>
            <section className="flex justify-center mt-[40px] ">
                <img className="w-[675px]" src={Child1} alt="Child" />
            </section>
            <section className="flex justify-center mt-[40px]">
                <div className="w-675px]">
                    <h1 className='font-extrabold text-3xl'>Heading 1</h1>
                    <h2 className='font-medium py-3'>Heading 2</h2>
                    <p className="w-[675px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
            </section>
            <section className="flex justify-center mt-[40px] ">
                <img className="w-[675px]" src={Child2} alt="Child" />
            </section>
            <section className="flex justify-center mt-[40px] ">
                <img className="w-[675px]" src={Child3} alt="Child" />
            </section>





            <Routes>
                <Route path='/' element={<Footer />} />
            </Routes>
        </div>
    )
}
