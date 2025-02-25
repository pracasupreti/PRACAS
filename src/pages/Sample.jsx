import React from 'react'

const Sample = () => {
  return (
    <div className='p-5 absolute top-10 ml-[210px] mr-[26px]  '>
        <div className='flex mt-4 '>


       <img src="https://i0.wp.com/ridethewave.co/wp-content/uploads/2023/11/Inspiring-Headshot-Examples-for-Professionals-and-Graduates.png?fit=739%2C924&ssl=1"
            alt="headshot" 
            className='w-[110px] h-[100px] rounded-full'/>

              <h1 className='font-bold text-4xl ml-16 mt-auto mb-auto'>Lou Alvarez</h1>
       
       </div>
       <div className='flex mt-[90px] '>
       <div className='  bg-orange-300 w-[257px] pl-5 pt-2 h-[120px] gap-0 '> 
        <h1 className='text-2xl   '>Contact</h1>
        <p className='mt-[-10px]'>Santa Clara, CA 95050</p>
              
        <p className='mt-[-19px]'><strong>Mobile:</strong> 555-555-555</p>
   
                <p className=' mt-[-18px]' >example@example.com</p>
       </div>

       <div className='mt-[-9px] w-[70%] p-[20px] ml-8'>
       <h3>PROFESSIONAL SUMMARY</h3>
                <p className='text-[16px]'>Talented tutor offering outstanding communication and problem-solving
                    skills. Foster positive learning environment by encouraging students to
                    develop individual skills. Specializing in 1:1 instruction, team
                    collaboration and relations with students, parents and support staff.
                    Smart candidate with six years of experience that seeks to become a
                    teacher to provide an excellent learning environment</p>
       </div>
       </div>

     <div className='flex mt-3 mr-3'>
     <div>
                <h3 className=' font-bold'>Skill</h3>
                <ul className='list-disc list-inside text-sm'>
                    <li>Individualized instruction</li>
                    <li> Elementary education</li>
                    <li> Spanish language writing</li>
                    <li> assessments</li>
                    <li> Building blocks of learning</li>
                    <li> Progress reporting</li>
                    <li> Homework assistance</li>
                    <li> Verbal and written</li>
                    <li> communication</li>
                    <li> Spanish grammar instruction</li>
                </ul>
            </div>
         <div className='mt-[45px] ml-[88px] '>
          <div>
          <h3 className='text-2xl font-bold'>WORK HISTORY</h3>
         <p className='mt-[-10px]'> April 2020-Current</p>
         <p className='mt-[-16px]'><span className='font-bold'>Spanish Tutor,Learning Bee's,</span> Santa Clara,CA</p>
         <ul className='list-disc list-inside'>
                    <li>Instruct students on Spanish grammar, pronunciation, spelling,
                        vocabulary, composition and dialogue.</li>
                        <li>Develop lessons incorporating cultural norms and traditions for
                        Spanish-speaking countries around the world.</li>
                        <li>Teach pronunciation tactics, introduce essential words and conduct
                        reading drills weekly for groups of eight elementary students.</li>
                </ul>
          </div>

  
         </div>
            
     </div>

     <div className='flex mt-7'>
      <div>
      <h1 className='text-2xl font-bold '>Education</h1>
      <p className='mt-[-10px]'>05/2017 <br/>
                    Bachelor of Arts:Spanish Education <br/>
                    <strong>California State University</strong>, San <br/>
                    Bernardino, CA
                </p>
      </div>
      <div className='ml-[88px] mt-[32px]'>
    <p>August 2018- March 2020 <br/> 
      <span className='font-bold'>Special Education Volunteer, Santa Clara Children</span>
    </p>
        
      </div>

     </div>
        
       
    </div>
    
  )
}

export default Sample