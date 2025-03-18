import React from 'react'

function Sample6() {
    return (
        <>
            <div className="max-w-3xl mx-auto bg-white p-10 shadow-lg">
                {/* HEADER */}
                <header className="text-center mb-6">
                    <h1 className="text-2xl font-bold uppercase">Aashreni Dhakal</h1>
                    <p className="text-lg text-gray-600">UI/UX Designer</p>
                    <p className="text-sm text-gray-500">Kavresthali, Kathmandu • 9808310643 • daashreni@gmail.com</p>
                </header>
                {/* SUMMARY */}
                <section className="mb-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                        Dedicated UI/UX designer who specializes in user-centered design, wireframing, and prototyping with the use of software such as Figma and Adobe XD. Happy to discuss solutions and potential workarounds with those around you and able to adapt to suit an innovative pipeline of solutions and emerging trends in design.
                    </p>
                </section>
                {/* EDUCATION */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b pb-1">EDUCATION</h2>
                    <div className="mt-2 flex justify-between">
                        <div>
                        <p className="font-semibold">Bachelor of Science in Computer Science and Information Technology</p>
                        <p className="text-sm text-gray-600">Patan Multiple Campus </p></div>
                        <div className='text-end'>
                        <p> Patandhoka, Lalitpur <br />
                        <span className="text-sm text-gray-500">Apr 2021 - Present</span></p>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                        <p className="font-semibold">Higher Education</p>
                        <p className="text-sm text-gray-600">Trinity International College </p>
                        </div>
                        <div className='text-end'>
                         <p> Kathmandu</p>
                        <p className="text-sm text-gray-500">Jun 2019 - Nov 2021</p>
                        </div>
                    </div>
                </section>
                {/* PROJECTS */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b pb-1">PROJECTS</h2>
                    <div className="mt-2">
                        <p className="font-semibold">iMessage</p>
                        <p className="text-sm text-gray-700">
                            Created a simple and user-friendly messenger design, prioritizing clarity, ease of use, and intuitive navigation.
                        </p>
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold">Portfolio</p>
                        <p className="text-sm text-gray-700">
                            Built a responsive personal portfolio website using HTML, CSS, and JavaScript to showcase projects and skills.
                        </p>
                    </div>
                </section>
                {/* TRAINING/CERTIFICATIONS */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b pb-1">TRAINING/CERTIFICATIONS</h2>
                    <div className="mt-2">
                        <p className="font-semibold">UI/UX Workshop</p>
                        <p className="text-sm text-gray-600">Vrit Technologies</p>
                        <p className="text-sm text-gray-500">3 Days UI/UX Workshop</p>
                    </div>
                </section>
                {/* SKILLS */}
                <section className="mb-6">
                    <h2 className="text-lg font-bold border-b pb-1">SKILLS</h2>
                    <p className="text-sm text-gray-700 mt-2">
                        Communication, Figma, Web designing (UI/UX design, Figma and web Hosting), HTML, CSS, JavaScript,
                        Design Software: Canva, Programming languages: C, C++, PHP, CSS, JavaScript, SQL, DSA
                    </p>
                </section>
                {/* LANGUAGE */}
                <section>
                    <h2 className="text-lg font-bold border-b pb-1">LANGUAGE</h2>
                    <p className="text-sm text-gray-700 mt-2">English</p>
                </section>
            </div>

        </>
    )
}

export default Sample6
