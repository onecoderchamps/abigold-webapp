import React from "react";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

const Testimonials = ({ testimonials }) => {
  return (
    <div className={montserrat.className}>
    <section className="py-8">
      <h2 className="text-center text-2xl font-extralight mb-8">
        KATA MEREKA TENTANG EMAS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-lg text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <h3 className="font-semibold text-sm">{item.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{item.date}</p>
            <div className="flex justify-center mb-4 ">
              {"".repeat(item.rating)}
            </div>
            <p className="text-gray-700 text-xs">{item.comment}</p>
          </div>
        ))}
      </div>
    </section></div>
  );
};

export default Testimonials;
