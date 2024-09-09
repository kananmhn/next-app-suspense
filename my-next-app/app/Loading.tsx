// components/Loading.tsx
import React from 'react';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh', // Ensure this is uncommented to center the text vertically
};

const textStyle: React.CSSProperties = {
  fontSize: '24px', // Adjusted font size for better visibility
  color: '#000',
};

const Loading: React.FC = () => {
  return (
    <div style={containerStyle}>
      <div style={textStyle}>Loading...</div>
    </div>
  );
};

export default Loading;