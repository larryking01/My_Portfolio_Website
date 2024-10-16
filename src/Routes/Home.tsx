import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Row } from 'react-bootstrap'
import emailjs from '@emailjs/browser'

import NavbarComponent from '../MetaFiles/Navbar'
import Footer from '../MetaFiles/Footer'
import GoToTopBtn from '../MetaFiles/GoToTopBtn'


import mobile1 from '../StaticFiles/mobile1.png'
import website1 from '../StaticFiles/website1.png'
import website2 from '../StaticFiles/website2.png'
import cover6 from '../StaticFiles/cover6.jpg'
import js_logo from '../StaticFiles/js_logo.png'
import ts_logo from '../StaticFiles/ts_logo.png'
import graphql_logo from '../StaticFiles/graphql_logo.png'
import postgresql_logo from '../StaticFiles/postgresql_logo.png'
import react_js_logo from '../StaticFiles/react_logo.png'
import angular_js_logo from '../StaticFiles/angular_logo.png'
import my_sql_logo from '../StaticFiles/my_sql_logo.png'
import react_bootstrap_logo from '../StaticFiles/react_bootstrap_logo.png'
import express_js_logo from '../StaticFiles/express_js_logo.png'
import tailwind_logo from '../StaticFiles/tailwind_logo.png'
import mongo_logo from '../StaticFiles/mongo_image.png'
import firebase_logo from '../StaticFiles/firebase_logo.png'
import supabase_logo from '../StaticFiles/supabase_logo.png'
import docker_logo from '../StaticFiles/docker_logo.png'
import next_js_logo from '../StaticFiles/next_js logo.png'
import dart_logo from '../StaticFiles/dart_logo.png'
import flutter_logo from '../StaticFiles/flutter_logo.webp'
import hotel_finder_cover1 from '../StaticFiles/hotel_finder_cover1.png'
import vag_ems_cover3 from '../StaticFiles/vag_ems3.jpg'
import aice_cert_cover from '../StaticFiles/aice_cert_cover.png'
import grad_cap2 from '../StaticFiles/grad_cap2.png'
// import address_icon from '../StaticFiles/address.png'
// import vag_ems_cover1 from '../StaticFiles/vag_ems1.jpg'
// import vag_ems_cover2 from '../StaticFiles/vag_ems2.jpg'
// import vag_ems_cover4 from '../StaticFiles/vag_ems4.jpg'

import email_icon from '../StaticFiles/email.png'
import phone_icon from '../StaticFiles/phone.png'
import linked_in from '../StaticFiles/linkedIn.png'
import git_hub from '../StaticFiles/github.png'
import graphql_server_cover_image from '../StaticFiles/graphql_server_cover_image.png'


// for typed js
import Typed from 'typed.js'

// AOS animation
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
AOS.init()







