import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"]
});

const FormPendaftaran = () => {
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
            id="nama"
            placeholder="Wajib Diisi"
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
              id="email"
              placeholder="Opsional"
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
              type="tel"
              id="nomorHp"
              placeholder="Wajib Diisi"
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
            type="text"
            id="domisili"
            placeholder="Opsional"
            className="text-sm w-full border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-pink-400 italic"
          />
        </div>

        {/* Tombol Submit */}
        <div class="flex justify-end">
          <button
            type="submit"
            className="text-sm w-[161px] h-[48px] bg-[var(--secondary-color)] text-white py-2 hover:bg-[var(--main-color)] font-semibold italic"
          >
            Daftar
          </button>
        </div>
      </form>
    </section></div>
  );
};

export default FormPendaftaran;
