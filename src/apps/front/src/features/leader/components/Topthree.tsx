import { useMemo } from 'react';
import { useAtom } from 'jotai';
import { periodAtom } from './Atoms';
import { Leaderboard as LeaderboardData } from './Database';
interface LeaderboardEntry {
  img: string;
  name: string;
  grade: string;
  score: number;
  dt: string;
}

const between = (data: LeaderboardEntry[], period: number) => {
  const today = new Date();
  const previous = new Date(today);
  previous.setDate(previous.getDate() - (period + 1));

  return data
    .filter((val) => {
      const userDate = new Date(val.dt);
      if (period === 0) return true;
      return previous <= userDate && today >= userDate;
    })
    .sort((a, b) => b.score - a.score);
};

const defaultLeaderboard: LeaderboardEntry[] = [
  // Example default data
  // { img: "path_to_image", name: "John Doe", grade: "A", score: 95 },
  // { img: "path_to_image", name: "Jane Smith", grade: "A", score: 93 },
  // ... more entries
];

export default function Topthree() {
  const [period] = useAtom(periodAtom);

  const Leaderboard = useMemo(() => {
    return between(LeaderboardData, period) ?? defaultLeaderboard;
  }, [period]);

  return (
    <div className="Topthree">
      {Leaderboard.slice(0, 3).map((value, index) => (
        <div className="card" key={index}>
          <div className="top-three-blue-box-size">{index + 1}</div>
          <img
            className="top-three-img-size"
            src={value.img}
            alt={`Leader ${index + 1}`}
          />
          <div className="name">{value.name}</div>
          <div className="grade">{value.grade}</div>
          <div className="score">❤️{value.score}</div>
        </div>
      ))}
    </div>
  );
}
