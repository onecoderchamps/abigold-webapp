export default function Home() {
    return (
      <div className="bg-pink-50 min-h-screen flex flex-col items-center py-12">
        {/* Container */}
  
        {/* Form Verifikasi */}
        <div className="w-full max-w-md mt-12 text-left">
          <h3 className="text-xl font-semibold mb-4">Verifikasi Produk</h3>
          <div className="flex">
            <input
              type="text"
              placeholder="Masukkan Kode Spesial"
              className="w-full flex-1 border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button className="bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4">
              Kirim
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  function InfoBlock({ position }) {
    const alignment = position === "left" ? "text-right" : "text-left";
    const arrowDirection = position === "left" ? "flex-row-reverse" : "flex-row";
    return (
      <div className={`flex ${arrowDirection} items-center gap-4`}>
        <div className={`flex-1 ${alignment}`}>
          <h3 className="text-lg font-semibold text-gray-700">Lorem Ipsum</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="w-4 h-4 bg-black rounded-full"></div>
      </div>
    );
  }
  