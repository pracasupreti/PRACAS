import React from 'react'

function Sample4() {
  return (
    <>
      <section className='max-w-3xl mx-auto shadow-lg p-8'>
        <div className='text-center'>
          <h2>Priyanka Pandey</h2>
          <div className='flex gap-2 mx-auto text-sm justify-center'>
            <p>Kathmandu,Nepal</p>
            <p>|</p>
            <p>priyankapandey2277@gmail.com</p>
            <p>|</p>
            <p>9848794705</p>
          </div>
          <div className='flex gap-2 mx-auto text-sm justify-center'>
            <p>www.linkedin.com/in/priyanka-pandey-44b83b256</p>
            <p>|</p>
            <p>https://github.com/priyanka2277</p>
          </div>
        </div>
        <div>
          <h5 className='border-b-2 pb-1 font-bold'>Professional Summary</h5>
          <p className='text-sm'>A dedicated and highly self motivated Java Intern with experience in backend development using Java, Spring Boot, and Hibernate. Currently pursuing a BSc.CSIT at Ascol College (8th semester), I have hands-on experience in building REST APIs, authentication mechanisms, and database management. Passionate about problem-solving and writing clean, efficient code, I adapt quickly to new technologies and thrive in collaborative environments. </p>
          <h5 className='border-b-2 pb-1 font-bold'>Skills</h5>
          <p className='text-base font-bold'>Languages</p>
          <p className='text-sm'>Java,JavaScript, C++,python, SQL, HTML, CSS</p>

          <p className='text-base font-bold'>Technologies and Tools</p>
          <p className='text-sm'>Spring Boot, Hibernate, Git, IntelliJ IDEA, MySQL, JUnit, Django</p>

          <p className='text-base font-bold'>Frameworks</p>
          <p className='text-sm'>Spring, Thymeleaf</p>

          <h5 className='border-b-2 pb-1 font-bold'>Experience</h5>
          <ul className='list-disc text-sm'>
            <li>
              <div className='flex justify-between'>
                <p className='font-bold'>Java Intern</p>
                <p><em>Amnil Technologies, Manbhawan, Lalitpur, Nepal</em></p>
              </div>
              <p>Duration: [26th August, 2024] - [25th November, 2024]
                <br />Responsibilities:
                <ul className='list-disc'>
                  <li>Assisted in the development of Java-based applications, utilizing Spring Boot and Hibernate for backend services.</li>
                  <li>Collaborated with the team to design and implement REST APIs for customer-facing features. </li>
                  <li>Gained hands-on experience with database management using MySQL. and Hibernate ORM for data persistence. </li>
                  <li>Implemented JWT based token for authentication and authorization </li>
                </ul></p>
            </li>
          </ul>
          <h5 className='border-b-2 pb-1 font-bold'>Education</h5>
          <div className='flex justify-between text-sm'>
            <p><strong>Ascol College,</strong> BSc. in computer science and information Technology (BSc. CSIT)</p>
            <p>2021-2025</p>
          </div>
          <ul className='list-disc ms-[-10px] text-sm'>
            <li><strong>Expected Graduation Date:</strong> June 2025 </li>
            <li><strong>Current Standing:</strong> 8th Semester </li>
            <li><strong>Relevant Coursework:</strong> Object-Oriented Programming, Data Structures and Algorithms, Software Engineering, Web Development, Databases, Networking, Java, Artifical Intelligence etc. </li>
          </ul>
          <div className='text-sm'>
            <h5 className='border-b-2 pb-1 font-bold'>Projects</h5>
            <p>Client Management System - Spring Boot, Thymeleaf, MySQL., Hibernate, JPA </p>
            <ul className='list-disc'>
              <li>Developed a web-based client management system with full CRUD functionality. </li>
              <li>Implemented Spring Boot MVC architecture with Thymeleaf for dynamic Ul rendering. </li>
              <li>Used DTOs to separate controller logic from business logic. </li>
              <li>Applied Jakarta Validation for form input validation and error handling. </li>
              <li>Managed data persistence with Spring Data JPA and MySQL.. </li>
              <li> Designed user-friendly interfaces for creating, updating, and deleting client records.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Sample4
