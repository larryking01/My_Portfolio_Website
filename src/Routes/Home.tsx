import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import NavbarComponent from '../MetaFiles/Navbar'
import Footer from '../MetaFiles/Footer'
import GoToTopBtn from '../MetaFiles/GoToTopBtn'


import pic2 from '../StaticFiles/pic2.jpg'
import pic5 from '../StaticFiles/pic5.jpg'
import mobile1 from '../StaticFiles/mobile1.png'
import website1 from '../StaticFiles/website1.png'
import website2 from '../StaticFiles/website2.png'
import cover1 from '../StaticFiles/cover1.jpg'
import js_logo from '../StaticFiles/js_logo.png'
import ts_logo from '../StaticFiles/ts_logo.png'
import graphql_logo from '../StaticFiles/graphql_logo.png'
import postgresql_logo from '../StaticFiles/postgresql_logo.png'
import react_js_logo from '../StaticFiles/react_js_logo.png'
import my_sql_logo from '../StaticFiles/my_sql_logo.png'
import react_bootstrap_logo from '../StaticFiles/react_bootstrap_logo.png'
import express_js_logo from '../StaticFiles/express_js_logo.png'
import tailwind_logo from '../StaticFiles/tailwind_logo.png'
import mongo_logo from '../StaticFiles/mongo_image.png'
import firebase_logo from '../StaticFiles/firebase_logo.png'
import supabase_logo from '../StaticFiles/supabase_logo.png'
import hotel_finder_cover1 from '../StaticFiles/hotel_finder_cover1.png'
import hotel_finder_cover2 from '../StaticFiles/hotel_finder_cover2.png'
import grad_cap2 from '../StaticFiles/grad_cap2.png'
import address_icon from '../StaticFiles/address.png'
import email_icon from '../StaticFiles/email.png'
import phone_icon from '../StaticFiles/phone.png'
import linked_in from '../StaticFiles/linkedIn.png'
import git_hub from '../StaticFiles/github.png'
// import uni_logo from '../StaticFiles/uni_logo.png'


import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
AOS.init()





