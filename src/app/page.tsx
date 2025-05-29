"use client";

import { useEffect, useState } from "react";

const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return displayText;
};

export default function ComingSoon() {
  const brandName = useTypewriter("balsan AI", 70);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-900 dark:text-white font-thin relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 rounded-full blur-3xl animate-pulse opacity-30"></div>
        <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-full blur-3xl animate-spin-slow opacity-20"></div>
        <div className="absolute inset-0 bg-[url('/ai-network.png')] bg-cover bg-center opacity-10 animate-pulse-slow"></div>
      </div>
      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-thin mb-6 animate-fade-in-down">
          {brandName}
        </h1>
        <p className="text-xl md:text-2xl mb-2 animate-fade-in-up delay-150 font-thin">
          Intelligence. Corporate Grade.
        </p>
        <p className="text-lg md:text-xl mt-2 animate-fade-in delay-300 font-thin">
          Coming Soon.
        </p>
      </div>
    </div>
  );
}
