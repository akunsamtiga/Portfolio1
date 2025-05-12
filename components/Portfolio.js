import Image from 'next/image';

const portfolioItems = [
  { src: '/images/portfolio6.jpg', span: 'col-span-2 row-span-2' }, // besar
  { src: '/images/portfolio2.jpg', span: 'col-span-2 row-span-1' }, // lebar
  { src: '/images/portfolio3.jpg', span: 'col-span-1 row-span-1' }, // normal
  { src: '/images/portfolio4.jpg', span: 'col-span-1 row-span-2' }, // tinggi
  { src: '/images/portfolio5.jpg', span: 'col-span-2 row-span-1' }, // lebar
  { src: '/images/portfolio1.jpg', span: 'col-span-1 row-span-1' }, // normal
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
          <div
            key={idx}
            className={`${item.span} relative rounded-xl overflow-hidden shadow-lg`}
          >
            <Image
              src={item.src}
              alt={`Portfolio ${idx + 1}`}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
