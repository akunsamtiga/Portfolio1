import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Social Ads',
    description: 'Strategic and creative social media ads to help your brand grow, engage, and convert effectively.',
  },
  {
    title: 'Search Engine',
    description: 'Optimization for website visibility and ranking with effective SEO strategies.',
  },
  {
    title: 'Content Marketing',
    description: 'We create engaging and strategic content to build trust and drive inbound growth.',
    highlight: true, // Card hitam
  },
  {
    title: 'SaaS Marketing',
    description: 'Marketing specifically designed for SaaS, with clear data-driven metrics.',
  },
];

export default function Services() {
  return (
    <section className="px-6 md:px-10 xl:px-24 py-20 max-w-5xl xl:max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-12">
        <span className="inline-block text-xs uppercase tracking-wide bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-4">
          Services
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          A Comprehensive Look at What We Offer
        </h2>
        <p className="text-sm text-gray-600">
          Explore our suite of services designed to grow your business with innovative and tailored solutions.
        </p>
        <button className="mt-4 border border-black px-6 py-2 rounded-full text-sm hover:bg-black hover:text-white transition duration-300">
          Get Started
        </button>
      </div>

      {/* Grid layanan */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 h-full flex flex-col justify-between transition-all duration-300 ease-in-out transform ${
              service.highlight
                ? 'bg-transparent text-white shadow-lg hover:scale-105'
                : 'bg-gray-100 text-gray-800 shadow-md hover:scale-105'
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-sm font-medium">{service.highlight ? 'Learn More' : 'Explore'}</span>
              <ArrowRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
