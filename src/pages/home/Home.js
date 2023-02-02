import React from 'react';

import Nav from '../../components/nav/Nav';
import Detail from '../../components/details/Detail';

import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } catch (err) {}
  }, []);

  return (
    <>
      <Nav />

      {data ? (
        data.map((item) => {
          return (
            <div key={item.id}>
              <Detail data={item} />
            </div>
          );
        })
      ) : (
        <div>
          <p>Loading ...</p>
        </div>
      )}
    </>
  );
};

export default Home;
