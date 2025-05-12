'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="bg-white px-6 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Bagian Kiri: Judul & Deskripsi */}
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-[64px] leading-tight text-black mb-6 font-light tracking-tight">
          Product <br />
          Designer
        </h1>
        <p className="text-sm md:text-base text-gray-600 max-w-md mb-10">
          Hi, I’m Sanzy, a UI/UX Designer crafting intuitive digital experiences.
        </p>

        {/* Logo Perusahaan */}
        <div className="flex flex-wrap gap-3">
          {['Zoom', 'Coinbase', 'Spotify', 'Slack', 'Dropbox'].map((name, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 text-xs sm:text-sm px-4 py-2 rounded-full font-medium tracking-wide capitalize"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Bagian Kanan: Foto Profil + Nama */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <div className="w-[220px] sm:w-[260px] h-[320px] sm:h-[380px] relative rounded-xl overflow-hidden shadow-xl mb-4">
          <Image
            src="/images/profile1.jpg"
            alt="Sanzy - UI/UX Designer"
            fill
            className="object-cover transition-opacity duration-500 ease-in-out"
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false} // Hanya aktif jika benar-benar hero image
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
          )}
        </div>
        <p className="text-sm text-gray-500">
          Hi, I’m{' '}
          <span className="font-semibold text-black">Sanzy</span>, a UI/UX Designer building{' '}
          <br className="hidden md:block" />
          immersive digital experiences.
        </p>
      </div>
    </section>
  );
}