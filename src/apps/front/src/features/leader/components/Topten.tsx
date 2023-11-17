import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
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

  const Leaderboard = useMemo(() => {
    return between(LeaderboardData, period) ?? defaultLeaderboard;
  }, [period]);

  return (
    <div className="top-ten">
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Pagination, Navigation, Mousewheel]}
        className="swiper-container"
      >
        {Leaderboard.slice(3, 10).map((value, index) => (
          <SwiperSlide key={index}>
            <div className="top-ten-box">
              <div className="top-ten-span">{index + 4}</div>
              <img
                className="top-ten-img-size"
                src={value.img}
                alt={`Leader ${index + 4}`}
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IonIcon icon={arrowBackOutline} />
          </div>
          <div className="swiper-button-next slider-arrow">
            <IonIcon icon={arrowForwardOutline} />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
