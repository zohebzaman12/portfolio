import React from 'react'
import projectImg1 from '../../Assets/project-1.png'
import projectImg2 from '../../Assets/project-2.png'
import projectImg3 from '../../Assets/project-3.png'
import arrowIcon from '../../Assets/arrow.png'

const Projects = () => {
  return (
    <section id='projects'>
        <p className="section__text__p1">Browse my Recent</p>
        <h1 className="title">Projects</h1>
        <div className='skills-detail-container'>
        <div className='about-containers'>
        <div className="details-container color-container">
                <div className='project-container'>
                    <img src={projectImg1} alt='' class="project-img"/>
                    <div>
                        <h2 class="experience-sub-title project-title">Project One</h2>
                        <div className='btn-container'>
                            <button className='btn'>Github</button>
                            <button className='btn'>Live Demo</button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="details-container color-container">
                <div className='project-container'>
                    <img src={projectImg2} alt='' class="project-img"/>
                    <div>
                        <h2 class="experience-sub-title project-title">Project One</h2>
                        <div className='btn-container'>
                            <button className='btn'>Github</button>
                            <button className='btn'>Live Demo</button>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="details-container color-container">
                <div className='project-container'>
                    <img src={projectImg3} alt='' class="project-img"/>
                    <div>
                        <h2 class="experience-sub-title project-title">Project One</h2>
                        <div className='btn-container'>
                            <button className='btn'>Github</button>
                            <button className='btn'>Live Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
           
        </div>
        <img src={arrowIcon} alt='arrow icon' className='icon arrow'onClick={()=> {window.location.href = './#contact'}}/>
    </section>
  )
}

export default Projects