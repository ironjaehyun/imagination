// Database.ts
export interface LeaderboardEntry {
  // userProfileImg: post.owner.user_profile_img,
  // userName: post.owner.id,
  // objectId: post.owner._id,
  _id: string;
  // _id: null;

  img: string;
  title: string;
  content: string;
  // hashtags: string;
  // likeCount: post.likes,
  likeCount: number;
  prompt: string;
  Nprompt: string;
  dt: string;
}

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, '0');
  const day = `${today.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const Leaderboard: LeaderboardEntry[] = [
  {
    _id: 'kimyouwon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-c46ed8cc-cac8-4503-84b8-f599e7a7a709.webp?alt=media',
    title: '겨울밤의 은하수',
    content:
      '차가운 겨울밤에 반짝이는 은하수를 통해 우주의 신비를 탐구합니다. 겨울밤의 은하수는 어떤 감정을 불러일으키나요? 경이? 무한함? 아니면 조용한 감탄?',
    likeCount: 210,
    prompt: 'winter, galaxy, stars, awe, cosmos',
    Nprompt: 'night sky, cold, solitude',
    // dt: '2023-11-27',
    dt: getTodayDate(),
  },
  {
    _id: 'leeuihyun',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtanM2cGM%3D-af3bb57b-e0cd-40b0-89af-aeec621108dc.webp?alt=media',
    title: '봄날의 꽃길',
    content:
      '따스한 봄날, 꽃으로 가득한 길을 거닐며 자연의 아름다움을 느낍니다. 봄날의 꽃길은 어떤 기분을 줄까요? 활기? 희망? 아니면 재생?',
    likeCount: 220,
    prompt: 'spring, flowers, bloom, rejuvenation, hope',
    Nprompt: 'petals, fragrance, renewal',
    dt: '2023-11-27',
  },
  {
    _id: 'choijinwoo',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNnp4dzg%3D-b33db80b-f7f2-4389-afb0-77c9f26a46f8.webp?alt=media',
    title: '고대 숲의 신비',
    content:
      '오랜 시간을 거쳐온 고대 숲의 신비로움과 고요함을 탐구합니다. 고대 숲은 어떤 느낌을 줄까요? 신비? 고요함? 아니면 영원성?',
    likeCount: 230,
    prompt: 'ancient, forest, mystery, serenity, eternity',
    Nprompt: 'trees, age, timelessness',
    dt: '2023-11-27',
  },
  {
    _id: 'hookbro',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-dbc0e7f0-af9f-4319-bb5e-781c86d00ba0.webp?alt=media',
    title: '도심의 비 오는 거리',
    content:
      '도시의 번화가에서 내리는 비를 통해 도시의 다른 면을 탐구합니다. 비 오는 거리의 모습은 어떤 감정을 자아낼까요? 반짝임? 몽환? 아니면 잔잔함?',
    likeCount: 240,
    prompt: 'rain, city, lights, reflection, tranquility',
    Nprompt: 'urban, wet streets, solitude',
    dt: '2023-11-10',
  },
  {
    _id: 'leechiyeon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtOXpmcGM%3D-f0239be6-f246-4255-bfa5-ae0152fbe327.webp?alt=media',
    title: '해변의 일몰',
    content:
      '해변에서 바라보는 일몰의 아름다움을 통해 평화와 성찰의 순간을 포착합니다. 해변의 일몰은 어떤 느낌을 줄까요? 평온? 아름다움? 아니면 새로운 시작?',
    likeCount: 250,
    prompt: 'sunset, beach, sea, calm, beauty',
    Nprompt: 'ocean, horizon, solitude',
    dt: '2023-11-10',
  },
  {
    _id: 'seojungwook',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtbGtxbjc%3D-2296417b-90c1-473f-bfcb-30decd8bc182.webp?alt=media',
    title: '가을 숲의 산책',
    content:
      '가을에 산책하는 숲의 모습을 통해 자연의 변화와 아름다움을 탐구합니다. 가을 숲에서의 산책은 어떤 감정을 자아내는가요? 성찰? 평온함? 아니면 변화?',
    likeCount: 200,
    prompt: 'autumn, forest, walk, peaceful, change',
    Nprompt: 'leaves, colors, solitude',
    dt: '2023-11-16',
  },
  {
    _id: 'kimjaehyun',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZ2hodmQ%3D-0758815c-1e15-4a2d-9988-182cdd994136.webp?alt=media',
    title: '산 속의 아침',
    content:
      '평화로운 산속 아침의 모습을 담은 이 작품은 자연의 아름다움과 고요함을 그려냅니다. 새벽의 산에서 우리는 어떤 감정을 느낄까요? 명상? 신비?',
    likeCount: 190,
    prompt: 'mountains, dawn, nature, calm, beauty',
    Nprompt: 'forest, mist, tranquility',
    dt: '2023-11-26',
  },
  {
    _id: 'jeongjiwoong',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNXJ4OXI%3D-cc795e80-4acf-4cfe-afa9-03a8788b75cc.webp?alt=media',
    title: '도심 속 조용한 카페',
    content:
      '번잡한 도시 속의 한적한 카페에서의 한 때를 포착한 이 작품은 현대 생활의 여유와 사색을 담아냅니다. 카페에서 우리는 어떤 감정을 느낄까요? 여유? 반성?',
    likeCount: 180,
    prompt: 'cafe, city life, relaxation, contemplation',
    Nprompt: 'urban, solitude, coffee',
    dt: '2023-11-26',
  },
  {
    _id: 'shinbumsick',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZ2hodmQ%3D-b74d885d-3ed9-4fc6-a9c6-793e3f062f6d.webp?alt=media',
    title: '밤하늘의 별빛',
    content:
      '밤하늘을 수놓는 별들의 이야기와 그들의 신비로운 광채를 탐구합니다. 별빛이 주는 감정은 무엇일까요? 경이? 평온함? 아니면 무한한 꿈?',
    likeCount: 170,
    prompt: 'stars, night, galaxy, dreams, peace',
    Nprompt: 'universe, solitude, space',
    dt: '2023-11-26',
  },
  {
    _id: 'songminjae',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-a9d940e1-5743-4c65-8dc5-fa9ea9127829.webp?alt=media',
    title: '강변의 황혼',
    content:
      '강가에서 바라보는 황혼의 모습을 통해 평화와 사색의 순간을 포착합니다. 강변의 황혼은 어떤 느낌을 줄까요? 성찰? 안식? 아니면 그리움?',
    likeCount: 160,
    prompt: 'river, dusk, serenity, reflection',
    Nprompt: 'water, twilight, solitude',
    dt: '2023-11-26',
  },
  {
    _id: 'leebumdong',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZnFwenM%3D-637d1acf-8c85-4910-9f51-405fa6651b13.webp?alt=media',
    title: '도시의 야경',
    content:
      '밤하늘 아래 빛나는 도시의 야경을 통해 현대 생활의 에너지를 탐구합니다. 번화가의 밤은 어떤 감정을 자아내나요? 활기? 도전? 아니면 꿈?',
    likeCount: 150,
    prompt: 'cityscape, night, lights, energy',
    Nprompt: 'urban glow, nightlife, excitement',
    dt: '2023-11-26',
  },
  {
    _id: 'kimhyungjin',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtbGtxbjc%3D-3c28478b-63ed-4105-bcca-d0d82824fbce.webp?alt=media',
    title: '얼어붙은 호수',
    content:
      '겨울철 얼어붙은 호수의 고요함과 순수함을 탐구합니다. 얼음으로 뒤덮인 호수는 어떤 느낌을 줄까요? 고요함? 순수함? 아니면 멈춤?',
    likeCount: 140,
    prompt: 'frozen lake, winter, stillness, purity',
    Nprompt: 'ice, cold, tranquility',
    dt: '2023-11-26',
  },
  {
    _id: 'parkminsoo',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-88ee2830-c6f0-449e-9139-ff70667c73c3.webp?alt=media',
    title: '사막의 별밤',
    content:
      '사막의 밤하늘 아래 빛나는 별들을 통해 자연의 광활함과 아름다움을 탐구합니다. 사막의 밤은 어떤 감정을 불러일으킬까요? 무한함? 경이? 아니면 고독?',
    likeCount: 130,
    prompt: 'desert, stars, vastness, awe',
    Nprompt: 'night sky, solitude, infinity',
    dt: '2023-11-26',
  },
  {
    _id: 'kimsucktae',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtY3BtenA%3D-f9e8e98e-6ea4-4b6f-a338-33f2c80de6b4.webp?alt=media',
    title: '고즈넉한 마을의 아침',
    content:
      '조용한 마을에서 맞이하는 평화로운 아침의 모습을 담아냅니다. 이른 아침의 마을은 어떤 감정을 불러일으키나요? 평화? 새로운 시작? 아니면 여유?',
    likeCount: 120,
    prompt: 'village, morning, peace, new beginnings',
    Nprompt: 'quiet, dawn, serenity',
    dt: '2023-11-26',
  },
  {
    _id: 'leedoyeon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtOXpmcGM%3D-825da662-701b-4dcf-987e-739843539f66.webp?alt=media',
    title: '공원의 가을',
    content:
      '가을이 찾아온 공원의 다채로운 색채와 생명력을 탐구합니다. 가을 공원은 어떤 느낌을 줄까요? 변화? 생명? 아니면 색채?',
    likeCount: 110,
    prompt: 'park, autumn, colors, life',
    Nprompt: 'leaves, changing seasons, vibrancy',
    dt: '2023-11-26',
  },
  {
    _id: 'choijina',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtY3BtenA%3D-6d4ca42c-b8b5-4eaa-ad68-2ac527225b1d.webp?alt=media',
    title: '바람이 만든 언덕',
    content:
      '시간과 바람에 의해 조각된 언덕의 모습을 통해 자연의 창조적 힘을 탐구합니다. 언덕의 곡선은 어떤 느낌을 줄까요? 유연함? 지속성? 아니면 조화?',
    likeCount: 100,
    prompt: 'hills, wind, nature, creation, harmony',
    Nprompt: 'landscapes, erosion, beauty',
    dt: '2023-11-26',
  },
  {
    _id: 'kimyoungjae',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-f3b403a2-990a-45f0-82c6-c3b8dc059839.webp?alt=media',
    title: '구시가지의 밤',
    content:
      '역사가 깃든 구시가지의 밤 풍경을 통해 과거와 현재의 만남을 탐구합니다. 구시가지의 밤은 어떤 감정을 자아내나요? 추억? 멜랑콜리? 아니면 숨겨진 이야기?',
    likeCount: 90,
    prompt: 'old town, night, history, nostalgia',
    Nprompt: 'streets, past, melancholy',
    dt: '2023-11-26',
  },
  {
    _id: 'leeminsoo',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZ2hodmQ%3D-8cd881e6-4e21-4b95-87cb-3d3a97ad78ba.webp?alt=media',
    title: '초원의 아침',
    content:
      '넓게 펼쳐진 초원에서 맞이하는 아침의 모습을 통해 평온과 자유를 탐구합니다. 초원의 아침은 어떤 느낌을 줄까요? 개방성? 평화? 아니면 새로운 시작?',
    likeCount: 80,
    prompt: 'meadow, morning, freedom, peace',
    Nprompt: 'grassland, sunrise, openness',
    dt: '2023-11-26',
  },
  {
    _id: 'kimjungwook',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNnp4dzg%3D-def9b27a-08fc-4876-8600-5bae71f5c96a.webp?alt=media',
    title: '비오는 숲 속 오두막',
    content:
      '비가 내리는 숲 속의 오두막에서 평온함과 고립의 감정을 탐구합니다. 비 오는 오두막은 어떤 느낌을 줄까요? 고독? 안식? 아니면 명상?',
    likeCount: 70,
    prompt: 'cabin, rain, forest, solitude, reflection',
    Nprompt: 'woods, shelter, quiet',
    dt: '2023-11-26',
  },
  {
    _id: 'parkjiwoong',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtbGtxbjc%3D-3548b0c3-89e5-4d31-a0da-06ac860ebe65.webp?alt=media',
    title: '장미 정원의 오후',
    content:
      '향기로운 장미가 가득한 정원에서 오후의 여유를 즐기는 모습을 그려냅니다. 장미 정원의 오후는 어떤 감정을 불러일으킬까요? 행복? 사랑? 아니면 아름다움?',
    likeCount: 60,
    prompt: 'rose garden, afternoon, leisure, love',
    Nprompt: 'flowers, fragrance, beauty',
    dt: '2023-11-26',
  },
  {
    _id: 'seobumdong',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtOXpmcGM%3D-882b9d30-96fb-4092-ba3f-2eefd24f7382.webp?alt=media',
    title: '폭포 아래의 비밀',
    content:
      '폭포의 장엄한 모습과 그 아래 숨겨진 비밀을 탐구합니다. 폭포 아래의 세계는 어떤 느낌을 줄까요? 웅장함? 신비? 아니면 숨겨진 삶?',
    likeCount: 50,
    prompt: 'waterfall, secret, majesty, mystery',
    Nprompt: 'nature, hidden, life',
    dt: '2023-11-26',
  },
  {
    _id: 'choichiyeon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNnp4dzg%3D-f522af98-dcfd-4b43-bf67-2b38e77e53d2.webp?alt=media',
    title: '산 정상의 일출',
    content:
      '산 정상에서 바라보는 일출의 장엄한 모습을 통해 새로운 시작과 희망을 탐구합니다. 산 정상의 일출은 어떤 감정을 자아내나요? 감동? 영감? 아니면 경이?',
    likeCount: 40,
    prompt: 'mountaintop, sunrise, inspiration, awe',
    Nprompt: 'peak, dawn, new beginnings',
    dt: '2023-11-26',
  },
  {
    _id: 'kimjinwoo',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtOXpmcGM%3D-9585c81f-eee2-491b-8d32-17c6756ccbcc.webp?alt=media',
    title: '별빛 아래의 침묵',
    content:
      '별이 가득한 밤하늘 아래 조용히 깔린 침묵을 통해 우주의 깊이와 고요함을 탐구합니다. 별빛 아래의 침묵은 어떤 느낌을 줄까요? 고요함? 심오함? 아니면 신비?',
    likeCount: 30,
    prompt: 'starry night, silence, depth, universe',
    Nprompt: 'stars, quiet, profundity',
    // dt: '2023-11-27',
    dt: getTodayDate(),
  },
  {
    _id: 'kimbumdong',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNXJ4OXI%3D-0878b9b5-00e0-4ee7-80bf-636193799ea2.webp?alt=media',
    title: '늦가을의 연못',
    content:
      '늦가을에 찾아온 연못의 평온한 모습을 통해 자연의 순환과 아름다움을 탐구합니다. 늦가을 연못은 어떤 느낌을 줄까요? 생명력? 반성? 아니면 변화?',
    likeCount: 20,
    prompt: 'autumn pond, nature, cycle, beauty',
    Nprompt: 'water, leaves, reflection',
    // dt: '2023-11-27',
    dt: getTodayDate(),
  },
  {
    _id: 'choijongyong',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtbGtxbjc%3D-696be887-86c6-4b9f-a775-e709b5ce93e0.webp?alt=media',
    title: '도서관의 고요한 오후',
    content:
      '책들로 가득한 도서관에서의 고요하고 평화로운 오후를 그려냅니다. 도서관의 오후는 어떤 감정을 자아내나요? 지식? 여유? 아니면 사색?',
    likeCount: 10,
    prompt: 'library, afternoon, peace, knowledge',
    Nprompt: 'books, quiet, contemplation',
    // dt: '2023-11-27',
    dt: getTodayDate(),
  },
];