const Home: React.FC = ( ) => {


    // setting up reference.
    const home_ref = useRef<HTMLDivElement | null>(null)
    const about_ref = useRef<HTMLDivElement | null>(null)
    const education_ref = useRef<HTMLDivElement | null>(null)
    const projects_ref = useRef<HTMLDivElement | null>(null)
    const contact_me_ref = useRef<HTMLDivElement | null>(null)
    const skills_ref = useRef<HTMLDivElement | null>(null)
    const services_ref = useRef<HTMLDivElement | null>(null)
    const certifications_ref = useRef<HTMLDivElement | null>(null)


    // typed js setup
    const job_title_ref = useRef( null )
    const name_ref = useRef( null )

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





    // toggling navbar expanded state.
    const [ expanded, setIsExpanded ] = useState( false )

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



    // toggling darkmode.
    const [ darkMode, setDarkMode ] = useState( false )

    const ToggleDarkModeState = ( ) => {
        setDarkMode( !darkMode )
        setIsExpanded( false )
    }


    // contact me input controls state.
    const [ contactMeUserEmail, setContactMeUserEmail ] = useState('')
    const [ contactMeUserMessage, setContactMeUserMessage ] = useState('')
    const [ userContactMeError, setUserContactMeError ] = useState('')


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
    

    // my skills interface.
    interface skill {
        name: string,
        proficiency: number,
        skill_logo?: string
    }

    let skillsArray: skill[] = [
        { name: 'JavaScript', proficiency: 80, skill_logo: js_logo },
        { name: 'TypeScript', proficiency: 72, skill_logo: ts_logo },
        { name: 'Dart', proficiency: 72, skill_logo: dart_logo },
        { name: 'React JS', proficiency: 88, skill_logo: react_js_logo },
        { name: 'Flutter', proficiency: 89, skill_logo: flutter_logo },
        { name: 'React Native', proficiency: 71, skill_logo: react_js_logo },
        { name: 'Angular', proficiency: 69, skill_logo: angular_js_logo },
        { name: 'GraphQL', proficiency: 78, skill_logo: graphql_logo },
        { name: 'Next JS', proficiency: 69, skill_logo: next_js_logo },
        { name: 'PostgreSQL', proficiency: 82, skill_logo: postgresql_logo },
        { name: 'My SQL', proficiency: 80, skill_logo: my_sql_logo },
        { name: 'React-Bootstrap', proficiency: 87, skill_logo: react_bootstrap_logo },
        { name: 'Express JS', proficiency: 80, skill_logo: express_js_logo },
        { name: 'Tailwind CSS', proficiency: 94, skill_logo: tailwind_logo },
        { name: 'Mongo DB', proficiency: 72, skill_logo: mongo_logo },
        { name: 'Firebase', proficiency: 71, skill_logo: firebase_logo },
        { name: 'Supabase', proficiency: 69, skill_logo: supabase_logo },
        { name: 'Docker', proficiency: 69, skill_logo: docker_logo },

    ]


    // about me intro array.
    let aboutMeIntroArray: string[ ] = [
        "Welcome to my corner of the web! I am a committed software developer with a love for creating elegant, efficient, and user-friendly digital experiences. Ever since I wrote my first line of code, I've been fascinated by the endless possibilities technology offers to solve real-world problems and make a positive impact. I believe in the power of tech to drive change and improve lives, and I'm on a mission to contribute to this transformative journey.Whether it's crafting intuitive user interfaces, developing seamless user experiences, or pushing the boundaries of software development, I'm dedicated to honing my skills and delivering excellence in every project.",
        "I am a skilled and passionate software engineer proficient in a range of programming languages and technologies. From JavaScript, TypeScript to popular development frameworks like Node, React, React-Native and Angular, I have the expertise to create innovative and user-friendly digital experiences... Let's collaborate to bring your digital vision to life using cutting-edge technologies!",
        "Hey, I'm Larry, a software engineer with a passion for clean code, elegant design, and pushing the boundaries of what's possible in the digital realm",
        "Hey there! I'm Larry, a problem-solving enthusiast fueled by my love for software development and a passion for creating meaningful digital experiences."
    ]


    
    // my services provided interface.
    interface myService {
        serviceType: string,
        serviceDetails: string,
        icon: string
    }

    // my services array.
    let myServicesArray: myService[] = [
        { serviceType: 'Website development', serviceDetails: 'Websites should communicate to your intended audience as you would in-person. That is why I strive to build responsive, interactive websites like they should be in our modern era.', icon: website1 },
        { serviceType: 'Web app development', serviceDetails: 'You may not be able to reach all your users, but your web app can. Let me give you the best assistant possible for your needs.', icon: website2 },
        { serviceType: 'Mobile app development', serviceDetails: "Mobile devices come in handy these days and that is why you need your software or project running on one to reach a wide range of users. Don't compromise", icon: mobile1 }    
    ]


    // my projects interface.
    interface my_projects {
        projectTitle: string,
        projectDescription: string,
        projectCoverImage: string,
        projectTechnologies: string,
        projectLink: string,
        buttonText: string
    }

    // my projects array.
    let myProjectsArray: my_projects[] = [
        { projectTitle: 'SwiftStay Accommodation Platform', 
          projectDescription: 'An online application that allows users to find hotels and book their stay',
          projectCoverImage: hotel_finder_cover1,
          projectTechnologies: 'JavaScript, ReactJS, MongoDB, React-Bootstrap',
          projectLink: 'https://swiftstay-rovw.onrender.com/',
          buttonText: 'Check It Out Now'
        },
        {
            projectTitle: 'TeamTide - HR Assistant',
            projectDescription: 'A web app that streamlines HR tasks: manage staff details and leave requests efficiently',
            projectCoverImage: vag_ems_cover3,
            projectTechnologies: 'TypeScript, ReactJS, PostgreSQL, Tailwind CSS',
            projectLink: 'https://vag-ems.vercel.app/',
            buttonText: 'Check It Out Now'
        },
        { projectTitle: 'SneakerZone Server', 
          projectDescription: 'The GraphQL backend of the SneakerZone e-commerce application',
          projectCoverImage: graphql_server_cover_image,
          projectTechnologies: 'JavaScript, ApolloGraphQL, MongoDB, Firebase',
          projectLink: 'https://e-commerce-app-server-graphql.onrender.com/',
          buttonText: 'Check It Out Now'
        }

    ]


    // my education interface.
    interface my_education {
        school: string,
        study_period: string,
        programme: string,
        school_icon: string
    }


    // my education array.
    let myEducationArray: my_education[] = [
        { school: 'University of Ghana, Legon', programme: 'BSc. Computer Science', study_period: '2017 - 2021', school_icon: grad_cap2 },
    ]


    // my certifications interface
    interface my_certification {
        course_title: string,
        course_description: string,
        issuing_organization: string,
        issue_date: string,
        cover_image: string
    }


    // certifications array.
    const myCertificationArray: my_certification[] = [
        { 
            course_title: 'Artificial Intelligence Career Essentials', 
            issuing_organization: 'Alx Africa',
            issue_date: 'July, 2024',
            cover_image: aice_cert_cover,
            course_description: "This hands-on course transformed my approach to software development, equipping me with advanced AI knowledge and practical skills in prompt engineering. I now leverage tools like ChatGPT, Github Copilot, Uizard, DeepCodeAG, Tabnine, etc to significantly boost my coding efficiency and problem-solving abilities. By integrating AI into my workflow, I am able to enhance my productivity and code quality, and position myself as a forward-thinking developer ready to excel in the AI-driven tech landscape.",
        }
    ]


    // contact me interface.
    interface contact_me {
        icon: string,
        title: string,
        detail: string,
        url: string,
        hover?: string,
        target?: string
    }


    // contact me array.
    const contactMeArray: contact_me[] = [
        { icon: phone_icon, title: 'Contact Number', detail: '+233-(0)55-253-1004', url:'#', target: '' },
        { icon: email_icon, title: 'Email Address', detail: 'larryking8118@gmail.com', url:'#', target:'' },
        { icon: git_hub, title: 'Github', detail: 'https://github.com/larryking01', url:'https://github.com/larryking01', hover: 'cursor', target:'_blank' },
        { icon: linked_in, title: 'LinkedIn', detail: 'https://linkedin.com/in/larry-williams8118', url:'https://linkedin.com/in/larry-williams8118', hover: 'cursor', target:'_blank' },

    ]


    // initializing aos features.
    let parent_animation = 'fade-right'
    let parent_timer = '500'
    let child_animation = 'fade-up'
    let child_timer = '1100'




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
                    skillsArray.map( ( skill: skill ) => (
                        <div className='my-1 p-3 text-center container-bg rounded-lg transition-all 
                                        duration-500 hover:shadow-lg hover:bg-slate-400 dark:dark-card-bg-col' data-aos={ child_animation } data-aos-duration={ child_timer }>
                            <p className='text-lg font_lora font-semibold mb-3 secondary-col'>{ skill.name }</p>
                            <div className='w-14 ml-14 md:ml-24'>
                                <img src={ skill.skill_logo } className='rounded-none' alt='' />
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
                    myProjectsArray.map(( project: my_projects ) => {
                        return  <div className='container-bg my-4 pb-3 shadow-lg transition-all duration-500 
                                                    rounded-lg hover:bg-slate-400 
                                                    dark:dark-card-bg-col' 
                                                data-aos={ child_animation } data-aos-duration={ child_timer }
                                                >
                                    <img className='h-48 w-full' src={ project.projectCoverImage } alt='cover' />
                                    <div className='p-2'>
                                        <h3 className='text-lg primary-col font_lora font-semibold text-center secondary-col mb-2 sm:mb-3'>{ project.projectTitle }</h3>
                                        <h3 className='text-sm text-center font_poppins mx-1 mb-2'>{ project.projectDescription }</h3>
                                        <h3 className='text-sm text-center italic secondary-col mb-4'>Stack: { project.projectTechnologies }</h3>
                                        <Link to={ project.projectLink } target='_blank'>
                                            <button className='bg-[#ec5b53] transition-all duration-200 hover:bg-[#c73a32] 
                                                               py-2 px-4 text-white rounded-lg ml-2 
                                                               hover:cursor-pointer'>
                                                { project.buttonText }
                                            </button>
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
                        myCertificationArray.map(( certification: my_certification ) => {
                            return  <div className='container-bg my-4 pb-3 shadow-lg transition-all duration-500 
                                                        rounded-lg hover:bg-slate-400 
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


                <div className='container-bg hover:bg-slate-400 mx-1 shadow-lg sm:p-3 dark:dark-card-bg-col sm:rounded-lg'>
                    {
                        myEducationArray.map(( education: my_education ) => {
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
                    myServicesArray.map(( service: myService ) => {
                        return   <div className='container-bg border-0 rounded-lg shadow-lg pt-2 pb-8 text-center mb-4 
                                                 transition-all duration-700 hover:cursor-pointer
                                                 hover:shadow-lg hover:skew-x-6 hover:bg-slate-400 dark:dark-card-bg-col' 
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
                    contactMeArray.map(( contact_me: contact_me ) => {
                        return  <div className='container-bg my-4 shadow-lg py-12 transition-all duration-200 rounded-lg hover:bg-slate-400 dark:rounded-lg dark:dark-card-bg-col' data-aos={ child_animation } data-aos-duration={ child_timer }>
                                    <div className='bg-[#ec5b53] w-24 rounded-full p-6 ml-28 sm:ml-32 mb-3'>
                                        <img className='w-20' src={ contact_me.icon } alt='address' />
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


            { /* go to top button */ }
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