const Home = ( ) => {

    // useEffect(() => {
    //     AOS.init()
    // }, [ ])

    // setting up reference.
    // const home_ref = useRef()
    // const about_ref = useRef()
    // const education_ref = useRef()
    // const projects_ref = useRef()



    // toggling navbar expanded state.
    const [ expanded, setIsExpanded ] = useState( false )

    const ToggleExpandedState = () => {
        setIsExpanded( !expanded )
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
        { name: 'ReactJS', proficiency: 88, skill_logo: react_js_logo },
        { name: 'MySQL', proficiency: 80, skill_logo: my_sql_logo },
        { name: 'React-Bootstrap', proficiency: 87, skill_logo: react_bootstrap_logo },
        { name: 'Express JS', proficiency: 80, skill_logo: express_js_logo },
        { name: 'React Native', proficiency: 71, skill_logo: react_js_logo },
        { name: 'Tailwind CSS', proficiency: 94, skill_logo: tailwind_logo },
        { name: 'MongoDB', proficiency: 72, skill_logo: mongo_logo },
        { name: 'Firebase', proficiency: 71, skill_logo: firebase_logo },
        { name: 'Supabase', proficiency: 69, skill_logo: supabase_logo }

    ]


    // about me info interface.
    interface aboutMeInfoSub {
        target: string,
        answer: string
    }


    let aboutMeInfoArray: aboutMeInfoSub[ ] = [
        { target: 'Name:', answer: 'Larry N. N. Williams' }, 
        { target: 'Date of birth:', answer: 'June 19, 1999' },
        { target: 'Address:', answer: 'Lakeside Estate, Accra' },
        { target: 'Email:', answer: 'larryking8118@gmail.com' },
        { target: 'Phone:', answer: '+(233)-(0)55-253-1004'}
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
        { serviceType: 'Mobile app development', serviceDetails: "Mobile devices come in handy these days and that is why you need your software or project running on one to reach a widerange of users. Don't compromise", icon: mobile1 }    
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
        { projectTitle: 'Skyscanner hotel booking platform', 
          projectDescription: 'A simple online application that allows users to find hotels and book their stay',
          projectCoverImage: hotel_finder_cover1,
          projectTechnologies: 'JavaScript, ReactJS, MongoDB and REST technology',
          projectLink: 'https://hotel-finder-app-client-react.onrender.com'
        },
        { projectTitle: 'Sneakerzone e-commerce website', 
        projectDescription: 'A simple online application that allows users to find hotels and book their stay',
        projectCoverImage: hotel_finder_cover2,
        projectTechnologies: 'JavaScript, ReactJS, MongoDB and REST technology',
        projectLink: 'https://hotel-finder-app-client-react.onrender.com'
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
        { school: 'Okuapemman School', programme: 'General Arts', study_period: '2014 - 2017', school_icon: grad_cap2 }      
    ]


    // contact me interface.
    interface contact_me {
        icon: string,
        title: string,
        detail: string,
        hover?: string
    }


    // contact me array.
    const contactMeArray: contact_me[] = [
        { icon: phone_icon, title: 'Contact Number', detail: '+233-(0)55-253-1004'},
        { icon: address_icon, title: 'Address', detail: 'Lakeside Estate, Accra'},
        { icon: email_icon, title: 'Email Address', detail: 'larryking8118@gmail.com'},
        { icon: git_hub, title: 'Git hub', detail: 'https://github.com/larryking01', hover: 'cursor'},
        { icon: linked_in, title: 'LinkedIn', detail: 'www.linkedin.com/in/larry-williams8118', hover: 'cursor'},

    ]


    // initializing aos features.
    let parent_animation = 'fade-right'
    let parent_timer = '500'
    let child_animation = 'fade-up'
    let child_timer = '2000'



    return (
        <div>
            <NavbarComponent expanded={ expanded } 
                             ToggleNavbarExpanded={ ToggleExpandedState }/>

        <div>
            {/* main page content */}
            <div className='container-x-margins'>
                <h3 className='font-bold mt-4 text-xl italic'>Hey there!!</h3>
                <div className='my-1'>
                    <div className={ expanded === true? 'remove-cover-pic' : 'bg-slate-200 rounded-full ' }>
                        <img className='brightness-105 opacity-100 rounded-full w-full h-70 hover:shadow-lg' src={ cover1 } alt='designer' />
                    </div>

                    <div className='mt-2'>
                        <h3 className='text-xl font-bold mt-1 text-center secondary-col'>I am Larry N. N. Williams</h3>
                        <h3 className='text-md text-center mt-1 font-semibold'>I'm a software developer</h3>
                    </div>

                </div>


                <div className='text-center mt-4'>
                    <p className='text-md font-semibold italic'>
                        Software runs the world. In our ever-growing world of technology, we are only limited by
                        our creativity. As long as you can imagine it, software can bring it to life!
                    </p>
                </div>
                
            </div>
            {/* end of main page content */ }



            {/* intro section */} 
            <div className='container-x-margins container-y-margins'>
                <div>
                    <h2 className='text-2xl primary-col font-lora font-bold mb-3 mt-5' data-aos={ parent_animation } data-aos-duration={ parent_timer }>About Me</h2>
                </div>
                
                <div className='mb-3' data-aos={ child_animation } data-aos-duration={ child_timer }>
                    <>
                        <p>
                            I am a driven and innovative person who loves to learn by getting my hands dirty.
                            I believe we grow by solving challenges and learning from them. No problem, however difficult
                            it may seem, is unsolvable if it is addressed with the right mind, attitude and tools.
                        </p>

                        {
                            aboutMeInfoArray.map( ( infoLine: aboutMeInfoSub ) => {
                                return   <div className='flex flex-row my-2 font-semibold pt-3 space-x-8'> 
                                            <div className='secondary-col'>
                                                <h3>{ infoLine.target }</h3>
                                            </div>
                            
                                            <div className='text-black'>
                                                <h3>{ infoLine.answer }</h3>
                                            </div>
                                        </div>
                
                            })
                        }
                    </>
                </div>
                

            </div>

            {/* end of intro section */}





            {/* contact me section */}
            <div className='container-x-margins container-y-margins'>
                <h2 className='text-2xl primary-col font-lora font-bold mb-2 mt-5' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Contact Me</h2>
                <h2 className='text-slate-800 font-lora mb-3 mt-2 text-md' data-aos={ child_animation } data-aos-duration={ child_timer }>
                    Have any ideas you want to visualize in software?
                    Then get in touch with me via any of the platforms below:
                </h2>

                {
                    contactMeArray.map(( contact_me: contact_me ) => {
                        return <div className='my-4 shadow-lg py-12' data-aos={ child_animation } data-aos-duration={ child_timer } >
                                    <div className='bg-[#ec5b53] w-24 rounded-full p-6 ml-28 mb-3'>
                                        <img className='w-20' src={ contact_me.icon } alt='address' />
                                    </div>

                                    <h3 className='font-lora text-[#10285d] font-semibold text-xl text-center mb-2'>{ contact_me.title }</h3>
                                    <Link to={ contact_me.detail }>
                                        <h3 className='font-md text-center text-[#ec5b53] font-semibold cursor-pointer'>{ contact_me.detail }</h3>
                                    </Link>
                               </div>
                    })
                }

            
            </div>




            {/* education section */}
            <div className='container-x-margins container-y-margins'>
                <div>
                    <h2 className='text-2xl primary-col font-lora font-bold mb-3 mt-5' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Education</h2>
                </div>


                <div className='mx-1 shadow-lg'>
                    {
                        myEducationArray.map(( education: my_education ) => {
                            return <div className='flex flex-row justify-between mx-3 my-3 divide-y-2' data-aos={ child_animation } data-aos-duration={ child_timer }>
                                        <div className='mr-3 mt-2 basis-1/3'>
                                            <img className='w-12' src={ education.school_icon } alt='cover' />
                                        </div>

                                        <div className='basis-2/3'>
                                            <h3 className='secondary-col font-lora font-bold text-lg mb-1'>{ education.programme }</h3>
                                            <h3 className='font-semibold text-lg mb-1'>{ education.school }</h3>
                                            <h3 className='font-semibold text-md mb-2'>{ education.study_period }</h3>
                                        </div>
                                    </div> 
                        })
                }

                </div>

            </div>
            {/* end of education section */}





            {/* skills section */ }
            <div className='container-x-margins container-y-margins'>
                <h2 className='primary-col text-2xl font-lora font-bold mb-1 mt-5' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Skills</h2>
                <p>Here are some of the technical skills I have in my arsenal to give you the best software experience possible</p>
            </div>

            <div className='grid grid-cols-2 mx-3 gap-3 hover:cursor-pointer'>
               
               {
                    skillsArray.map( ( skill: skill ) => (
                        <div className='my-1 p-3 text-center bg-slate-200 rounded-lg transition-all 
                                        duration-500 hover:shadow-lg hover:bg-slate-300' data-aos={ child_animation } data-aos-duration={ child_timer }>
                            <p className='text-lg font-lora font-semibold mb-3 secondary-col'>{ skill.name }</p>
                            <div className='w-14 ml-8'>
                                {/* <CircularProgressbar value={ skill.proficiency } text={ `${ skill.proficiency }%` } /> */}
                                <img src={ skill.skill_logo } className='rounded-none' />
                            </div>
                        </div>
                    ))
                } 

            </div>
            {/* end of skills section */ }

            



            {/* my software services section */}
            <div className='container-x-margins container-y-margins'>
                <h3 className='primary-col text-2xl font-lora font-bold mb-3' data-aos={ parent_animation } data-aos-duration={ parent_timer }>What services do I provide?</h3>
                {
                    myServicesArray.map(( service: myService ) => {
                        return   <div className='bg-slate-100 border-0 rounded-lg shadow-lg pt-2 pb-8 text-center mb-4 
                                                 transition-all duration-700 hover:cursor-pointer
                                                 hover:shadow-lg hover:skew-x-6' 
                                       data-aos={ child_animation } data-aos-duration={ child_timer }>
                                    <img className='mb-2 w-14 ml-4' src={ service.icon } alt='website' />
                                    <h3 className='text-lg font-lora secondary-col font-semibold mb-2'>{ service.serviceType }</h3>
                                    <h3 className='text-md px-1'>{ service.serviceDetails }</h3>
                                 </div>

                    })
                }
            </div>





            {/* list of best projects section */ }
            <div className='container-x-margins container-y-margins'>
                <h3 className='primary-col text-2xl font-lora font-bold mt-3' data-aos={ parent_animation } data-aos-duration={ parent_timer }>Have a look at some interesting projects I have built</h3>
                {
                    myProjectsArray.map(( project: my_projects ) => {
                        return  <div className='bg-slate-100 my-4 pb-3 shadow-lg hover:cursor-pointer rounded-lg
                                                transition-all duration-500 hover:skew-x-3' 
                                                data-aos={ child_animation } data-aos-duration={ child_timer }
                                                >
                                    <img className='h-48' src={ project.projectCoverImage } alt='cover' />
                                    <div className='p-2'>
                                        <h3 className='text-lg primary-col font-lora font-semibold text-center secondary-col'>{ project.projectTitle }</h3>
                                        <h3 className='text-sm text-center font-semibold mx-1'>{ project.projectDescription }</h3>
                                        <h3 className='text-sm text-center mb-4 font-semibold'>Built with { project.projectTechnologies }</h3>
                                        <Link to='https://hotel-finder-app-client-react.onrender.com'>
                                            <button className='bg-[#ec5b53] transition-all duration-200 hover:bg-[#c73a32] py-2 px-4 text-white rounded-lg ml-24'>View live</button>
                                        </Link>
                                    </div>
                                </div>
                    })
                }
            </div>





            {/* if not now, then when? section*/}
            <div className='container-x-margins container-y-margins mr-1' data-aos={ parent_animation } data-aos-duration={ parent_timer }>
                <h3 className='text-2xl font-semibold font-lora primary-col'>If Not Now, When?</h3>
                <h3 className='text-2xl font-semibold font-lora primary-col mb-1'>Let's Work Together!</h3>
                <p className='text-md font-lora secondary-col mb-3'>Get in touch with me and let us bring your wonderful ideas into life!</p>
                <button className='bg-[#ec5b53] transition-all duration-200 hover:bg-[#c73a32] py-2 px-4 text-white rounded-lg ml-20'>Contact Me</button>
            </div>
            {/* end of if not now, then when? */}


            { /* go to top button */ }
            <GoToTopBtn />

            {/* footer section */}
            <Footer />

        </div>

        </div>
    )


}



export default Home