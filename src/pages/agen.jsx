import Image from "next/image";
import { Montserrat } from "next/font/google";
import Headers from "./component/header";
import Footers from "./component/footer";
import agen from "/src/pages/image/agen.png";
import { useState } from "react";
import FormPendaftaran from "/src/pages/component/formPendaftaran";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

const Agen = () => {
  
  // State untuk form data
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   domicile: "",
  // });

  // Handler untuk input perubahan
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  

  return (
    <div className={montserrat.className}>
      <Headers />
      {/* agen */}
      <section className="w-full h-auto bg-white">
        <div className="flex flex-col md:flex-row w-full">
          {/* Gambar Div */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={agen}
              alt="gambar agen"
              width={627}
              height={470}
              className="object-cover w-full md:w-auto h-auto"
            />
          </div>

          {/* Deskripsi Agen */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-24">
            <h3 className="text-2xl font-extralight mb-4">Agen</h3>
            <p className="text-gray-600 mb-6 text-xs">
              Ber gabunglah bersama kami di PT Aurum Berkah Indonesia dan jadilah
              bagian dari mitra terpercaya dalam perdagangan emas.
            </p>
          </div>
        </div>
      </section>

      {/* Formulir Pendaftaran */}
      <section className="w-full h-[599px] bg-mainColor-10">
        <div style={{ width: "100%", margin: "0 auto", paddingTop: "50px" }}>
          <FormPendaftaran/>
        </div>
      </section>

      <Footers />
    </div>
  );
};

export default Agen;
