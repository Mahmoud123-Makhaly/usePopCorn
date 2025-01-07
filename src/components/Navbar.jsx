import React  from 'react'
import Logo from './Logo';
import Search from './Search';
import NumResult from './NumResult';

const Navbar = ({children}) => {
    
  return (
    <nav className="nav-bar">
   <Logo /> 
{children}
  </nav>
  )
}

export default Navbar