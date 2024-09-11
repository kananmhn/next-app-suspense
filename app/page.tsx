// // "use client"; // This directive marks the file as a client component
// // import React, { Suspense } from 'react';
// // import MyComponentWithSuspense from './components/MyCompo';

// // const Home: React.FC = () => {
// //   return (
// //     <div>
// //       <h1>Welcome to Next.js with React Suspense</h1>
// //         <MyComponentWithSuspense />
// //     </div>
// //   );
// // };

// // export default Home;

// // pages/index.tsx
// import React, { Suspense } from 'react';
// import Loading from './Loading';
// import LazyComponent from './components/LazyComponent';

// // Function to simulate a delay
// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// // Lazy load the content with a delay
// const DelayedContent = React.lazy(() =>
//   delay(20000).then(() => ({
//     default: () => <div>Test</div>
//   }))
// );

// // Lazy load the component with a delay
// // const LazyComponent = React.lazy(() =>

// // );

// const Home: React.FC = () => {
//   return (
//     <div className="Home">
//         <Suspense fallback={<Loading />}>
//         <DelayedContent />
//         <LazyComponent />
//         </Suspense>     
//     </div>
//   );
// }

// export default Home;

// pages/page.tsx
"use client";

import React, { useState, useEffect } from 'react';

// Function to simulate a delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the window has already loaded
    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      // Set the onload event to update the loading state
      window.onload = () => {
        setIsLoading(false);
      };
    }

    // Simulate a delay for demonstration purposes
    // delay(2000).then(() => {
    //   // If the window has already loaded, update the loading state
    //   if (document.readyState === 'complete') {
    //     setIsLoading(false);
    //   }
    // });
  }, []);

  return (
    <div className="Home">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>Test</div>
      )}
    </div>
  );
}

export default Home;