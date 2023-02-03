import React from 'react';
import './home.css';

import Nav from '../../components/nav/Nav';
import Detail from '../../components/details/Detail';
import SecondDetail from '../../components/details/SecondDetail';

import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState(true);

  useEffect(() => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        setData(res.data);
      });
    } catch (err) {}
  }, []);

  const middleIndex = Math.ceil(data.length / 2);

  const firstPart = data.slice().splice(0, middleIndex);
  const secondPart = data.slice().splice(-middleIndex);

  console.log(firstPart);
  console.log(secondPart);

  const navigate = () => {
    setNextPage(false);
  };

  const navigateBack = () => {
    setNextPage(true);
  };

  return (
    <>
      <Nav />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '21px',
        }}
      >
        {' '}
        {nextPage
          ? firstPart.map((item) => {
              return (
                <div className='main-detail-cnt' key={item.id}>
                  <Detail data={item} />
                </div>
              );
            })
          : secondPart.map((item) => {
              return (
                <div className='main-detail-cnt' key={item.id}>
                  <SecondDetail data={item} />
                </div>
              );
            })}
      </div>

      <div className='navigate-btn-cnt'>
        <button className='navigate-btn' onClick={navigateBack}>
          {' '}
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            className='bi bi-arrow-left-circle'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z'
            />
          </svg>
        </button>
        <button className='navigate-btn' onClick={navigate}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='36'
            height='36'
            fill='currentColor'
            className='bi bi-arrow-right-circle'
            viewBox='0 0 16 16'
          >
            <path
              fill-rule='evenodd'
              d='M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z'
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Home;
