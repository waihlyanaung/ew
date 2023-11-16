// View.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from '../pages/Home';
import Hello from '../pages/Hello';

const View = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <meta name="viewport" content="hello" />
        <title>Vite + React</title>
      </Helmet>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>
    </>
  );
};

export default View;
