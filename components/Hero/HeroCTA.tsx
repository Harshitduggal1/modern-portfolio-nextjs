import HeroCircles from "./HeroCircles";

export default function HeroCTA() {
  return (
    <div className="relative z-40 mt-20 grid grid-cols-1 lg:grid-cols-2 xl:max-w-[1440px] xl:mx-auto">
      <div className="grid px-2 lg:pl-10 xl:pl-0 grid-cols-1 gap-6 lg:gap-4 items-center justify-center">
        
        {/* Badge */}
        <div className="h-12 w-80 mx-auto lg:mx-0 xl:h-16 xl:w-96 rounded-full bg-gradient-to-r from-purple-800 via-fuchsia-500 to-indigo-600 animate-pulse shadow-lg">
          <div className="text-sm lg:text-base xl:text-lg flex items-center justify-center w-full h-full text-white/80 bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 px-4 py-1 xl:px-6 xl:py-2 rounded-full">
            Senior Full-Stack Software Engineer
          </div>
        </div>

        {/* Availability */}
        <div className="h-12 w-80 mx-auto lg:mx-0 xl:h-16 xl:w-96 rounded-full bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent shadow-lg hover:shadow-2xl transition-all">
          <div className="text-sm lg:text-base xl:text-lg flex items-center justify-center w-full h-full text-white/80 bg-gradient-to-b from-white/40 to-[#2F2D2D]/20 px-4 py-1 xl:px-6 xl:py-2 rounded-full">
            Currently Available <span className="ml-2 text-green-500 animate-pulse">🟢</span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-[10vw] lg:text-[4vw] xl:text-[4.5vw] font-bold leading-[11vw] text-center lg:text-left lg:leading-[5vw] xl:leading-tight text-white bg-gradient-to-r from-[#F26FD8] to-[#A26BFF] bg-clip-text text-transparent animate-gradient-x">
          Exploring the hidden mysteries of tech
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-6 justify-center lg:justify-start">
          <a
            href="#"
            className="bg-white rounded-full px-6 py-3 xl:px-8 xl:py-4 text-black font-semibold hover:bg-gradient-to-r from-fuchsia-500 to-purple-600 hover:text-white transition-all xl:text-lg shadow-cta hover:shadow-2xl hover:scale-105 transform-gpu duration-200"
          >
            See Projects 🚀
          </a>
          <a
            href="#"
            className="bg-white rounded-full px-6 py-3 xl:px-8 xl:py-4 text-black font-semibold hover:bg-gradient-to-r from-blue-700 to-fuchsia-500 hover:text-white transition-all xl:text-lg shadow-cta hover:shadow-2xl hover:scale-105 transform-gpu duration-200"
          >
            ⭐️give star on github⭐️
          </a>
        </div>
      </div>

      {/* Animated Circles */}
      <HeroCircles />
    </div>
  );
}