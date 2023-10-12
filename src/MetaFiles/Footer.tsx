import React from 'react'

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
    ScrollProjectsDivIntoView: () => void
  
  }
  


const Footer: React.FC<FooterProp> = ({ ScrollHomeDivIntoView, ScrollAboutDivIntoView, 
                                        ScrollContactDivIntoView, ScrollSkillsDivIntoVIew,
                                        ScrollEducationDivIntoView, ScrollProjectsDivIntoView,
                                        ScrollServicesDivIntoVIew }) => {


    return (
        <footer className='bg-slate-200 dark:bg-slate-800 pt-6'>
            <div>
                <div className='ml-5 mb-5 mt-3'>
                    <h3 className='font_merriweather text-lg font-bold mb-3 secondary-col dark:dark-primary-text-col'>Let's talk about</h3>
                    <h3 className='text-md font_merriweather dark:dark-secondary-text-col'>
                        Websites, Web apps and Mobile apps. Whatever you can imagine, we can bring to life !!
                    </h3>
                </div>

                <div className='sm:flex sm:flex-row sm:justify-evenly'>
                    <div className='ml-5 mb-10 sm:mb-5'>
                        <ul className='text-xl font_merriweather font-bold mb-3 secondary-col dark:dark-primary-text-col'>Menu</ul>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollHomeDivIntoView }>Home</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollAboutDivIntoView }>About</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollEducationDivIntoView }>Education</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollSkillsDivIntoVIew }>Skills</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollServicesDivIntoVIew }>Services</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollContactDivIntoView }>Contact</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col' onClick={ ScrollProjectsDivIntoView }>Projects</li>
                    </div>


                    <div className='ml-5 mb-5'>
                        <ul className='text-xl font_merriweather font-bold mb-3 secondary-col dark:dark-primary-text-col'>Contact</ul>
                            <li className='text-md ml-3 font-semibold hover:cursor-pointer my-3 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col flex flex-row' >
                                <AiOutlinePhone size={ 20 } /> <span>+233-(0)55-253-1004</span>
                            </li>

                            <li className='text-md ml-3 font-semibold hover:cursor-pointer my-3 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col flex flex-row'>
                                <AiOutlineMail size={ 20 } className='mr-2' />  <span>larryking8118@gmail.com</span>
                            </li>

                            <li className='text-md ml-3 font-semibold hover:cursor-pointer my-3 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col flex flex-row'>
                                <AiOutlineGithub size={ 20 } className='mr-2' /> <span>https://github.com/larryking01</span>
                            </li>

                            <li className='text-md ml-3 font-semibold hover:cursor-pointer my-3 footer-link-transition dark:hover:text-blue-700 dark:dark-secondary-text-col flex flex-row'>
                                <AiOutlineLinkedin size={ 23 } className='mr-2' /> <span>www.linkedin.com/in/larry-williams8118</span>
                            </li>

                    </div>

                </div>

            </div>




            <div className='ml-5 py-4 secondary-col sm:text-center'>
                <h3 className='font_poppins text-sm sm:text-lg dark:dark-secondary-text-col'>Copyright ©2023  All rights reserved</h3>
            </div>

        </footer>
    )
}



export default Footer