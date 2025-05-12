'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'dQw4w9WgXcQ'; // Ganti dengan video ID yang bisa di-embed

  return (
    <section className="px-6 md:px-12 xl:px-28 py-4 max-w-5xl xl:max-w-7xl mx-auto">
      <div
        className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        {/* Thumbnail Placeholder */}
        <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden">
          <Image
            src="/images/video-thumb.webp"
            alt="Video Thumbnail"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            placeholder="blur"
            blurDataURL="/images/video-thumb-blur.jpg"
          />

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Lazy-loaded YouTube Embed */}
        {isPlaying && (
          <div className="absolute inset-0 z-10">
            <iframe
              src={`https://www.youtube.com/embed/ ${videoId}?autoplay=1`}
              title="YouTube video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}