export default function TopNavBar({ isLightMode, toggleTheme }) {
  const navLinks = [
    { name: 'WORK', id: 'projects' },
    { name: 'EDUCATION', id: 'education' },
    { name: 'SKILLS', id: 'skills' }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md flex justify-between items-center px-8 py-6">

      <div className="hidden md:flex items-center space-x-12">
        {navLinks.map((item) => (
          <a
            key={item.name}
            className="font-headline uppercase tracking-widest text-sm text-on-background hover:text-primary"
            href={`#${item.id}`}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="flex items-center space-x-8">
        <button
          onClick={toggleTheme}
          className="font-headline uppercase tracking-widest text-sm text-on-background hover:text-primary"
        >
          {isLightMode ? 'DARK' : 'LIGHT'}
        </button>
        <a 
          href="#contact"
          className="font-headline uppercase tracking-widest text-sm text-primary hover:text-on-background"
        >
          CONNECT
        </a>
      </div>
    </nav>
  );
}
