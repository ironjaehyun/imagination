//Topthree.tsx

import { useState, useMemo } from 'react';

// import { useMemo } from 'react';
import { useAtom } from 'jotai';
import { periodAtom } from './Atoms';
// import { Leaderboard as LeaderboardData } from './Database';
import { Leaderboard as LeaderboardData, LeaderboardEntry } from './Database';
import LeaderModal from './LeaderModal'; // Make sure the path is correct based on your project structure
// interface LeaderboardEntry {
//   img: string;
//   title: string;
//   content: string;
//   likeCount: number;
//   dt: string;
// }

// const defaultLeaderboard: LeaderboardEntry[] = [
//   // Example default data
//   // { img: "path_to_image", name: "John Doe", grade: "A", score: 95 },
//   // { img: "path_to_image", name: "Jane Smith", grade: "A", score: 93 },
//   // ... more entries
// ];

export default function Topthree() {
  const [period] = useAtom(periodAtom);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<LeaderboardEntry | null>(
    null,
  );

  const between = (
    data: LeaderboardEntry[],
    period: number,
  ): LeaderboardEntry[] => {
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (period + 1));

    return data
      .filter((val) => {
        const userDate = new Date(val.dt);
        if (period === 0) return true;
        return previous <= userDate && today >= userDate;
      })
      .sort((a, b) => b.likeCount - a.likeCount);
  };

  const Leaderboard = useMemo(() => {
    return between(LeaderboardData, period);
  }, [period]);

  const openModal = (data: LeaderboardEntry) => {
    setSelectedData(data);
    setModalOpen(true);
  };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <div className="top-three-box">
      {Leaderboard.slice(1, 2).map((value, index) => (
        <div className="top-two" key={index}>
          <div className="top-two-span">{index + 2}</div>
          <br />
          <img
            className="top-two-img"
            src={value.img}
            alt={`Leader ${index + 2}`}
            onClick={() => openModal(value)}
          />
          {/* <div className="name">{value.name}</div>
                        <div className="grade">{value.grade}</div> */}
          <br />
          <div className="top-two-liked-score">
            <img
              className="top-three-like"
              src="./public/img/like.png"
              alt="Like"
              // onClick={() => openModal(value)}
            />
            {value.likeCount}
          </div>
        </div>
      ))}

      {Leaderboard.slice(0, 1).map((value, index) => (
        <div className="top-one" key={index}>
          <div className="top-one-span">{index + 1}</div>
          <br />
          <img
            className="top-one-img"
            src={value.img}
            alt={`Leader ${index + 1}`}
            onClick={() => openModal(value)}
          />
          {/* <div className="name">{value.name}</div>
                        <div className="grade">{value.grade}</div> */}
          <br />
          <div className="top-one-liked-score">
            <img
              className="top-three-like"
              src="./public/img/like.png"
              alt="Like"
              // onClick={() => openModal(value)}
            />
            {value.likeCount}
          </div>
        </div>
      ))}

      {Leaderboard.slice(2, 3).map((value, index) => (
        <div className="top-three" key={index}>
          <div className="top-three-span">{index + 3}</div>
          <br />
          <img
            className="top-three-img"
            src={value.img}
            alt={`Leader ${index + 3}`}
            onClick={() => openModal(value)}
          />
          {/* <div className="name">{value.name}</div>
                        <div className="grade">{value.grade}</div> */}
          <div className="top-three-liked-score">
            <img
              className="top-three-like"
              src="./public/img/like.png"
              alt="Like"
              // onClick={() => openModal(value)}
            />
            {value.likeCount}
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

// export default Topthree;
