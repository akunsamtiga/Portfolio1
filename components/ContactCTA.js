import { ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="bg-black md:max-w-5xl xl:max-w-7xl mx-auto text-white px-6 md:px-12 xl:px-18 py-8">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
            Let‘s Connect <br className="hidden md:block" /> There
          </h2>
        </div>

        {/* Button */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium transition hover:bg-gray-100"
        >
          Hire Me Now
          <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}
