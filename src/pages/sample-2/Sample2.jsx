import React from 'react'
import './Sample2.css'

function Sample2() {
  return (
    <>
       <div>
  <section>
    <div className="top">
      <img src="/src/assets/cv/pracas.png" alt="profile" />
      <div>
        <div className="name">
          <h1>PAUL <span style={{color: '#333'}}>CARTER</span></h1>
          <p>BRAND MANAGER</p>
        </div>
        <div className="contact">
          <p>1234, Town City, XYZ, USA</p>
          <ul style={{listStyle: 'none', marginTop: 5, gap: 10, display: 'flex'}}>
            <li><i className="bi bi-phone" /> +123 456 7890</li>
            <li>|</li>
            <li><i className="bi bi-envelope" /> exmaple@example.com</li>
            <li>|</li>
            <li><i className="bi bi-globe-asia-australia" /> www.example.com</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div className="container">
      <div className="left">
        <div className="qr-code">
          <p>Scan To View</p>
          <img src="qr.png" alt />
        </div>
        <div className="education">
          <h3 style={{marginBottom: 20}}>Education</h3>
          <p>February 2019</p>
          <p style={{fontSize: 18}}><strong>Enter Your Degree</strong></p>
          <p>University / College</p>
          <p style={{fontSize: 12, marginBottom: 20}}>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eum, beatae!</p>
          <p>February 2019</p>
          <p style={{fontSize: 18}}><strong>Enter Your Degree</strong></p>
          <p>University / College</p>
          <p style={{fontSize: 12, marginBottom: 20}}>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eum, beatae!</p>
          <p>February 2019</p>
          <p style={{fontSize: 18}}><strong>Enter Your Degree</strong></p>
          <p>University / College</p>
          <p style={{fontSize: 12, marginBottom: 20}}>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eum, beatae!</p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul style={{listStyle: 'circle'}}>
            <li>Microsoft Office</li>
            <li>Video Creation</li>
            <li>Networking</li>
            <li>Medical Billing</li>
            <li>Database Software</li>
            <li>Digital Media</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="profile">
          <h3>PROFILE</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aut vero minima sapiente
            perferendis itaque quo amet id corrupti illum! Nisi laborum consequatur quisquam at dolor, sint
            modi quis facilis!</p>
        </div>
        <div className="work-experience">
          <h3>Work Experience</h3>
          <div style={{margin: '20px 0', borderBottom: '1px solid #ccc', paddingBottom: 10}}>
            <p><strong>Job Title</strong> / Company Name</p>
            <p>2014 - 2016</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt error inventore eveniet, quia quos. Corporis deserunt perferendis quas! Deleniti blanditiis error animi itaque nesciunt maiores nisi eveniet accusamus odit?</p>
            <ul style={{marginLeft: 20}}>
              <li>Massa dapibus faucibus nulla porttitor erat lorem.</li>
              <li>Sit amet tempor diam ante amet nisi suspendisse cursus.</li>
              <li>Est ultricies nulla sit amet tempor diam.</li>
            </ul>
          </div>
          <div style={{margin: '20px 0', borderBottom: '1px solid #ccc', paddingBottom: 10}}>
            <p><strong>Job Title</strong> / Company Name</p>
            <p>2014 - 2016</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sunt error inventore eveniet, quia quos. Corporis deserunt perferendis quas! Deleniti blanditiis error animi itaque nesciunt maiores nisi eveniet accusamus odit?</p>
            <ul style={{marginLeft: 20}}>
              <li>Massa dapibus faucibus nulla porttitor erat lorem.</li>
              <li>Sit amet tempor diam ante amet nisi suspendisse cursus.</li>
              <li>Est ultricies nulla sit amet tempor diam.</li>
            </ul>
          </div>
          <div style={{margin: '20px 0'}}>
            <p><strong>Job Title</strong> / Company Name</p>
            <p>2014 - 2016</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem rerum ratione fuga hic atque a ipsam aliquam iure qui, sit voluptate culpa blanditiis aperiam veniam, distinctio delectus illo tempora dolorum.</p>
            <ul style={{marginLeft: 20}}>
              <li>Massa dapibus faucibus nulla porttitor erat lorem.</li>
              <li>Sit amet tempor diam ante amet nisi suspendisse cursus.</li>
              <li>Est ultricies nulla sit amet tempor diam.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default Sample2
