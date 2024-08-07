import { ReactNode, createContext, useContext, useState } from 'react';
import SwiperCore from 'swiper';
import { MainContextType } from './types';

export const MainContext = createContext<MainContextType | null>(null);

export const MainContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [swiper, setSwiper] = useState<SwiperCore | undefined>();
  const [uploadedPics, setUploadedPics] = useState<string[]>([]);

  const addPic = (img: string) => {
    return setUploadedPics([...uploadedPics, img]);
  };

  const removePic = (idx: number) => {
    return setUploadedPics(uploadedPics.filter((_, index) => index !== idx));
  };

  return (
    <MainContext.Provider
      value={{
        uploadedPics,
        swiper,
        removePic,
        addPic,
        setSwiper,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => {
  const mainCtx = useContext(MainContext);

  if (!mainCtx) throw new Error('Context is not defined');

  return mainCtx;
};
