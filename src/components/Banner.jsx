import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61CiqVTRBEL._SX3000_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71j8damPo5L._SX3000_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/717RUPA1bDL._SX3000_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Ie3JXGfVL._SX3000_.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-auto">
      <div className="w-full md:w-screen h-[450px] lg:h-[650px] relative overflow-hidden">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          className="w-full h-full flex transition-transform duration-1000"
        >
          {data.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`image${index}`}
              loading="priority"
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <div className="absolute left-0 right-0 mx-auto flex items-center justify-center gap-8 bottom-4 md:bottom-8 lg:bottom-16">
          <div
            onClick={prevSlide}
            className="w-10 h-10 md:w-14 md:h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-10 h-10 md:w-14 md:h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

// import React, { useState } from "react";
// import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

// const Banner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const data = [
//     "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61CiqVTRBEL._SX3000_.jpg",
//     "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71j8damPo5L._SX3000_.jpg",
//     "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/717RUPA1bDL._SX3000_.jpg",
//     "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71Ie3JXGfVL._SX3000_.jpg",
//   ];

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="w-full h-auto">
//       <div className="w-screen h-[650px] relative">
//         <div
//           style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
//           className="w-[400vw] h-full flex transition-transform duration-1000"
//         >
//           {data.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt={`image${index}`}
//               loading="priority"
//               className="w-screen h-[650px] object-cover"
//             />
//           ))}
//         </div>
//         <div className="absolute left-0 right-0 mx-auto flex items-center justify-center gap-8 bottom-44">
//           <div
//             onClick={prevSlide}
//             className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
//           >
//             <HiArrowLeft />
//           </div>
//           <div
//             onClick={nextSlide}
//             className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
//           >
//             <HiArrowRight />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
