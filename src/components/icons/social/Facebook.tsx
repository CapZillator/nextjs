import React, { SVGProps } from 'react';

const Facebook = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={30}
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.5 15.0838C0.5 22.5413 5.91625 28.7425 13 30V19.1663H9.25V15H13V11.6663C13 7.91625 15.4163 5.83375 18.8337 5.83375C19.9163 5.83375 21.0837 6 22.1663 6.16625V10H20.25C18.4163 10 18 10.9163 18 12.0837V15H22L21.3337 19.1663H18V30C25.0837 28.7425 30.5 22.5425 30.5 15.0838C30.5 6.7875 23.75 0 15.5 0C7.25 0 0.5 6.7875 0.5 15.0838Z"
      fill="#7A7A7A"
    />
  </svg>
);

export default Facebook;
