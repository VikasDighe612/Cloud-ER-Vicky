import React, { useState, useEffect } from 'react';
import { 
  Cloud, Terminal, Server, Database, Cpu, Globe, Shield, Code, 
  ExternalLink, Github, Linkedin, Mail, ChevronRight, Layout, 
  Container, GitBranch, Layers, Zap, Award, Activity, Briefcase, 
  Lock, Network
} from 'lucide-react';

const personalInfo = {
  name: "Alex Dev",
  title: "Senior Cloud Architect",
  tagline: "Designing fault-tolerant distributed systems at planetary scale.",
  image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:alex@example.com"
  }
};

const stats = [
  { label: "Uptime Maintained", value: "99.99%" },
  { label: "Containers Managed", value: "5,000+" },
  { label: "Cloud Spend Saved", value: "$450k/yr" },
  { label: "Regions Active", value: "12" },
];

const certifications = [
  { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", date: "2024", color: "text-orange-400", border: "border-orange-500/50" },
  { name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", date: "2023", color: "text-blue-400", border: "border-blue-500/50" },
  { name: "Google Professional Cloud Architect", issuer: "Google Cloud", date: "2023", color: "text-red-400", border: "border-red-500/50" },
];

const experience = [
  {
    role: "Senior Cloud Engineer",
    company: "Tech Giant Corp",
    period: "2022 - Present",
    description: "Leading the migration of monolithic applications to microservices on EKS. Implemented a GitOps workflow using ArgoCD that reduced deployment time by 70%.",
    tech: ["AWS", "Kubernetes", "Go"]
  },
  {
    role: "DevOps Engineer",
    company: "FinTech Startup",
    period: "2019 - 2022",
    description: "Architected a PCI-DSS compliant infrastructure processing $50M+ in transactions monthly. Automated security auditing and compliance reporting.",
    tech: ["Terraform", "Python", "Azure"]
  },
  {
    role: "Systems Administrator",
    company: "Global Logistics",
    period: "2017 - 2019",
    description: "Managed on-premise to cloud hybrid networking. Scripted automated backups and disaster recovery drills ensuring RTO < 15 mins.",
    tech: ["Linux", "Bash", "Networking"]
  }
];

const skills = [
  { category: "Cloud Platforms", icon: <Cloud size={24} className="text-cyan-400" />, color: "from-cyan-500 to-blue-500", items: ["AWS", "Google Cloud", "Azure", "OpenStack"] },
  { category: "Infrastructure as Code", icon: <Server size={24} className="text-violet-400" />, color: "from-violet-500 to-purple-500", items: ["Terraform", "Ansible", "Crossplane", "Pulumi"] },
  { category: "Container Orchestration", icon: <Container size={24} className="text-emerald-400" />, color: "from-emerald-500 to-teal-500", items: ["Kubernetes", "Istio", "Helm", "Knative"] },
  { category: "Observability", icon: <Activity size={24} className="text-orange-400" />, color: "from-orange-500 to-red-500", items: ["Prometheus", "Grafana", "Datadog", "OpenTelemetry"] },
  { category: "Backend Engineering", icon: <Code size={24} className="text-pink-400" />, color: "from-pink-500 to-rose-500", items: ["Go", "Python", "Rust", "gRPC"] },
  { category: "Security & Compliance", icon: <Shield size={24} className="text-blue-400" />, color: "from-blue-500 to-indigo-500", items: ["Vault", "OPA", "Falco", "Trivy"] }
];

const architectures = [
  {
    title: "Global Serverless Event Mesh",
    description: "Event-driven architecture processing 10k events/sec across 3 regions with active-active failover.",
    diagramType: "Event Bus Pattern",
    specs: ["AWS EventBridge", "Lambda", "DynamoDB Global Tables"],
    color: "bg-orange-500"
  },
  {
    title: "Zero-Trust Kubernetes Cluster",
    description: "Hardened GKE cluster with Cilium service mesh, mutual TLS everywhere, and distroless images.",
    diagramType: "Security Layer",
    specs: ["GKE Autopilot", "Cilium", "Kyverno"],
    color: "bg-blue-500"
  }
];

const NavItem = ({ section, active, onClick }) => (
  <button onClick={() => onClick(section)} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${active === section ? 'text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]' : 'text-slate-400 hover:text-white'}`}>
    <div className={`absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 opacity-0 transition-opacity duration-300 ${active === section ? 'opacity-100' : 'group-hover:opacity-20'}`}></div>
    <span className="relative z-10">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
  </button>
);

const TerminalBlock = ({ className }) => {
  const [text, setText] = useState('');
  const fullText = `> access_level: ROOT\n> connecting to k8s_cluster_prod...\n> status: HEALTHY\n> latency: 12ms\n> autoscaler: ACTIVE\n> scaling_nodes: 12 -> 15\n> deployment_status: SUCCESS`;
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => { setText(fullText.slice(0, index)); index++; if (index > fullText.length) clearInterval(timer); }, 30);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className={`bg-[#0f172a] backdrop-blur-md rounded-lg overflow-hidden border border-slate-700/50 shadow-2xl font-mono text-xs ${className}`}>
      <div className="bg-[#1e293b] px-3 py-2 flex gap-1.5 items-center border-b border-slate-700/50 justify-between">
        <div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div><div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div></div>
        <span className="text-slate-500 text-[10px]">prod-us-east-1</span>
      </div>
      <div className="p-4 text-emerald-400/90 leading-relaxed"><pre className="whitespace-pre-wrap">{text}<span className="animate-pulse">_</span></pre></div>
    </div>
  );
};

const SectionHeading = ({ children, icon, color = "text-cyan-400" }) => (
  <div className="flex items-center gap-4 mb-10 group">
    <div className={`p-3 rounded-2xl bg-slate-800/50 ring-1 ring-white/10 ${color} group-hover:scale-110 transition-transform duration-300`}>{icon}</div>
    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">{children}</h2>
  </div>
);

const SkillCard = ({ category, icon, items, color }) => (
  <div className="relative group">
    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl blur opacity-0 group-hover:opacity-25 transition duration-500`}></div>
    <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800/60 p-6 rounded-xl hover:border-white/10 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-4"><div className="p-2 rounded-lg bg-slate-800/80 ring-1 ring-white/5">{icon}</div><h3 className="font-semibold text-lg text-slate-200 group-hover:text-white transition-colors">{category}</h3></div>
      <div className="flex flex-wrap gap-2">{items.map((item, idx) => (<span key={idx} className="px-3 py-1 bg-slate-950/50 rounded-md text-sm text-slate-400 border border-slate-800/50 group-hover:border-slate-700 transition-colors">{item}</span>))}</div>
    </div>
  </div>
);

const ArchitectureCard = ({ arch }) => (
  <div className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-600 transition-all duration-300">
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><Network size={120} /></div>
    <div className="p-8 relative z-10">
      <div className="flex items-center gap-3 mb-4"><span className={`w-3 h-3 rounded-full ${arch.color} animate-pulse`}></span><span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{arch.diagramType}</span></div>
      <h3 className="text-xl font-bold text-white mb-2">{arch.title}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">{arch.description}</p>
      <div className="flex flex-wrap gap-2">{arch.specs.map((spec, i) => (<span key={i} className="text-xs px-2 py-1 bg-slate-800 rounded border border-slate-700 text-slate-300">{spec}</span>))}</div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
  </div>
);

const TimelineItem = ({ job, isLast }) => (
  <div className="flex gap-4 md:gap-8 relative group">
    {!isLast && (<div className="absolute left-[19px] md:left-[149px] top-10 bottom-[-40px] w-0.5 bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>)}
    <div className="hidden md:block w-32 text-right pt-1"><span className="font-mono text-cyan-500 font-bold">{job.period}</span></div>
    <div className="relative z-10"><div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-700 flex items-center justify-center group-hover:border-cyan-500 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"><Briefcase size={18} className="text-slate-400 group-hover:text-white" /></div></div>
    <div className="flex-1 pb-10">
      <div className="md:hidden font-mono text-cyan-500 text-sm mb-1">{job.period}</div>
      <h3 className="text-xl font-bold text-white">{job.role}</h3>
      <div className="text-slate-400 text-sm mb-3">{job.company}</div>
      <p className="text-slate-400 leading-relaxed mb-4">{job.description}</p>
      <div className="flex flex-wrap gap-2">{job.tech.map((t, i) => (<span key={i} className="text-xs px-2 py-1 bg-slate-800/50 rounded-full text-slate-300 border border-slate-700/50">{t}</span>))}</div>
    </div>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const scrollToSection = (sectionId) => { setActiveSection(sectionId); const element = document.getElementById(sectionId); if (element) { element.scrollIntoView({ behavior: 'smooth' }); } };

  return (
    <div className="min-h-screen bg-[#05050a] text-slate-200 font-sans selection:bg-cyan-500/30">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#05050a]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20"><Cloud size={18} className="text-white" /></div>
            <span className="font-bold text-lg tracking-tight text-white">CLOUD<span className="text-cyan-400">.</span>ARCH</span>
          </div>
          <div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5">
            {['home', 'expertise', 'work', 'contact'].map((item) => (<NavItem key={item} section={item} active={activeSection} onClick={scrollToSection} />))}
          </div>
          <button className="md:hidden text-white" onClick={() => scrollToSection('contact')}><Mail size={24} /></button>
        </div>
      </nav>
      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32">
        <section id="home" className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-900/50 text-emerald-400 text-xs font-mono tracking-wide">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span> SYSTEMS OPERATIONAL
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">Architecting <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Planetary Scale</span></h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">{personalInfo.tagline} Specializing in high-availability Kubernetes clusters, serverless event meshes, and zero-trust security.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-white/5">
              {stats.map((stat, i) => (<div key={i} className="space-y-1"><div className="text-2xl font-bold text-white">{stat.value}</div><div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div></div>))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => scrollToSection('work')} className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2">View Architecture <ChevronRight size={18} /></button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3 border border-slate-700 text-slate-300 font-medium rounded-lg hover:bg-slate-900 transition-colors">Contact Me</button>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
             <div className="relative w-full max-w-md aspect-square">
                <div className="absolute -left-12 top-10 z-20 bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-2xl animate-[bounce_4s_infinite]">
                  <div className="flex items-center gap-3"><div className="p-2 bg-orange-500/20 rounded-lg text-orange-400"><Award size={24} /></div><div><div className="text-xs text-slate-400">Certified</div><div className="font-bold text-sm text-white">AWS Professional</div></div></div>
                </div>
                <div className="absolute -right-4 bottom-20 z-20 bg-slate-900/90 backdrop-blur border border-slate-700 p-4 rounded-xl shadow-2xl animate-[bounce_5s_infinite]">
                  <div className="flex items-center gap-3"><div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Layers size={24} /></div><div><div className="text-xs text-slate-400">Certified</div><div className="font-bold text-sm text-white">Kubernetes Admin</div></div></div>
                </div>
                <div className="w-full h-full rounded-[2rem] overflow-hidden border border-slate-700 relative group">
                  <img src={personalInfo.image} alt="Profile" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6"><TerminalBlock /></div>
                </div>
             </div>
          </div>
        </section>
        <section className="border-y border-white/5 py-12 bg-white/[0.02]">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
            {certifications.map((cert, idx) => (<div key={idx} className="flex items-center gap-3 group"><Award size={32} className={`${cert.color} group-hover:scale-110 transition-transform`} /><div className="text-left"><div className="text-white font-bold leading-tight">{cert.name}</div><div className="text-xs text-slate-500">{cert.issuer} • {cert.date}</div></div></div>))}
          </div>
        </section>
        <section id="expertise"><SectionHeading icon={<Cpu size={24} />} color="text-cyan-400">Technical Stack</SectionHeading><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{skills.map((skill, index) => (<SkillCard key={index} {...skill} />))}</div></section>
        <section><SectionHeading icon={<Network size={24} />} color="text-violet-400">System Design</SectionHeading><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{architectures.map((arch, index) => (<ArchitectureCard key={index} arch={arch} />))}</div></section>
        <section id="work"><SectionHeading icon={<Briefcase size={24} />} color="text-emerald-400">Engineering Path</SectionHeading><div className="max-w-4xl mx-auto pl-4 md:pl-0">{experience.map((job, index) => (<TimelineItem key={index} job={job} isLast={index === experience.length - 1} />))}</div></section>
        <section id="contact" className="pb-10">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-12 text-center border border-slate-800 relative overflow-hidden">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
             <div className="relative z-10 max-w-2xl mx-auto space-y-8">
               <h2 className="text-4xl font-bold text-white">Ready to scale?</h2>
               <p className="text-slate-400">Let's discuss how we can improve your infrastructure's reliability, security, and cost-efficiency.</p>
               <div className="flex justify-center gap-4"><a href={personalInfo.socials.email} className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-medium transition-colors">Initiate Handshake</a><a href={personalInfo.socials.linkedin} className="px-6 py-3 border border-slate-700 hover:border-slate-500 text-white rounded-lg font-medium transition-colors">LinkedIn</a></div>
             </div>
          </div>
          <div className="mt-12 text-center text-slate-600 text-xs font-mono"><div>SYSTEM_ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</div><div>LOCATION: CLOUD_REGION_GLOBAL</div><div className="mt-2">© {new Date().getFullYear()} {personalInfo.name}. All systems normal.</div></div>
        </section>
      </main>
    </div>
  );
}
