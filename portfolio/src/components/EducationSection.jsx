export default function EducationSection() {
  return (
    <section id="education" className="px-8 md:px-16 lg:px-24 pt-24 pb-0 bg-surface-low border-t border-on-background/10">
      <div className="max-w-7xl mx-auto flex flex-col">

        {/* Title Area */}
        <div className="mb-12">
          <div>
            <h2 className="text-2xl font-headline uppercase tracking-widest text-on-background">
              Education
            </h2>
          </div>
        </div>

        {/* Single Education Item - Expanded to fill space */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between group/edu cursor-default gap-4"
        >
          <div className="flex flex-col gap-1">
            <span className="font-headline text-xl md:text-2xl lg:text-3xl uppercase tracking-wide text-on-background group-hover/edu:text-primary transition-colors duration-300">
              Cebu Institute of Technology - University
            </span>
            <div className="h-[2px] w-12 bg-primary/30 group-hover/edu:w-24 transition-all duration-500"></div>
          </div>

          <div className="flex flex-col md:items-end gap-1">
            <span className="font-label text-sm md:text-base uppercase tracking-[0.2em] text-on-background/70">
              BS Computer Science
            </span>
            <span className="font-label text-xs md:text-sm text-on-background/40 uppercase tracking-widest">
              Expected Graduation — 2027
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
