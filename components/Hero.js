import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white px-6 py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      {/* Kiri: Judul & Deskripsi */}
      <div>
        <h1 className="text-5xl md:text-[80px] font-thin leading-[1.1] text-black mb-6">
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
              className="bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full font-medium tracking-wide capitalize"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Kanan: Foto Profil + Nama */}
      <div className="flex flex-col items-center md:items-end text-center md:text-right">
        <div className="w-[260px] h-[380px] relative rounded-xl overflow-hidden shadow-xl mb-4">
          <Image
            src="/images/profile1.jpg" // Ganti dengan gambar kamu
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>
        <p className="text-sm text-gray-500">
          Hi, I’m <span className="font-semibold text-black">Sanzy</span>, a UI/UX Designer building <br className="hidden md:block" />
          immersive digital experiences.
        </p>
      </div>
    </section>
  );
}
