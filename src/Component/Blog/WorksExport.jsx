import React from 'react'
import Dashboards from "../../Assets/dashboards.png";
import Portraits from "../../Assets/portraits.png";
import Malayalam from "../../Assets/malayalam.png";



export default function WorksExport() {
    return (
        <div>
            <header className="  flex flex-col gap-[40px] items-center">


                <div className="flex gap-4 border-solid border-b-2 pb-10">
                    <div>
                        <img src={Dashboards} alt="dashboard" />
                    </div>
                    <div className="w-[600px] flex flex-col justify-between h-[180px]">
                        <h1 className="font-[700] text-[30px] text-[#21243D]">
                            Designing Dashboards
                        </h1>
                        <div className="flex gap-[26px] items-center">
                            <div className="px-[10px] h-[25px] text-white text-[18px] font-[900] rounded-[16px] bg-[#142850] mt-[-10px]">
                                2020
                            </div>
                            <p className="text-[#8695A4] text-[20px]">Dashboard</p>
                        </div>
                        <p className='text-[#000]'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 border-b-2 pb-10 ">

                    <div>
                        <img src={Portraits} alt="dashboard" />
                    </div>
                    <div className="w-[600px] flex flex-col justify-between h-[180px]">
                        <h1 className="font-[700] text-[30px] text-[#21243D]">
                            Vibrant Portraits of 2020
                        </h1>
                        <div className="flex gap-[26px] items-center">
                            <div className="px-[10px] h-[25px] text-white text-[18px] font-[900] rounded-[16px] bg-[#142850] mt-[-10px]">
                                2018
                            </div>
                            <p className="text-[#8695A4] text-[20px]">Illustration</p>
                        </div>
                        <p className='text-[#000]'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 border-b-2 pb-10 ">
                    <div>
                        <img src={Malayalam} alt="dashboard" />
                    </div>
                    <div className="w-[600px] flex flex-col justify-between h-[180px]">
                        <h1 className="font-[700] text-[30px] text-[#21243D]">
                            36 Days of Malayalam type
                        </h1>
                        <div className="flex gap-[26px] items-center">
                            <div className="px-[10px] h-[25px] text-white text-[18px] font-[900] rounded-[16px] bg-[#142850] mt-[-10px]">
                                2018
                            </div>
                            <p className="text-[#8695A4] text-[20px]">Typography</p>
                        </div>
                        <p className='text-[#000]'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                            amet sint. Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </div>



            </header>
        </div>
    )
}
