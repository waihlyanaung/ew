import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home'; // Import the Home component
import Hello from '../pages/Hello'
const View = () => {
  const location = useLocation();

  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      switch (location.pathname) {
        case '/':
          ogTitle.setAttribute('content', 'mmmm');
          break;
        case '/hello':
          ogTitle.setAttribute('content', 'bbbb');
          break;
        default:
          ogTitle.setAttribute('content', 'Default Open Graph Title');
          break;
      }
    }
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </>
  );
};

export default View;
