import React from 'react';

import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './styles/App.sass';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <SolarSystem />
          <Missions />
        </main>
      </div>
    );
  }
}

export default App;
