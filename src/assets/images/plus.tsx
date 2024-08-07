import React, { SVGProps } from 'react';
import { useTheme } from 'styled-components';

type PlusIcon = {
  color?: string;
} & SVGProps<SVGSVGElement>;

const PlusIcon: React.FC<PlusIcon> = ({ color, ...props }) => {
  const theme = useTheme();
  const assignedColor = color ?? theme.colors.primaryText;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 12H19"
        stroke={assignedColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5V19"
        stroke={assignedColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
