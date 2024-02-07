import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

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
import react_js_logo from '../StaticFiles/react_js_logo.png'
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
import hotel_finder_cover1 from '../StaticFiles/hotel_finder_cover1.png'
import grad_cap2 from '../StaticFiles/grad_cap2.png'
import address_icon from '../StaticFiles/address.png'
import email_icon from '../StaticFiles/email.png'
import phone_icon from '../StaticFiles/phone.png'
import linked_in from '../StaticFiles/linkedIn.png'
import git_hub from '../StaticFiles/github.png'

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
            strings: ['I am a software engineer'],
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



    // toggling darkmode.
    const [ darkMode, setDarkMode ] = useState( false )

    const ToggleDarkModeState = ( ) => {
        setDarkMode( !darkMode )
        setIsExpanded( false )
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
        { name: 'GraphQL', proficiency: 78, skill_logo: graphql_logo },
        { name: 'PostgreSQL', proficiency: 82, skill_logo: postgresql_logo },
        { name: 'React JS', proficiency: 88, skill_logo: react_js_logo },
        { name: 'My SQL', proficiency: 80, skill_logo: my_sql_logo },
        { name: 'React-Bootstrap', proficiency: 87, skill_logo: react_bootstrap_logo },
        { name: 'Express JS', proficiency: 80, skill_logo: express_js_logo },
        { name: 'Angular', proficiency: 69, skill_logo: angular_js_logo },
        { name: 'React Native', proficiency: 71, skill_logo: react_js_logo },
        { name: 'Tailwind CSS', proficiency: 94, skill_logo: tailwind_logo },
        { name: 'Mongo DB', proficiency: 72, skill_logo: mongo_logo },
        { name: 'Firebase', proficiency: 71, skill_logo: firebase_logo },
        { name: 'Supabase', proficiency: 69, skill_logo: supabase_logo },
        { name: 'Docker', proficiency: 69, skill_logo: docker_logo },
        { name: 'Next JS', proficiency: 69, skill_logo: next_js_logo }

    ]


    // about me info interface.
    interface aboutMeInfoSub {
        target: string,
        answer: string
    }


    let aboutMeInfoArray: aboutMeInfoSub[ ] = [
        { target: 'I am a technology enthusiast. I love to explore the limitless possibilities in technology.', answer: 'Larry N. N. Williams' }, 
        { target: 'I am flexible and I can adapt to various roles as is required.', answer: 'Larry N. N. Williams' }, 
        { target: 'I am a great team player.', answer: 'Lakeside Estate, Accra' },
        { target: 'I also pride myself in giving my utmost best to whatever task I am assigned.', answer: 'larryking8118@gmail.com' },
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
        projectLink: string
    }

    // my projects array.
    let myProjectsArray: my_projects[] = [
        { projectTitle: 'SwiftStay accommodation platform', 
          projectDescription: 'A simple online application that allows users to find hotels and book their stay',
          projectCoverImage: hotel_finder_cover1,
          projectTechnologies: 'JavaScript, ReactJS, MongoDB, React-Bootstrap',
          projectLink: 'https://swiftstay-rovw.onrender.com/'
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
        // { school: 'Okuapemman School', programme: 'General Arts', study_period: '2014 - 2017', school_icon: grad_cap2 }      
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
        { icon: address_icon, title: 'Address', detail: 'Lakeside Estate, Accra', url:'#', target:'' },
        { icon: email_icon, title: 'Email Address', detail: 'larryking8118@gmail.com', url:'#', target:'' },
        { icon: git_hub, title: 'Git hub', detail: 'https://github.com/larryking01', url:'https://github.com/larryking01', hover: 'cursor', target:'_blank' },
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
                             />


        <div>
            {/* main page content */}
            <div className='bg-[#F5F5F5] dark:dark-bg-col' ref={ home_ref }>
                <div className='my-1 sm:mx-16 sm:flex sm:flex-row sm:justify-evenly'>
                    <div className={ expanded === true? 'remove-cover-pic' : 'p-4 rounded-full basis-1/4 sm:py-16 sm:w-full sm:h-64' }>
                        <img className='rounded-full w-full  brightness-90 shadow-md sm:w-full
                                        hover:shadow-lg sm:rounded-lg' src={ cover6 } alt='designer' />
                    </div>

                    <div className='mt-2 sm:pt-52 basis-2/3'>
                        <div>
                            <span ref={ name_ref } className='text-xl font-bold mt-1 ml-3 text-center secondary-col sm:text-5xl font-playfair dark:dark-primary-text-col'></span>
                        </div>

                        <div className='mt-1 sm:mt-4'>
                            <span ref={ job_title_ref } className='text-md text-center mt-3 ml-5 sm:ml-12 sm:mt-5 font-merriweather font-semibold sm:text-lg dark:dark-primary-text-col'></span>
                        </div>

                        <h3 className='container-x-margins container-y-margins text-md font-semibold italic dark:dark-secondary-text-col'>
                            In our ever-growing world of technology, we are only limited by
                            our creativity. As long as you can imagine it, software can bring it to life!
                        </h3>
                    </div>


                </div>
                
            </div>
            {/* end of main page content */ }



            {/* about me section */} 
            <div className='container-x-margins container-y-margins sm:mx-28' ref={ about_ref }>
                <div>
                    <h2 className='text-2xl primary-col font_lora font-bold mb-3 mt-5 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>About Me</h2>
                </div>
                
                <div className='mb-3' data-aos={ child_animation } data-aos-duration={ child_timer }>
                    <>
                        <p className='font_merriweather dark:dark-secondary-text-col'>
                            I am a driven and innovative person who loves to learn by getting my hands dirty.
                            I believe we grow by solving challenges and learning from them. No problem, however difficult
                            it may seem, is unsolvable if it is addressed with the right mind, attitude and tools.
                        </p>

                        <p className='font_merriweather dark:dark-secondary-text-col mt-2'>
                            Here are a few extra information about myself:
                        </p>


                        <ul>
                        {
                            aboutMeInfoArray.map( ( infoLine: aboutMeInfoSub ) => {
                                return   <li className='secondary-col my-2 font_merriweather font-normal pt-3 space-x-8 dark:dark-primary-text-col'>
                                            - { infoLine.target }
                                         </li>
                            })
                        }
                        </ul>

                    </>
                </div>
    
            </div>

            {/* end of about section */}





            {/* contact me section */}
            <div className='container-x-margins container-y-margins sm:mx-28' ref={ contact_me_ref }>
                <h2 className='text-2xl primary-col font_lora font-bold mb-2 mt-5 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Contact Me</h2>
                <h2 className='text-slate-800 font_merriweather mb-3 mt-2 text-md dark:dark-secondary-text-col' /*data-aos={ child_animation } data-aos-duration={ child_timer }*/>
                    Have any ideas you want to visualize in software ?
                    Then get in touch with me via any of the platforms below:
                </h2>

                <div className='sm:grid sm:grid-cols-3 sm:gap-5 sm:mx-6'>
                {
                    contactMeArray.map(( contact_me: contact_me ) => {
                        return  <div className='bg-[#F5F5F5] my-4 shadow-lg py-12 dark:rounded-lg dark:dark-card-bg-col' data-aos={ child_animation } data-aos-duration={ child_timer }>
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




            {/* education section */}
            <div className='container-x-margins container-y-margins sm:mx-28' ref={ education_ref }>
                <div>
                    <h2 className='text-2xl primary-col font_lora font-bold mb-3 mt-5 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Education</h2>
                </div>


                <div className='bg-[#F5F5F5] mx-1 shadow-lg sm:p-3 dark:dark-card-bg-col sm:rounded-lg'>
                    {
                        myEducationArray.map(( education: my_education ) => {
                            return <div className='flex flex-row justify-between mx-3 my-3 divide-y-2' data-aos={ child_animation } data-aos-duration={ child_timer }>
                                        <div className='mr-3 mt-2 basis-1/3'>
                                            <img className='w-12' src={ education.school_icon } alt='cover' />
                                        </div>

                                        <div className='basis-2/3'>
                                            <h3 className='secondary-col font_lora font-bold text-lg mb-1'>{ education.school }</h3>
                                            <h3 className='font_merriweather font-semibold text-md mb-1'>{ education.programme }</h3>
                                            <h3 className='font-semibold text-md mb-2 font_merriweather'>{ education.study_period }</h3>
                                        </div>
                                    </div> 
                        })
                }

                </div>

            </div>
            {/* end of education section */}





            {/* skills section */ }
            <div  className='container-x-margins container-y-margins sm:mx-28' ref={ skills_ref }>
                <h2 className='primary-col text-2xl font_lora font-bold mb-1 mt-5 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Skills</h2>
                <p className='font_merriweather dark:dark-secondary-text-col'>Here are some of the technical skills I have in my arsenal to give you the best software experience possible</p>
            </div>

            <div className='grid grid-cols-2 mx-3 gap-3 hover:cursor-pointer
                            sm:mx-28 sm:grid-cols-4 '>
               
               {
                    skillsArray.map( ( skill: skill ) => (
                        <div className='my-1 p-3 text-center bg-slate-200 rounded-lg transition-all 
                                        duration-500 hover:shadow-lg hover:bg-slate-300 dark:dark-card-bg-col' data-aos={ child_animation } data-aos-duration={ child_timer }>
                            <p className='text-lg font_lora font-semibold mb-3 secondary-col'>{ skill.name }</p>
                            <div className='w-14 ml-8 sm:ml-24'>
                                {/* <CircularProgressbar value={ skill.proficiency } text={ `${ skill.proficiency }%` } /> */}
                                <img src={ skill.skill_logo } className='rounded-none' />
                            </div>
                        </div>
                    ))
                } 

            </div>
            {/* end of skills section */ }

            



            {/* my software services section */}
            <div className='container-x-margins container-y-margins sm:mx-28' ref={ services_ref }>
                <h3 className='primary-col text-2xl font_lora font-bold mb-3 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>What services do I provide?</h3>
                <div className='sm:grid sm:grid-flow-row sm:grid-cols-3 sm:gap-5'>
                {
                    myServicesArray.map(( service: myService ) => {
                        return   <div className='bg-[#F5F5F5] border-0 rounded-lg shadow-lg pt-2 pb-8 text-center mb-4 
                                                 transition-all duration-700 hover:cursor-pointer
                                                 hover:shadow-lg hover:skew-x-6 hover:bg-slate-300 dark:dark-card-bg-col' 
                                       data-aos={ child_animation } data-aos-duration={ child_timer }>
                                    <img className='mb-2 w-14 ml-4' src={ service.icon } alt='website' />
                                    <h3 className='text-lg font_lora secondary-col font-semibold mb-2'>{ service.serviceType }</h3>
                                    <h3 className='text-sm sm:text-md px-3 font_merriweather'>{ service.serviceDetails }</h3>
                                 </div>

                    })
                }
                </div>
            </div>





            {/* list of best projects section */ }
            <div  className='container-x-margins container-y-margins sm:mx-28' ref={ projects_ref }>
                <h3 className='primary-col text-2xl font_lora font-bold mt-3 mb-2 dark:dark-primary-text-col' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Have a look at some interesting projects I have built</h3>
                <div className='sm:grid sm:grid-flow-row sm:grid-cols-3 sm:gap-5'>
                {
                    myProjectsArray.map(( project: my_projects ) => {
                        return  <div className='bg-[#F5F5F5] my-4 pb-3 shadow-lg transition-all duration-500 
                                                    hover:cursor-pointer rounded-lg hover:bg-slate-300 
                                                    dark:dark-card-bg-col' 
                                                data-aos={ child_animation } data-aos-duration={ child_timer }
                                                >
                                    <img className='h-48' src={ project.projectCoverImage } alt='cover' />
                                    <div className='p-2'>
                                        <h3 className='text-lg primary-col font_lora font-semibold text-center secondary-col mb-2 sm:mb-3'>{ project.projectTitle }</h3>
                                        <h3 className='text-sm text-center font_merriweather mx-1 mb-2'>{ project.projectDescription }</h3>
                                        <h3 className='text-sm text-center mb-4'>Built with { project.projectTechnologies }</h3>
                                        <Link to={ project.projectLink }>
                                            <button className='bg-[#ec5b53] transition-all duration-200 hover:bg-[#c73a32] 
                                                               py-2 px-6 text-white rounded-lg ml-24 sm:ml-28'>See Demo</button>
                                        </Link>
                                    </div>
                                </div>
                    })
                }
                </div>
            </div>





            {/* if not now, then when? section*/}
            <div className='container-x-margins container-y-margins mr-1 sm:mx-28' data-aos={ parent_animation } data-aos-duration={ parent_timer }>
                <div className='sm:flex sm:flex-row'>
                    <h3 className='text-2xl font-semibold font_lora primary-col sm:mr-4 dark:dark-primary-text-col'>If Not Now, When?</h3>
                    <h3 className='text-2xl font-semibold font_lora primary-col mb-1 dark:dark-primary-text-col'>Let's Work Together!</h3>
                </div>
                <p className='text-md font_merriweather dark:dark-secondary-text-col mb-3'>Get in touch with me and let us bring your wonderful ideas into life!</p>
                <button className='bg-[#ec5b53] transition-all duration-200 hover:bg-[#c73a32] py-2 px-4 text-white rounded-lg ml-20 sm:ml-0' onClick={ ScrollContactDivIntoView }>
                    Contact Me
                </button>
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
                ScrollProjectsDivIntoView={ ScrollProjectsDivIntoView } />

            </div>
        </div>

        </div>
    )


}



export default Home