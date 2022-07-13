import React, { FunctionComponent } from 'react';

type ClassName = {
  style: string;
};

export const Facebook: FunctionComponent<ClassName> = ({ style }) => {
  return (
    <svg width={31} height={30} viewBox="0 0 31 30" className={style}>
      <path
        d="M.5 15.084C.5 22.54 5.916 28.743 13 30V19.166H9.25V15H13v-3.334c0-3.75 2.416-5.832 5.834-5.832 1.082 0 2.25.166 3.332.332V10H20.25c-1.834 0-2.25.916-2.25 2.084V15h4l-.666 4.166H18V30c7.084-1.258 12.5-7.457 12.5-14.916C30.5 6.788 23.75 0 15.5 0S.5 6.787.5 15.084Z"
        fill="#7A7A7A"
      />
    </svg>
  );
};
