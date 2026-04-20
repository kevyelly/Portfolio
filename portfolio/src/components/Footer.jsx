import { useEffect, useState } from "react";

export default function Footer() {
  const [systemTime, setSystemTime] = useState("14:02:44_UTC");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const timeStr = now.toISOString().split('T')[1].split('.')[0] + "_UTC";
      setSystemTime(timeStr);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-surface-low flex flex-col md:flex-row justify-between items-center px-8 py-12 w-full border-t border-on-background/5">
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <div className="text-on-background font-bold font-headline text-xl mb-2">KAROL VINCENT</div>
        <p className="font-label text-[0.75rem] uppercase tracking-tighter opacity-50 text-on-background">© 2026 KAROL VINCENT</p>
      </div>
      <div className="flex gap-12 font-label text-[0.75rem] uppercase tracking-tighter">
        {['GITHUB', 'LINKEDIN', 'TWITTER'].map(social => (
          <a key={social} className="text-on-background hover:underline decoration-primary decoration-2 active:opacity-80" href="#">
            {social}
          </a>
        ))}
      </div>
      <div className="hidden md:block font-label text-[0.75rem] text-primary">
        SYSTEM_TIME: {systemTime}
      </div>
    </footer>
  );
}
