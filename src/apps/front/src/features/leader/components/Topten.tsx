import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Mousewheel,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';

const Topten: FC = () => {
  return (
    <div className="top-ten-container">
      {/* <h1 className="heading">Imagenation</h1> */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          //  el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          // clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/We%2FWezmS86BcrchhuFXi6XvvnUCZcz1%2Fgenerated%2Ff6%2Ff6e8d605-51ca-4923-954a-0f35d255ea35.webp?alt=media"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/ZF%2FZFWS7bnwAwaQoDlLrHOKMQH81Lt1%2Fgenerated%2F33%2F330f2215-2063-44ba-8874-f863ac5563c3.webp?alt=media"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/HR%2FHRbzMtjoqteakrh6NWAxSNGnuOK2%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtbWhuODY%3D-21fb60d7-7731-4886-bec7-eb3bca26438e.webp?alt=media"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/rU%2FrUbpEh62J2esf47YzsY3Tk81ySe2%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtaGQ3Zjk%3D-950c4a48-4b91-4026-a18a-6475aa3ee661.webp?alt=media"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/HR%2FHRbzMtjoqteakrh6NWAxSNGnuOK2%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZ25oazI%3D-f71faf43-45d3-4bfa-b780-ecd3fc7a3e04.webp?alt=media"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/Zj%2FZj5Hk6u4qwcEq1mmpKmcBnd5HQB3%2Fgenerated%2F09%2F0995b929-aa1a-48f8-a1f0-ffba0e66afdd.webp?alt=media"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/Yz%2FYzgBVP8iczZdErUixuUbj0achHh1%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZ25oazI%3D-456e3cf5-0a22-496d-b67e-edc06db7b349.webp?alt=media"
            alt="slide_image"
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <IonIcon icon={arrowBackOutline} />
            {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
          </div>
          <div className="swiper-button-next slider-arrow">
            <IonIcon icon={arrowForwardOutline} />
            {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Topten;
