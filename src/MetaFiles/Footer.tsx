import React from 'react'

import footer_mobile from '../StaticFiles/footer-mobile.png'
import footer_linkedin from '../StaticFiles/footer-linkedin.png'




const Footer = () => {


    return (
        <footer className='bg-slate-200 pt-6'>
            <div>
                <div className='ml-5 mb-5 mt-3'>
                    <h3 className='font_merriweather text-lg font-bold mb-3 secondary-col'>Let's talk about</h3>
                    <h3 className='text-md font_merriweather'>
                        Websites, Web apps and Mobile apps. Whatever you can imagine, we can bring to life !!
                    </h3>
                </div>

                <div className='sm:flex sm:flex-row sm:justify-around'>
                    <div className='ml-5 mb-5'>
                        <ul className='text-xl font_merriweather font-bold mb-3 secondary-col'>About</ul>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Home</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>About</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Services</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Contact</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Projects</li>
                    </div>


                    <div className='ml-5 mb-5'>
                        <ul className='text-xl font_merriweather font-bold mb-3 secondary-col'>Contact</ul>
                            <li className=' flex flex-row text-md ml-3 font-semibold hover:cursor-pointer my-2 footer-link-transition'>
                                {/* <img src={ footer_mobile } alt='' className='w-4 mx-1' /> */}
                                +233-(0)55-253-1004
                            </li>

                            <li className=' flex flex-row text-md ml-3 font-semibold hover:cursor-pointer my-2 footer-link-transition'>
                                {/* <img src={ footer_mobile } alt='' className='w-4 mx-1' /> */}
                                larryking8118@gmail.com
                            </li>
                            
                            <li className=' flex flex-row text-md ml-3 font-semibold hover:cursor-pointer my-2 footer-link-transition'>
                                {/* <img src={ footer_mobile } alt='' className='w-4 mx-1' /> */}
                                https://github.com/larryking01
                            </li>

                            <li className=' flex flex-row text-md ml-3 font-semibold hover:cursor-pointer my-2 footer-link-transition'>
                                {/* <img src={ footer_linkedin } alt='' className='w-6 mx-1' /> */}
                                www.linkedin.com/in/larry-williams8118
                            </li>


                        {/* <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Email</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Github</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>LinkedIn</li> */}
                        {/* <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Projects</li> */}
                    </div>


                    <div className='ml-5 mb-5'>
                        <ul className='font_merriweather text-xl font-lora font-bold mb-3 secondary-col'>Services</ul>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Website development</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Mobile development</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Web app development</li>
                        {/* <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Contact</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Projects</li> */}
                    </div>


                    <div className='ml-5 mb-5'>
                        <ul className='font_merriweather text-xl font-lora font-bold mb-3 secondary-col'>Projects</ul>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Home</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>About</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Services</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Contact</li>
                        <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Projects</li>
                    </div>

                </div>

            </div>


            <div className='ml-5 py-4 secondary-col sm:text-center'>
                <h3 className='font_merriweather text-md sm:text-lg'>Copyright ©2023  All rights reserved</h3>
            </div>

        </footer>
    )
}



export default Footer