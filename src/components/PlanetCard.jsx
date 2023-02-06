import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div className="planet-card">
        <hr />
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          className={ `planet-img-${planetName.toLowerCase()}` }
        />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
