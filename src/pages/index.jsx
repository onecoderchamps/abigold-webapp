import Image from "next/image";
import { Montserrat } from "next/font/google";
import Headers from "./component/header";
import Footers from "./component/footer";
import im2 from "/src/pages/image/im2.png";
import coin from "/src/pages/image/coin.png";
import coin2 from "/src/pages/image/coin2.png";
import meting from "/src/pages/image/meting.png";
import kepercayaan from "/src/pages/image/kepercayaan.png";
import kepercayaan2 from "/src/pages/image/kepercayaan2.png";
import pelayanan from "/src/pages/image/pelayanan.png";
import BarChart from "/src/pages/component/linechart";
import Emas from "/src/pages/component/produk";
import Testimonials from "./component/testimonial";
import AgentRegistration from "./component/agend";
import kegiatan from "/src/pages/image/Rectangle 19.png";
import kegiatan2 from "/src/pages/image/Rectangle 20.png";
import kegiatan3 from "/src/pages/image/Rectangle 21.png";
import kegiatan4 from "/src/pages/image/Rectangle 22.png";
import kegiatan5 from "/src/pages/image/Rectangle 23.png";

///mockup
import testimonialsData from "./dummy/testimonial.json";
import FloatingWhatsApp from "./component/floatingWa";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

const dataPleayanan = [
  {
    title: "Perdagangan Emas Batangan",
    desc: "Beli dan jual emas batangan fisik dengan mudah. Kami menyediakan harga kompetitif dan solusi penyimpanan aman.",
  },
  {
    title: "Analisis & Wawasan Pasar",
    desc: "Tetap terinformasi dengan analisis, wawasan, dan laporan pasar dari ahli kami untuk mendukung keputusan perdagangan Anda.",
  },
  {
    title: "Solusi Investasi Emas",
    desc: "Baik Anda pemula atau investor berpengalaman, kami menawarkan strategi investasi yang dipersonalisasi untuk mencapai tujuan keuangan Anda.",
  },
];

