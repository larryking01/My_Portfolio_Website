import React from 'react'

import hamburgerIcon from '../assets/hamburger-icon.png'
import closeIcon from '../assets/close-icon.png'
import sun_filled from '../assets/sun_filled.png'
import moon from '../assets/moon.png'



// typing the props.
interface NavbarProp {
  darkMode: boolean,
  expanded: boolean,
  ToggleNavbarExpanded: () => any,
  ToggleDarkModeState: () => void,
  ScrollHomeDivIntoView: () => void,
  ScrollAboutDivIntoView: () => void,
  ScrollContactDivIntoView: () => void,
  ScrollEducationDivIntoView: () => void,
  ScrollSkillsDivIntoVIew: () => void,
  ScrollServicesDivIntoVIew: () => void,
  ScrollProjectsDivIntoView: () => void,
  ScrollCertificationsDivIntoView: () => void,
  ScrollExperiencesDivIntoView: () => void
  // about_ref: React.RefObject<HTMLDivElement | null>

}




const NavbarComponent: React.FC<NavbarProp> = ( { expanded, ToggleNavbarExpanded, ToggleDarkModeState, darkMode, 
                                                  ScrollHomeDivIntoView, ScrollAboutDivIntoView,
                                                  ScrollContactDivIntoView, ScrollEducationDivIntoView,
                                                  ScrollSkillsDivIntoVIew, ScrollProjectsDivIntoView,
                                                  ScrollServicesDivIntoVIew, ScrollCertificationsDivIntoView, ScrollExperiencesDivIntoView } ) => {

    return (
      <nav className='navigation shadow-lg'>
        <a href="#" className='dark:text-slate-300 font-bold text-xl italic secondary-col'>Larry N. N. Williams</a>

        <img className='w-7 h-7 hamburger' src={ expanded === true ? closeIcon : hamburgerIcon } alt='navbar-img'
             onClick={ ToggleNavbarExpanded } />

        <div className={ expanded === true ? 'expanded' : 'navbar-menu'}>
          <ul className='dark:text-slate-300'>
            <li onClick={ ScrollHomeDivIntoView }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Home</a></li>
            <li onClick={ ScrollAboutDivIntoView }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>About</a></li>
            <li onClick={ ScrollExperiencesDivIntoView }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Experience</a></li>
            <li onClick={ ScrollSkillsDivIntoVIew }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Skills</a></li>
            <li onClick={ ScrollProjectsDivIntoView }><a href='#' className='transition-all duration-201 hover:font-semibold hover:secondary-col'>Projects</a></li>
            <li onClick={ ScrollCertificationsDivIntoView }><a href='#' className='transition-all duration-201 hover:font-semibold hover:secondary-col'>Certifications</a></li>
            <li onClick={ ScrollEducationDivIntoView }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Education</a></li>
            <li onClick={ ScrollServicesDivIntoVIew }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Services</a></li>
            <li onClick={ ScrollContactDivIntoView }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Contact Me</a></li>
            {
              darkMode === true?  
                <li onClick={ ToggleDarkModeState } className='w-8 h-8 rounded-full flex justify-center items-center light-mode-icon transition-all duration-200 hover:bg-slate-500'>
                  <img src={ sun_filled } className='w-7 h-7 sm:-mt-1 sm:w-7 cursor-pointer' alt='' />
                </li>
                  :
                <li onClick={ ToggleDarkModeState } className='w-8 h-8 rounded-full flex justify-center items-center dark-mode-icon transition-all duration-200 hover:bg-slate-200'>
                  <img src={ moon } className='w-5 h-6 sm:-mt-1 sm:w-7 cursor-pointer' alt='' />
                </li>
            }
          </ul>
        </div>

      </nav>
    )
}


export default NavbarComponent