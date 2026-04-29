import heroImage from "../assets/hero.png";

export default function HeroSection() {
  return (
    <section className="min-h-[70vh] flex items-center px-6 py-16 md:py-0 md:px-16 lg:px-24">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-headline font-bold leading-[0.9] tracking-tighter hero-gradient-text">
            Karol Vincent
          </h1>
          <h2 className="text-[0.6rem] md:text-[0.85rem] font-headline uppercase tracking-[0.2em] text-primary mt-4 font-bold text-justify max-w-lg">
            Software Developer / 3rd-Year BSCS @ Cebu Institute of Technology - University
          </h2>
          <p className="mt-6 text-lg md:text-xl font-body text-on-background/70 leading-relaxed text-justify max-w-lg">
            A software developer focusing on high-performance architecture, robust digital experiences, and scalable system design.
          </p>
        </div>

        <div className="relative w-full max-w-md mx-auto md:ml-auto aspect-[4/3] rounded-2xl overflow-hidden border-2 border-on-background/10 bg-surface-low shadow-2xl">
          <div className="absolute inset-0 bg-primary/10 blur-2xl"></div>
          <img
            src={heroImage}
            alt="Hero Architectural Abstract"
            className="w-full h-full object-cover relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
