import React from 'react'
import styled from 'styled-components'
import logo from '../Images/logo.png';
import Home from '../Pages/home'
import Products from '../Pages/products'
import About from '../Pages/about'
import Contact from '../Pages/contact'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { GrMail, GrMenu } from 'react-icons/gr'


const NavStyled = styled.div`
  .desktop-nav {
    display: none;
  }
  .mobile-nav {
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
  }
  .link {
    display: none;
    color: #0C0B0C;
    font-size: 15px;
    text-decoration: none;
    margin: 0 10px;
  }
  .social {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
  }
  @media screen and (min-width: 1024px) {
    .desktop-nav {
      padding: 30px 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .mobile-nav {
      display: none;
    }
    .link {
      display: inline-block;
    }
  }
`
function Nav() {
  const navItems = [
    {
      name: 'Home',
      route: `${process.env.PUBLIC_URL}/`,
      component: <Home />
    },
    {
      name: 'Productos',
      route: `${process.env.PUBLIC_URL}/productos`,
      component: <Products />
    },
    {
      name: 'Quiénes Somos?',
      route: `${process.env.PUBLIC_URL}/about`,
      component: <About />
    },
    {
      name: 'Contacto',
      route: `${process.env.PUBLIC_URL}/contacto`,
      component: <Contact />
    }
  ]
  return (
    <NavStyled>
      <Router>
        <nav className="desktop-nav">
          <img src={logo} alt="logo" width="94px" height="29px"/>
          <ul>
            {
              navItems.map((item) => {
                return (
                  <Link className="link" to={item.route} key={item.name}>{item.name}</Link>
                )
              })
            }
          </ul>
          <div className="social">
            <FaFacebookF size="18px" style={{cursor:'pointer'}}/>
            <FaInstagram size="18px" style={{cursor:'pointer'}}/>
            <GrMail size="18px" style={{cursor:'pointer'}}/>
          </div>
        </nav>
        
        <nav className="mobile-nav">
          <img src={logo} alt="logo" width="94px" height="29px"/>
          <GrMenu size="30px"/>
        </nav>


        <Switch>
          {
            navItems.map((item) => {
              return(
                <Route exact path={item.route} key={item.name}>
                  {item.component}
                </Route>
              )
            })
          }
        </Switch>
      </Router>
    </NavStyled>
  )
}

export default Nav
