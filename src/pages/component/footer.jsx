import Image from "next/image";
import { Montserrat } from "next/font/google";
import logo from "/src/pages/image/logo.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

const Footers = () => {
  return (
    <div className={montserrat.className}>
      <div className="w-full bg-mainColor  bottom-0 text-white text-sm h-365">
        <div className="container mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="">
            <Image src={logo} alt="Logo" width={120} height={120} />
            <p className=" leading-relaxed mt-4 text-sm">
              <span className="block font-extralight text-sm">
                <span className="inline-block mr-2">🔘</span>
                PT. Aurum Berkah Indonesia
              </span>
              The Plaza Office Tower, Level 7 #7058
              <br />
              Jl. MH Thamrin Kav. 28-39
              <br />
              Jakarta 10350 - Indonesia
            </p>
          </div>

          {/* Middle Section */}
          <div className="text-sm">
            <h3 className="font-semibold text-sm mb-4">Akses Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Produk
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kontak Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Verifikasi Produk
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="text-sm">
            <h3 className="font-semibold text-xm mb-4">Hubungi Kami</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="inline-block mr-2">📧</span>
                <a href="mailto:cs@abigold.co.id" className="hover:underline">
                  cs@abigold.co.id
                </a>
              </li>
              <li>
                <span className="inline-block mr-2">📞</span>
                <a href="tel:+622150955013" className="hover:underline">
                  +62(0)21 5095 5013
                </a>
              </li>
              <li>
                <span className="inline-block mr-2">📷</span>
                <a
                  href="https://instagram.com/abigold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @abigold
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/30 mt-8 pt-4 text-center text-sm p-10">
          &copy; PT. Aurum Berkah Indonesia 2024.
        </div>
      </div>
    </div>
  );
};

export default Footers;
