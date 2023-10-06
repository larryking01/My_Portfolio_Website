import React from 'react'

// static files.
import hamburgerIcon from '../StaticFiles/hamburger-icon.png'
import closeIcon from '../StaticFiles/close-icon.png'
import moon from '../StaticFiles/moon.png'
import sun_filled from '../StaticFiles/sun_filled.png'


// typing the props.
interface NavbarProp {
  darkMode: boolean,
  expanded: boolean,
  ToggleNavbarExpanded: () => any,
  ToggleDarkModeState: () => void

}






const NavbarComponent: React.FC<NavbarProp> = ( { expanded, ToggleNavbarExpanded, ToggleDarkModeState, darkMode } ) => {


    return (
      <nav className='navigation shadow-lg'>
        <a className='dark:text-slate-300 navbar-brand font-bold text-xl italic secondary-col'>Larry N. N. Williams</a>

        <img className='w-7 h-7 hamburger' src={ expanded === true ? closeIcon : hamburgerIcon } alt='navbar-img'
             onClick={ ToggleNavbarExpanded } />

        <div className={ expanded === true ? 'expanded' : 'navbar-menu'}>
          <ul className='dark:text-slate-300'>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Home</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>About</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Contact</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Education</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Skills</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Services</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Projects</a></li>
            {
              darkMode === true?  
                <li onClick={ ToggleDarkModeState }><img src={ sun_filled } className='w-7 sm:w-6 cursor-pointer light-sun-icon' alt='' /></li>
                  :
                <li onClick={ ToggleDarkModeState }><img src={ moon } className='w-7 sm:w-6 cursor-pointer dark-moon-icon' alt='' /></li>
            }
          </ul>
        </div>

      </nav>
    )
}





export default NavbarComponent