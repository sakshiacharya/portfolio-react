import React from 'react'
import ex2 from './component/cimage.jpeg';
import ex3 from './component/simage.jpeg';
import ex4 from './component/qimage.jpeg';
import ex5 from './component/spimage.jpeg';

export const Experiences = () => {
    return (
        <div className='exp-section'>

            <div className='exps'>
                <h1>Total Experiences</h1>
                <q>Accumulated 2+ years of hands-on experience, consistently achieving impressive outcomes and contributing to organizational success.</q>
            </div>

            <div className='ex-1' >
                <div className='company-detail'>
                    <img width={150} src='https://www.woodenstreet.com/images/testimonials/logo.png' alt='Woodenstreet/current company' />
                    <div>
                        <h1 className='c-name'>Woodenstreet Pvt Ltd Udaipur</h1>
                        <span className='position'><b>Position : </b>React JS Developer</span>
                        <p className='desc'>Working on Ecommerce website of woodenstreet as a Front-End Developer.
                            Technology used- React Js, Redux, Razzle, Html, SCSS, CSS.</p>
                    </div>
                </div>

                <div className='company-detail'>
                    <img width={150} src={ex2} alt='Cloudegic Inc, Banglore(WFH)' />
                    <div>
                        <h1 className='c-name'>Cloudegic Inc, Banglore(WFH)</h1>
                        <span className='position'><b>Position : </b>React JS Developer</span>
                        <p className='desc'>Cloudegic is a fully-fledged IT products and services organization that aims to blend
                            strategy, coding and crafting practices to deliver end-to-end solutions.</p>
                    </div>
                </div>

                <div className='company-detail'>
                    <img width={150} src={ex3} alt='Secure Meters Limited, Udaipur' />
                    <div>
                        <h1 className='c-name'>Secure Meters Limited, Udaipur</h1>
                        <span className='position'><b>Position : </b>Technical Engineer</span>
                        <p className='desc'>Adherence to ITIL Framework, GDPR (EU) Rules and Regulations, PIMS. Projects (Incident, Change, Release, Knowledge, Problem, and
                            Service Request Management).</p>
                    </div>
                </div>

                <div className='company-detail'>
                    <img width={150} src={ex4} alt='QRIOCTYBOX (Fluidex Technologies Pvt. Ltd.), Odisha' />
                    <div>
                        <h1 className='c-name'>QRIOCTYBOX (Fluidex Technologies Pvt. Ltd.), Odisha</h1>
                        <span className='position'><b>Position : </b>Web Development Intern (React Js)</span>
                        <p className='desc'>Created Online Education Application from scratch. This application is used to provide
                            studymaterial/online courses for students and organizes exams to relevant courses.</p>
                    </div>
                </div>
                <div className='company-detail'>
                    <img width={150} src={ex5} alt='The Sparks Foundation' />
                    <div>
                        <h1 className='c-name'>The Sparks Foundation</h1>
                        <span className='position'><b>Position : </b>Web Developer(Summer Internship)</span>
                        <p className='desc'>Created Credit Management Application from Scratch. This is a Dynamic Website which
                            will show the transaction between the users.</p>
                    </div>
                </div>

            </div>


        </div>
    )
}
