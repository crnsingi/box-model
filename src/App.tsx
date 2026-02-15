import React, { useEffect, useRef } from 'react';

const App: React.FC = () => {
  // Create refs to the DOM elements
  const oneRef = useRef<HTMLDivElement | null>(null);
  const twoRef = useRef<HTMLDivElement | null>(null);
  const threeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Ensure elements exist before adding event listeners
    const one = oneRef.current;
    const two = twoRef.current;
    const three = threeRef.current;

    if (one) {
      one.addEventListener('mouseenter', () => {
        one.style.transform = 'rotate(10deg)';
        one.style.transition = 'transform 0.3s ease-in-out';
      });

      one.addEventListener('mouseleave', () => {
        one.style.transform = 'rotate(0deg)';
      });
    }

    if (two) {
      two.addEventListener('mouseenter', () => {
        two.style.transform = 'rotate(10deg)';
        two.style.transition = 'transform 0.3s ease-in-out';
      });

      two.addEventListener('mouseleave', () => {
        two.style.transform = 'rotate(0deg)';
      });
    }

    // Animate the third box with more rotation
    const interval = setInterval(() => {
      const randomRotation = Math.random() * 20; // Reduced rotation to prevent it from taking too much space
      if (three) {
        three.style.transform = `rotate(${randomRotation}deg)`;
      }
    }, 1000);

    // Cleanup interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black flex justify-center items-center py-10">
      <div className="w-[90%] max-w-200 p-8 shadow-xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Artistic Box Model</h1>
        <div className="canvas relative w-full h-175 bg-[#4d0f00] overflow-hidden rounded-lg shadow-lg">
          {/* First Box */}
          <div
            className="one w-[90%] h-37.5 bg-[#efb762] mx-auto my-4 rounded-lg shadow-xl transform rotate-[-0.6deg] filter blur-[1px]"
            ref={oneRef}
          ></div>

          {/* Second Box */}
          <div
            className="two w-[90%] h-62.5 bg-[#8f0401] mx-auto mb-4 rounded-lg shadow-xl transform rotate-[0.4deg] filter blur-[1px]"
            ref={twoRef}
          ></div>

          {/* Third Box */}
          <div
            className="three w-[90%] h-[30%] bg-[#b20403] mx-auto filter blur-[2px] shadow-xl rounded-[30px_25px_60px_12px]"
            ref={threeRef}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default App;
