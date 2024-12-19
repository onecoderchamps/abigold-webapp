import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const FormPendaftaran = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "abigoldjaya",
    name: "",
    address: "",
    phone: "",
    latitude: 0,
    longitude: 0,
    is_active: true,
    is_verify: false,
    role: "agentRole",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler untuk pengiriman formulir
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.status === 201) {
        setMessage("Registration successful. Please login.");
      } else {
        alert(data.message)
      }
    } catch (error) {
      alert("error")
    }

  };

  return (
    <div className={montserrat.className}>
      <section className="bg-white max-w-2xl mx-auto mt-10 p-8 rounded-lg shadow-md">
        <h2 className="bg-[var(--secondary-color)] text-white text-xl font-semibold py-3 px-5 rounded-t-lg -mt-8 -mx-8 mb-6 italic">
          Isi Formulir Pendaftaran
        </h2>
        <form className="flex flex-col gap-4">
          {/* Nama Lengkap */}
          <div>
            <label
              htmlFor="nama"
              className="block font-extralight mb-1 italic text-sm "
            >
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              className="text-sm w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-pink-400 italic"
              required
            />
          </div>

          {/* Email dan Nomor Hp */}
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block font-extralight mb-1 italic text-sm"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-sm w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-pink-400 italic"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="nomorHp"
                className="block font-extralight mb-1 italic text-sm"
              >
                Nomor Hp*
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="text-sm w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-pink-400 italic"
                required
              />
            </div>
          </div>

          {/* Domisili */}
          <div>
            <label
              htmlFor="domisili"
              className="block font-extralight mb-1 italic text-sm"
            >
              Domisili
            </label>
            <input
              name="address"
              id="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
              className="text-sm w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-pink-400 italic"
            />
          </div>

          {/* Tombol Submit */}
          <div class="flex justify-end">
            <button
              onClick={handleSubmit}
              className="text-sm w-[161px] h-[48px] bg-[var(--secondary-color)] text-white py-2 hover:bg-[var(--main-color)] font-semibold italic"
            >
              Daftar
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default FormPendaftaran;
