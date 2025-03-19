import React from 'react'

function Sample8() {
  return (
    <>
      <section className='max-w-3xl mx-auto shadow bg-white p-3'>
        <header className='text-center text-sm'>
          <h2>Pracas Upreti</h2>
          <h6>Kamalpokhri, Kathmandu</h6>
          <div className='flex gap-6 justify-center'>
            <p><strong>Email:</strong> pracas@hotmail.com</p>
            <p><strong>Phone:</strong> +977 98520 24365</p>
          </div>
        </header>
        <section>
          <div className='text-sm'>
            <h4 className='border-b-2'>ABOUT ME</h4>
            <p>UI/UX deisgner with an extensive experience of creating visual appealing designs since 2003 and have been working in graphics industry since 2003.</p>
          </div>

          <div className='text-sm my-2'>
            <h5 className='border-b-2'>Skill</h5>
            <ul className='list-disc ms-[-10pX]'>
              <li>Photography & Videography</li>
              <li>Graphics Design</li>
              <li>Communication</li>
              <li>Social Media Management</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* ------------education--------- */}
          <div className='text-sm my-2'>
            <h5 className='border-b-2'>EDUCATION</h5>
            <ul className='ms-[-30px] text-sm'>
              <li className='flex justify-between'>
                <p><strong>Quest Model College, Dharan
                  +2 Management</strong></p> <p>2019 - 2021</p>
              </li>

              <li className='flex justify-between'>
                <p><strong> Shaheed Smriti Campus, Pokhara </strong>
                </p> <p>2019 - 2021</p>
              </li>

              <li className='flex justify-between'>
                <p><strong>Bachelor of Business Studies </strong>
                </p> <p>2019 - 2021</p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className='border-b-2'>WORK EXPERIENCE</h4>
            <div className='flex justify-between items-center'>
              <p className='text-lg font-bold'>UI/UX Desinger</p>
              <p className='text-xs'>Feb 2022 - Jan 2025</p>
            </div>
            <span className='font-semibold text-sm'>SRIYOG Consulting Pvt. Ltd.</span>
            <ul className='list-disc text-xs ms-[-10px]'>
              <li>Work closely with Product Owners (POs) & Business Analysts (BAs).</li>
              <li>Conduct discovery research, user interviews, and usability testing.</li>
              <li>Shareed ideas and suggest improvements during peer review sessions.</li>
              <li>Manage app design workload independently or with another designer.</li>
              <li>Conduct discovery research, user interviews, and usability testing.</li>
            </ul>

            <div className='flex justify-between items-center'>
              <p className='text-lg font-bold'>Graphics Desinger</p>
              <p className='text-xs'>July 2019 - Jan 2022</p>
            </div>
            <p className='font-semibold text-sm'>Photography/ Videography</p>
            <ul className='list-disc text-xs ms-[-10px]'>
              <li>Work closely with Product Owners (POs) & Business Analysts (BAs).</li>
              <li>Conduct discovery research, user interviews, and usability testing.</li>
              <li>Shareed ideas and suggest improvements during peer review sessions.</li>
              <li>Manage app design workload independently or with another designer.</li>
              <li>Conduct discovery research, user interviews, and usability testing.</li>
            </ul>

            <div className='flex justify-between items-center'>
              <p className='text-lg font-bold'>Social Media Manager</p>
              <p className='text-xs'>Sep 2016 - April 2019</p>
            </div>
            <p className='font-semibold text-sm'>Photography/ Videography</p>
            <ul className='list-disc text-xs ms-[-10px]'>
              <li>Work closely with Product Owners (POs) & Business Analysts (BAs).</li>
              <li>Conduct discovery research, user interviews, and usability testing.</li>
              <li>Shareed ideas and suggest improvements during peer review sessions.</li>
              <li>Manage app design workload independently or with another designer.</li>
              <li>Conduct discovery research, user interviews, and usability testing.</li>
            </ul>

          </div>




        </section>
      </section>
    </>
  )
}

export default Sample8
