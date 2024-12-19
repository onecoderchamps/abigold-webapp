import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

const AgentRegistration = ({ agent }) => {
  return (
    <div className={montserrat.className}>
      <section className="py-8">
        <h2 className="text-center text-2xl font-extralight mb-8">
          DAFTAR MENJADI AGEN KAMI
        </h2>
        <div className="flex justify-center gap-4 mb-4">
          {agent.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Agen"
              className="w-16 h-16 rounded-full"
            />
          ))}
        </div>
        <p className="text-center text-gray-700 font-semibold mb-4">
          {agent.name}
        </p>
        <p className="text-center text-gray-500 px-4 text-xs">{agent.comment}</p>
        <div className="mt-8 flex justify-center">
          <div className="bg-pink-100 p-6 rounded-lg text-center w-full max-w-lg">
            <p className="mb-4">
              “Mulai perjalanan sukses Anda hari ini! <br /> Klik di sini untuk
              mendaftar dan jadilah bagian dari keluarga ABI.”
            </p>
            <button
              onClick={() => (window.location.href = "/agen")}
              className="text-sm w-[161px] h-[48px] bg-[var(--secondary-color)] text-white py-2 hover:bg-[var(--main-color)] font-semibold italic"
            >
              Daftar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentRegistration;
