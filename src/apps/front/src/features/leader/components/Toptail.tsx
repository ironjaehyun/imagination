// Toptail.tsx
import { useState, useMemo } from 'react';

// import { useMemo } from 'react';
import { useAtom } from 'jotai';
import { periodAtom } from './Atoms';
// import { Leaderboard as LeaderboardData } from './Database';
import { Leaderboard as LeaderboardData, LeaderboardEntry } from './Database';
import LeaderModal from './LeaderModal'; // Make sure the path is correct based on your project structure

interface BetweenFunction {
  (data: LeaderboardEntry[], period: number): LeaderboardEntry[];
}

// interface LeaderboardEntry {
//   img: string;
//   title: string;
//   content: string;
//   likeCount: number;
//   dt: string;
// }
// interface ToptailProps {
//     Leaderboard?: LeaderboardEntry[];  // Make Leaderboard optional
// // }
// const defaultLeaderboard: LeaderboardEntry[] = [
//   // Example default data
//   // { img: "path_to_image", name: "John Doe", grade: "A", score: 95 },
//   // { img: "path_to_image", name: "Jane Smith", grade: "A", score: 93 },
//   // ... more entries
// ];

export default function Toptail() {
  const [period] = useAtom(periodAtom);

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<LeaderboardEntry | null>(
    null,
  );

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

  const Leaderboard = useMemo(() => {
    return between(LeaderboardData, period);
  }, [period]);
  const listStartingFromEleventh = Leaderboard.slice(10);

  const openModal = (data: LeaderboardEntry) => {
    setSelectedData(data);
    setModalOpen(true);
  };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <div className="top-tail">
      {listStartingFromEleventh.map((value, index) => (
        <div className="top-tail-list" key={index}>
          <div className="top-tail-span">
            <span>{index + 11}</span>
          </div>
          <div className="top-tail-post">
            <img
              className="top-tail-img"
              src={value.img}
              alt={value.title}
              onClick={() => openModal(value)}
            />
            <div className="top-tail-info">
              <h2 className="top-tail-title">{value.title}</h2>
              <h3 className="top-tail-detail">{value.content}</h3>
            </div>

            <div className="top-tail-liked-score">
              <img
                className="top-tail-like"
                src="./public/img/like.png"
                alt="Like"
                // onClick={() => openModal(value)}
              />
              {value.likeCount}
            </div>
            {/* <div className="top-tail-liked">
              <span>❤️{value.likeCount}</span>
            </div> */}
          </div>
        </div>
      ))}

      {selectedData && (
        <LeaderModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          data={selectedData}
        />
      )}
    </div>
  );
}
