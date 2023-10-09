import React from 'react'

import footer_mobile from '../StaticFiles/footer-mobile.png'
import footer_linkedin from '../StaticFiles/footer-linkedin.png'


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
                                        ScrollServicesDivIntoVIew}) => {


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
                    <div className='ml-5 mb-5'>
                        <ul className='text-xl font_merriweather font-bold mb-3 secondary-col dark:dark-primary-text-col'>About</ul>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col' onClick={ ScrollHomeDivIntoView }>Home</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col' onClick={ ScrollAboutDivIntoView }>About</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col' onClick={ ScrollServicesDivIntoVIew }>Services</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col' onClick={ ScrollContactDivIntoView }>Contact</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col' onClick={ ScrollProjectsDivIntoView }>Projects</li>
                    </div>


                    <div className='ml-5 mb-5'>
                        <ul className='text-xl font_merriweather font-bold mb-3 secondary-col dark:dark-primary-text-col'>Contact</ul>
                            <li className='dark:dark-secondary-text-col flex flex-row text-md ml-3 font-semibold hover:cursor-pointer my-2 footer-link-transition'>
                                {/* <img src={ footer_mobile } alt='' className='w-4 mx-1' /> */}
                                +233-(0)55-253-1004
                            </li>

                            <li className='dark:dark-secondary-text-col flex flex-row text-md ml-3 font-semibold hover:cursor-pointer my-2 footer-link-transition'>
                                {/* <img src={ footer_mobile } alt='' className='w-4 mx-1' /> */}
                                larryking8118@gmail.com
                            </li>
                            
                            <li className='dark:dark-secondary-text-col flex flex-row text-md ml-3 font-semibold hover:cursor-pointer my-2 footer-link-transition'>
                                {/* <img src={ footer_mobile } alt='' className='w-4 mx-1' /> */}
                                https://github.com/larryking01
                            </li>

                            <li className='dark:dark-secondary-text-col flex flex-row text-md ml-3 font-semibold hover:cursor-pointer my-2 footer-link-transition'>
                                {/* <img src={ footer_linkedin } alt='' className='w-6 mx-1' /> */}
                                www.linkedin.com/in/larry-williams8118
                            </li>


                        {/* <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Email</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Github</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>LinkedIn</li> */}
                        {/* <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Projects</li> */}
                    </div>


                    {/* <div className='ml-5 mb-5'>
                        <ul className='font_merriweather text-xl font-lora font-bold mb-3 secondary-col dark:dark-primary-text-col'>Services</ul>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col'>Website development</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col'>Mobile development</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col'>Web app development</li>
                    </div> */}


                    {/* <div className='ml-5 mb-5'>
                        <ul className='font_merriweather text-xl font-lora font-bold mb-3 secondary-col dark:dark-primary-text-col'>Projects</ul>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col'>Home</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col'>About</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col'>Services</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col'>Contact</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition dark:dark-secondary-text-col'>Projects</li>
                    </div> */}

                </div>

            </div>


            <div className='ml-5 py-4 secondary-col sm:text-center'>
                <h3 className='font_poppins text-md sm:text-lg dark:dark-secondary-text-col'>Copyright ©2023  All rights reserved</h3>
            </div>

        </footer>
    )
}



export default Footer