import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom'
import { Wrapper, Nav, Navbar } from './Styles/mainStyles'


function NavBar() {
    return (
        <Nav>
            <Wrapper>
                <Navbar>
                    <Link to="/" className="logo">Logo</Link>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                </Navbar>
            </Wrapper>
        </Nav>
    )
}

export default NavBar
