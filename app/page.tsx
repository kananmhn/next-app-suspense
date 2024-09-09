// "use client"; // This directive marks the file as a client component
// import React, { Suspense } from 'react';
// import MyComponentWithSuspense from './components/MyCompo';

// const Home: React.FC = () => {
//   return (
//     <div>
//       <h1>Welcome to Next.js with React Suspense</h1>
//         <MyComponentWithSuspense />
//     </div>
//   );
// };

// export default Home;

// pages/index.tsx
import React, { Suspense } from 'react';
import Loading from './Loading';

// Function to simulate a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Lazy load the component with a delay
const LazyComponent = React.lazy(() =>
  delay(2000).then(() => import('./components/LazyComponent'))
);

const Home: React.FC = () => {
  return (
    <div className="Home">
        <Suspense fallback={<Loading />}>
          <LazyComponent />
        </Suspense>     
    </div>
  );
}

export default Home;