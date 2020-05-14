import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


export default function RateStar({ rate, index, onClick }) {
  return (
    <div>
      {rate >= index ? <AiFillStar onClick={onClick} /> : <AiOutlineStar onClick={onClick} />}
    </div>
  );
}
