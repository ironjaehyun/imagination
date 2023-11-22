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
  return filter.sort((a, b) => b.likeCount - a.likeCount);
};

interface LeaderboardEntry {
  img: string;
  title: string;
  content: string;
  likeCount: number;
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
    <div className="top-tail">
      {listStartingFromEleventh.map((value, index) => (
        <div className="top-tail-list" key={index}>
          <div className="top-tail-span">
            <span>{index + 11}</span>
          </div>
          <div className="top-tail-post">
            <img className="top-tail-img" src={value.img} alt={value.title} />
            <div className="top-tail-info">
              <h2 className="top-tail-title">{value.title}</h2>
              <h3 className="top-tail-detail">{value.content}</h3>
            </div>
            <div className="top-tail-liked">
              <span>❤️{value.likeCount}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
