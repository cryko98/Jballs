import React from 'react';
import { Wallet, Coins, ArrowRightLeft, Rocket } from 'lucide-react';

const steps = [
  {
    icon: <Wallet size={40} />,
    title: "Create a Wallet",
    desc: "Download Phantom or Solflare. Make sure you don't lose your seed phrase, or Santa puts you on the naughty list."
  },
  {
    icon: <Coins size={40} />,
    title: "Get Some SOL",
    desc: "Buy SOL on an exchange (Binance, Coinbase, etc.) and send it to your new wallet address."
  },
  {
    icon: <ArrowRightLeft size={40} />,
    title: "Go to Pump.fun",
    desc: "Connect your wallet to pump.fun. Search for $JBALLS using the contract address to find the token page."
  },
  {
    icon: <Rocket size={40} />,
    title: "Swap for Balls",
    desc: "Swap your SOL for $JBALLS. Confirm the transaction and wait for your sack to fill up!"
  }
];

const HowToBuy: React.FC = () => {
  return (
    <section id="how-to-buy" className="py-16 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-christmas text-5xl md:text-6xl text-white text-center mb-12 drop-shadow-md">
          How To Grab Your Balls
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/90 p-6 rounded-2xl shadow-lg border-b-8 border-christmas-green flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-christmas-red text-white p-4 rounded-full mb-4 shadow-inner">
                {step.icon}
              </div>
              <h3 className="font-christmas text-2xl font-bold text-christmas-green mb-2">
                {index + 1}. {step.title}
              </h3>
              <p className="font-sans text-gray-700">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;