import React from 'react'

function Sample5() {
  return (
    <>
      <section className='max-w-3xl flex shadow mx-auto'>
        <div className='w-[35%] bg-blue-950 py-5 px-4'>
          <img className='w-[150px] h-[150px] mx-auto' src="/src/assets/cv/pracas.png" alt="headshot" />
          <div className='my-3 text-sm text-white'>
            <h5 className='py-1 border-b uppercase'>Contact</h5>
            <p>9866434144 <br />suzalshrestha00@gmail. com <br />Madhyapur Thimi 4, bhaktapur</p>
          </div>
          <div className='my-3 text-sm text-white uppercase'>
            <h5 className='py-1 border-b'>Education</h5>
            <p>
              <strong>Secondary Level </strong> <br />
              Nawaratna English Secondary School</p>
            <p>
              <strong>Higher Secondary </strong> <br />
              Seabird International College</p>
            <p>
              <strong>BSc (Hons) Computer System Engineering</strong> <br />
              International School of Management and technology (ISMT)/Kathmandu/Present</p>
            <p className='font-bold'>University Of Sundarland</p>
          </div>
          <div className='my-3 text-sm text-white'>
            <h5 className='py-1 border-b uppercase'>Skills</h5>
            <ul className='list-disc ms-[-10px]'>
              <li>UI/UX Designing-Skilled</li>
              <li>HTML and CSS</li>
            </ul>
          </div>
          <div className='my-3 text-sm text-white'>
            <h5 className='py-1 border-b uppercase'>Language</h5>
            <ul className='ms-[-30px]'>
              <li>Nepali</li>
              <li>English</li>
            </ul>
          </div>
        </div>
        <div className='w-[62%] px-3 py-5 text-sm'>
          <h2>Sujal shrestha</h2>
          <p><strong>UI/UX Designer</strong></p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat rem, illo voluptate qui optio, excepturi ducimus eum ipsum autem nemo minus, harum asperiores in dolore modi sunt accusamus voluptas placeat.</p>

          <div className='my-3'>
            <h5 className='pb-1 border-b uppercase'>Experience</h5>
            <ul className='list-disc ms-[-10px]'>
              <li>Internship Completed at Open My Network LLC (OMN). <br /> [August 2024] - [November 2024]</li>
            </ul>
          </div>

          <div className='my-3'>
            <h5 className='pb-1 border-b uppercase'>Training/Certification</h5>
            <ul className='list-disc ms-[-10px]'>
              <li><strong>UI/UX designing</strong> <br /> 
              Broadway Infosys / 2024
              <br />
              Certificate No. B19114</li>
              <li>3 days Frontend Workshop</li>
            </ul>
          </div>

          <div className='my-3'>
            <h5 className='pb-1 border-b uppercase'>Projects</h5>
            <ul className='list-disc ms-[-10px]'>
              <li>OMN's Project</li>
              <li>Website development via WIX <br />
              https://suzalshrestha00.wixsite.com/my-site-1</li>
              <li>Case study on Mobile App Design <br />
              https://behance.net/suzalc-restha</li>
            </ul>
          </div>

        </div>
      </section>
    </>
  )
}

export default Sample5
