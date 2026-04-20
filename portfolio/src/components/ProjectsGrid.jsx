import ProjectCard from "./ProjectCard";

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
          title="Real-Time Bus Tracking System"
          description="High-concurrency infrastructure designed for metropolitan transit logistics using distributed microservices."
          tags={['PYTHON', 'REDIS', 'MQTT']}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuB2tfJmuQtCjxo-zMPMUcnuTvJQ12J8GU7oFrJy4TJtCsAX3YHWV3PUYMk8x29RcaB6L550S152_3E_3rBbEPhJWAL7jebqYwllvsuy3cs5Gf4U8iROcYMbDnNSTXMIQH96Ss4Lvq5pn9pByOarUXGBMh-AhomS67DX0TnzzvPvyNsr9qOnt_JoAWB7Jy8XMlDT3oQf3EoWTNQ784jWANVFe5BWipDU17g4Bf6ANwoS_GhSJQczP0W2hRQu5s9LtCbwTO6jWwZrEoyd"
          githubUrl="#"
          liveUrl="#"
        />
        <ProjectCard
          ref_id="002"
          title="Computer Vision Inventory App"
          description="Automated warehouse monitoring utilizing custom-trained neural networks for real-time object classification."
          tags={['JS', 'TENSORFLOW', 'OPENCV']}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuC9W6G3SxsX8sa4K-GvXrLJFHyt6kQ2GUFj6R02wXxkXemnyQ8C8i9Lmgm8kjogQKZKBGmuzv9-2RF6jGMKz1nyXjdGClzlpGHRvXwg_O3ayjEiOHKTrIGBgF2GjKgPRMJq8m5OAI0pJkjGIP_tYbD4blnud1hBEItbISBY58ykk54p6mbRmurb6TGeynu0xIgSEj36nwzztOQpEhXTZXtzdlgz58orjheFahqRz_oNVAIF1ZGbjycpTrUbr3K8akElZPGgFJ4p2iKh"
          githubUrl="#"
          liveUrl="#"
        />
        <ProjectCard
          ref_id="003"
          title="Web3 Solidity DApp"
          description="Decentralized governance protocols for architectural asset management on the Ethereum network."
          tags={['SOLIDITY', 'WEB3.JS', 'REACT']}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDfb7-Ot_VF_2IC4j1s1-nYRCaEqK-IkF9XLC0MlrUFZ1Ng7LDwKf4JcsdNjpZLbSZWT2ZcZrSohoEGn9njSRuuqvnFEFbPsH1dpXehBe5QQx8Cr20dYnra9W_7bnzT40hn4HcBaeswPaBzNXNQTldgdmmdOfvUesSP8n4i_r1LYCvgVQYCBUP6njpHmSMNT-m2GPAMMrvi3QoHaqyC7Y1uOgBYlR4b5GADspz_iWy3yeUitgN1laimX_779VdfKV8tQUJxpMxNIPS6"
          githubUrl="#"
          liveUrl="#"
        />
        <ProjectCard
          ref_id="004"
          title="Distributed Ledger API"
          description="High-throughput RESTful gateway for immutable data logging and cryptographic verification systems."
          tags={['SQL', 'GO', 'DOCKER']}
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuDNYrUJTxk3YybcCHWHuSL9M_8c4w46Nl5mHMgPMD99PNuHsWJC3-W6N70h_lxJ-KqUWSzq1oLrsidbJDatIAE97wZietUM4wiTO74wcy2Konz8771xy-wDguqT9YwLHQTQy47decX_UHuq25f1JiZ-PdyZ3I9RFvcZj2rT-v9NLA6st8fzRpJQjoeA-ThLVIernSFKd2kthlIW1Fi-su_FI8RHPW0rKr6bCH8HPDIxaQHNFQ5kUBp1V302poYfickrUcfNqaoJQ96m"
          githubUrl="#"
          liveUrl="#"
        />
      </div>
    </section>
  );
}
