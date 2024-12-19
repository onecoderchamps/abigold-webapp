import React from "react";

const agent = {
  "name": "Albert Flores",
  "comment": "Menjadi agen PT Aurum Berkah Indonesia adalah keputusan terbaik saya. Prosesnya mudah, dan dukungan dari tim sangat luar biasa. Penghasilan saya terus meningkat, dan saya merasa aman berbisnis dengan ABI.",
  "images": [
    "https://twillink.com/_next/image?url=http%3A%2F%2Ftwillink-main-service-158474999909.asia-southeast2.run.app%2Fapi%2Fv1%2FAttachment%2FDownload%2F673e9ea3f00aab992927be8e&w=3840&q=75",
    "https://twillink.com/_next/image?url=http%3A%2F%2Ftwillink-main-service-158474999909.asia-southeast2.run.app%2Fapi%2Fv1%2FAttachment%2FDownload%2F673e9ea3f00aab992927be8e&w=3840&q=75",
    "https://twillink.com/_next/image?url=http%3A%2F%2Ftwillink-main-service-158474999909.asia-southeast2.run.app%2Fapi%2Fv1%2FAttachment%2FDownload%2F673e9ea3f00aab992927be8e&w=3840&q=75",
    "https://twillink.com/_next/image?url=http%3A%2F%2Ftwillink-main-service-158474999909.asia-southeast2.run.app%2Fapi%2Fv1%2FAttachment%2FDownload%2F673e9ea3f00aab992927be8e&w=3840&q=75",
    "https://twillink.com/_next/image?url=http%3A%2F%2Ftwillink-main-service-158474999909.asia-southeast2.run.app%2Fapi%2Fv1%2FAttachment%2FDownload%2F673e9ea3f00aab992927be8e&w=3840&q=75"
  ]
}

const AgentRegistration = () => {
  return (
    <div>
      <section className="py-8">
        <h2 className="text-center text-2xl font-extralight mb-8">
          DAFTAR MENJADI AGEN KAMI
        </h2>
        <div className="flex justify-center gap-4 mb-4">
          {agent.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Agen"
              className="w-16 h-16 rounded-full"
            />
          ))}
        </div>
        <p className="text-center text-gray-700 font-semibold mb-4">
          {agent.name}
        </p>
        <p className="text-center text-gray-500 px-4 text-xs">{agent.comment}</p>
        <div className="mt-8 flex justify-center">
          <div className="bg-pink-100 p-6 rounded-lg text-center w-full max-w-lg">
            <p className="mb-4">
              “Mulai perjalanan sukses Anda hari ini! <br /> Klik di sini untuk
              mendaftar dan jadilah bagian dari keluarga ABI.”
            </p>
            <button
              onClick={() => (window.location.href = "/agen")}
              className="text-sm w-[161px] h-[48px] bg-[var(--secondary-color)] text-white py-2 hover:bg-[var(--main-color)] font-semibold italic"
            >
              Daftar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentRegistration;
