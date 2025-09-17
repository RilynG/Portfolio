import React, { useEffect, useState } from "react";
import raiderred from '../assets/raiderred.png';

const TTUMascotBackground = () => {
  const [mascots, setMascots] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newMascot = {
        id: Date.now(),
        left: Math.random() * 100, // horizontal position in %
        size: 20 + Math.random() * 40, // size in px
        rotation: Math.random() * 360, // random rotation
        duration: 5 + Math.random() * 5, // fall duration in seconds
      };
      setMascots((prev) => [...prev, newMascot]);

      // Remove after animation ends to prevent memory buildup
      setTimeout(() => {
        setMascots((prev) => prev.filter((m) => m.id !== newMascot.id));
      }, (newMascot.duration + 1) * 1000);
    }, 300); // spawn a mascot every 0.3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black fixed inset-0 pointer-events-none z-0 overflow-visible">

      {mascots.map((m) => (
        <div
          key={m.id}
          className="absolute"
          style={{
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            background: `url(${raiderred}) no-repeat center/contain`,
            top: "-50px",
            animation: `fall ${m.duration}s linear forwards`,
            transform: `rotate(${m.rotation}deg)`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default TTUMascotBackground;
