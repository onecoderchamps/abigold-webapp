import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
  });

  const [productData, setProductData] = useState(null); // State untuk menyimpan data produk
  const [isVerified, setIsVerified] = useState(false); // State untuk menentukan apakah produk telah diverifikasi
  const [errorMessage, setErrorMessage] = useState(""); // State untuk pesan error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/goldVerifications/${formData.name}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      if (response.ok) {
        
        setErrorMessage(""); // Reset error message jika berhasil
        if (data.is_verify === 1) {
          setErrorMessage("Serial Number Terdaftar di Sistem Kami");
          setProductData(data); // Simpan data produk jika berhasil
          setIsVerified(true);
        }
        if (data.is_verify === 0) {
          setProductData(null);
          setIsVerified(false);
          setErrorMessage("Serial Number Belum Terverifikasi di Sistem Kami");
        }
      } else {
        setProductData(null);
        setIsVerified(false);
        if (data.is_verify === 0) {
          setErrorMessage("Serial Number Belum Terverifikasi di Sistem Kami");
        }
        setErrorMessage("Serial Number Tidak Terdaftar di Sistem Kami");
      }
    } catch (error) {
      setProductData(null);
      setIsVerified(false);
      setErrorMessage("Serial Number Tidak Terdaftar di Sistem Kami");
    }
  };

  return (
    <div className="bg-pink-50 min-h-screen flex flex-col items-center w-full justify-center pb-10">
      <div className="w-full max-w-md text-left">
        <h3 className="text-xl font-semibold mb-4">Verifikasi Produk</h3>
        <div className="flex">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan Serial Number"
            required
            className="w-full flex-1 border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button
            onClick={handleSubmit}
            className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4"
          >
            Kirim
          </button>
        </div>
      </div>

      <div className="mt-4 text-red-600 font-semibold">{errorMessage}</div>

      {isVerified && productData && (
        <div className="w-full max-w-md mt-8 bg-white border border-gray-300 p-4 shadow-md">
          <h4 className="text-lg font-semibold mb-4">Detail Produk</h4>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="border px-4 py-2">Keterangan</th>
                <th className="border px-4 py-2">Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Serial Number</td>
                <td className="border px-4 py-2">{productData.sn}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Batch</td>
                <td className="border px-4 py-2">{productData.batch}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Waktu Pembelian</td>
                <td className="border px-4 py-2">{productData.date}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Harga Beli</td>
                <td className="border px-4 py-2">
                  {parseFloat(productData.price) + parseFloat(productData.hpp)}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Harga BuyBack</td>
                <td className="border px-4 py-2">
                  {parseFloat(productData.price) - 250}
                </td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Notes</td>
                <td className="border px-4 py-2">{productData.notes}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
