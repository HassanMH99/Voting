import React, { useState } from 'react';

export const VotingPage = ({ onLogout }) => {
  const [catsCount, setCatsCount] = useState(
    parseInt(localStorage.getItem('catsCount') || '0')
  );
  const [dogsCount, setDogsCount] = useState(
    parseInt(localStorage.getItem('dogsCount') || '0')
  );
  const [cowsCount, setCowsCount] = useState(
    parseInt(localStorage.getItem('cowsCount') || '0')
  );
  const [lionsCount, setLionsCount] = useState(
    parseInt(localStorage.getItem('lionsCount') || '0')
  );

  const [voted, setVoted] = useState(false);
  const [selectedParty, setSelectedParty] = useState('');

  const handlePartyClick = (party) => {
    if (voted) {
      return;
    }

    setSelectedParty(party);
  };

  const handleDoneClick = () => {
    if (selectedParty === 'cats') {
      setCatsCount((prevCount) => prevCount + 1);
      localStorage.setItem('catsCount', catsCount + 1);
    } else if (selectedParty === 'dogs') {
      setDogsCount((prevCount) => prevCount + 1);
      localStorage.setItem('dogsCount', dogsCount + 1);
    } else if (selectedParty === 'cows') {
      setCowsCount((prevCount) => prevCount + 1);
      localStorage.setItem('cowsCount', cowsCount + 1);
    } else if (selectedParty === 'lions') {
      setLionsCount((prevCount) => prevCount + 1);
      localStorage.setItem('lionsCount', lionsCount + 1);
    }

    setVoted(true);
    setSelectedParty('');
  };

  const handlePopupClose = () => {
    setSelectedParty('');
  };

  return (
    <div>
      <h1>Welcome to UserName is:</h1>
      <button disabled={voted} onClick={() => handlePartyClick('cats')}>
        Cats ({catsCount})
      </button>
      <button disabled={voted} onClick={() => handlePartyClick('dogs')}>
        Dogs ({dogsCount})
      </button>
      <button disabled={voted} onClick={() => handlePartyClick('cows')}>
        Cows ({cowsCount})
      </button>
      <button disabled={voted} onClick={() => handlePartyClick('lions')}>
        Lions ({lionsCount})
      </button>

      {selectedParty && (
        <div className="popup">
          <div className="popup-content">
            <p>Are you sure you want to vote for {selectedParty}?</p>
            <div className="popup-buttons">
              <button onClick={handleDoneClick}>Done</button>
              <button onClick={handlePopupClose}>Change</button>
            </div>
          </div>
        </div>
      )}

      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
