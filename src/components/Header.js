import { Link } from "react-router-dom";

function Header(props) {
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
          </nav>
      </header>
  )

}

export default Header;