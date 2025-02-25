import React from 'react'
import './Sample1.css'

function Sample1() {
  return (
    <>
        <section className="header">
    <img className="headshot" src="/src/assets/cv/pracas.png" alt="headshot" />
    <div className="name">
      <h1>PRACAS Upreti</h1>
      <p>FOUNDER</p>
      <div style={{height: 1, backgroundColor: '#333', width: 300}} />
    </div>
  </section>
  <section className="body">
    <div className="left">
      <div className="contact">
        <p><i className="bi bi-telephone-fill" /> +977-9852025735</p>
        <p><i className="bi bi-envelope-fill" />  info@sriyog.com</p>
        <p><i className="bi bi-globe-americas" /> sriyog.com</p>
        <p><i className="bi bi-geo-alt-fill" />REM.WORK,Kamalpokhri</p>
      </div>
      <div className="education">
        <h3 style={{margin: '40px 0 10px 0'}}>EDUCATION</h3>
        <p style={{marginBottom: 10}}>Bachelor of design <br /> 
          wardiere University <br />
          2006-2008</p>
        <p>Bachelor of design <br /> 
          wardiere University <br />
          2006-2008</p>
      </div>
      <div className="expertise">
        <h3>EXPERTISE</h3>
        <p>Web Design</p>
        <p>Branding</p>
        <p>Graphic Design</p>
        <p>SEO</p>
        <p>Marketing</p>
      </div>
      <div className="language">
        <h3>LANGUAGE</h3>
        <p>English</p>
        <p>French</p>
      </div>
    </div>
    <div className="right">
      <div className='about' style={{marginBottom:40}}>
      <h3 style={{marginBottom:10}}>ABOUT ME</h3>
      <p>Pracas Upreti's journey from a startup founder to a technology-driven change-maker in Biratnagar, Nepal, exemplifies the profound impact that individuals can have when they combine innovation with a commitment to social responsibility.</p>
      </div>
      <h3>WORK EXPERIENCE</h3>
      <div className='we'>
        <ul>
          <li> <p>Jan 2022- Present <br />
        Company Name | 123 AnyWhere <br />
        <strong>Digital Marketing Manager</strong>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto recusandae? Dolorum iure delectus iusto totam non quos quod laudantium pariatur? A perferendis minima aspernatur quam vel voluptatum assumenda ipsam.</p></li>
        <li> <p>Jan 2022- Present <br />
        Company Name | 123 AnyWhere <br />
        <strong>Digital Marketing Manager</strong>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto recusandae? Dolorum iure delectus iusto totam non quos quod laudantium pariatur? A perferendis minima aspernatur quam vel voluptatum assumenda ipsam.</p></li>
        <li> <p>Jan 2022- Present <br />
        Company Name | 123 AnyWhere <br />
        <strong>Digital Marketing Manager</strong>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iusto recusandae? Dolorum iure delectus iusto totam non quos quod laudantium pariatur? A perferendis minima aspernatur quam vel voluptatum assumenda ipsam.</p></li>
        </ul>
       
      </div>
      <div>
        <h3>REFERENCE</h3>
        <div className="reference">
          <div>
          <h4>Estelle Dracy</h4>
          <p>wardiere inc./ CEO</p>
          <p style={{fontSize:12}}>Phone: +123-456-7890</p>
          <p style={{fontSize:12}}>Email: hello@reallygreatsite.com</p>
          </div>
          <div>
          <h4>Estelle Dracy</h4>
          <p>wardiere inc./ CEO</p>
          <p style={{fontSize:12}}>Phone: +123-456-7890</p>
          <p style={{fontSize:12}}>Email: hello@reallygreatsite.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Sample1
