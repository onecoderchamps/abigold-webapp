import Image from "next/image";
import { Montserrat } from "next/font/google";
import Headers from "./component/header";
import Footers from "./component/footer";
import Emas from "/src/pages/component/produk";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

const Produk = () => {
  return (
    <div className={montserrat.className}>
      
        <Headers/>
        {/* full gambar */}
        <section className="w-full h-[600px] bg-black"></section>
        {/* koleksi */}
      <section className="w-full h-[581px] bg-mainColor-10">
          <Emas />
      </section>
        <Footers/>
    </div>
  );
}

export default Produk