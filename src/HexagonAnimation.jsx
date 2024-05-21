// Import React and Anime.js
import React, { useEffect } from 'react';
import anime from 'animejs';

const HexagonAnimation = () => {
  useEffect(() => {
    const anim = anime.timeline({
      loop: true,
      direction: 'alternate',
    });

    anim
      .add({
        targets: '#hexagon path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuart',
        duration: 2000,
        delay: (el, i) => i * 250,
      })
      .add({
        targets: '#hexagon #B',
        duration: 1000,
        opacity: 1,
        easing: 'easeInOutQuart',
      });
  }, []);

  return (
    <div className="w-max max-w-[100px] my-[300px] ml-[600px]   text-center justify-center items-center">
      <svg
        id="hexagon"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full block mx-auto"
      >
        <g>
          <g
            id="B"
            transform="translate(36, 33)"
            fill="#64FFDA"
            style={{ opacity: 0 }}
            className="font-sans font-medium text-center text-[50px] leading-[1.25em] tracking-[4.16666603]"
          >
            <text>
              <tspan x="-2.5" y="33" className=' font-bold font-calibre'>
                H
              </tspan>
            </text>
          </g>
          <path
            stroke="#64FFDA"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 50, 5 L 11, 27 L 11, 72 L 50, 95 L 89, 73 L 89, 28 z"
          />
        </g>
      </svg>
    </div>
  );
};

export default HexagonAnimation;
