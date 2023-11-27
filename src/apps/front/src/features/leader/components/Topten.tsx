// Topten.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState, useMemo } from 'react';

// import { useMemo } from 'react';
import { useAtom } from 'jotai';
import { periodAtom } from './Atoms';
import { Leaderboard as LeaderboardData, LeaderboardEntry } from './Database';
import LeaderModal from './LeaderModal'; // Make sure the path is correct based on your project structure

// import { Leaderboard as LeaderboardData } from './Database';

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

export default function Topten() {
  const [period] = useAtom(periodAtom);
  // const [sliderValue, setSliderValue] = useState(0);
  // const swiperRef = useRef(null);
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

  // useEffect(() => {
  //   if (swiperRef.current) {
  //     swiperRef.current.swiper.slideTo(sliderValue);
  //   }
  // }, [sliderValue]);

  // const handleSliderChange = (event, newValue) => {
  //   setSliderValue(newValue);
  // };

  return (
    <div className="top-ten">
      <Swiper
        grabCursor={true}
        loop={false}
        slidesPerView="auto"
        // spaceBetween={0}
        // slideToClickedSlide={false}////////////
        // loopAdditionalSlides={1}
        // // centeredSlides={true}
        // autoplay={{
        //   delay: 100,
        //   disableOnInteraction: true
        // }}
        slidesOffsetBefore={100}
        slidesOffsetAfter={-38}
        className="swiper-container"
      >
        {Leaderboard.slice(3, 10).map((value, index) => (
          <SwiperSlide key={index}>
            <div className="top-ten-box">
              <span className="top-ten-span">{index + 4}</span>
              <img
                className="top-ten-img-size"
                src={value.img}
                alt={`Leader ${index + 4}`}
                onClick={() => openModal(value)}
              />
            </div>
          </SwiperSlide>
        ))}

        {selectedData && (
          <LeaderModal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            data={selectedData}
          />
        )}
      </Swiper>
    </div>
  );
}
