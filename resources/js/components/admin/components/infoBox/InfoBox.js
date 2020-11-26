import React from 'react';

const InfoBox = (props) => {
  return (
    <div className="col-12 col-sm-6 col-md-3">
      <div className="info-box">
        <span className="info-box-icon bg-info elevation-1">
          <i className="far fa-eye"></i>
        </span>

        <div className="info-box-content">
          <span className="info-box-text">Lượt xem trang</span>
          <span className="info-box-number">10</span>
        </div>

      </div>
    </div>
  )
};

export default InfoBox;