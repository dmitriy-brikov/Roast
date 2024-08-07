import SwiperCore from 'swiper';

export type MainContextType = {
  uploadedPics: Array<string>;
  swiper: SwiperCore | undefined;
  removePic: (idx: number) => void;
  setSwiper: (swiper: SwiperCore) => void;
  addPic: (img: string) => void;
};
