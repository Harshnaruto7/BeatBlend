"use client"
import { TypeAnimation } from 'react-type-animation';

export default function FontAnimation(){
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Beat Remix💙',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Beat Blend💚',
        1500,
        'Beat Music💛',
        1500,
        'Beat Enjoy💗',
        1500
      ]}
      wrapper="span"
      speed={50}
    //   style={{ fontSize: ' ', display: 'inline-block' }}
      repeat={Infinity}
       className=' font-2xl'
    />
  );
};