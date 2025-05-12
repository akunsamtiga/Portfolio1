'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Acme Corp',
    quote: 'Duvvy delivered an outstanding design that boosted our conversion by 35%. Highly recommended!',
    avatar: '/images/pp1.webp', // Ganti dengan .webp jika memungkinkan
  },
  {
    name: 'Michael Lee',
    role: 'Founder, StartupXYZ',
    quote: 'Professional, creative, and fast—exactly what we needed for our product launch.',
    avatar: '/images/pp6.webp',
  },
];

export default function Testimonial() {
  return (
    <section className="px-6 md:px-10 xl:px-24 py-20 max-w-5xl xl:max-w-7xl bg-white mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs uppercase tracking-wide bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-4">
          Testimonials
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-600">
          What my clients say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <TestimonialCard key={idx} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className="relative w-14 h-14">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-full"></div>
          )}
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            width={56}
            height={56}
            className={`rounded-full object-cover w-14 h-14 transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        <div className="ml-4 text-left">
          <p className="font-bold text-gray-400">{testimonial.name}</p>
          <p className="text-sm text-gray-500">{testimonial.role}</p>
        </div>
      </div>
      <blockquote className="text-gray-700 text-sm italic text-left">
        &quot;{testimonial.quote}&quot;
      </blockquote>
    </div>
  );
}