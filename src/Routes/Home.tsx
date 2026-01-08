import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row } from 'react-bootstrap'
import emailjs from '@emailjs/browser'

import NavbarComponent from '../pages/Navbar'
import Footer from '../pages/Footer'
import GoToTopBtn from '../pages/GoToTopBtn'

import { SkillItem, skillsArray } from '../data/skillSectionHandler'
import { ServiceItem, servicesArray } from '../data/servicesSectionHandler'
import { ProjectItem, projectsArray } from '../data/projectsSectionHandler'
import { EducationItem, educationArray } from '../data/educationSectionHandler'
import { CertificationItem, certificationsArray } from '../data/certificationsSectionHandler'
import { ContactMeItem, contactMeArray } from '../data/contactMeSectionHandler'
import { ExperienceItem, experienceArray } from '../data/experienceSectionHandler'
import { aboutMeIntroArray } from '../data/aboutMeSectionHandler'

import cover6 from '../assets/cover6.jpg'


// for typed js
import Typed from 'typed.js'

// AOS animation
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()





const Home: React.FC = ( ) => {

    const home_ref = useRef<HTMLDivElement | null>(null)
    const about_ref = useRef<HTMLDivElement | null>(null)
    const experience_ref = useRef<HTMLDivElement | null>(null)
    const education_ref = useRef<HTMLDivElement | null>(null)
    const projects_ref = useRef<HTMLDivElement | null>(null)
    const contact_me_ref = useRef<HTMLDivElement | null>(null)
    const skills_ref = useRef<HTMLDivElement | null>(null)
    const services_ref = useRef<HTMLDivElement | null>(null)
    const certifications_ref = useRef<HTMLDivElement | null>(null)
    const name_ref = useRef( null )
    const job_title_ref = useRef( null )

    const [ expanded, setIsExpanded ] = useState( false )
    const [ darkMode, setDarkMode ] = useState( false )
    const [ contactMeUserEmail, setContactMeUserEmail ] = useState('')
    const [ contactMeUserMessage, setContactMeUserMessage ] = useState('')
    const [ userContactMeError, setUserContactMeError ] = useState('')

    // initialize aos features.
    let parent_animation = 'fade-right'
    let parent_timer = '500'
    let child_animation = 'fade-up'
    let child_timer = '1100'


    useEffect(() => {
        const typed = new Typed( name_ref.current, {
            strings: ['Hi, I am Larry N. N. Williams'],
            typeSpeed: 40,
            loop: false,
            showCursor: false
        })

        return () => {
            typed.destroy()
        }
    }, [])


    useEffect(() => {
        const typed = new Typed( job_title_ref.current, {
            strings: ['I am a software developer'],
            typeSpeed: 80,
            backDelay: 1000,
            loop: false,
            showCursor: false
            
        })

        return () => {
            typed.destroy()
        }
    }, [])



    const ToggleExpandedState = () => {
        setIsExpanded( !expanded )
    }

    const ScrollHomeDivIntoView = ( ) => {
        setIsExpanded( false )
        setTimeout(() => {
            home_ref.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 300 )
    }

    const ScrollAboutDivIntoView = ( ) => {
        setIsExpanded( false )
        setTimeout(() => {
            about_ref.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 300 )
    }

    const ScrollExperienceDivIntoView = ( ) => {
        setIsExpanded( false )
        setTimeout(() => {
            experience_ref.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 300 )
    }

    const ScrollContactDivIntoView = ( ) => {
        setIsExpanded( false )
        setTimeout(() => {
            contact_me_ref.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 300 )
    }

    const ScrollEducationDivIntoView = ( ) => {
        setIsExpanded( false )
        setTimeout(() => {
            education_ref.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 300 )
    }

    const ScrollSkillsDivIntoView = ( ) => {
        setIsExpanded( false )
        setTimeout(() => {
            skills_ref.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 300 )
    }


    const ScrollServicesDivIntoView = ( ) => {
        setIsExpanded( false )
        setTimeout(() => {
            services_ref.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 300 )
    }

    const ScrollProjectsDivIntoView = ( ) => {
        setIsExpanded( false )
        setTimeout(() => {
            projects_ref.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 300 )
    }


    const ScrollCertificationsDivIntoView = ( ) => {
        setIsExpanded( false )
        setTimeout(() => {
            certifications_ref.current?.scrollIntoView({
                behavior: 'smooth'
            })
        }, 300 )
    }

    const ToggleDarkModeState = ( ) => {
        setDarkMode( !darkMode )
        setIsExpanded( false )
    }


    const UpdateContactMeUserEmail = ( event: any ) => {
        setContactMeUserEmail( event.target.value )
    }

    const UpdateContactMeUserMessage = ( event: any ) => {
        setContactMeUserMessage( event.target.value )
    }


    const HandleUserContactMeSubmit = ( event: any ) => {
        event.preventDefault()
        let regex = /^(?:(?:[^<>()[\].,;:\s@\"]+(?:\.[^<>()[\].,;:\s@\"]+)*)|(\".+\"))@(?:(?:\[(?:[0-9]{1,3}\.){3}[0-9]{1,3}\])|(?:(?:[a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}))$/
        
        if( contactMeUserEmail.length === 0 ) {
            setUserContactMeError('Your email is required')
        }
        else if( contactMeUserMessage.length === 0 ) {
            setUserContactMeError('Your message is required')
        }
        else {
            if( !contactMeUserEmail.match( regex )) {
                setUserContactMeError('Invalid email...Provide a valid email to continue')
            }
            else {
                alert("Thank you for your message. I'll reach you back soon...")
                setUserContactMeError('')
                setContactMeUserEmail('')
                setContactMeUserMessage('')

                // directing the user complaint to my own email.
                let email_js_public_key = 'rVeEurkbv_iOtoRL1'
                let email_js_service_id = 'service_xs6h5ng'
                let email_js_template_id = 'template_pqqbmoz'
                let email_js_dynamic_variables = {
                    to_name: 'Larry',
                    sender_email: contactMeUserEmail,
                    message: contactMeUserMessage
                }

                try {
                    emailjs.send( email_js_service_id, email_js_template_id, email_js_dynamic_variables, email_js_public_key )
                }
                catch( error ) {
                    console.log(`emailjs error: ${ error }`)
                }
    
            }

        }
    }
    

    return (
        <div className={ darkMode? 'dark': '' }>
            <div className='dark:dark-bg-col'>
            <NavbarComponent expanded={ expanded } 
                             darkMode={ darkMode }
                             ToggleNavbarExpanded={ ToggleExpandedState }
                             ToggleDarkModeState={ ToggleDarkModeState }
                             ScrollHomeDivIntoView={ ScrollHomeDivIntoView }
                             ScrollAboutDivIntoView={ ScrollAboutDivIntoView }
                             ScrollContactDivIntoView={ ScrollContactDivIntoView }
                             ScrollEducationDivIntoView={ ScrollEducationDivIntoView }
                             ScrollSkillsDivIntoVIew={ ScrollSkillsDivIntoView }
                             ScrollProjectsDivIntoView={ ScrollProjectsDivIntoView }
                             ScrollServicesDivIntoVIew={ ScrollServicesDivIntoView }
                             ScrollCertificationsDivIntoView={ ScrollCertificationsDivIntoView }
                             ScrollExperiencesDivIntoView={ ScrollExperienceDivIntoView }
                             />


        <div>
            {/* main page content */}
            <div className='bg-slate-200 dark:dark-bg-col md:pb-20 pb-2' ref={ home_ref }>
                <div className='my-1 sm:mx-16 md:mx-20 text-center sm:flex sm:flex-row sm:justify-evenly'>
                    <div className={ expanded === true? 'remove-cover-pic' : 'px-1 mx-4 md:mx-0 md:py-10 md:rounded-none rounded-full basis-1/4 sm:py-16 sm:w-full sm:h-64' }>
                        <img className='rounded-full md:rounded-full md:w-full brightness-90 shadow-md sm:w-full
                                        hover:shadow-lg sm:rounded-full' src={ cover6 } alt='software engineer' />
                    </div>

                    <div className='pt-2 md:pt-36 basis-3/4'>
                        <div>
                            <span ref={ name_ref } className='text-xl font-bold mt-1 ml-3 text-center secondary-col sm:text-5xl font-playfair dark:dark-primary-text-col'></span>
                        </div>

                        <div className='mt-1 sm:mt-4 md:container-y-margins'>
                            <span ref={ job_title_ref } className='text-md italic text-center mt-3 md:ml-5 sm:ml-12 sm:mt-5 font-merriweather font-semibold sm:text-lg dark:dark-primary-text-col'></span>
                        </div>

                        <h3 className='container-x-margins container-y-margins font_merriweather text-md italic dark:dark-secondary-text-col md:text-md text-sm'>
                            "Clean code always looks like it was written by someone who cares" - Robert C. Martin
                        </h3>
                    </div>
                    
                </div>
                
            </div>
            {/* end of main page content */ }


            {/* about me section */} 
            <div className='container-x-margins container-y-margins sm:mx-28 md:mt-20' ref={ about_ref }>
                <div>
                    <h2 className='sm:text-xl md:text-2xl primary-col font_lora font-bold mb-3 mt-5 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>My Tech Journey: Passion, Purpose, and Progress</h2>
                </div>
                
                <div className='mb-3' data-aos={ child_animation } data-aos-duration={ child_timer }>
                    <>
                        <p className='text-sm md:text-base font_poppins dark:dark-secondary-text-col'>
                            { aboutMeIntroArray[ 0 ]}
                        </p>

                    </>
                </div>


            </div>
            {/* end of about section */}


            {/* experience section */}
            <div className='container-x-margins container-y-margins sm:mx-28' ref={ experience_ref }>
                <div>
                    <h2 className='sm:text-xl md:text-2xl primary-col font_lora font-bold mb-3 mt-5 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Professional Journey: My Experience</h2>
                </div>


                <div className='container-bg hover:bg-slate-300 mx-1 shadow-lg sm:p-3 dark:dark-card-bg-col sm:rounded-lg'>
                    {
                        experienceArray.map(( experience: ExperienceItem ) => {
                            return <div className='flex flex-row justify-between mx-3 my-3' data-aos={ child_animation } data-aos-duration={ child_timer }>
                                        <div className='mr-3 mt-2'>
                                            <img className='w-48 mb-4' src={ experience.companyIcon } alt='cover' />
                                            <h3 className='text-md primary-col font_lora font-semibold secondary-col mb-2 sm:mb-3'>{ experience.role }</h3>
                                            <h3 className='text-md primary-col font_lora font-semibold secondary-col mb-2 sm:mb-3'>{ experience.workPeriod }</h3>
                                        </div>

                                        <div className='mt-3'>
                                            <div className='text-md font_lora font-semibold secondary-col mb-2 sm:mb-3'>
                                                <h3>Technologies Used</h3>
                                                <ul className="list-disc list-inside space-y-2">
                                                    { experience.technologiesUsed.map((technology) => 
                                                    (
                                                        <li className="text-black font-normal leading-10">{technology}</li>
                                                    )
                                                    ) }
                                                </ul>
                                            </div>
                                        </div>


                                        <div className=' mt-3'>
                                            <h3 className='text-md primary-col font_lora font-semibold secondary-col mb-2 sm:mb-3'>
                                                Design Principles And Architectures
                                                <ul className="list-disc list-inside space-y-2">
                                                    { experience.designPrinciplesAndArchitectures.map( designPrinciple => 
                                                    (
                                                        <li className="text-black font-normal leading-10 ">{ designPrinciple }</li>
                                                    ) 
                                                )}
                                                </ul>
                                            </h3>
                                        </div>


                                        <div className=' mt-3'>
                                            <h3 className='text-md primary-col font_lora font-semibold secondary-col mb-2 sm:mb-3'>
                                                Soft Skills 
                                                <ul className="list-disc list-inside space-y-2">
                                                    { experience.nonTechnicalSkills.map((nonTechnicalSkill) => 
                                                    (
                                                        <li className="text-black font-normal leading-10">{nonTechnicalSkill}</li>
                                                    )
                                                    ) }
                                                </ul>
                                            </h3>
                                        </div>

                                    </div> 
                        })
                }

                </div>

            </div>
            {/* end of experience section */}


            {/* skills section */ }
            <div className='container-y-margins'>
                <div  className='container-x-margins mb-4 sm:mx-28' ref={ skills_ref }>
                    <h2 className='primary-col sm:text-xl md:text-2xl font_lora font-bold mb-1 mt-5 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>My Development Arsenal: Skills & Technologies</h2>
                    <p className='text-sm md:text-base font_poppins dark:dark-secondary-text-col'>
                        I've spent countless hours mastering these technologies, and I continue to stay on the cutting edge to ensure I can deliver the best possible results. 
                    </p>
                </div>

                <div className='grid grid-cols-2 mx-3 gap-3 hover:cursor-pointer
                                sm:mx-28 sm:grid-cols-4 '>
                
                {
                    skillsArray.map( ( skill: SkillItem ) => (
                        <div className='my-1 p-3 text-center container-bg rounded-lg transition-all 
                                        duration-1000 hover:shadow-lg hover:bg-slate-300 dark:dark-card-bg-col' data-aos={ child_animation } data-aos-duration={ child_timer }>
                            <p className='text-lg font_lora font-semibold mb-3 secondary-col'>{ skill.name }</p>
                            <div className='flex items-center justify-center'>
                                <img src={ skill.skill_logo } className='w-14 rounded-none' alt='' />
                            </div>
                        </div>
                    ))
                } 

                </div>
            </div>
            {/* end of skills section */ }


            {/* list of best projects section */ }
            <div  className='container-x-margins container-y-margins sm:mx-28' ref={ projects_ref }>
                <h3 className='primary-col sm:text-xl md:text-2xl font_lora font-bold mt-3 mb-2 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>
                    Real-World Solutions: My Project Portfolio
                </h3>
                <p className='text-sm md:text-base font_poppins dark:dark-secondary-text-col'>
                    Dive in and explore the real-world applications of my skills, and see how I bring concepts to life through code.                
                </p>
                <div className='sm:grid sm:grid-flow-row sm:grid-cols-3 sm:gap-5'>
                {
                    projectsArray.map(( project: ProjectItem ) => {
                        return  <div className='container-bg my-4 pb-3 shadow-lg transition-all duration-500 
                                                    rounded-lg hover:bg-slate-300 
                                                    dark:dark-card-bg-col' 
                                                data-aos={ child_animation } data-aos-duration={ child_timer }
                                                >
                                    <img className='h-56 w-full' src={ project.projectCoverImage } alt='cover' />
                                    <div className='p-2'>
                                        <h3 className='text-lg primary-col font_lora font-semibold text-center secondary-col mb-6 sm:mb-3'>{ project.projectTitle }</h3>
                                        <h3 className='text-sm text-center font_poppins mx-1 mb-6'>{ project.projectDescription }</h3>
                                        <h3 className='text-sm text-center italic secondary-col mb-8'>Tech Stack: { project.projectTechnologies }</h3>
                                        <Link to={ project.projectLink } target='_blank'>
                                            <div className="flex justify-center">
                                                <button className='bg-[#ec5b53] transition-all duration-200 hover:bg-[#c73a32] 
                                                                py-2 px-4 text-white rounded-lg 
                                                                hover:cursor-pointer'>
                                                    { project.buttonText }
                                                </button>
                                            </div>

                                        </Link>
                                    </div>
                                </div>
                    })
                }
                </div>
            </div>
            {/* end of projects section */}


            {/* certifications section */}
            <div className='container-x-margins container-y-margins sm:mx-28' ref={ certifications_ref }>
                <h3 className='primary-col sm:text-xl md:text-2xl font_lora font-bold mt-3 mb-2 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Official Recognitions: My Certifications</h3>
                <p className='text-sm md:text-base font_poppins dark:dark-secondary-text-col'>
                    Every certification is a reflection of my continuous effort to learn, grow, and excel in my field.                
                </p>
                <div className='sm:grid sm:grid-flow-row sm:grid-cols-3 sm:gap-5'>
                    {
                        certificationsArray.map(( certification: CertificationItem ) => {
                            return  <div className='container-bg my-4 pb-3 shadow-lg transition-all duration-500 
                                                        rounded-lg hover:bg-slate-300 
                                                        dark:dark-card-bg-col' 
                                                    data-aos={ child_animation } data-aos-duration={ child_timer }
                                                    >
                                        <img className='h-48 w-full' src={ certification.cover_image } alt='cover' />
                                        <div className='p-2'>
                                            <h3 className='text-lg primary-col font_lora font-semibold text-center secondary-col mb-2 sm:mb-3'>{ certification.course_title }</h3>
                                            <h3 className='text-sm text-center secondary-col font_poppins mx-1 mb-2'>Issuing Organization: { certification.issuing_organization }</h3>
                                            <h3 className='text-sm text-center secondary-col font_poppins mx-1 mb-2'>Issue Date: { certification.issue_date }</h3>
                                            <h3 className='text-sm text-center font_poppins mx-1 mb-2'>{ certification.course_description }</h3>

                                        </div>
                                    </div>
                             })
                    }
                </div>
            </div>
            {/* end of certifications section */ }


            {/* education section */}
            <div className='container-x-margins container-y-margins sm:mx-28' ref={ education_ref }>
                <div>
                    <h2 className='sm:text-xl md:text-2xl primary-col font_lora font-bold mb-3 mt-5 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Academic Journey: My Education</h2>
                </div>


                <div className='container-bg hover:bg-slate-300 mx-1 shadow-lg sm:p-3 dark:dark-card-bg-col sm:rounded-lg'>
                    {
                        educationArray.map(( education: EducationItem ) => {
                            return <div className='flex flex-row justify-between mx-3 my-3 divide-y-2' data-aos={ child_animation } data-aos-duration={ child_timer }>
                                        <div className='mr-3 mt-2 basis-1/3'>
                                            <img className='w-12' src={ education.school_icon } alt='cover' />
                                        </div>

                                        <div className='basis-2/3'>
                                            <h3 className='secondary-col font_lora font-bold text-sm md:text-lg mb-1'>{ education.school }</h3>
                                            <h3 className='font_poppins font-semibold text-sm md:text-lg mb-1'>{ education.programme }</h3>
                                            <h3 className='font-semibold text-sm md:text-lg mb-2 font_poppins'>{ education.study_period }</h3>
                                        </div>
                                    </div> 
                        })
                }

                </div>

            </div>
            {/* end of education section */}


            {/* my software services section */}
            <div className='container-x-margins container-y-margins sm:mx-28' ref={ services_ref }>
                <h3 className='primary-col sm:text-xl md:text-2xl font_lora font-bold mb-3 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>What services do I provide?</h3>
                <p className='text-sm md:text-base font_poppins dark:dark-secondary-text-col'>
                    Discover the range of professional services I offer, designed to bring your vision to life with precision and creativity.                </p>
                <div className='sm:grid sm:grid-flow-row sm:grid-cols-3 sm:gap-5'>
                {
                    servicesArray.map(( service: ServiceItem ) => {
                        return   <div className='container-bg border-0 rounded-lg shadow-lg pt-2 pb-8 text-center mb-4 
                                                 transition-all duration-700 hover:cursor-pointer
                                                 hover:shadow-lg hover:skew-x-6 hover:bg-slate-300 dark:dark-card-bg-col' 
                                       data-aos={ child_animation } data-aos-duration={ child_timer }>
                                    <img className='mb-2 w-14 ml-4' src={ service.icon } alt='website' />
                                    <h3 className='text-lg font_lora secondary-col font-semibold mb-2'>{ service.serviceType }</h3>
                                    <h3 className='text-sm sm:text-md px-3 font_poppins'>{ service.serviceDetails }</h3>
                                 </div>

                    })
                }
                </div>
            </div>


            {/* contact me section */}
            <div className='container-x-margins container-y-margins sm:mx-28' ref={ contact_me_ref }>
                <h2 className='sm:text-xl md:text-2xl primary-col font_lora font-bold mb-2 mt-5 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Get in Touch: Contact Me</h2>
                <p className='text-sm md:text-base font_poppins mb-3 mt-2 text-md dark:dark-secondary-text-col' /*data-aos={ child_animation } data-aos-duration={ child_timer }*/>
                    I'm excited to connect with you and discuss potential job opportunities, collaborations, or any questions you may have.                
                </p>

                <div className='sm:grid sm:grid-flow-row sm:grid-cols-3 sm:gap-5 '>
                {
                    contactMeArray.map(( contact_me: ContactMeItem ) => {
                        return  <div className='container-bg my-4 shadow-lg py-12 transition-all duration-200 rounded-lg hover:bg-slate-300 dark:rounded-lg dark:dark-card-bg-col' data-aos={ child_animation } data-aos-duration={ child_timer }>
                                    <div className="flex items-center justify-center">
                                    <div className='bg-[#ec5b53] w-24 rounded-full p-6 mb-3'>
                                        <img className='w-20' src={ contact_me.icon } alt='address' />
                                    </div>
                                    </div>

                                    <h3 className='font_lora text-[#10285d] font-semibold text-xl text-center mb-2'>{ contact_me.title }</h3>
                                    <Link to={ contact_me.url } target={ contact_me.target }>
                                        <h3 className='font-md text-center text-[#ec5b53] font-semibold cursor-pointer dark:text-black'>{ contact_me.detail }</h3>
                                    </Link>
                               </div>
                    })
                }
                </div>
            </div>


            {/* if not now, then when? section*/}
            <div className='container-x-margins container-y-margins mr-1 sm:mx-28' data-aos={ parent_animation } data-aos-duration={ parent_timer }>
                <div className='sm:flex sm:flex-row'>
                    <h3 className='sm:text-xl md:text-2xl font-semibold font_lora primary-col sm:mr-4 dark:dark-primary-text-col'>If Not Now, When?</h3>
                    <h3 className='sm:text-xl md:text-2xl font-semibold font_lora primary-col mb-1 dark:dark-primary-text-col'>Let's Work Together!</h3>
                </div>
                <p className='text-sm md:text-base font_poppins dark:dark-secondary-text-col mb-5'>Get in touch with me and let us bring your wonderful ideas into life!</p>
                
               <Form onSubmit={ HandleUserContactMeSubmit }>
                    <Row className='mb-5'>
                        <Form.Control type='email' placeholder='Email' 
                                      className='contact-me-email h-12 px-5'
                                      onChange={ UpdateContactMeUserEmail }
                                      value={ contactMeUserEmail } />
                    </Row>

                    <Row className='mb-3'>
                        <Form.Control as='textarea' rows={ 8 } placeholder='Message' 
                                      className='contact-me-textarea p-5'
                                      onChange={ UpdateContactMeUserMessage }
                                      value={ contactMeUserMessage } />
                    </Row>

                    <p className='text-red-700 mb-3'>{ userContactMeError }</p>

                    <button type='submit' className='bg-[#ec5b53] transition-all duration-200 
                                       hover:bg-[#c73a32] py-2 px-4 text-white rounded-lg' 
                    >
                        Send Message
                    </button>

               </Form>

            </div>
            {/* end of if not now, then when? */}

            <GoToTopBtn />


            {/* footer section */}
            <Footer 
                ScrollHomeDivIntoView={ ScrollHomeDivIntoView }
                ScrollAboutDivIntoView={ ScrollAboutDivIntoView }
                ScrollContactDivIntoView={ ScrollContactDivIntoView }
                ScrollEducationDivIntoView={ ScrollEducationDivIntoView }
                ScrollSkillsDivIntoVIew={ ScrollSkillsDivIntoView }
                ScrollServicesDivIntoVIew={ ScrollServicesDivIntoView }
                ScrollProjectsDivIntoView={ ScrollProjectsDivIntoView }
                ScrollCertificationsDivIntoView={ ScrollCertificationsDivIntoView }
             />

            </div>
        </div>
        </div>
    )

}



export default Home