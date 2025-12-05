import React from 'react';
import { CONTRACT_ADDRESS } from '../constants';

const Chart: React.FC = () => {
  // Using a trending pair or generic Solana page if CA isn't live on DexScreener yet
  // Once live, replace the src with `https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark`
  const chartUrl = `https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark&trades=0&info=0`;

  return (
    <section id="chart" className="py-16 px-4 relative z-10 pb-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-christmas text-5xl md:text-6xl text-white text-center mb-8 drop-shadow-md">
          Live Chart
        </h2>
        
        <div className="w-full h-[600px] bg-black/80 rounded-3xl overflow-hidden border-4 border-gold shadow-2xl relative">
            {/* If CA is placeholder, show a message, otherwise show iframe */}
            {CONTRACT_ADDRESS.includes('xxx') ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                    <p className="text-2xl font-christmas mb-4">🎅 Chart loading...</p>
                    <p className="text-lg opacity-70">Waiting for Santa to deploy liquidity.</p>
                     {/* Show a generic chart for visual reference in the meantime */}
                    <iframe 
                        src="https://dexscreener.com/solana/58f7r35f6s6p9s8r59e8s5?embed=1&theme=dark&trades=0&info=0"
                        className="w-full h-full absolute inset-0 opacity-20 pointer-events-none"
                    ></iframe>
                </div>
            ) : (
                <iframe 
                    src={chartUrl}
                    className="w-full h-full border-0"
                    title="DexScreener Chart"
                ></iframe>
            )}
        </div>
      </div>
    </section>
  );
};

export default Chart;