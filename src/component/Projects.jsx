import React from 'react'
import BackgroundAnimation from './BackgroundAnimation'

export const Projects = () => {
    return (
        <>
            <div className='project-section' >
                <div>
                    <h1>Turning Your Paperball
                        Into <strong>Paperplane</strong>
                    </h1>
                    <q className='quote'> Explore my impressive portfolio of projects, showcasing my skills in creating impactful solutions that combine innovation, functionality, and user-friendly design.
                    </q>
                </div>
                <BackgroundAnimation />
                    
            </div>
            <div className='projects' >
                <div className='p-list'>
                    <h3>Ecommerce Project</h3>
                    <p><strong>Tech Stack :</strong> React Js, Redux, SCSS, HTML, CSS, JavaScript</p>
                    <a href='https://react.teamwoodenstreet.com'>https://react.teamwoodenstreet.com</a>
                </div>
                <div className='p-list'>
                    <h3>Udaipur Blog</h3>
                    <p> <strong>Tech Stack :</strong> React Js, SCSS, HTML, CSS</p>
                    <p>Self Project</p>
                </div>
                <div className='p-list'>
                    <h3>Portfolio</h3>
                    <p> <strong>Tech Stack :</strong> React Js, SCSS, HTML, CSS</p>
                    <p>Self Project</p>
                </div>
                <div className='p-list'>
                    <h3>Jarvis-A Virtual Assistant </h3>
                    <p><strong>Tech Stack :</strong> Python, HTML, CSS</p>
                    <p>Academic Final Project</p>
                </div>

            </div>
            <div className='projects' >
                <div className='p-list'>
                    <h3>COVID-19 Application</h3>
                    <p><strong>Tech Stack :</strong> Python, HTML, CSS</p>
                    <p>Self Project</p>
                </div>
                <div className='p-list'>
                    <h3>Calculator App</h3>
                    <p><strong>Tech Stack :</strong>  Android Studio</p>
                    <p>Self Project</p>
                </div>
                <div className='p-list'>
                    <h3>Tourism Industry</h3>
                    <p><strong>Tech Stack :</strong> HTML, Bootstrap, CSS, PHP, MySql</p>
                    <p>Self Project</p>
                </div>
                <div className='p-list'>
                    <h3>Food Management System</h3>
                    <p><strong>Tech Stack :</strong> HTML, CSS, JavaScript</p>
                    <p>Academic  Project</p>
                </div>
            </div>
        </>
    )
}
