//Topheader.tsx
import { useState } from 'react';
import { useAtom } from 'jotai';
import { periodAtom } from './Atoms';
import { FunctionComponent } from 'react';

const Topheader: FunctionComponent = () => {
  const [, setPeriod] = useAtom(periodAtom);
  const [clicked, setClicked] = useState({ week: true, allTime: false });

  const handleWeekendClick = () => {
    setPeriod(7);
    setClicked({ week: true, allTime: false });
  };
  const handleAllTimeClick = () => {
    setPeriod(0);
    setClicked({ week: false, allTime: true });
  };

  return (
    <div className="top-header">
      <h1 className="leader-title">Leaderboard of the Week</h1>
      <div
        className={`week-btn ${clicked.week ? 'clicked' : ''}`}
        onClick={handleWeekendClick}

        //  "week-btn"
      >
        <button
          onClick={handleWeekendClick}
          className={clicked.week ? 'clicked' : ''}
        >
          7days
        </button>
      </div>
      <div
        className={`alltime-btn ${clicked.allTime ? 'clicked' : ''}`}
        onClick={handleAllTimeClick}

        //  "alltime-btn"
      >
        <button
          onClick={handleAllTimeClick}
          className={clicked.allTime ? 'clicked' : ''}
        >
          all-times
        </button>
      </div>
    </div>
  );
};

export default Topheader;
