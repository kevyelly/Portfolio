export default function CTASection() {
  const contactLinks = [
    { name: "Email", value: "bebedorkarolvincent@gmail.com", href: "mailto:bebedorkarolvincent@gmail.com" },
    { name: "LinkedIn", value: "linkedin.com/in/karolvincent", href: "https://www.linkedin.com/in/karolvincent/" },
    { name: "GitHub", value: "github.com/kevyelly", href: "https://github.com/kevyelly" },
    { name: "Phone", value: "+63 977 019 5697", href: "tel:+639770195697" }
  ];

  return (
    <section id="contact" className="px-8 md:px-16 lg:px-24 py-24 bg-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Header Area */}
        <div>
          <h2 className="text-5xl md:text-7xl font-headline leading-[0.9] mb-8 tracking-tighter text-on-background uppercase">
            Let's <br /><span className="text-primary">Connect.</span>
          </h2>
          <p className="font-body text-lg text-on-background/70 leading-relaxed max-w-md text-justify">
            Currently open for active internships where I am able to take part in building and developing software. I am a quick learner and I am able to pick up new technologies quickly. I am also a team player and I am able to work well with others.
          </p>
        </div>

        {/* Links Area */}
        <div className="flex flex-col space-y-10 lg:mt-0">
          {contactLinks.map((link, index) => (
            <div
              key={link.name}
              className="group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-1.5 h-1.5 bg-primary/30 group-hover:bg-primary transition-colors duration-300"></div>
                <h4 className="font-label text-[0.65rem] uppercase tracking-[0.2em] text-on-background/40">
                  {link.name}
                </h4>
              </div>
              <a
                href={link.href}
                className="font-headline text-2xl md:text-3xl lg:text-4xl text-on-background hover:text-primary transition-colors duration-300 w-fit"
              >
                {link.value}
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
