import React from 'react'

// static files.
import hamburgerIcon from '../StaticFiles/hamburger-icon.png'
import closeIcon from '../StaticFiles/close-icon.png'
// import moon from '../StaticFiles/moon.png'
import sun_filled from '../StaticFiles/sun_filled.png'
import white_moon from '../StaticFiles/white_moon.png'



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
  ScrollProjectsDivIntoView: () => void
  // about_ref: React.RefObject<HTMLDivElement | null>

}






const NavbarComponent: React.FC<NavbarProp> = ( { expanded, ToggleNavbarExpanded, ToggleDarkModeState, darkMode, 
                                                  ScrollHomeDivIntoView, ScrollAboutDivIntoView,
                                                  ScrollContactDivIntoView, ScrollEducationDivIntoView,
                                                  ScrollSkillsDivIntoVIew, ScrollProjectsDivIntoView,
                                                  ScrollServicesDivIntoVIew } ) => {


    return (
      <nav className='navigation shadow-lg'>
        <a className='dark:text-slate-300 navbar-brand font-bold text-xl italic secondary-col'>Larry N. N. Williams</a>

        <img className='w-7 h-7 hamburger' src={ expanded === true ? closeIcon : hamburgerIcon } alt='navbar-img'
             onClick={ ToggleNavbarExpanded } />

        <div className={ expanded === true ? 'expanded' : 'navbar-menu'}>
          <ul className='dark:text-slate-300'>
            <li onClick={ ScrollHomeDivIntoView }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Home</a></li>
            <li onClick={ ScrollAboutDivIntoView }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>About</a></li>
            <li onClick={ ScrollContactDivIntoView }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Contact Me</a></li>
            <li onClick={ ScrollEducationDivIntoView }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Education</a></li>
            <li onClick={ ScrollSkillsDivIntoVIew }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Skills</a></li>
            <li onClick={ ScrollServicesDivIntoVIew }><a href='#' className='transition-all duration-200 hover:font-semibold hover:secondary-col'>Services</a></li>
            <li onClick={ ScrollProjectsDivIntoView }><a href='#' className='transition-all duration-201 hover:font-semibold hover:secondary-col'>Projects</a></li>
            {
              darkMode === true?  
                <li onClick={ ToggleDarkModeState } className='w-10 h-10 bg-[#63e] rounded-full p-2 light-mode-icon'>
                  <img src={ sun_filled } className='w-7 h-6 sm:-mt-1 sm:w-7 cursor-pointer' alt='' />
                </li>
                  :
                <li onClick={ ToggleDarkModeState } className='w-10 h-10 bg-[#10285d] rounded-full p-2 dark-mode-icon'>
                  <img src={ white_moon } className='w-7 h-6 sm:-mt-1 sm:w-7 cursor-pointer' alt='' />
                </li>
            }
          </ul>
        </div>

      </nav>
    )
}





export default NavbarComponent