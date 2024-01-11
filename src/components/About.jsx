// AboutPage.js

import React from "react";

const About = () => {
  return (
    <div className="bg-blue-50 text-blue-900 min-h-screen">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold mb-4">Mshop</h1>

            <p className="text-lg mb-4">
              Welcome to Mshop, where style and simplicity blend seamlessly. 🌊
              Our commitment is to offer you a carefully curated collection that
              captures the essence of timeless elegance and modern comfort.
            </p>

            <p className="text-lg mb-4">
              At Mshop, we believe in the beauty of simplicity. Our collection
              is a reflection of this belief, featuring pieces that are not just
              fashionable but also versatile, allowing you to express your
              unique style effortlessly.
            </p>

            <p className="text-lg mb-4">
              Immerse yourself in the serenity of our white and blue theme. From
              crisp whites to soothing blues, Mshop invites you to explore a
              world of calm and sophisticated fashion that complements every
              aspect of your lifestyle.
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://images.pexels.com/photos/7679663/pexels-photo-7679663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Add your image path
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
