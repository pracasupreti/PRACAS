import React from 'react';

function Sample1() {
  return (
    <div className="max-w-3xl mx-auto p-5 bg-white shadow-md">
      <section className="flex items-center mb-4">
        <img className="h-25 w-25 rounded-full" src="/src/assets/cv/pracas.png" alt="headshot" />
        <div className="ml-12">
          <h1 className="text-2xl font-bold tracking-widest">PRACAS Upreti</h1>
          <p className="text-gray-600">FOUNDER</p>
          <hr className='w-[450px]' />
        </div>
      </section>
      <section className="flex gap-6">
        <div className="w-1/3 pr-5">
          <div className="mb-4">
            <h3 className="font-semibold">CONTACT</h3>
            <p className="text-sm text-gray-700">📞 +977-9852025735</p>
            <p className="text-sm text-gray-700">✉ info@sriyog.com</p>
            <p className="text-sm text-gray-700">🌐 sriyog.com</p>
            <p className="text-sm text-gray-700">📍 REM.WORK, Kamalpokhri</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">EDUCATION</h3>
            <p className='mb-3'> <span className='text-lg font-bold'>Bachelor of Design </span> <br /><span className='text-base font-semibold'> Wardiere University </span><br /><span className='text-sm'> 2006-2008</span></p>
            <p className='mb-3'> <span className='text-lg font-bold'>Bachelor of Design </span> <br /><span className='text-base font-semibold'> Wardiere University </span><br /><span className='text-sm'> 2006-2008</span></p>
          </div>
          <div className="mb-5">
            <h3 className="font-semibold">EXPERTISE</h3>
            <p>Web Design</p>
            <p>Branding</p>
            <p>Graphic Design</p>
            <p>SEO</p>
            <p>Marketing</p>
          </div>
          <div>
            <h3 className="font-semibold">LANGUAGE</h3>
            <p>English </p> 
            <p> French</p>
          </div>
        </div>
        <div className="w-2/3  ">
          <div className="mb-10 h-40">
            <h3 className="font-semibold">ABOUT ME</h3>
            <p className="text-sm text-gray-700">Pracas Upreti's journey from a startup founder to a technology-driven change-maker in Biratnagar, Nepal, exemplifies the profound impact that individuals can have when they combine innovation with a commitment to social responsibility.</p>
          </div>
          <div className="mb-10">
            <h3 className="font-semibold">WORK EXPERIENCE</h3>
            <ul className="list-disc ml-5 border-s-2 border-[#cccc]">
              <li className="mb-5 ms-[-18px]">
                <p>Jan 2022 - Present <br />
                  <span className="text-base">Company</span> <br />
                  <span className='text-lg font-bold'>Digital Marketing Manager</span> <br />
                  <span className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque maiores sint sunt dicta labore, beatae fugit id fuga aliquam. Iusto explicabo esse beatae et? Magni earum aliquam aspernatur! Natus!</span>
                </p>
              </li>
              <li className="mb-5 ms-[-18px]">
                <p>Jan 2022 - Present <br />
                  <span className="text-base">Company</span> <br />
                  <span className='text-lg font-bold'>Digital Marketing Manager</span> <br />
                  <span className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia neque maiores sint sunt dicta labore, beatae fugit id fuga aliquam. Iusto explicabo esse beatae et? Magni earum aliquam aspernatur! Natus!</span>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">REFERENCE</h3>
            <div className="flex justify-between mt-2">
              <div>
                <h4 className="font-semibold text-lg">Estelle Dracy</h4>
                <p className="text-sm text-gray-700">Wardiere Inc. / CEO <br />
                Phone: +123-456-7890 <br />
                Email: hello@reallygreatsite.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Estelle Dracy</h4>
                <p className="text-sm text-gray-700">Wardiere Inc. / CEO <br />
                Phone: +123-456-7890 <br />
                Email: hello@reallygreatsite.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sample1;
