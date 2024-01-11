// Reviews.js

import React from "react";

const Review = () => {
  const customerReviews = [
    {
      id: 1,
      name: "Mazeed Khan",
      date: "March 10, 2023",
      rating: 5,
      review:
        "I love shopping at Mshop! The quality of their products is excellent, and the customer service is top-notch. Highly recommended!",
    },
    {
      id: 2,
      name: "Anjali",
      date: "February 25, 2023",
      rating: 4,
      review:
        "Great variety of products and fast shipping. The only reason I gave it 4 stars is that I wish they had more discounts.",
    },
    {
      id: 3,
      name: "Vijay Singh",
      date: "February 15, 2023",
      rating: 5,
      review:
        "Mshop is my go-to for trendy fashion. The website is easy to navigate, and they always have the latest styles. Love it!",
    },
    {
      id: 4,
      name: "Emma Wilson",
      date: "February 5, 2023",
      rating: 3,
      review:
        "Decent experience, but some items were out of stock. The customer support helped, but it was a bit frustrating.",
    },
    {
      id: 5,
      name: "David Thompson",
      date: "January 20, 2023",
      rating: 5,
      review:
        "Fantastic online shopping experience! The clothes are stylish, and I received my order faster than expected. Will shop again!",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Customer Reviews
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg overflow-hidden shadow-md p-6 transition-transform transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl font-bold text-yellow-500">
                  {review.rating}
                </span>
                <span className="ml-2 text-gray-600">/5</span>
              </div>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">{review.name}</p>
                <p className="text-gray-600">{review.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
