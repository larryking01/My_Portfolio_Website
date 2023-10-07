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
            {/* {
              darkMode === true?  
                <li onClick={ ToggleDarkModeState } className='flex flex-row justify-center'>
                  <h4 className='cursor-pointer'>Light</h4>
                  <img src={ sun_filled } className='w-7 cursor-pointer light-sun-icon' alt='' />
                </li>
                  :
                <li onClick={ ToggleDarkModeState } className='flex flex-row justify-center'>
                  <h4 className='cursor-pointer'>Dark</h4>
                  <img src={ moon } className='w-5 h-5 mt-2 sm:mt-1 sm:w-7 cursor-pointer dark-moon-icon' alt='' />
                </li>
            } */}
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Home</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>About</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Contact</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Education</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Skills</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Services</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Projects</a></li>
            {
              darkMode === true?  
                <li onClick={ ToggleDarkModeState } className='flex flex-row bg-[#63e] justify-center rounded-lg p-2'>
                  <h4 className='cursor-pointer mr-1'>Light mode</h4>
                  <img src={ sun_filled } className='w-7 cursor-pointer light-sun-icon' alt='' />
                </li>
                  :
                <li onClick={ ToggleDarkModeState } className='flex flex-row justify-center bg-[#10285d] rounded-lg p-2'>
                  <h4 className='cursor-pointer mr-1 text-slate-400 sm:text-slate-300'>Dark mode</h4>
                  <img src={ white_moon } className='w-7 h-6 mt-2 sm:-mt-1 sm:w-7 cursor-pointer dark-moon-icon' alt='' />
                </li>
            }
          </ul>
        </div>

      </nav>
    )
}





export default NavbarComponent