import React from 'react';

import { useState } from 'react';

const Detail = ({ data }) => {
  const [viewDetails, setViewDetails] = useState(false);

  const showDetails = () => {
    setViewDetails(true);
  };

  console.log(viewDetails);

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
          <div>
            <div>
              <h4>Contact person</h4>
              <p>{data.name}</p>
            </div>
            <div>
              <h4>Emails</h4>
              <p>{data.email}</p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>{data.phone}</p>
            </div>
          </div>
          <div>
            <div>
              <h4>Address</h4>
              <p>
                {data.address.street}, {data.address.suite}
              </p>
            </div>
            <div>
              <h4>City</h4>
              <p>{data.address.city}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Detail;
