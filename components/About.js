export default function About() {
  return (
    <section className="px-6 md:px-10 xl:px-24 py-20 max-w-5xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      {/* Kiri: Judul dan Deskripsi */}
      <div>
        <span className="inline-block text-xs uppercase tracking-wide bg-gray-200 text-gray-600 px-6 py-2 rounded-full mb-4">
          About Me
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Design is not just a job – it’s my passion and creative expression.
        </h2>
        <p className="text-gray-700 text-sm">
          Design to me is a journey of creativity, bringing ideas to life through thoughtful, purposeful solutions.
        </p>
      </div>

      {/* Kanan: Penjelasan Singkat */}
      <div className="text-sm text-gray-600">
        Design is more than work – it’s a passion that drives me. Our process is simple, focused on delivering exceptional products that are both functional and visually engaging.
        <br />
        <br />
        Design is more than work – it’s a passion that drives me. Our process is simple, focused on delivering exceptional products.
      </div>
    </section>
  );
}
