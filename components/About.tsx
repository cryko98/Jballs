import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 max-w-4xl mx-auto text-center relative z-10">
      <div className="bg-white text-gray-800 p-8 md:p-12 rounded-[3rem] shadow-2xl border-8 border-dashed border-christmas-green transform -rotate-1">
        <h2 className="font-christmas text-5xl md:text-6xl text-christmas-red mb-8 font-bold">
          What is Jingle Balls?
        </h2>
        
        <div className="space-y-6 text-lg md:text-xl font-sans font-medium leading-relaxed">
          <p>
            Do your balls hang low? Do they wobble to and fro? Not these ones! 
            <span className="font-bold text-christmas-red"> $JBALLS </span> 
            are the firmest, most festive sacks on the Solana blockchain.
          </p>
          <p>
            We are tired of boring dogs and cats. It's Christmas, for crypto's sake! 
            Santa needs a new pair of ornaments, and we are here to deliver the package.
            <br/><br/>
            Founded on the principles of holiday cheer and absolute degen behavior, 
            Jingle Balls is the community token that keeps on giving. Whether you've been 
            naughty or nice, grab a bag of $JBALLS and hold it tight through the winter.
          </p>
          <p className="italic text-gray-500 mt-4">
            "It's cold outside, but my portfolio is heating up." - Santa Claus (probably)
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;