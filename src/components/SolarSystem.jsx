import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar-system">
        <Title headline="Planetas" />
        <div className="planets-container">
          <div className="planet-card">
            <hr />
          </div>
          {planets.map((planet, index) => (
            <PlanetCard
              key={ index }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
          <div className="planet-card">
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default SolarSystem;
