'use client';

import Image from 'next/image';
import { useState } from 'react';

const portfolioItems = [
  { src: '/images/portfolio6.webp', span: 'col-span-2 row-span-2' },
  { src: '/images/portfolio2.webp', span: 'col-span-2 row-span-1' },
  { src: '/images/portfolio3.webp', span: 'col-span-1 row-span-1' },
  { src: '/images/portfolio4.webp', span: 'col-span-1 row-span-2' },
  { src: '/images/portfolio5.webp', span: 'col-span-2 row-span-1' },
  { src: '/images/portfolio1.webp', span: 'col-span-1 row-span-1' },
];

export default function Portfolio() {
  return (
    <section className="bg-white px-6 md:px-10 xl:px-24 py-20 max-w-5xl xl:max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-12 text-center">
        <span className="inline-block text-xs uppercase tracking-wide bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-4">
          Portfolio
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-700">
          Explore My Creative Solutions
        </h2>
        <p className="text-sm text-gray-600">
          A curated selection showcasing design versatility and impact.
        </p>
      </div>

      {/* Grid Portfolio with varied spans */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] max-w-5xl mx-auto">
        {portfolioItems.map((item, idx) => (
          <PortfolioItem key={idx} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}

// Memisah ke komponen terpisah untuk lazy load & placeholder
function PortfolioItem({ item, index }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`${item.span} relative rounded-xl overflow-hidden shadow-lg group`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse z-10"></div>
      )}
      <Image
        src={item.src}
        alt={`Portfolio ${index + 1}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className={`object-cover transition-transform duration-300 ${
          isLoading ? 'scale-105 blur-md' : 'scale-100 blur-0'
        }`}
        loading="lazy"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}