import React from "react";
import { darklogo,  payment } from "../assets";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaHome,
  FaWhatsapp,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-8 px-4 sm:py-10 sm:px-8 md:py-12 lg:py-16 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-5 sm:col-span-1">
          <img className="w-32" src={darklogo} alt="logo" />
          <p className="text-white text-sm tracking-wide">@Mazeed.com</p>
          <img className="w-48 sm:w-56" src={payment} alt="payment" />
          <div className="flex gap-5 text-lg text-gray-500">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaLinkedin className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            <FaWhatsapp className="hover:text-white duration-300 cursor-pointer" />
            <FaHome className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div className="sm:col-span-1">
          <h2 className="text-2xl text-white font-semibold mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Rayachoty, AP</p>
            <p>Mobile: 7671824941</p>
            <p>Phone: 00968 24578</p>
            <p>E-mail: mazeedkmk@gmail.com</p>
          </div>
        </div>
        <div className="sm:col-span-1">
          <h2 className="text-2xl text-white font-semibold mb-4">Profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{" "}
              My Account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>{" "}
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>{" "}
              Order Tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>{" "}
              Help & Support
            </p>
          </div>
        </div>
        <div className="sm:col-span-1">
          <div className="flex flex-col justify-center">
            <input
              className="bg-transparent border px-4 py-2 text-sm mb-2 sm:mb-0"
              placeholder="Your Email"
              type="text"
            />
            <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
              Mail Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;






// previous code

// import { logo, payment } from "../assets";
// import {
//   FaInstagram,
//   FaGithub,
//   FaLinkedin,
//   FaHome,
//   FaWhatsapp,
// } from "react-icons/fa";
// import { MdLocationOn } from "react-icons/md";
// import { BsPersonFill, BsPaypal } from "react-icons/bs";



// const Footer = () => {
//     return (
//       <div className="bg-black text-[#949494] py-20 font-titleFont px-20 ">
//         <div className="max-w-screem-xl mx-auto grid grid-cols-4">
//           <div className="flex flex-col gap-7">
//             <img className="w-32" src={logo} alt="logo" />
//             <p className="text-white text-sm tracking-wide">@Mazeed.com</p>
//             <img className=" w-56" src={payment} />
//             <div className="flex gap-5 text-lg text-gray-500">
//               <FaGithub className="hover:text-white duration-300 cursor-pointer" />
//               <FaLinkedin className="hover:text-white duration-300 cursor-pointer" />
//               <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
//               <FaWhatsapp className="hover:text-white duration-300 cursor-pointer" />
//               <FaHome className="hover:text-white duration-300 cursor-pointer" />
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl text-white font-semibold mb-4">
//               Locate Us
//             </h2>
//             <div className="text-base flex flex-col gap-2">
//               <p>Rayachoty,AP</p>
//               <p>Mobile : 7671824941</p>
//               <p>phone : 00968 24578</p>
//               <p>e-mail :mazeedkmk@gmail.com </p>
//             </div>
//           </div>
//           <div>
//             <h2 className="text-2xl text-white font-semibold mb-4">Profile</h2>
//             <div className="flex flex-col gap-2 text-base">
//               <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
//                 {" "}
//                 <span>
//                   <BsPersonFill />
//                 </span>
//                 my account
//               </p>
//               <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
//                 {" "}
//                 <span>
//                   <BsPaypal />
//                 </span>
//                 checkout
//               </p>
//               <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
//                 {" "}
//                 <span>
//                   <FaHome />
//                 </span>
//                 order tracking
//               </p>
//               <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
//                 {" "}
//                 <span>
//                   <MdLocationOn />
//                 </span>
//                 help & support
//               </p>
//             </div>
//                 </div>
//                 <div className="flex flex-col justify-center ">
//                     <input className="bg-transparent border px-4 py-2 text-sm " placeholder="mail" type="text"/>
//                     <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">mail us</button>
//                 </div>
//         </div>
//       </div>
//     );
// };

// export default Footer;