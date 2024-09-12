'use client';
import React from 'react';
import { Vortex } from '../ui/vortex';

export default function Newsletter() {
  return (
    <div className="relative mx-auto mt-20 h-[40rem] w-full overflow-hidden rounded-md lg:mt-40">
      <Vortex
        backgroundColor="#000000"
        className="flex h-full w-full flex-col items-center justify-center md:px-10"
      >
        <div className="flex flex-col items-center font-extrabold justify-center">
          <div className="flex h-full w-[80vw] flex-col rounded-[20px] border-[2px] border-[#BF23E5] bg-white/10 p-4 backdrop-blur-md lg:w-[40vw] lg:gap-4">
            <h2 className="text-center text-sm text-white lg:text-2xl">
              🌟 Join Our Weekly Newsletter! 🌟
            </h2>
            <p className="mx-auto mt-2 text-center text-[10px] text-white/60 lg:w-3/4 lg:text-[15px] lg:text-lg">
              🚀 Become a part of our thriving developer community! Receive actionable insights, cutting-edge startup ideas, innovative design principles, and productivity-enhancing tips delivered straight to your inbox. Lets embark on this journey together! 💡💪
            </p>
            <div className="relative mt-4 w-full">
              <form
                onSubmit={(e: { preventDefault: () => void; }) => {
                  e.preventDefault();
                }}
                className="mx-auto flex flex-col items-center justify-center gap-4 lg:w-[80%]"
              >
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="h-full w-full rounded-full border border-white/30 bg-white/10 px-4 py-2 text-center text-sm text-white placeholder-white/50 focus:border-white/50 focus:outline-none lg:text-lg"
                />
                <button
                  type="submit"
                  className="rounded-full bg-gradient-to-r from-[#FE6EFF] to-[#384DD5] px-4 py-2 text-sm font-extrabold text-white transition-opacity duration-200 hover:opacity-90 focus:outline-none lg:text-lg"
                >
                  ✨ Subscribe Now ✨
                </button>
              </form>
            </div>
          </div>
        </div>
      </Vortex>

      {/* Top shadow */}
      <div className="absolute left-0 right-0 top-0 h-2/4 bg-gradient-to-t from-transparent to-[#07070C]"></div>
      {/* Bottom shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-[#07070C] to-transparent"></div>
    </div>
  );
}