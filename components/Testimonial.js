import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Acme Corp',
    quote: 'Duvvy delivered an outstanding design that boosted our conversion by 35%. Highly recommended!',
    avatar: '/images/pp1.png',
  },
  {
    name: 'Michael Lee',
    role: 'Founder, StartupXYZ',
    quote: 'Professional, creative, and fast—exactly what we needed for our product launch.',
    avatar: '/images/pp6.png',
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
            <div key={idx} className="bg-white p-6 rounded-xl shadow">
              <div className="flex items-center mb-4">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-14 h-14"
                />
                <div className="ml-4 text-left">
                  <p className="font-bold text-gray-400">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm italic text-left">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
