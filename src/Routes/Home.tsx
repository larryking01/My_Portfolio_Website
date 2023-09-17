import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import NavbarComponent from '../MetaFiles/Navbar'
import Footer from '../MetaFiles/Footer'
// import GoToTopBtn from '../MetaFiles/GoToTopBtn'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

// import ProgressBar from 'react-bootstrap/ProgressBar';


// import pic1 from '../StaticFiles/pic1.jpg'
import pic2 from '../StaticFiles/pic2.jpg'
import website1 from '../StaticFiles/website1.png'
import website2 from '../StaticFiles/website2.png'
import js_logo from '../StaticFiles/js_logo.png'
import ts_logo from '../StaticFiles/ts_logo.png'
import hotel_finder_cover1 from '../StaticFiles/hotel_finder_cover1.png'
import hotel_finder_cover2 from '../StaticFiles/hotel_finder_cover2.png'




const Home = ( ) => {


    // my skills interface.
    interface skill {
        name: string,
        proficiency: number,
        skill_logo?: string
    }

    let skillsArray: skill[] = [
        { name: 'JavaScript', proficiency: 80, skill_logo: js_logo },
        { name: 'TypeScript', proficiency: 67, skill_logo: ts_logo },
        { name: 'GraphQL', proficiency: 74 },
        { name: 'PostgreSQL', proficiency: 82 },
        { name: 'ReactJS', proficiency: 88 },
        { name: 'MySQL', proficiency: 80 },
        { name: 'React-Bootstrap', proficiency: 87 },
        { name: 'REST Technology', proficiency: 80 },
        { name: 'React Native', proficiency: 71 },
        { name: 'Tailwind CSS', proficiency: 94 },
        { name: 'MongoDB', proficiency: 72 },
        { name: 'Firebase', proficiency: 71 },
        { name: 'Supabase', proficiency: 69 }

    ]


    // about me info interface.
    interface aboutMeInfoSub {
        target: string,
        answer: string
    }

    let aboutMeInfoArray: aboutMeInfoSub[ ] = [
        { target: 'Name:', answer: 'Larry King' }, 
        { target: 'Date of birth:', answer: 'June 19, 1999' },
        { target: 'Address:', answer: 'Lakeside Estate, Accra' },
        { target: 'Email:', answer: 'larryking8118@gmail.com' },
        { target: 'Phone:', answer: '+(233)-55-253-1004'}
    ]

    
    // my services provided interface.
    interface myService {
        serviceType: string,
        serviceDetails: string,
        icon: string
    }

    // my services array.
    let myServicesArray: myService[] = [
        { serviceType: 'Website development', serviceDetails: 'I pride myself in creating interactive, responsive websites', icon: website1 },
        { serviceType: 'Web-app development', serviceDetails: 'I pride myself in creating interactive, responsive websites', icon: website2 },
        { serviceType: 'Mobile app development', serviceDetails: 'I pride myself in creating interactive, responsive websites', icon: website1 }    
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
        { projectTitle: 'Hotel Booking Platform', 
          projectDescription: 'A simple online application that allows users to find hotels and book their stay',
          projectCoverImage: hotel_finder_cover1,
          projectTechnologies: 'JavaScript, ReactJS, MongoDB and REST technology',
          projectLink: 'https://hotel-finder-app-client-react.onrender.com'
        },
        { projectTitle: 'Hotel Booking Platform', 
        projectDescription: 'A simple online application that allows users to find hotels and book their stay',
        projectCoverImage: hotel_finder_cover2,
        projectTechnologies: 'JavaScript, ReactJS, MongoDB and REST technology',
        projectLink: 'https://hotel-finder-app-client-react.onrender.com'
        },
        { projectTitle: 'Hotel Booking Platform', 
        projectDescription: 'A simple online application that allows users to find hotels and book their stay',
        projectCoverImage: hotel_finder_cover1,
        projectTechnologies: 'JavaScript, ReactJS, MongoDB and REST technology',
        projectLink: 'https://hotel-finder-app-client-react.onrender.com'
        },
        { projectTitle: 'Hotel Booking Platform', 
        projectDescription: 'A simple online application that allows users to find hotels and book their stay',
        projectCoverImage: hotel_finder_cover2,
        projectTechnologies: 'JavaScript, ReactJS, MongoDB and REST technology',
        projectLink: 'https://hotel-finder-app-client-react.onrender.com'
        },
        { projectTitle: 'Hotel Booking Platform', 
        projectDescription: 'A simple online application that allows users to find hotels and book their stay',
        projectCoverImage:hotel_finder_cover1,
        projectTechnologies: 'JavaScript, ReactJS, MongoDB and REST technology',
        projectLink: 'https://hotel-finder-app-client-react.onrender.com'
        }



    ]










    return (
        <div>
            <NavbarComponent />

            {/* main page content */}
            <div className='mt-4'>
                <div>
                    {/* <h3 className='text-2xl text-[#b1b493] font-bold m-2'>Hi there!</h3> */}
                    <img className='w-full h-80 opacity-80' src={ pic2 } alt='designer' />
                    <div className='text-black absolute bottom-36 left-6'>
                        <h3 className='text-xl font-bold mt-3 text-center animate-pulse'>Hi, I am Larry Nii Nai Williams</h3>
                        <h3 className='text-md text-center font-bold mt-1 animate-pulse'>I'm a software developer</h3>
                    </div>
                </div>


                <div className='text-center mt-2'>
                    <p className='text-md'>Free resource that will help nderstand thecv designc process and improve
                         theroi nderstand the design process andisei impro are of vquality.
                    </p>
                </div>

            </div>
            {/* end of main page content */ }


            {/* intro section */} 
            <div>
                {/* <h3 className='text-[#b1b493] text-xl ml-5 mt-4 font-semibold'>My Intro</h3> */}
                <h2 className='text-2xl primary-col font-bold mb-3 ml-5 mt-5'>About Me</h2>
            </div>
            <div className='ml-5 mb-3'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut soluta possimus doloremque non, modi aspernatur natus similique, eligendi consequatur vitae rerum nisi laboriosam quaerat sed harum quidem commodi expedita. Sint!</p>
            </div>

            {
                aboutMeInfoArray.map( ( infoLine: aboutMeInfoSub ) => {
                    return   <div className='flex flex-row ml-5 my-2 font-semibold pt-3 space-x-8'> 
                                <div className=''>
                                    <h3>{ infoLine.target }</h3>
                                </div>
                
                                <div className='primary-col'>
                                    <h3>{ infoLine.answer }</h3>
                                </div>
                            </div>
    
                })
            }

            {/* end of intro section */}



            {/* skills section */ }
            <div>
                {/* <h3 className='primary-col text-xl ml-5 mt-4 font-semibold'>Skills</h3> */}
                <h2 className='primary-col text-2xl font-bold mb-3 ml-5 mt-5'>Skills</h2>
            </div>

            <div className='grid grid-cols-2 my-4 mx-3 gap-3 hover:cursor-pointer'>
                {/*
                    skillsArray.map( ( skill: skill ) => (
                        <div className='my-1 py-4 text-center bg-slate-200 rounded-lg transition-all duration-500 hover:rotate-12'>
                            <p className='text-lg font-semibold mb-3'>{ skill.name }</p>
                            <div className='w-14 ml-8'>
                                <ProgressBar animated now={ skill.proficiency } label={`${ skill.proficiency }%`} />
                            </div>
                        </div>
                    ))
                    */}
               
               {
                    skillsArray.map( ( skill: skill ) => (
                        <div className='my-1 py-4 text-center bg-slate-100 rounded-lg transition-all duration-500 hover:skew-y-6'>
                            <p className='text-lg font-semibold mb-3'>{ skill.name }</p>
                            <div className='w-14 ml-8'>
                                <CircularProgressbar value={ skill.proficiency } text={ `${ skill.proficiency }%` } />
                            </div>
                        </div>
                    ))
                } 

            </div>
            {/* end of skills section */ }

            


            {/* my software services section */}
            <div className='mx-3 mb-8'>
                <h3 className='primary-col text-2xl font-bold mb-3'>What services do I provide?</h3>
                {
                    myServicesArray.map(( service: myService ) => {
                        return   <div className='bg-slate-100 border-0 rounded-lg shadow-lg pt-2 pb-8 text-center mb-4 
                                                 transition-all duration-700 hover:bg-[#b1b493] hover:text-white hover:cursor-pointer
                                                 hover:shadow-lg hover:skew-y-3'>
                                    <img className='mb-2 w-14 ml-4' src={ service.icon } alt='website' />
                                    <h3 className='text-lg font-semibold mb-2'>{ service.serviceType }</h3>
                                    <h3 className='text-md px-1'>{ service.serviceDetails }</h3>
                                 </div>

                    })
                }
            </div>



            {/* list of best projects section */ }
            <div>
                <h3 className='primary-col ml-5 text-2xl font-bold mt-3'>Have a look at some interesting projects I have built</h3>
                {
                    myProjectsArray.map(( project: my_projects ) => {
                        return  <div className='bg-slate-100 my-4 mx-3 pb-3 shadow-lg hover:cursor-pointer rounded-lg
                                                transition-all duration-500 hover:bg-[#b1b493] hover:skew-y-3 hover:text-white'
                                                >
                                    <img className='h-48' src={ project.projectCoverImage } alt='cover' />
                                    <div className='p-2'>
                                        <h3 className='text-lg font-semibold text-center'>{ project.projectTitle }</h3>
                                        <h3 className='text-sm text-center'>{ project.projectDescription }</h3>
                                        <h3 className='text-sm text-center mb-4'>Built with { project.projectTechnologies }</h3>
                                        <Link to='https://hotel-finder-app-client-react.onrender.com'>
                                            <button className='bg-slate-500 py-2 px-4 text-white rounded-lg ml-16'>View live</button>
                                        </Link>
                                    </div>
                                </div>
                    })
                }
            </div>

            {/* go to top button */}
            {/* <GoToTopBtn /> */}


            {/* footer section */}
            <Footer />

        </div>
    )


}



export default Home