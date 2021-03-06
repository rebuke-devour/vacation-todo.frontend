import { Link } from "react-router-dom";
import Hamburger from "./Hamburger"
import { useState } from "react"


function Header(props) {
  const [hamburgerOpen,setHamburgerOpen] =useState(false)
  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid white",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };
  return (
      <header>
          <nav style={navStyle}>
              <Link to="/">
                  <div>Home</div>
              </Link>
            <Link to="/weather">
                <div>Weather</div>
            </Link>
            <div className="Hamburger" onClick={toggleHamburger}> 
          <Hamburger isOpen={hamburgerOpen}/>
        </div>
          </nav>
      </header>
  )

}

export default Header;