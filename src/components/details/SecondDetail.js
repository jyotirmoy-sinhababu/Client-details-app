import React from 'react';

import { useState } from 'react';

const SecondDetail = ({ data }) => {
  const [viewDetails, setViewDetails] = useState(false);

  const showDetails = () => {
    setViewDetails(true);
  };

  return (
    <>
      <div className=''>
        {' '}
        <div>
          <p>{data.username}</p>
        </div>
        <div>
          <p>CONTACT</p>
          <p>{data.name}</p>
        </div>
        <div>
          <p>CITY</p>
          <p>{data.address.city}</p>
        </div>
        <div>
          <p>STATE</p>
          <p>{data.address.street}</p>
        </div>
        <div>
          <button onClick={showDetails}>View Details</button>
        </div>
      </div>
      {viewDetails ? (
        <div>
          <p>hi</p>
        </div>
      ) : null}
    </>
  );
};

export default SecondDetail;
