import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePhone, 
         AiOutlineGithub, 
         AiOutlineMail, 
         AiOutlineLinkedin } from 'react-icons/ai'



// typing the props.
interface FooterProp {
    ScrollHomeDivIntoView: () => void,
    ScrollAboutDivIntoView: () => void,
    ScrollContactDivIntoView: () => void,
    ScrollEducationDivIntoView: () => void,
    ScrollSkillsDivIntoVIew: () => void,
    ScrollServicesDivIntoVIew: () => void,
    ScrollProjectsDivIntoView: () => void,
    ScrollCertificationsDivIntoView: () => void
  
  }
  


const Footer: React.FC<FooterProp> = ({ ScrollHomeDivIntoView, ScrollAboutDivIntoView, 
                                        ScrollContactDivIntoView, ScrollSkillsDivIntoVIew,
                                        ScrollEducationDivIntoView, ScrollProjectsDivIntoView,
                                        ScrollServicesDivIntoVIew, ScrollCertificationsDivIntoView }) => {


    return (
        <footer className='container-bg dark:bg-slate-800 pt-6'>
            <div className='mx-5 sm:flex sm:flex-row sm:justify-evenly'>

                <div className='mb-9 mt-3 basis-1/4'>
                    <h3 className='font_merriweather text-xl font-bold mb-3 secondary-col dark:dark-primary-text-col'>Let's talk about</h3>
                    <h3 className='text-sm font_merriweather dark:dark-secondary-text-col'>
                        Websites, Web apps and Mobile apps. Whatever you can imagine, we can bring to life !!
                    </h3>
                </div>


                <div className='mb-10 sm:mb-5 basis-1/4'>
                    <ul className='text-xl font_merriweather font-bold mb-3 secondary-col dark:dark-primary-text-col'>Menu</ul>
                    <li className='text-md ml-3 list-none font-normal italic hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollHomeDivIntoView }>Home</li>
                    <li className='text-md ml-3 list-none font-normal italic hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollAboutDivIntoView }>About</li>
                    <li className='text-md ml-3 list-none font-normal italic hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollEducationDivIntoView }>Education</li>
                    <li className='text-md ml-3 list-none font-normal italic hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollSkillsDivIntoVIew }>Skills</li>
                    <li className='text-md ml-3 list-none font-normal italic hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollServicesDivIntoVIew }>Services</li>
                    <li className='text-md ml-3 list-none font-normal italic hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollProjectsDivIntoView }>Projects</li>
                    <li className='text-md ml-3 list-none font-normal italic hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollCertificationsDivIntoView }>Certifications</li>
                    <li className='text-md ml-3 list-none font-normal italic hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollContactDivIntoView }>Contact Me</li>
                </div>


                <div className='mb-5 basis-1/4'>
                    <ul className='text-xl font_merriweather font-bold mb-3 secondary-col dark:dark-primary-text-col'>Contact Me</ul>
                        <li className='text-md ml-3 font-normal hover:cursor-pointer my-3 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col flex flex-row' >
                            <AiOutlinePhone size={ 20 } /> <span>+233-(0)55-253-1004</span>
                        </li>

                        <li className='text-md ml-3 font-normal hover:cursor-pointer my-3 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col flex flex-row'>
                            <AiOutlineMail size={ 20 } className='mr-2' />  <span>larryking8118@gmail.com</span>
                        </li>

                        <Link to='https://github.com/larryking01' target='_blank'>
                            <li className='text-md ml-3 font-normal hover:cursor-pointer my-3 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col flex flex-row'>
                                <AiOutlineGithub size={ 20 } className='mr-2' /> <span>github.com/larryking01</span>
                            </li>
                        </Link>

                        <Link to='https://www.linkedin.com/in/larry-williams8118' target='_blank'>
                            <li className='text-md ml-3 font-normal hover:cursor-pointer my-3 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col flex flex-row'>
                                <AiOutlineLinkedin size={ 23 } className='mr-2' /> <span>linkedin.com/in/larry-williams8118</span>
                            </li>
                        </Link>

                </div>

            </div>


            <div className='ml-5 py-4 secondary-col sm:text-center'>
                <h3 className='font_poppins text-sm sm:text-md dark:dark-secondary-text-col'>Copyright ©2023  All rights reserved</h3>
            </div>

        </footer>
    )
}



export default Footer