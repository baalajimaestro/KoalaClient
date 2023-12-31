import React from 'react';

const CopyIcon = () => {
  return (
    <svg
      stroke='currentColor'
      fill='none'
      strokeWidth='2'
      viewBox='0 0 24 24'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-4 w-4'
      height='1em'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
      <path d='M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z'></path>
      <path d='M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2'></path>
    </svg>
  );
};

export default CopyIcon;
