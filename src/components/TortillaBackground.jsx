import React, { useEffect, useState } from "react";
import tortilla from '../assets/tortilla.png';

const TortillaBackground = () => {
  const [tortillas, setTortillas] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTortilla = {
        id: Date.now(),
        left: Math.random() * 100, // horizontal position in %
        size: 20 + Math.random() * 40, // size in px
        rotation: Math.random() * 360, // random rotation
        duration: 5 + Math.random() * 5, // fall duration in seconds
      };
      setTortillas((prev) => [...prev, newTortilla]);
      
      // Remove after animation ends to prevent memory buildup
      setTimeout(() => {
        setTortillas((prev) => prev.filter((t) => t.id !== newTortilla.id));
      }, 10000);
    }, 300); // spawn a tortilla every 0.3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-visible">

      {tortillas.map((t) => (
        <div
          key={t.id}
          className="absolute"
          style={{
            left: `${t.left}%`,
            width: `${t.size}px`,
            height: `${t.size}px`,
            background:
              `url(${tortilla}) no-repeat center/contain`,
            top: "-50px",
            animation: `fall ${t.duration}s linear forwards`,
            transform: `rotate(${t.rotation}deg)`,
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

export default TortillaBackground;
