import React from 'react'




const Footer = () => {


    return (
        <footer className='bg-slate-200 pt-6'>
            <div>
                <div className='ml-5 mb-5 mt-3'>
                    <h3 className='text-lg font-lora font-bold mb-3 secondary-col'>Let's talk about</h3>
                    <h3 className='text-md'>
                        Websites, Web apps and Mobile apps. Whatever you can imagine, we can bring to life !!
                    </h3>
                </div>

                <div className='ml-5 mb-5'>
                    <ul className='text-xl font-lora font-bold mb-3 secondary-col'>Links</ul>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Home</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>About</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Services</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Contact</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Projects</li>
                </div>


                <div className='ml-5 mb-5'>
                    <ul className='text-xl font-lora font-bold mb-3 secondary-col'>Services</ul>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Websites</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Web apps</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Mobile apps</li>
                    {/* <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Contacts</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Projects</li> */}
                </div>


                {/* <div className='ml-5 mb-5'>
                    <ul className='text-xl font-lora font-bold mb-3 secondary-col'>Have a question?</ul>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Home</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>About</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Services</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Contacts</li>
                    <li className='text-md ml-3 font-semibold hover:cursor-pointer mb-1 footer-link-transition'>Projects</li>
                </div> */}

            </div>


            <div className='ml-5 py-4 secondary-col'>
                <h3 className='underline underline-offset-4'>Copyright ©2023  All rights reserved</h3>
            </div>

        </footer>
    )
}



export default Footer