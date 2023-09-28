import React, { useState } from 'react'

// static files.
import html_tag from '../StaticFiles/html_tag.avif'

import hamburgerIcon from '../StaticFiles/hamburger-icon.png'
import closeIcon from '../StaticFiles/close-icon.png'




// typing the props.
interface NavbarProp {
  expanded: boolean,
  ToggleNavbarExpanded: () => any

}






const NavbarComponent: React.FC<NavbarProp> = ( { expanded, ToggleNavbarExpanded } ) => {


    return (
      <nav className='navigation shadow-lg'>
        <a className='navbar-brand font-bold text-xl italic secondary-col'>Larry N. N. Williams</a>

        <img className='w-8 h-8 hamburger' src={ expanded === true ? closeIcon : hamburgerIcon } alt='navbar-img'
             onClick={ ToggleNavbarExpanded } />

        <div className={ expanded === true ? 'expanded' : 'navbar-menu'}>
          <ul>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Home</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>About</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Contact</a></li>
            <li onClick={ expanded === true ? ToggleNavbarExpanded : () => {} }><a href='#'>Blog</a></li>
          </ul>
        </div>

      </nav>
    )
}





export default NavbarComponent