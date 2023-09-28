import React, { useState } from 'react'

// static files.
import html_tag from '../StaticFiles/html_tag.avif'

import hamburgerIcon from '../StaticFiles/hamburger-icon.png'
import closeIcon from '../StaticFiles/close-icon.png'






const NavbarComponent = ( ) => {

    // toggling navbar expanded state.
    const [ expanded, setIsExpanded ] = useState( false )

    const ToggleExpandedState = () => {
      setIsExpanded( !expanded )
    }

    return (
      <nav className='navigation shadow-lg'>
        <a className='navbar-brand font-bold text-2xl italic secondary-col'>Larry Williams</a>

        <img className='w-8 h-8 hamburger' src={ expanded === true ? closeIcon : hamburgerIcon } alt='navbar-img'
             onClick={ ToggleExpandedState } />

        <div className={ expanded === true ? 'expanded' : 'navbar-menu'}>
          <ul>
            <li ><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Blog</a></li>
          </ul>
        </div>

      </nav>
    )
}





export default NavbarComponent