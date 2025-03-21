import React from 'react'

function Sample7() {
    return (
        <>
            <section className='max-w-3xl mx-auto shadow bg-white'>
                <header className='p-4 my-2 flex justify-between items-center border-b-2'>
                    <div>
                        <h2>Pracas Upreti</h2>
                        <h6>UI/UX Designer</h6>
                    </div>
                    <img className='h-[150px] w-[150px]' src="/src/assets/cv/pracas.png" alt="" />
                </header>
                <section className='flex gap-5 px-4'>
                    {/* -------------left------------ */}
                    <div className='w-[35%] border-e-2'>
                        {/* ------------contact--------- */}
                        <div className='text-sm my-2'>
                            <h5 className='border-b-2'>CONTACT</h5>
                            <p><i class="bi bi-telephone"></i> +977 98520 24365</p>
                            <p><i class="bi bi-envelope"></i> pracas@hotmail.com</p>
                            <p><i class="bi bi-geo-alt"></i> Kamalpokhri, Kathmandu</p>
                        </div>
                        {/* ------------education--------- */}
                        <div className='text-sm my-2'>
                            <h5 className='border-b-2'>EDUCATION</h5>
                            <ul className='ms-[-30px] text-sm'>
                                <li>
                                    <p><strong>Quest Model College, Dharan
                                        +2 Management</strong>
                                        <br />2019 - 2021</p>
                                </li>

                                <li>
                                    <p><strong> Shaheed Smriti Campus, Pokhara </strong>
                                        <br />2019 - 2021</p>
                                </li>

                                <li>
                                    <p><strong>Bachelor of Business Studies </strong>
                                        <br />2019 - 2021</p>
                                </li>
                            </ul>
                        </div>
                        {/* ------------skill--------- */}
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
                        {/* ------------language--------- */}
                        <div className='text-sm my-2'>
                            <h5 className='border-b-2'>LANGUAGE</h5>
                            <p>Nepali</p>
                            <p>English</p>
                        </div>
                    </div>
                    {/* ------------------right----------------- */}
                    <div className='w-[60%]'>
                        {/* --------------about------------ */}
                    <div className='text-sm my-2'>
                            <h5 className='border-b-2'>ABOUT ME</h5>
                            <p>UI/UX deisgner with an extensive experience of creating visual appealing designs since 2003 and have been working in graphics industry since 2003.</p>
                        </div>

                        <div className='text-sm my-2'>
                            <h5 className='border-b-2'>EXPERIENCE</h5>
                            <div className='flex justify-between items-center'>
                                <p className='text-lg font-bold'>UI/UX Desinger</p>
                                <p className='text-xs'>Feb 2022 - Jan 2025</p>
                            </div>
                            <p className='font-semibold text-sm'>SRIYOG Consulting Pvt. Ltd.</p>
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
                    </div>
                </section>
            </section>
        </>
    )
}

export default Sample7
