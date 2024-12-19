import Image from "next/image";
import { Montserrat } from "next/font/google";
import Headers from "./component/header";
import Footers from "./component/footer";
import logo from "/src/pages/image/abi.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

const Kontak = () => {
  return (
    <div className={montserrat.className}>
      <Headers />
      {/* bantuan */}
      <section className="w-full h-[600px] bg-white flex flex-col md:flex-row justify-center items-center">
        <div className="text-center">
          <h3 className="font-extralight text-lg mb-4 pt-6 pb-6">BUTUH BANTUAN ?</h3>
          <div className="pb-5 text-sm text-left"><p>Kami selalu senang mendengar dari Anda! Jangan ragu untuk <br /> menghubungi kami jika ada pertanyaan, kebutuhan informasi, atau <br /> bahkan sekadar ingin berdiskusi. Tim kami siap membantu dengan <br /> sepenuh hati.</p></div>
          <ul className="space-y-2 text-sm text-left">
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
          <p className="text-sm leading-relaxed text-left">
            <span className="block font-semibold">
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
        <div className="flex justify-center md:w-1/2 mt-6 md:mt-0 ">
          <Image
            src={logo}
            alt="Logo"
            width={477}
            height={290}
            className="object-cover"
          />
        </div>
      </section>

      <Footers />
    </div>
  );
};

export default Kontak;
