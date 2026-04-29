import { useState } from "react";

export default function ProjectCard({ ref_id, title, description, tags, image, githubUrl, liveUrl }) {
  const images = Array.isArray(image) ? image : [image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="stepped-corners bg-surface-low p-8 h-full min-h-[350px] flex flex-col group hover:bg-surface-high cursor-pointer"
      >
        <div className="stepped-corners-inner"></div>

        {/* Header Area */}
        <div>
          <h3 className="text-2xl font-headline mb-6 uppercase leading-tight text-on-background">{title}</h3>
        </div>

        {/* Content Area (Text and Image Swap) */}
        <div className="relative flex-grow flex flex-col">

          {/* Swappable Area */}
          <div className="relative flex-grow flex flex-col mb-6">
            {/* Text Content */}
            <div className="flex flex-col flex-grow opacity-100 group-hover:opacity-0">
              <p className="font-body text-base text-on-background/70 mb-6 leading-relaxed max-w-prose text-justify">
                {description}
              </p>

              {/* Stack Group (Pushed to bottom of swappable area) */}
              <div className="mt-auto flex flex-wrap gap-4">
                {tags.map(tag => (
                  <span key={tag} className="font-label text-[0.75rem] border border-on-background px-3 py-1 text-on-background">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Hover Image (Absolutely positioned over text only) */}
            <div className="absolute -inset-x-2 -top-2 -bottom-4 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-10 flex flex-col">
              <div className="w-full h-full relative overflow-hidden bg-surface rounded-sm">
                <img
                  src={images[currentIndex]}
                  alt={title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Carousel Controls */}
                {images.length > 1 && (
                  <>
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                      <button 
                        onClick={handlePrev}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-on-background hover:bg-primary hover:text-background"
                      >
                        &#8592;
                      </button>
                      <button 
                        onClick={handleNext}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-background/80 text-on-background hover:bg-primary hover:text-background"
                      >
                        &#8594;
                      </button>
                    </div>
                    {/* Indicators */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {images.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`w-2 h-2 rounded-full ${idx === currentIndex ? 'bg-primary' : 'bg-on-background/50'}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Action Links (Always visible) */}
          <div className="flex flex-wrap gap-6 relative z-20">
            {githubUrl && (
              <a onClick={(e) => e.stopPropagation()} href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-label text-[0.8rem] uppercase tracking-widest text-on-background hover:text-primary cursor-pointer pointer-events-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                GitHub
              </a>
            )}
            {liveUrl && (
              <a onClick={(e) => e.stopPropagation()} href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-label text-[0.8rem] uppercase tracking-widest text-on-background hover:text-primary cursor-pointer pointer-events-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                Live Site
              </a>
            )}
          </div>

        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 cursor-default animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-surface-low border-2 border-primary/40 w-full max-w-6xl max-h-[95vh] flex flex-col md:flex-row relative shadow-[0_0_80px_rgba(176,114,255,0.2)] rounded-3xl overflow-hidden animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-surface-high border border-primary/30 text-on-background hover:bg-primary hover:text-background transition-colors duration-300 rounded-full font-bold cursor-pointer"
            >
              &#x2715;
            </button>

            {/* Modal Image Carousel */}
            <div className="w-full md:w-3/5 bg-surface relative flex items-center justify-center min-h-[300px] md:min-h-[600px] border-b md:border-b-0 md:border-r border-primary/10">
              <img
                src={images[currentIndex]}
                alt={title}
                className="w-full h-full object-contain max-h-[50vh] md:max-h-[90vh] transition-all duration-500 p-4"
              />
              {images.length > 1 && (
                <>
                  <div className="absolute inset-0 flex justify-between items-center px-4 md:px-8 pointer-events-none">
                    <button 
                      onClick={handlePrev}
                      className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-sm bg-surface border border-primary/30 text-primary hover:bg-primary hover:text-background transition-colors duration-300 text-xl cursor-pointer shadow-lg"
                    >
                      &#8592;
                    </button>
                    <button 
                      onClick={handleNext}
                      className="pointer-events-auto w-10 h-10 flex items-center justify-center rounded-sm bg-surface border border-primary/30 text-primary hover:bg-primary hover:text-background transition-colors duration-300 text-xl cursor-pointer shadow-lg"
                    >
                      &#8594;
                    </button>
                  </div>
                  {/* Indicators */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
                    {images.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-12 h-1.5 rounded-full cursor-pointer transition-colors duration-300 ${idx === currentIndex ? 'bg-primary' : 'bg-on-background/30 hover:bg-on-background/60'}`}
                        onClick={() => setCurrentIndex(idx)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Modal Details Area */}
            <div className="w-full md:w-2/5 p-8 md:p-12 flex flex-col relative z-20">
              <h3 className="text-3xl md:text-4xl font-headline mb-6 uppercase leading-tight text-on-background hero-gradient-text w-fit">
                {title}
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-8">
                {tags.map(tag => (
                  <span key={tag} className="font-label text-[0.75rem] border border-primary/30 bg-primary/5 px-4 py-1.5 text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="font-body text-lg text-on-background/80 mb-10 leading-relaxed text-justify">
                {description}
              </p>

              <div className="mt-auto flex flex-wrap gap-8 pt-8 border-t border-primary/10">
                {githubUrl && (
                  <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-label text-[0.9rem] uppercase tracking-widest text-on-background hover:text-primary transition-colors duration-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                    GitHub
                  </a>
                )}
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 font-label text-[0.9rem] uppercase tracking-widest text-on-background hover:text-primary transition-colors duration-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                    Live Site
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
