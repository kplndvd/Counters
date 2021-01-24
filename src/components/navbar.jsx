import React, { Component } from 'react';

const Navbar = (props) => {
    
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">
                    Navbar {' '}
                    <span className="badge badge-pill badge-seconadry">
                    {props.totalCounters}
                    </span>
                </a>
            </nav>
         );
    
}
 
export default Navbar;