const Home = () => {
  return (
    <div className={montserrat.className}>
      <Headers />
      {/* banner */}
      <section className="w-full h-auto bg-mainColor-10 flex flex-col md:flex-row">
        <div className="flex w-full flex-col md:flex-row">
          {/* Gambar Div */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={im2}
              alt="gambar"
              width={250}
              height={600}
              className="w-full h-auto"
            />
            <Image
              src={coin}
              alt="coin"
              width={379}
              height={600}
              className="w-full h-auto"
            />
          </div>

          {/* Konten Teks Div */}
          <div className=" w-full md:w-1/2 flex flex-col justify-center items-center text-center p-5">
            <h1 className="text-3xl font-semibold mb-4">
              PT. Aurum Berkah Indonesia <br /> (ABI) Website
            </h1>
            <p className="text-gray-600 mb-6">
              Mitra terpercaya anda dalam perdagangan emas.
            </p>
            <button onClick={()=> window.location.href = "/about"} className=" bg-[#C77C87] text-white py-2 px-6 rounded-md hover:bg-[#b06a75]">
              Tentang Kami
            </button>
          </div>
        </div>
      </section>

      {/* mengapa harus abigold */}
      <section className="w-full bg-white max-w-screen-lg mx-auto align-middle pb-10">
        <div className="p-10 text-center">
          <h2 className="text-xl font-extralight">MENGAPA HARUS ABI GOLD?</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center px-6">
          {/* Gambar pertama */}
          <div className="flex justify-center md:w-1/2 pr-1">
            <Image
              src={coin2}
              alt="gambar"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Konten Teks pertama */}
          <div className="md:w-1/2 flex flex-col justify-center items-center p-10">
            <div className="text-xl font-light mb-4 text-center pb-[36px]">
              INOVASI BARU DALAM <br /> PERDAGANGAN
            </div>
            <div className="text-base text-gray-600 mb-6 text-justify font-light w-full leading-loose">
              Kami berkomitmen menghadirkan ide segar dan pendekatan berpusat
              pada pelanggan, dengan fokus pada pengalaman perdagangan emas yang
              modern, efisien, dan lancar.
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center px-6">
          {/* Gambar pertama */}
          {/* Konten Teks pertama */}
          <div className="md:w-1/2 flex flex-col justify-center items-center p-10">
            <div className="text-xl font-light mb-4 text-center pb-[36px]">
              KEAHLIAN DAN PENGALAMAN
            </div>
            <div className="text-base text-gray-600 mb-6 text-justify font-light w-full leading-loose">
              Dengan pengalaman luas di pasar emas, kami siap membantu Anda
              memahami peluang dan menghadapi tantangan dalam perdagangan emas.
            </div>
          </div>
          <div className="flex justify-center md:w-1/2 pl-1 p-2 pb-6">
            <Image
              src={meting}
              alt="gambar"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          {/* Gambar kedua */}
          <div className="flex justify-center md:w-1/2 pr-1">
            <Image
              src={kepercayaan}
              alt="gambar"
              width={455}
              height={289}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Konten Teks kedua */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10">
            <h1 className="text-xl font-light mb-4 text-center pb-[36px]">
              TRANSPARANSI DAN KEPERCAYAAN
            </h1>
            <p className="text-gray-600 mb-6 text-justify ">
              Kami berkomitmen membangun hubungan yang kuat dan transparan
              dengan klien, memberikan saran jujur, harga jelas, dan integritas
              tinggi dalam setiap transaksi.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          {/* Konten Teks kedua */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center p-10">
            <h1 className="text-xl font-light mb-4 text-center pb-[36px]">
              TRANSAKSI AMAN
            </h1>
            <p className="text-gray-600 mb-6 text-justify">
              Aset Anda aman bersama kami. Kami menggunakan teknologi mutakhir
              dan praktik terbaik untuk memastikan produk yang kami jual adalah
              Dinar 24 karat dengan kemurnian standar internasional LBMA (999,9)
              dan pengecekan XRF di atas 99,95%.
            </p>
          </div>
          {/* Gambar kedua */}
          <div className="flex justify-center md:w-1/2 pl-1 p-2 pb-6">
            <Image
              src={kepercayaan2}
              alt="gambar"
              width={455}
              height={288}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          {/* Gambar kedua */}
          <div className="flex justify-center md:w-1/2 pr-1">
            <Image
              src={pelayanan}
              alt="gambar"
              width={455}
              height={456}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Konten Teks kedua */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-centerp-10 p-10">
            <h1 className="text-xl font-light mb-4 text-center pb-[36px]">
              PELAYANAN KAMI
            </h1>
            {dataPleayanan.map((value, index) => (
              <div key={index}>
                <p className="text-gray-600 mb-2 text-justify text-lg font-extralight">
                  {value.title}
                </p>
                <p className="text-gray-600 mb-6 text-justify  text-sm font-extralight">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* grafik harga */}
      <section className="w-full h-auto bg-mainColor-10 p-10 ">
        <div style={{ width: "70%", margin: "0 auto", paddingTop: "50px" }}>
          <BarChart />
        </div>
      </section>
      {/* product */}
      <section className="w-full bg-white items-center">
        <Emas />
      </section>

      {/* kegiatan kami */}
      <section className="w-full h-auto bg-mainColor-10">
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-center text-2xl font-extralight mb-8 text-gray-700">
            GALERI
            </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            <div className="overflow-hidden rounded-lg shadow-lg ">
              <Image
                src={kegiatan}
                alt="gambar"
                className="w-full h-64 object-cover "
              />
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={kegiatan2}
                alt="gambar"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={kegiatan3}
                alt="gambar"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={kegiatan4}
                alt="gambar"
                className="w-full h-64 object-cover"
              />
            </div>

            <div className="overflow-hidden rounded-lg shadow-lg">
              <Image
                src={kegiatan5}
                alt="gambar"
                className="w-full h-64 object-cover "
              />
            </div>
          </div>
        </div>
      </section>
      {/* testimonial */}
      <section className="w-full h-auto bg-white">
        <div className="container mx-auto px-4">
          <Testimonials testimonials={testimonialsData.testimonials} />
          <AgentRegistration agent={testimonialsData.agent} />
        </div>
      </section>

      <Footers />
      <FloatingWhatsApp />
    </div>
  );
};

export default Home;
