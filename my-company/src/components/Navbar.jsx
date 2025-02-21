import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    backgroundColor: '#333',
    padding: '1rem',
    marginBottom: '2rem'
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    margin: 0,
    padding: 0
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.1rem'
  };

  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li><Link style={linkStyle} to="/">Home</Link></li>
        <li><Link style={linkStyle} to="/about">About</Link></li>
        <li><Link style={linkStyle} to="/services">Services</Link></li>
        <li><Link style={linkStyle} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;