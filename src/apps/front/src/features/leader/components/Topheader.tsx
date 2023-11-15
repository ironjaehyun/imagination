//Topheader.tsx
import { FunctionComponent } from 'react';

const Topheader: FunctionComponent = () => {
  const handleWeekendClick = () => {};
  const handleAllTimeClick = () => {};

  return (
    <div className="Topheader">
      <h1 className="leaderboard">Leaderboard of the Week</h1>
      <div className="duration">
        <button onClick={handleWeekendClick}>7 Days</button>
        <button onClick={handleAllTimeClick}>All-Time</button>
      </div>
    </div>
  );
};

export default Topheader;
