import React, { memo } from 'react';

const BikoLogo: React.FC = () => {
  return (
    <svg
      width="36"
      height="38"
      viewBox="0 0 36 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.4999 11.9378H34.5162V7.52599L33.2186 6.02845H28.4999L25.5628 1.55701H19.4999V10.4999L1.49994 20.9999V34.4999L11.7824 28.4999H19.4999C24.4724 28.4999 28.4999 24.4723 28.4999 19.4999V16.4999C28.4999 13.185 28.4999 11.9378 28.4999 11.9378Z"
        fill="url(#paint0_linear)"
        fillOpacity="0.57"
      />
      <path
        d="M31.5 4.5H29.8099C29.142 1.91565 26.7905 0 24 0H18V9.63831L0 20.1383V37.1115L12.1882 30H15H18H19.5C25.2898 30 30 25.2902 30 19.5V13.5H36V9C36 6.51819 33.9814 4.5 31.5 4.5ZM27 19.5C27 23.6356 23.6353 27 19.5 27H17.3331L21.5511 24.5409L20.0398 21.9489L9.73022 27.9598L9.73096 27.9606L3 31.8885V28.5996L18.5577 19.2645L17.0142 16.6919L3 25.1001V21.861L19.9058 12H22.5C24.9814 12 27 14.0182 27 16.5V19.5ZM33 10.5H27V10.5037C25.7457 9.5603 24.1868 9 22.5 9H21V3H24C25.6542 3 27 4.34546 27 6V7.5H31.5C32.3273 7.5 33 8.17273 33 9V10.5Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="32.6996"
          y1="6.61767"
          x2="1.55711"
          y2="34.5161"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#136BA1" />
          <stop offset="1" stopColor="#20D4B1" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="36.0734"
          y1="9.28373e-07"
          x2="6.16436e-07"
          y2="37.1114"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#136AA1" />
          <stop offset="1" stopColor="#20D6B2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default memo(BikoLogo);
