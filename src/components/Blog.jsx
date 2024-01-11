// Blog.js

import React from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Discover the Latest Fashion Trends",
      content:
        "Explore the hottest fashion trends of the season! From runway-inspired looks to everyday chic, discover the styles that will elevate your wardrobe. Whether you're into casual wear or statement pieces, our guide has you covered. Stay ahead of the curve with Mshop!",
      date: "March 1, 2023",
      image:
        "https://images.pexels.com/photos/7679685/pexels-photo-7679685.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Discover the Latest Trends: Top Designs for the Season",
      content:
        "Uncover the latest fashion trends with our curated collection of top designs for the season. From runway-inspired looks to everyday elegance, this blog post showcases must-have pieces that will redefine your style. Dive into the world of fashion and explore the season's hottest designs. Stay ahead of the curve and elevate your wardrobe to new heights!",
      date: "March 10, 2023",
      image:
        "https://images.pexels.com/photos/6348047/pexels-photo-6348047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "How to Style Denim for Any Occasion",
      content:
        "Denim is a wardrobe staple, but styling it for different occasions can be a challenge. Fear not! Our style experts share tips on how to rock denim for casual outings, work, and even formal events. Unlock the versatility of denim and showcase your fashion flair!",
      date: "February 5, 2023",
      image:
        "https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "The Art of Mixing Prints: A Guide for Fashionistas",
      content:
        "Ready to take your fashion game to the next level? Learn the art of mixing prints like a pro! Our style guide breaks down the dos and don'ts, helping you create bold and unique looks. Embrace patterns, colors, and express your individuality through fearless print mixing.",
      date: "January 20, 2023",
      image:
        "https://images.pexels.com/photos/14177260/pexels-photo-14177260.png?auto=compress&cs=tinysrgb&w=600",
    },
    // Add more blog posts as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Mshop Blog</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover object-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{post.date}</p>
                <p className="text-gray-700">{post.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
