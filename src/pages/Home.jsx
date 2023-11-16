// Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="This is the Home page" />
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Home Page" />
        <meta property="og:description" content="This is the Home page" />
        <meta property="og:image" content="URL_TO_AN_IMAGE" />
      </Helmet>

      <Link to="/hello">
        <button className="bg-red-500 hover:bg-blue-700 ml-11 text-white font-bold py-2 px-4 rounded mt-4">
          Nextrr Page
        </button>
      </Link>
      <div className="font-pacifico">What is Lorem Ipsum?</div>
      <div className="mt-9 font-saira-condensed">Lorem Ipsum is</div>
    </div>
  );
};

export default Home;
