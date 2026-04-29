export default function ProjectCard({ ref_id, title, description, tags, image, githubUrl, liveUrl }) {
  return (
    <div
      className="stepped-corners bg-surface-low p-8 h-full min-h-[350px] flex flex-col group hover:bg-surface-high"
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
          <div className="absolute -inset-x-2 -top-2 -bottom-4 opacity-0 group-hover:opacity-100 pointer-events-none z-10">
            <div className="w-full h-full overflow-hidden bg-surface rounded-sm">
              <img
                src={image}
                alt={title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal"
              />
            </div>
          </div>
        </div>

        {/* Action Links (Always visible) */}
        <div className="flex flex-wrap gap-6 relative z-20">
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-label text-[0.8rem] uppercase tracking-widest text-on-background hover:text-primary cursor-pointer pointer-events-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              GitHub
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-label text-[0.8rem] uppercase tracking-widest text-on-background hover:text-primary cursor-pointer pointer-events-auto">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
              Live Site
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
