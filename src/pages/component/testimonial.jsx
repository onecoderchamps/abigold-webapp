import React from "react";
import { Montserrat } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

const testimonials = [
  {
    "name": "Jerome Bell",
    "date": "13/12/2024",
    "rating": 5,
    "comment": "Saya sangat puas dengan layanan PT Aurum Berkah Indonesia. Proses pembelian emasnya sangat cepat dan aman. Saya merasa tenang bertransaksi di sini.",
    "image": "https://twillink.com/_next/image?url=http%3A%2F%2Ftwillink-main-service-158474999909.asia-southeast2.run.app%2Fapi%2Fv1%2FAttachment%2FDownload%2F673e9ea3f00aab992927be8e&w=3840&q=75"
  },
  {
    "name": "Jerome Bell",
    "date": "13/12/2024",
    "rating": 5,
    "comment": "Tim ABI sangat membantu dan profesional. Mereka menjelaskan semuanya dengan jelas, dan saya merasa dihargai sebagai pelanggan. Terima kasih atas pengalaman luar biasa ini!",
    "image": "https://twillink.com/_next/image?url=http%3A%2F%2Ftwillink-main-service-158474999909.asia-southeast2.run.app%2Fapi%2Fv1%2FAttachment%2FDownload%2F673e9ea3f00aab992927be8e&w=3840&q=75"
  },
  {
    "name": "Robert Fox",
    "date": "13/12/2024",
    "rating": 5,
    "comment": "Sebagai pelanggan baru, saya merasa puas dengan kemudahan dan transparansi yang ditawarkan. ABI benar-benar menjadi solusi terbaik untuk kebutuhan investasi emas saya.",
    "image": "https://twillink.com/_next/image?url=http%3A%2F%2Ftwillink-main-service-158474999909.asia-southeast2.run.app%2Fapi%2Fv1%2FAttachment%2FDownload%2F673e9ea3f00aab992927be8e&w=3840&q=75"
  }
]

const Testimonials = () => {
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
