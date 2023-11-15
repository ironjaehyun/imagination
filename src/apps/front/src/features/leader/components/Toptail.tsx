// Toptail.tsx
import { useMemo } from 'react';
import { useAtom } from 'jotai';
import { periodAtom } from './Atoms';
import { Leaderboard as LeaderboardData } from './Database';

export default function Toptail() {
  const [period] = useAtom(periodAtom);

  const Leaderboard = useMemo(() => {
    return between(LeaderboardData, period) ?? defaultLeaderboard;
  }, [period]);
  const listStartingFromEleventh = Leaderboard.slice(10);

  return (
    <div className="Toptail">
      {/* {Leaderboard.map((value, index) => ( */}
      {listStartingFromEleventh.map((value, index) => (
        <div className="flex" key={index}>
          <div className="number-box">{index + 11}</div>{' '}
          {/* Adjust index based on your slice */}
          <div className="item">
            <img src={value.img} alt={value.name} />
            <div className="info">
              <h3 className="name text-dark">{value.name}</h3>
              <span>{value.grade}</span>
            </div>
          </div>
          <div className="item">
            <span>❤️{value.score}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
