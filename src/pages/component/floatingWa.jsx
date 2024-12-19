import { ChartArea, MessageCircle } from 'lucide-react';
import React from 'react';

const FloatingWhatsApp = () => {
  const phoneNumber = '6281999717666'; // Ganti dengan nomor WhatsApp Anda
  const message = 'Halo, saya ingin bertanya tentang emas ABI'; // Pesan default

  const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-5 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition"
    >
      <MessageCircle />
    </a>
  );
};

export default FloatingWhatsApp;
