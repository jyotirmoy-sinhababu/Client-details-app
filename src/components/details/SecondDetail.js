import React from 'react';

import { useState } from 'react';

const SecondDetail = ({ data }) => {
  const [viewDetails, setViewDetails] = useState(false);

  const showDetails = () => {
    setViewDetails(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div className='detail-cnt'>
        {' '}
        <div className='detail-para-cnt'>
          <p className='detail-para-heading'>{data.username}</p>
        </div>
        <div className='detail-para-cnt'>
          <h4>CONTACT</h4>
          <p className='detail-para-heading'>{data.name}</p>
        </div>
        <div className='detail-para-cnt'>
          <h4>CITY</h4>
          <p className='detail-para-heading'>{data.address.city}</p>
        </div>
        <div className='detail-para-cnt'>
          <h4>STATE</h4>
          <p className='detail-para-heading'> {data.address.street}</p>
        </div>
        <div className='view-dtl-cnt'>
          <button className='view-dtl-btn' onClick={showDetails}>
            View Details
          </button>
        </div>
      </div>
      {viewDetails ? (
        <div className='more-detail-cnt'>
          <div className='more-detail-first'>
            <div>
              <h4>Contact person</h4>
              <p className='detail-para-heading'>{data.name}</p>
            </div>
            <div>
              <h4>Emails</h4>
              <p className='detail-para-heading'>{data.email}</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p className='detail-para-heading'>{data.phone}</p>
            </div>
          </div>
          <div className='more-detail-second'>
            <div>
              <h4>Address</h4>
              <p className='detail-para-heading'>
                {data.address.street}, {data.address.suite}
              </p>
            </div>
            <div>
              <h4>City</h4>
              <p className='detail-para-heading'>{data.address.city}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SecondDetail;
