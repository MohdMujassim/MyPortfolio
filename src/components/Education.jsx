import React from 'react'
import VerticalCard from './Card';
const Education = () => {
  return (
    <div name='education' className='w-full  antialiased h-screen bg-[#0a192f]'>
   <div className="min-h-screen py-8 md:px-32 md:pl-[200px] pt-[200px] sm:pt-[150px] px-4">
      <h1 className="text-3xl font-bold text-center text-gray-300 mb-10 border-b-[2px] border-yellow-600 ">Education</h1>
      <div className="flex flex-col space-y-4">
        <VerticalCard 
          imageUrl=""
          link="https://www.cdac.in/index.aspx?id=ND/"
          title="Masters of Computer Application"
          college="C-DAC"
          description="2022-2024 | MCA | Pursuing | 7.22 CGPA"
        />
        <VerticalCard
          imageUrl=""
          link="https://www.amu.ac.in/"
          title="P.G. Diploma Business Analytics"
          college="Aligarh Muslim University"
          description="2021-2021 | PGDBA | 8.44 CGPA"
        />
        <VerticalCard
          imageUrl=""
          link="https://jmi.ac.in/"
          title="Bachelor of Science in Aero-Electronics"
          college="Jamia Millia Islamia"
          description="2018-2021 | BSC | 8.42 CGPA"
        />
        <VerticalCard
          imageUrl=""
          link="https://www.amu.ac.in/"
          title="Intermediate"
          college="Aligarh Muslim University"
          description="2017 | Science | 70 Percentage"

        />
        
      </div>
    </div>
      
    </div>
  )
}

export default Education
