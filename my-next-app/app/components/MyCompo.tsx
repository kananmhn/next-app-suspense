// components/MyCompo.tsx
"use client"; // This directive marks the file as a client component

import React, { useState, useEffect } from 'react';
import Loading from '../Loading';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const MyComponent = () => {
  const [data, setData] = useState<any[] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData()
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            
            <br/><h2>{item.title}</h2>

            <p>{item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default MyComponent;