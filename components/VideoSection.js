import Image from 'next/image';

export default function VideoSection() {
  return (
    <section className="px-6 md:px-12 xl:px-28 py-4 md:max-w-5xl xl:max-w-7xl mx-auto">
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        {/* Thumbnail dan overlay */}
        <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
          <Image
            src="/images/video-thumb.jpg" // Ganti dengan gambar thumbnail kamu
            alt="Video Thumbnail"
            layout="fill"
            objectFit="cover"
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>

        {/* Video YouTube Embed (tanpa tombol, langsung autoplay saat klik) */}
        <div className="absolute inset-0 group-hover:block">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Z2z8Bpz_5sE?si=kUK19apmmCLF3OJL?autoplay=1" // Ganti YOUR_VIDEO_ID dengan ID video YouTube
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
