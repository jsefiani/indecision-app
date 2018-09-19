import React from 'react';
import logo from "../images/indecision-logo.png";

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo-box">
          <img className="header__logo" src={logo} alt="Indecision logo"></img>
          <h1 className="header__title">{props.title}</h1>
        </div>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};

export default Header;
