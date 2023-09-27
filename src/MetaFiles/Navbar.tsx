import React from 'react'

// static files.
import html_tag from '../StaticFiles/html_tag.avif'

import hamburgerIcon from '../StaticFiles/hamburger-icon.png'




const NavbarComponent = ( ) => {


    return (
      <nav className='navigation'>
        <a className='navbar-brand font-bold text-2xl italic'>Larry King</a>

        <img className='w-12 h-12 hamburger' src={ hamburgerIcon } alt='navbar-img' />

        <div className='navbar-menu'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Contact</a></li>
            <li><a href='#'>Blog</a></li>
          </ul>
        </div>

      </nav>
    )
}





export default NavbarComponent