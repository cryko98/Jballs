import React from 'react';

const memeImages = [
  "https://pbs.twimg.com/media/G7bnDxyWoAA1r9M?format=png&name=900x900",
  "https://pbs.twimg.com/media/G7bnElZWkAA5Wl-?format=jpg&name=large",
  "https://pbs.twimg.com/media/G7bnG8qWIAAwEeb?format=jpg&name=medium"
];

const Memes: React.FC = () => {
  return (
    <section id="memes" className="py-16 px-4 relative z-10 bg-black/20 backdrop-blur-sm mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-christmas text-5xl md:text-6xl text-white mb-12 drop-shadow-md">
          Hall of Balls
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memeImages.map((src, index) => (
            <div key={index} className="group relative aspect-square bg-white rounded-xl overflow-hidden shadow-2xl border-4 border-white rotate-0 md:even:rotate-2 md:odd:-rotate-2 hover:rotate-0 transition-all duration-300">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 font-bold text-xl">
                 <img 
                   src={src} 
                   alt={`Jingle Balls Meme ${index + 1}`}
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                 />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memes;