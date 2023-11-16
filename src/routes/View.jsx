import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '../pages/Home';
import Hello from '../pages/Hello';

const View = () => {
  const location = useLocation();

  useEffect(() => {
    const getTitleForRoute = () => {
      switch (location.pathname) {
        case '/':
          return 'mmmm';
        case '/hello':
          return 'bbbb';
        default:
          return 'Default Title';
      }
    };

    const title = getTitleForRoute();
    document.title = title;
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
