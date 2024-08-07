import { LogoIcon, name_img } from '@/assets/images';
import Image from 'next/image';
import React, { HTMLProps } from 'react';
import { useTheme } from 'styled-components';
import { StyledLogoWrapper } from './styles';

type LogoProps = {
  logoClr: 'orange' | 'white';
} & HTMLProps<HTMLDivElement>;

export const Logo: React.FC<LogoProps> = ({ logoClr, ...props }) => {
  const theme = useTheme();

  return (
    <StyledLogoWrapper {...props}>
      <LogoIcon
        color={
          logoClr === 'orange' ? theme.colors.orange : theme.colors.primaryText
        }
      />
      <Image src={name_img} alt="name" />
    </StyledLogoWrapper>
  );
};
