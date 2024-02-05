import React, { useState } from 'react';
import './App.css';
import YesPage from './YesPage';
import Carousel from './components/Carousel';

function App() {
  const [showYesPage, setShowYesPage] = useState(false);
  const [showText, setShowText] = useState(false);
  const [noButtonClickCount, setNoButtonClickCount] = useState(0);
  const [countClicks, setCountClicks] = useState(0);
  const guilt_text = [
    "i-", 
    "please.",
    "are you sure?",
    "like REALLY sure??",
    "WHY NOT?",
    "i'm literally so desirable",
    "i am on my KNEES",
    "heart is breaking",
    "i guess i'm spending valentine's with my mom"
  ];

  const handleYesClick = () => {
    setShowYesPage(true);
  };

  const handleNoClick = () => {
    setNoButtonClickCount((prevCount) => prevCount + 1);
    setShowText(true);
    if (countClicks >= guilt_text.length - 1) {
      setCountClicks(0);
    } else {
      setCountClicks((prevCount) => prevCount + 1);
    }
  }

  const buttonSize = () => {
    return 100 + 25 * noButtonClickCount;
  };

  return (
    <div className="App">
      <img
        src="heart-sticker.png"
        alt="Heart Sticker"
        style={{
          position: 'fixed',
          width: '100px',
          top: '50px',
          left: '50px',
          zIndex: '999',
        }}
      />
      <img
        src="heart-sticker.png"
        alt="Heart Sticker"
        style={{
          position: 'fixed',
          width: '100px',
          top: '400px',
          left: '900px',
          zIndex: '999',
        }}
      />
      <img
        src="heart-sticker.png"
        alt="Heart Sticker"
        style={{
          position: 'fixed',
          width: '100px',
          top: '400px',
          left: '400px',
          zIndex: '999',
        }}
      />
      <img
        src="heart-sticker.png"
        alt="Heart Sticker"
        style={{
          position: 'fixed',
          width: '100px',
          top: '200px',
          left: '200px',
          zIndex: '999',
        }}
      />
      <img
        src="heart-sticker.png"
        alt="Heart Sticker"
        style={{
          position: 'fixed',
          width: '100px',
          top: '70px',
          left: '1100px',
          zIndex: '999',
        }}
      />
      <img
        src="heart-sticker.png"
        alt="Heart Sticker"
        style={{
          position: 'fixed',
          width: '100px',
          top: '500px',
          left: '100px',
          zIndex: '999',
        }}
      />
      <img
        src="heart-sticker.png"
        alt="Heart Sticker"
        style={{
          position: 'fixed',
          width: '100px',
          top: '500px',
          left: '1150px',
          zIndex: '999',
        }}
      />
      <img
        src="heart-sticker.png"
        alt="Heart Sticker"
        style={{
          position: 'fixed',
          width: '100px',
          top: '0px',
          left: '700px',
          zIndex: '999',
        }}
      />
      <div className="three-columns">
        <Carousel className="column-small" slideDirection="up" />
          {showYesPage ? (
            <YesPage />
          ) : (
            <header className="App-header">
              <p>Be My</p>
              <p className="accent">Valentine?</p>  
              <div>
                <button onClick={handleYesClick} style={{ fontSize: `${buttonSize()}%` }}>
                  Y e s
                </button>
                <button onClick={handleNoClick}>
                  N o
                </button>
                {
                  showText 
                    ? <p>{guilt_text.length > 0 && guilt_text[countClicks]}</p>
                    : <p>&nbsp;</p>
                }
              </div>
            </header>
          )}
        <Carousel className="column-small" slideDirection="down" />
      </div>
    </div>
  );
}

export default App;
