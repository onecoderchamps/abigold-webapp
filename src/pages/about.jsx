import Image from "next/image";
import { Montserrat } from "next/font/google";
import Headers from "./component/header";
import Footers from "./component/footer";
import coin2 from "/src/pages/image/plaza.png";
import meting from "/src/pages/image/visi.png";
import kepercayaan from "/src/pages/image/misi.png";
import kepercayaan2 from "/src/pages/image/pelayanan1.png";

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

const About = () => {
  return (
    <div className={montserrat.className}>
      <Headers />
      {/* tentang kami */}
      <section className="w-full h-auto bg-white p-4">
        <div className="flex flex-col md:flex-row items-center px-6">
          <div className="flex justify-center md:w-1/2 pr-1">
            <Image
              src={coin2}
              alt="gambar"
              className=" w-full h-auto object-cover"
            />
          </div>

          {/* Konten Teks pertama */}
          <div className="md:w-1/2 flex flex-col justify-center items-center p-10">
            <div className="text-xl font-extralight mb-4 text-center pb-[36px]">
              TENTANG KAMI
            </div>
            <div className=" text-gray-600 mb-6 text-justify font-light w- leading-loose text-sm">
              Selamat datang di PT Aurum Berkah Indonesia (ABI) – Mitra
              tepercaya Anda dalam perdagangan emas.
              <br />
              Kami adalah perusahaan yang berkomitmen untuk menyediakan layanan
              perdagangan emas yang andal, aman, dan efisien bagi investor dan
              pedagang di seluruh Indonesia. Apakah Anda ingin mendiversifikasi
              portofolio, melindungi kekayaan, atau memanfaatkan peluang pasar,
              kami menawarkan solusi yang dirancang khusus untuk memenuhi
              kebutuhan Anda dalam dunia perdagangan emas yang dinamis.
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center px-6 p-5">
          <div className="md:w-1/2 flex flex-col justify-center items-center p-10">
            <div className="text-xl font-light mb-4 text-center pb-[36px]">
              VISI
            </div>
            <div className="text-sm text-gray-600 mb-6 text-justify font-light w-full leading-loose">
              Menjadi pemimpin global terpercaya dalam perdagangan emas dengan
              memberdayakan investor melalui solusi inovatif, praktik
              transparan, serta keahlian pasar yang unggul untuk melindungi dan
              mengembangkan kekayaan mereka.
            </div>
          </div>
          <div className="flex justify-center md:w-1/2 px-4">
            <Image
              src={meting}
              alt="gambar"
              width={456}
              height={289}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6 py-5">
          {/* Konten Teks kedua */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10">
            <h1 className="text-xl font-light mb-4 text-center pb-[36px]">
              MISI
            </h1>
            <p className="text-gray-600 mb-6 text-justify text-sm ">
              Kami berkomitmen untuk menyediakan peluang perdagangan emas yang
              lancar, aman, dan mudah diakses bagi individu maupun institusi.
              Dengan memanfaatkan teknologi mutakhir, wawasan pasar yang
              mendalam, dan prinsip transparansi, kami bertujuan membangun
              kemitraan jangka panjang dengan klien. Kami hadir untuk membantu
              mereka membuat keputusan yang tepat dan mencapai tujuan keuangan
              dalam dunia perdagangan emas yang terus berkembang.
            </p>
          </div>
          <div className="flex justify-center md:w-1/2 px-4">
            <Image
              src={kepercayaan}
              alt="gambar"
              width={457}
              height={287}
              className="w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 px-6">
          {/* Gambar kedua */}
          <div className="flex justify-center md:w-1/2 pl-1 p-1">
            <Image
              src={kepercayaan2}
              alt="gambar"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Konten Teks kedua */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-centerp-10 p-10">
            <h1 className="text-xl font-light mb-4 text-center pb-[36px]">
              PELAYANAN KAMI
            </h1>
            {dataPleayanan.map((value) => (
              <div>
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
      <Footers />
    </div>
  );
};

export default About;
