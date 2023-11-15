// Toptail.tsx
import { useMemo } from 'react';
import { useAtom } from 'jotai';
import { periodAtom } from './Atoms';
import { Leaderboard as LeaderboardData } from './Database';
interface BetweenFunction {
  (data: LeaderboardEntry[], period: number): LeaderboardEntry[];
}

const between: BetweenFunction = (data, period) => {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (period + 1));
  console.log(data);

  const filter = data.filter((val) => {
    // console.log(val)
    const userDate = new Date(val.dt);
    if (period === 0) return val;
    return previous <= userDate && today >= userDate;
  });

  // sort with ascending order
  return filter.sort((a, b) => b.score - a.score);
};

interface LeaderboardEntry {
  img: string;
  name: string;
  grade: string;
  score: number;
  dt: string;
}
// interface ToptailProps {
//     Leaderboard?: LeaderboardEntry[];  // Make Leaderboard optional
// }
const defaultLeaderboard: LeaderboardEntry[] = [
  // Example default data
  // { img: "path_to_image", name: "John Doe", grade: "A", score: 95 },
  // { img: "path_to_image", name: "Jane Smith", grade: "A", score: 93 },
  // ... more entries
];
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
