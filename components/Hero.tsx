import React, { useState, useEffect } from 'react';
import { ASSETS } from '../constants';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmasDate = new Date(currentYear, 11, 25); // Dec 25

    // If Christmas has passed this year (and it's not currently Xmas day), count down to next year's
    // If it is exactly Xmas, the diff is small or negative, logic below handles 0s.
    if (now.getTime() > christmasDate.getTime() + (1000 * 60 * 60 * 24)) {
      christmasDate.setFullYear(currentYear + 1);
    }

    const difference = christmasDate.getTime() - now.getTime();

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center mx-2">
      <div className="bg-christmas-green/90 border-2 border-gold text-white font-christmas text-3xl md:text-4xl font-bold w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg shadow-lg backdrop-blur-sm">
        {value < 10 ? `0${value}` : value}
      </div>
      <span className="text-white font-sans text-xs md:text-sm font-bold mt-2 uppercase tracking-wider drop-shadow-md">
        {label}
      </span>
    </div>
  );

  return (
    <section id="hero" className="relative w-full pt-10 pb-4 overflow-hidden">
      
      {/* Content Container */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">
          {/* Floating Image */}
          <div className="animate-float-x mb-8 mt-8">
            <img 
              src={ASSETS.HERO_CHAR} 
              alt="Jingle Balls Character" 
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-8 border-white shadow-2xl"
            />
          </div>

          {/* Text Content */}
          <h1 className="font-christmas text-6xl md:text-8xl text-white font-bold drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]">
            Jingle Balls
          </h1>
          <p className="font-sans text-2xl md:text-3xl text-gold font-black mt-4 mb-8 drop-shadow-md tracking-wider">
            $JBALLS
          </p>

          {/* Countdown Timer */}
          <div className="mb-8">
             <p className="font-christmas text-white text-2xl mb-4 drop-shadow-md">Countdown to Christmas</p>
             <div className="flex flex-wrap justify-center">
               <TimeUnit value={timeLeft.days} label="Days" />
               <TimeUnit value={timeLeft.hours} label="Hours" />
               <TimeUnit value={timeLeft.minutes} label="Mins" />
               <TimeUnit value={timeLeft.seconds} label="Secs" />
             </div>
          </div>
      </div>
      
      {/* Marquee/Ribbon */}
      <div className="bg-christmas-green py-3 overflow-hidden border-y-4 border-gold mt-4">
        <div className="whitespace-nowrap animate-[marquee_10s_linear_infinite] font-christmas text-2xl text-white font-bold">
           🎄 MERRY CHRISTMAS 🎄 BUY $JBALLS 🎅 HO HO HO ❄️ TO THE MOON 🚀 SACK OF GAINS 🎁 🎄 MERRY CHRISTMAS 🎄 BUY $JBALLS 🎅 HO HO HO ❄️ TO THE MOON 🚀
        </div>
      </div>
    </section>
  );
};

export default Hero;