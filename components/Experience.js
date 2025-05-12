'use client';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: 'Graphic Designer',
      company: 'Dewa-Dewi Tech',
      description:
        'Support the team in creating promotional and functional visual designs to support service and digital products.',
      year: '2015 – 2017',
    },
    {
      id: 2,
      role: 'UI/UX Designer',
      company: 'Odzma Studio',
      description:
        'Creating full-stack product UI/UX design services through functional design systems.',
      year: '2017 – 2019',
    },
    {
      id: 3,
      role: 'UX Researcher',
      company: 'Korsa Studio',
      description:
        'Research and design data-driven product features to enhance the user experience.',
      year: '2018 – 2021',
    },
    {
      id: 4,
      role: 'Product Designer',
      company: 'Apple, Inc',
      description:
        'Design innovative and modern interfaces for devices and web-based commerce platforms.',
      year: '2021 – Now',
    },
  ];

  return (
    <section className="px-6 md:px-10 xl:px-24 py-20 max-w-5xl xl:max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-12 text-center md:text-left">
        <span className="inline-block text-xs uppercase tracking-wide bg-gray-200 text-gray-600 px-3 py-1 rounded-full mb-4">
          Experience
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          A Yearly snapshot of my creative growth
        </h2>
        <p className="text-sm text-gray-600 max-w-xl mx-auto md:mx-0">
          An annual summary that summarizes my creativity journey and development throughout the year.
        </p>
      </div>

      {/* Timeline */}
      <div className="space-y-10">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function ExperienceItem({ exp }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-4">
      <div className="md:w-1/4 md:text-right">
        <span className="text-sm text-gray-500">{exp.year}</span>
      </div>
      <div className="md:w-3/4">
        <h3 className="font-semibold text-gray-400">{exp.role} at {exp.company}</h3>
        <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
      </div>
    </div>
  );
}