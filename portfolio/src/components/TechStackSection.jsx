export default function TechStackSection() {
  const stackCategories = [
    {
      title: "Core Systems / Backend",
      skills: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python" },
        { name: "C", icon: "https://cdn.simpleicons.org/c" },
        { name: "C++", icon: "https://cdn.simpleicons.org/cplusplus" },
        { name: ".NET", icon: "https://cdn.simpleicons.org/dotnet" },
        { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
        { name: "Kotlin", icon: "https://cdn.simpleicons.org/kotlin" },
        { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
        { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase" },
      ]
    },
    {
      title: "Frontend / Interfaces",
      skills: [
        { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        { name: "React", icon: "https://cdn.simpleicons.org/react" },
        { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
        { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" }
      ]
    },
    {
      title: "Architecture / DevOps",
      skills: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
        { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
        { name: "Linux", icon: "https://cdn.simpleicons.org/linux" },
        { name: "Git", icon: "https://cdn.simpleicons.org/git" }
      ]
    }
  ];

  const honors = [
    { name: "Polkadot 2026 Hackathon - Cebu Edition Champion", issuer: "Polkadot Ecosystem", year: "2026" },
    { name: "Devcon Kids Cebu Chapter Volunteer", issuer: "Devcon Philippines", year: "2026 - Present" },
    { name: "CodeChum Java & C Proficiency Certifications", issuer: "CodeChum", year: "2024 - 2025" },
    { name: "DOST SEI Scholar", issuer: "Department of Science and Technology", year: "2023 - Present" },
  ];

  return (
    <section id="skills" className="px-8 md:px-16 lg:px-24 pt-12 pb-24 bg-surface-low border-b border-on-background/10">
      <div className="max-w-7xl mx-auto flex flex-col">

        {/* Title Area */}
        <div className="mb-12">
          <div>
            <h2 className="text-2xl font-headline uppercase tracking-widest text-on-background">
              Skills
            </h2>
          </div>
        </div>

        {/* Categories & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          {stackCategories.map((category, index) => (
            <div
              key={category.title}
              className="flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="font-label text-xs uppercase tracking-[0.2em] text-on-background/50">
                  {category.title}
                </h3>
                <div className="h-[1px] flex-grow bg-on-background/10 group-hover:bg-primary/30"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 group/skill cursor-default"
                  >
                    <img
                      src={skill.icon}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 object-contain shrink-0"
                    />
                    <span className="font-headline text-lg md:text-xl uppercase tracking-wider text-on-background group-hover/skill:text-primary truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Certifications */}
          <div
            className="flex flex-col group"
          >
            <div className="flex items-center gap-4 mb-6">
              <h3 className="font-label text-xs uppercase tracking-[0.2em] text-on-background/50">
                Honors & Certifications
              </h3>
              <div className="h-[1px] flex-grow bg-on-background/10 group-hover:bg-primary/30"></div>
            </div>

            <div className="flex flex-col gap-y-4">
              {honors.map((cert) => (
                <div key={cert.name} className="flex flex-col group/cert cursor-default">
                  <span className="font-headline text-base md:text-lg uppercase tracking-wide text-on-background group-hover/cert:text-primary">
                    {cert.name}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-label text-[0.6rem] uppercase tracking-widest text-on-background/50">
                      {cert.issuer}
                    </span>
                    <span className="w-1 h-1 bg-primary/50"></span>
                    <span className="font-label text-[0.6rem] text-on-background/50">
                      {cert.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
