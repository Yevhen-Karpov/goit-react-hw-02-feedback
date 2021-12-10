import React from 'react';
import PropTypes from 'prop-types';

export default function Statistics({ statistics, total, positivePercentage }) {
  return (
    <ul>
      {statistics.map(([key, value]) => (
        <li key={key}>
          {key}: {value}
        </li>
      ))}
      <li>Total:{total}</li>
      <li>Positive feedback:{positivePercentage} %</li>
    </ul>
  );
}

Statistics.propTypes = {
  statistics: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
