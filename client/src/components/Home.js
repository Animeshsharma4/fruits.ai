import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="title">Fruit.Ai</h2>
      <p className="subtitle">"Be Healthy!"</p>
      <div className="button-grid">
        <Link to="/chatbot" className="grid-button chat">Chat</Link>
        <Link to="/translator" className="grid-button translate"> Translate
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Translate_logo.svg" alt="Google Translate" className="icon" /> */}
        </Link>
        <Link to="/faq" className="grid-button faq">FAQs</Link>
        <Link to="/about" className="grid-button about">About</Link>
      </div>
      
    </div>
  );
};

export default Home;

