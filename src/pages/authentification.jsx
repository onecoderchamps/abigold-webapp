
import { Montserrat } from "next/font/google";
import Headers from "./component/header";
import Footers from "./component/footer";
import Verifi from "/src/pages/component/verifikasi";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

const Verifikasi = () => {
  return (
    <div className={montserrat.className}>
      <Headers />
      {/* verifikasi */}
      <section className="w-full bg-mainColor-10">
        <Verifi />
      </section>
      <Footers />
    </div>
  );
};

export default Verifikasi;
