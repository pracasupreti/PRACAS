import React from 'react'

const Sample_five = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-white p-4">
          <div className="max-w-[780px] w-full  bg-white shadow-lg flex">

            <div className="w-1/3 bg-[#ABADB1] text-white p-6 flex flex-col items-center">
              <div className="w-40 h-40 bg-white rounded-full mb-6"></div>
              <h2 className=" font-bold text-[#4F5360] text-2xl border-b-2 pb-1 mr-20 border-[#4F5360]">CONTACT</h2>
              <p className="mt-2 text-sm mr-28">9804920931</p>
              <p className="text-sm ml-2 mt-[-15px]">nirojkarki.personal@gmail.com</p>
    
              <h2 className="text-2xl font-bold mt-6  text-[#4F5360]  border-b-2 pb-1 mr-20 border-[#4F5360]">EDUCATION</h2>
              <ul className='list-disc'>
              <li className="mt-2 text-sm">+2 Graduate</li>
              <p className="text-[12px]  text-[#4F5360]">Global Educational Academy (2020 - 2022)</p>
              <li className="mt-2 text-sm">BSc(Hons) Computer Science</li>
              <p className="text-[12px]  text-[#4F5360]">Herald College Kathmandu (2023 - Current)</p>
              </ul>
              <h2 className="text-2xl font-bold mt-6  text-[#4F5360]  border-b-2 pb-1 mr-20 border-[#4F5360]">PROJECTS</h2>
              <p className="mt-2 text-sm">I have shared my created UI design on Behance & Dribble for learning purposes. You can access it through the link:</p>
              <a href="https://www.behance.net/nirvaankarki" className="text-blue-800 text-[12px]">https: //www.behance.et/nirvaankarki</a>
              <a href="https://www.dribbble.com/nirvaankarki" className="text-blue-800 text-[12px]">https: //www.dribble.com/nirvaankarki</a>
            </div>
    
     
            <div className="w-2/3 p-6 ">
            <div className='bg-[#4F5360]   '>
              <h1 className="text-3xl font-bold text-white">NIRVAAN KARKI</h1>
              <p className="text-lg font-semibold text-white">UI/UX ENTHUSIAST</p>
              </div>
             
    
              <h2 className="text-3xl font-bold text-white bg-[#4F5360] mt-6">ABOUT ME</h2>
              <p className="text-sm text-gray-700 mt-2">
                Aspiring UI/UX Designer passionate about creating intuitive and user-friendly digital experiences. Eager to gain hands-on experience through an internship to refine my skills and contribute to real-world projects.
              </p>
    
              <h2 className="text-3xl font-bold text-white bg-[#4F5360] mt-6">SKILLS</h2>
              <div className="mt-4">
                <h3 className="text-lg font-semiboldtext-black">WIREFRAMING, PROTOTYPING, USER FLOWS</h3>
                <ul className='list-disc'>
                <li className="text-sm text-gray-600">Have potential to design intuitive interfaces, create wireframes, and develop user flows that enhance user experience.</li>
                </ul>
               
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-black">DESIGN TOOLS: FIGMA, ILLUSTRATOR</h3>
                <ul className='list-disc'>
                <li className="text-sm text-black">Familiar with tools for designing and prototyping digital products. Learning phase.</li>
                </ul>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-black">USER RESEARCH</h3>
               <ul className='list-disc'>
                <li className="text-sm text-black">Conducting research to understand user needs.</li>
                </ul>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-black">HTML, CSS (BASIC UNDERSTANDING)</h3>
                <ul className='list-disc'>
                <li className="text-sm text-black">Familiarity with front-end technologies to effectively communicate design ideas with developers.</li>
                </ul>
              </div>
              <div className="mt-2">
                <h3 className="text-lg font-semibold text-black">COMMUNICATION & PRESENTATION</h3>
               <ul className='list-disc'>
                <li className="text-sm text-black">Verbal and written communication skills to collaborate effectively with teams and present design concepts clearly.</li>
                <li className='text-sm text-black'>Ability to effectively convey ideas, designs, and research findings through engaging and well-structured presentations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Sample_five