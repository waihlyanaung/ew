// Hello.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const Hello = () => {
  return (
    <div>
      <Helmet>
        <title>Hello Page</title>
        <meta name="description" content="This is the Hello page" />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Hello Page" />
        <meta property="og:description" content="This is the Hello page" />
        {/* <meta property="og:image" content="URL_TO_AN_IMAGE" />
        <meta property="og:url" content="URL_TO_HELLO_PAGE" /> */}
        <meta property="og:type" content="website" />
      </Helmet>
      Hello  new FRia
    </div>
  );
};

export default Hello;
