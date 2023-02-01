import React from 'react';

import axios from 'axios';

import { useState, useEffect } from 'react';

const Detail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
        console.log(res.data);
        setData(res.data);
      });
    } catch (err) {}
  }, []);

  return <div></div>;
};

export default Detail;
