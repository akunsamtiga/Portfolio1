'use client';

import { useState } from 'react';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="px-6 md:px-12 xl:px-28 py-4 max-w-5xl xl:max-w-7xl mx-auto">
      <div className="relative rounded-lg overflow-hidden shadow-lg bg-black">
        <video
          className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-[1.02]"
          poster="/images/video-thumb.webp"
          controls
          onPlay={() => setIsPlaying(true)}
          preload="none"
          onClick={() => !isPlaying && setIsPlaying(true)} // Trigger play jika thumbnail
        >
          <source src="/videos/vd1.mp4" type="video/mp4" />
          <source src="/videos/vd1.webm" type="video/webm" />
          Browser Anda tidak mendukung pemutaran video.
        </video>

        {/* Placeholder Overlay (jika belum dimainkan) */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group cursor-pointer">
            <div
              className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110"
              onClick={() => setIsPlaying(true)}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}