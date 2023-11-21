// Topten.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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

export default function Topten() {
  const [period] = useAtom(periodAtom);
  // const [sliderValue, setSliderValue] = useState(0);
  // const swiperRef = useRef(null);

  const Leaderboard = useMemo(() => {
    return between(LeaderboardData, period) ?? defaultLeaderboard;
  }, [period]);

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
        centeredSlides={true}
        loop={false}
        slidesPerView="auto"
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
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
