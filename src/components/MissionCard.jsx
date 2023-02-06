import React from 'react';
import PropTypes from 'prop-types';
import date from '../assets/svgs/date.svg';
import flag from '../assets/svgs/flag.svg';
import pinLocation from '../assets/svgs/pinLocation.svg';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-card">
        <div className="mission-name">
          <p>{name}</p>
        </div>
        <hr />
        <div className="mission-details">
          <div className="mission-year">
            <img src={ date } alt={ year } />
            <p>{year}</p>
          </div>
          <div className="mission-country">
            <img src={ flag } alt={ country } />
            <p>{country}</p>
          </div>
          <div className="mission-destination">
            <img src={ pinLocation } alt={ destination } />
            <p>{destination}</p>
          </div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
