import ProjectCard from "./ProjectCard";
import hexa1 from "../assets/hexa1.jpg";
import hexa2 from "../assets/hexa2.png";
import hexa3 from "../assets/hexa3.png";
import hexa4 from "../assets/hexa4.png";
import hexa5 from "../assets/hexa5.png";
import asa1 from "../assets/asa1.png";
import asa2 from "../assets/asa2.png";
import asa3 from "../assets/asa3.png";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="px-8 md:px-16 lg:px-24 py-24">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-headline uppercase tracking-widest text-on-background">Projects</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProjectCard
          ref_id="001"
          title="HexaWork"
          description="HexaWork is a decentralized freelancing platform designed to eliminate trust issues between clients and freelancers. It uses escrow funding, commitment staking, and AI-driven verification to ensure that work is completed fairly and payments are released automatically. With built-in dispute resolution and time-bound approvals, HexaWork creates a secure, transparent, and “ghost-proof” marketplace for both parties."
          tags={['REACT', 'TYPESCRIPT', 'FASTAPI', 'SOLIDITY', 'POLKADOT']}
          image={[hexa1, hexa2, hexa3, hexa4, hexa5]}
          githubUrl="https://github.com/kevyelly/HexaWork.git"
          liveUrl="#"
        />
        <ProjectCard
          ref_id="002"
          title="Numbuddy"
          description="Numbuddy is an interactive Android application designed to make mathematics engaging and accessible for children. Built entirely with Kotlin, the app features a robust architecture supporting secure user authentication and persistent progress tracking. It provides a gamified learning environment where kids can master foundational math skills through intuitive interfaces and data-driven educational modules."
          tags={['KOTLIN']}
          image={[
            "https://i.imgur.com/MAIdy5x.png",
            "https://i.imgur.com/4G5zCTX.png",
            "https://i.imgur.com/hPLBlCX.png",
            "https://i.imgur.com/QkDKaSj.png"
          ]}
          githubUrl="https://github.com/kevyelly/Numbuddy.git"
          liveUrl="#"
        />
        <ProjectCard
          ref_id="003"
          title="AsaNaBus"
          description="AsaNaBus is a real-time transit tracking solution designed to modernize the commuting experience in Cebu. Built to address the unpredictability of local bus schedules, the platform provides passengers with live location data and estimated arrival times, reducing wait-time uncertainty."
          tags={['PYTHON', 'REACTJS']}
          image={[asa1, asa2, asa3]}
          githubUrl="https://github.com/Naweeeeeh/asanabus.git"
          liveUrl="#"
        />
        <ProjectCard
          ref_id="004"
          title="ExcelOne"
          description="ExcelOne is a skill-sharing software that enables learners and teachers to collaborate. Inspired by Fiverr, it allows experts to provide tailored tutoring services to students based on their subject of expertise."
          tags={['JAVA', 'SQL']}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDNYrUJTxk3YybcCHWHuSL9M_8c4w46Nl5mHMgPMD99PNuHsWJC3-W6N70h_lxJ-KqUWSzq1oLrsidbJDatIAE97wZietUM4wiTO74wcy2Konz8771xy-wDguqT9YwLHQTQy47decX_UHuq25f1JiZ-PdyZ3I9RFvcZj2rT-v9NLA6st8fzRpJQjoeA-ThLVIernSFKd2kthlIW1Fi-su_FI8RHPW0rKr6bCH8HPDIxaQHNFQ5kUBp1V302poYfickrUcfNqaoJQ96m"
          githubUrl="#"
          liveUrl="#"
        />
      </div>
    </section>
  );
}
