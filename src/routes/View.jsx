import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';

import Home from '../pages/Home';
import Hello from '../pages/Hello';

const View = () => {
  return (
    <HelmetProvider>
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <Helmet>
                <title>mmmm</title>
              </Helmet>
              <Home />
            </React.Fragment>
          }
        />
        <Route
          path="/hello"
          element={
            <React.Fragment>
              <Helmet>
                <title>bbbb</title>
              </Helmet>
              <Hello />
            </React.Fragment>
          }
        />
      </Routes>
    </HelmetProvider>
  );
};

export default View;
