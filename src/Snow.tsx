import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Snow({ numDrops }: {
    numDrops: number;
}) {
  return (
    <div className="snow">
      {
        Array.from(Array(numDrops).keys()).map(i => (
          <animated.div className="rain" key={`rain-${i}`} style={useSpring({
            from: { marginTop: Math.random() * -1000 - 500, color: 'lightblue' },
            to: { marginTop: Math.random() * 1000 + 500, color: 'lightblue' },
            config: { duration: Math.random() * 10000 + 8000},
            loop: true,
          })}>
            ❄
          </animated.div>
        ))
      }
    </div>
  );
}