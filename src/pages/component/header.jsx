import Image from "next/image";
import { Montserrat } from "next/font/google";
import logo from "/src/pages/image/logo.png";
import Link from "next/link";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify the weights you want
  style: ["normal", "italic"], // Specify the styles you want (optional)
});

const Headers = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={montserrat.className}>
      <div className="flex w-full h-[89px] bg-mainColor sticky px-[20px] sm:px-[50px] justify-between items-center">
        {/* Logo */}
        <div className="flex">
          <Image
            src={logo}
            alt="Logo"
            width={170}
            height={170}
            className="w-auto h-auto"
          />
        </div>

        {/* Hamburger Menu Button (Visible on mobile) */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center justify-around space-x-2.5 text-white p-2">
          <Link href="/">
            <div className="pr-5">Beranda</div>
          </Link>
          <Link href="/produk">
            <div className="pr-5">Produk</div>
          </Link>
          <Link href="/about">
            <div className="pr-5">Tentang</div>
          </Link>
          <Link href="/kontak">
            <div className="pr-5">Hubungi Kami</div>
          </Link>
          <Link href="/agen">
            <div className="pr-5">Agen</div>
          </Link>
          <Link href="/verifikasi">
            <div className="pr-5">Verifikasi</div>
          </Link>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[89px] left-0 w-full bg-mainColor text-white flex flex-col space-y-4 px-5 py-3 sm:hidden">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <div>Beranda</div>
            </Link>
            <Link href="/produk" onClick={() => setIsMenuOpen(false)}>
              <div>Produk</div>
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              <div>Tentang</div>
            </Link>
            <Link href="/kontak" onClick={() => setIsMenuOpen(false)}>
              <div>Hubungi Kami</div>
            </Link>
            <Link href="/agen" onClick={() => setIsMenuOpen(false)}>
              <div>Agen</div>
            </Link>
            <Link href="/verifikasi" onClick={() => setIsMenuOpen(false)}>
              <div>Verifikasi</div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Headers;
