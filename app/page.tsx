"use client"; // This directive marks the file as a client component
import React, { Suspense } from 'react';
import MyComponentWithSuspense from './components/MyCompo';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Next.js with React Suspense</h1>
        <MyComponentWithSuspense />
    </div>
  );
};

export default Home;