import React from 'react';
import {Link} from "react-router-dom";
import {NavbarSection , Logo ,LogoText, UlList , ListItem} from './style.js'
const Navbar = () => { 
    return (
        <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo> 
                <UlList>
                    <ListItem><Link to="/" className='tag'>Home</Link></ListItem>
                    <ListItem><Link to="/work" className='tag'>Work</Link></ListItem>
                    <ListItem><Link to="/portfolio" className='tag'>Portfolio</Link></ListItem>
                    <ListItem><Link to="/resume" className='tag'>Resume</Link></ListItem>
                    <ListItem><Link to="/about" className='tag'>About</Link></ListItem>
                    <ListItem><Link to="/contact" className='tag'>Contact</Link></ListItem>
                </UlList>    
            </div>    
        </NavbarSection>
    );
}
  

export default Navbar;
