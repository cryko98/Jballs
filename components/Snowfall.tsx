import React, { useEffect, useState } from 'react';

const Snowfall: React.FC = () => {
  const [flakes, setFlakes] = useState<Array<{ id: number; left: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Generate constant snowflakes on mount
    const snowflakeCount = 50;
    const newFlakes = Array.from({ length: snowflakeCount }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      size: Math.random() * 0.5 + 0.2, // rem
      duration: Math.random() * 3 + 5, // seconds
      delay: Math.random() * 5, // seconds
    }));
    setFlakes(newFlakes);
  }, []);

  return (
    <div className="snow-container">
      {flakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}rem`,
            height: `${flake.size}rem`,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;