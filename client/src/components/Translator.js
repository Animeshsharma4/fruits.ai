import React, { useState } from 'react';
import './translate.css'; // Import your CSS file
import { Link } from 'react-router-dom';
const Translate = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('es'); // Default language is Spanish
  
  // Example translation function
//   const handleTranslate = async () => {
//     try {
//       // Simulating an API call with a delay
//       // You can replace this with a real API like Google Translate
//       const translation = await fakeTranslateAPI(text, language);
//       setTranslatedText(translation);
//     } catch (error) {
//       console.error("Error during translation:", error);
//     }
//   };
const handleTranslate = async () => {
    // const apiKey = '13e82c0c19msh7733d552da83227p1999d5jsnfda9ba733c45';
    // const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  
    // const response = await fetch(url, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     q: text,
    //     target: language,
    //   }),
    //   headers: { 'Content-Type': 'application/json' }
    // });
  
    // const data = await response.json();
    // console.log(data);
    const url = 'https://text-translator2.p.rapidapi.com/translate';
const data = new FormData();
data.append('source_language', 'en');
data.append('target_language', language);
data.append('text', text);

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '13e82c0c19msh7733d552da83227p1999d5jsnfda9ba733c45',
		'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
	},
	body: data
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    setTranslatedText(result.data.translatedText);
} catch (error) {
	console.error(error);
}
    
  };
  

  // Simulating an API call
//   const fakeTranslateAPI = (text, lang) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         // Simple translation simulation
//         resolve(`Translated (${lang}): ${text}`);
//       }, 1000);
//     });
//   };

  return (
    <div className="translate-container">
      <h2>Translator</h2>
      <textarea
        className="text-input"
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="language-selector">
        <label htmlFor="language">Translate to: </label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          {/* Add more languages as needed */}
        </select>
      </div>
      <button className="translate-button" onClick={handleTranslate}>
        Translate
      </button>
      {translatedText && (
        <div className="translated-output">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
      <Link to="/home" className="home"><img src="https://th.bing.com/th/id/OIP.ZjWGBPoRd-zD8247yg5nAgHaHa?rs=1&pid=ImgDetMain" alt ="go to home page"></img></Link>

    </div>
  );
};

export default Translate;
