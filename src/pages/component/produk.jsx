import Image from "next/image";
import emas from "/src/pages/image/emas1g.png";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

export default function Home() {
  const products = [
    {
      id: 1,
      title: "ABI GOLD",
      price: "Rp. 1.200.000,00",
      image: "/produk.png",
    },
    {
      id: 2,
      title: "LM GOLD",
      price: "Rp. 1.200.000,00",
      image: "/produk.png",
    },
    {
      id: 3,
      title: "LM GOLD",
      price: "Rp. 1.200.000,00",
      image: "/produk.png",
    },
  ];

  return (
    <div className={montserrat.className}>
      <section className="w-full text-center py-10">
        <h2 className="text-2xl font-extralight mb-10">PRODUK TERBAIK KAMI</h2>
        <div className="flex gap-5 overflow-x-auto justify-center pb-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-xl shadow-md w-48 text-center"
            >
              <Image
                src={emas}
                alt={`Produk ${product.title}`}
                width={150}
                height={200}
                className="mx-auto"
              />
              <h3 className="font-bold text-sm mt-4">{product.title}</h3>
              <p className=" text-gray-600 mt-2 text-sm">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
