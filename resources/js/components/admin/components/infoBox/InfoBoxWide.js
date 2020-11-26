import React from 'react';

const InfoBoxWide = (props) => {
  return (
    <div className="info-box mb-3 bg-warning">

      <span className="info-box-icon">
        <i className="fas fa-tag"></i>
      </span>

      <div className="info-box-content">
        <span className="info-box-text">Inventory</span>
        <span className="info-box-number">...</span>
      </div>

    </div>
  )
};

export default InfoBoxWide;