import React from 'react';

import SolarSystem from '../assets/svgs/solarSystem.svg';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ SolarSystem } alt="Logo Solar System" />
      </header>
    );
  }
}

export default Header;
