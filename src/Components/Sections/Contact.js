import React from 'react'
import emailIcon from '../../Assets/email.png'
import linkedinIcon from '../../Assets/linkedin.png'

const Contact = () => {
  return (
    <section id='contact'>
         <p className="section__text__p1">Get in touch</p>
         <h1 className="title">Contact Me</h1>

        <div className='contact-info-container'> 
            <div className='contact-info'>
                <img 
                    src={emailIcon}
                    className='icon'
                    alt="Email icon"
                />
                <p><a href="mailto:examplemail@gmail.com">zamansheikhzoheb@gmail.com</a></p>
            </div>
            <div className='contact-info'>
                <img 
                    src={linkedinIcon}
                    className='icon'
                    alt="LinkedIn icon"
                />
                <p><a href="https://www.linkedin.com">LinkedIn</a></p>
            </div>
        </div>
    </section>
  )
}

export default Contact