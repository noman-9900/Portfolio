import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  ChevronDown,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Quote,
  Search,
  Sun,
  X,
} from 'lucide-react';
import profileImage from './assets/profile.jpeg';
import resumePdf from '@assets/Cv.pdf_(5)_1784996020679.pdf';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publication', href: '#publication' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const skills = [
  { group: 'Languages & core', items: ['Python', 'C++ / OOP', 'HTML5', 'CSS', 'JavaScript'] },
  { group: 'AI & deep learning', items: ['AI | ML', 'Deep Learning', 'CNN Models', 'Model Training | Testing', 'NLP Fundamentals'] },
  { group: 'Vision & data', items: ['OpenCV', 'Pytorch', 'TensorFlow', 'Data Preprocessing', 'NumPy | SymPy', 'Matplotlib | Seaborn'] },
  { group: 'Product & workflow', items: ['React.js | Next.js', 'Tailwind CSS', 'UI / UX Design', 'Git and GitHub', 'Microsoft Office'] },
  { group: 'Soft skills', items: ['Problem Solving', 'Leadership', 'Communication', 'Time Management', 'Punctual', 'Team Collaboration', 'Project Management'] },
];

const chipTints = [
  'bg-rose-100/55 border-rose-200/75 dark:bg-rose-900/25 dark:border-rose-800/50',
  'bg-violet-100/55 border-violet-200/75 dark:bg-violet-900/25 dark:border-violet-800/50',
  'bg-sky-100/55 border-sky-200/75 dark:bg-sky-900/25 dark:border-sky-800/50',
  'bg-emerald-100/55 border-emerald-200/75 dark:bg-emerald-900/25 dark:border-emerald-800/50',
  'bg-amber-100/55 border-amber-200/75 dark:bg-amber-900/25 dark:border-amber-800/50',
];

const projects = [
  {
    title: 'Bone Abnormalities detection by using medical imaging',
    type: 'Deep learning · Healthcare',
    summary: 'Developed deep learning based medical image classification system. Implemented EfficientNet + ResNet models and achieved high validation performance.',
    tags: ['EfficientNet', 'ResNet', 'Computer Vision'],
    href: 'https://github.com/noman-9900/Detection-of-Bone-Abnormalities-Using-Medical-Imaging',
    featured: true,
  },
  {
    title: 'Lumina Gallery',
    type: 'Responsive web application',
    summary: 'Built a responsive image gallery featuring category filtering, real-time search, voice search, interactive lightbox, and dark/light theme.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    featured: false,
  },
  {
    title: 'Bank Management',
    type: 'Object-oriented programming',
    summary: 'A command bases project in which just OOP and C++ language implemented.',
    tags: ['C++', 'OOP'],
    featured: false,
  },
  {
    title: 'Shoe Factory Network Architecture',
    type: 'Network architecture',
    summary: 'Network Architecture based Project designed by using Core Switches, Servers, Access Points and all the things required for project.',
    tags: ['Switches', 'Servers', 'Access Points'],
    featured: false,
  },
];

const contactLinks = [
  { label: 'Email', value: 'nomankhan7256@gmail.com', href: 'mailto:nomankhan7256@gmail.com', icon: Mail },
  { label: 'Phone', value: '+923117642893', href: 'tel:+923117642893', icon: Phone },
  { label: 'WhatsApp', value: 'Message on WhatsApp', href: 'https://wa.me/923117642893', icon: MessageCircle },
  { label: 'LinkedIn', value: 'muhammad-noman-khan-81a22a366', href: 'https://www.linkedin.com/in/muhammad-noman-khan-81a22a366', icon: Linkedin },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mono-font mb-3 text-xs font-medium uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="display-font text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-muted-foreground">{text}</p>}
    </div>
  );
}

function App() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('noman-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(saved ? saved === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('noman-theme', dark ? 'dark' : 'light');
  }, [dark]);

  const copyDoi = async () => {
    await navigator.clipboard?.writeText('https://doi.org/10.5281/zenodo.21062147');
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="min-h-[100dvh] overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#top" className="group flex items-center gap-3" data-testid="link-logo">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground transition-transform group-hover:rotate-6">MN</span>
            <span className="hidden text-sm font-bold tracking-tight sm:block">Muhammad Noman Khan</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-xs font-semibold text-muted-foreground hover:bg-secondary hover:text-foreground" data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={resumePdf} download="Muhammad-Noman-Khan-CV.pdf" className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-bold hover:border-primary hover:text-primary sm:flex" data-testid="link-resume-nav">
              <Download size={14} /> Resume
            </a>
            <button type="button" onClick={() => setDark((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:border-primary hover:text-primary" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} data-testid="button-theme-toggle">
              {dark ? <Sun size={17} /> : <Moon size={17} />}
            </button>
            <button type="button" onClick={() => setMenuOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} data-testid="button-mobile-menu">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold hover:bg-secondary" data-testid={`link-mobile-${item.label.toLowerCase()}`}>{item.label}</a>
              ))}
              <a href={resumePdf} download="Muhammad-Noman-Khan-CV.pdf" className="mt-2 flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground" data-testid="link-resume-mobile"><Download size={16} /> Download resume</a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="surface-grid relative isolate flex items-center overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32" aria-labelledby="hero-title">
          <div className="pointer-events-none absolute -right-20 top-32 -z-10 h-72 w-72 rounded-full border border-primary/15 sm:h-[430px] sm:w-[430px]">
            <div className="absolute inset-8 rounded-full border border-primary/15" />
            <div className="absolute -left-2 top-1/2 h-4 w-4 rounded-full bg-accent shadow-[0_0_0_8px_hsl(var(--accent)/.13)]" />
          </div>
          <div className="pointer-events-none absolute -bottom-36 left-[-7rem] -z-10 h-80 w-80 rounded-full bg-secondary/70 blur-3xl" />
          <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 lg:px-10">
            <div>
              <div className="animate-rise mb-8 flex items-center gap-4">
                <div className="relative h-[76px] w-[76px] shrink-0 overflow-hidden rounded-full border-4 border-card shadow-[0_0_0_1px_hsl(var(--primary)/.22),var(--shadow-soft)]">
                  <img src={profileImage} alt="Muhammad Noman Khan" className="h-full w-full object-cover" data-testid="img-profile" />
                </div>
                <div>
                  <p className="mono-font text-[11px] uppercase tracking-[0.18em] text-primary">Available for opportunities</p>
                  <p className="mt-1 text-sm text-muted-foreground">Lahore, Punjab · Pakistan</p>
                </div>
              </div>
              <p className="animate-rise delay-1 mono-font mb-4 text-sm font-medium uppercase tracking-[0.18em] text-primary">Computer Science · AI Engineering</p>
               <h1 id="hero-title" className="animate-rise delay-2 display-font max-w-2xl text-[clamp(2.25rem,5vw,4.25rem)] font-bold leading-[0.96] tracking-[-0.065em]">
                 Turning Data into Intelligent<br />Systems
              </h1>
              <p className="animate-rise delay-3 mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                 AI Engineer specializing in Computer Vision, Deep Learning, and Medical Imaging. Passionate about building intelligent healthcare solutions using Python and modern AI technologies.
              </p>
              <div className="animate-rise delay-4 mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary/90" data-testid="link-hero-projects">
                  Explore projects <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
                <a href="mailto:nomankhan7256@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3.5 text-sm font-bold hover:border-primary hover:text-primary" data-testid="link-hero-contact">
                  Let&apos;s connect <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-muted-foreground">
                <a href="https://github.com/noman-9900" target="_blank" rel="noreferrer" className="interactive-line flex items-center gap-2 text-xs font-semibold" data-testid="link-hero-github"><Github size={15} /> GitHub</a>
                <a href="https://www.linkedin.com/in/muhammad-noman-khan-81a22a366" target="_blank" rel="noreferrer" className="interactive-line flex items-center gap-2 text-xs font-semibold" data-testid="link-hero-linkedin"><Linkedin size={15} /> LinkedIn</a>
                <span className="hidden h-4 w-px bg-border sm:block" />
              </div>
            </div>
          </div>
        </section>

         <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-20">
             <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] card-lift sm:p-9">
               <p className="mono-font mb-10 text-xs uppercase tracking-[0.2em] text-primary">About</p>
               <BrainCircuit size={27} className="mb-10 text-primary" />
               <h2 className="display-font text-2xl font-bold leading-tight sm:text-3xl">From pixels to patterns</h2>
               <p className="mt-4 text-sm leading-7 text-muted-foreground">My work sits where intelligent systems meet real-world context: healthcare, image classification, and applications that make technical ideas useful.</p>
             </div>
              <div className="space-y-8">
                <div>
                  <Code2 size={27} className="mb-5 text-primary" />
                  <p className="max-w-2xl text-base leading-8 text-muted-foreground">Strong foundations in software development, analytical problem-solving, and translating academic knowledge into practical projects.</p>
                </div>
                <div className="border-l-2 border-accent pl-6">
                  <Quote size={22} className="mb-3 text-accent" />
                  <p className="display-font max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl">&ldquo;Seeking opportunities to contribute technical expertise while growing in AI Engineering and Software Development.&rdquo;</p>
                </div>
              </div>
          </div>
        </section>

         <section id="skills" className="scroll-mt-24 bg-secondary/45 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <SectionHeading eyebrow="Capabilities" title="Tools I reach for" text="A growing technical toolkit grounded in Python, machine learning, and thoughtful product development." />
            <div className="grid gap-4 md:grid-cols-2">
              {skills.map((skill, skillIndex) => (
                <div key={skill.group} className="card-lift rounded-3xl border border-border bg-card p-6 sm:p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <h3 className="display-font text-lg font-bold">{skill.group}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => <span key={item} className={`rounded-full border px-3 py-2 text-xs font-semibold text-muted-foreground ${chipTints[skillIndex]}`}>{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

         <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <SectionHeading eyebrow="Selected work" title="Projects with a point of view" text="A selection of academic and practical builds across intelligent systems, interfaces, and infrastructure." />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <div key={project.title} className={`group relative flex flex-col gap-8 overflow-hidden rounded-3xl border border-border p-7 card-lift sm:p-8 ${project.featured ? 'bg-primary text-primary-foreground lg:col-span-2' : 'bg-card'}`} data-testid={`card-project-${project.title.toLowerCase().replaceAll(' ', '-')}`}>
                <div className="flex items-start justify-between">
                  <span className={`mono-font text-xs ${project.featured ? 'text-secondary' : 'text-primary'}`}>{project.type}</span>
                  {project.href && (
                    <a href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository`} className={`flex h-10 w-10 items-center justify-center rounded-full border transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 ${project.featured ? 'border-primary-foreground/20 hover:bg-primary-foreground/10' : 'border-border hover:border-primary'}`} data-testid="link-project-github">
                      <Github size={17} />
                    </a>
                  )}
                </div>
                <div className="max-w-2xl">
                  <h3 className="display-font text-2xl font-bold leading-tight sm:text-3xl">{project.title}</h3>
                  <p className={`mt-4 max-w-xl text-sm leading-7 ${project.featured ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{project.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag, tagIndex) => <span key={tag} className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold ${project.featured ? 'border-primary-foreground/25 bg-primary-foreground/10 text-secondary' : `${chipTints[(tagIndex + 2) % chipTints.length]} text-muted-foreground`}`}>{tag}</span>)}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="https://www.linkedin.com/in/muhammad-noman-khan-81a22a366" target="_blank" rel="noreferrer" className="interactive-line mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary" data-testid="link-more-projects">Additional practice projects and demonstrations are available on my LinkedIn profile <ExternalLink size={15} /></a>
        </section>

         <section id="publication" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
           <div className="mx-auto max-w-7xl">
             <div className="rounded-[2rem] bg-primary p-7 text-primary-foreground shadow-[var(--shadow-soft)] sm:p-10 lg:p-14">
               <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-16">
                 <div>
                   <p className="mono-font mb-5 text-xs uppercase tracking-[0.2em] text-secondary">Publication</p>
                   <h2 className="display-font max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">Bone Abnormalities Detection Using Medical Imaging</h2>
                   <p className="mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/70">Role: First Author (Muhammad Noman Khan). Research Area: Artificial Intelligence, Deep Learning, Medical Imaging, Computer Vision, Explainable AI (XAI).</p>
                 </div>
                 <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5">
                   <p className="mono-font text-xs uppercase leading-6 tracking-[0.15em] text-secondary">Spectrum of Engineering Sciences</p>
                   <p className="mt-3 text-sm text-primary-foreground/70">Published: March 28, 2026</p>
                 </div>
               </div>
               <div className="mt-8 flex flex-wrap items-center gap-3">
                 <a href="https://thesesjournal.com/index.php/1/article/view/3381" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-3 text-xs font-bold text-secondary-foreground hover:bg-secondary/80" data-testid="link-publication-doi">Read publication <ArrowUpRight size={15} /></a>
                 <button type="button" onClick={copyDoi} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-3 text-xs font-bold text-primary-foreground hover:border-secondary" data-testid="button-copy-doi">{copied ? <Check size={15} /> : <Search size={15} />} {copied ? 'DOI copied' : 'Copy DOI'}</button>
               </div>
             </div>
          </div>
        </section>

        <section id="journey" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
          <SectionHeading eyebrow="Journey" title="Grounded in the fundamentals" />
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-7 card-lift sm:p-9">
              <div className="flex items-start justify-between"><GraduationCap size={28} className="text-primary" /><span className="mono-font text-xs text-muted-foreground">2022 — 2026</span></div>
              <h3 className="display-font mt-14 text-2xl font-bold">University of Narowal</h3>
              <p className="mt-2 text-sm font-semibold text-primary">Computer Science · Graduated</p>
              <div className="mt-7 flex items-center justify-between border-t border-border pt-5 text-sm text-muted-foreground"><span>Oct 2022 — Jun 2026</span><span className="mono-font font-medium text-foreground">CGPA 3.13</span></div>
            </div>
            <div className="rounded-3xl border border-border bg-card p-7 card-lift sm:p-9">
              <p className="mono-font text-xs uppercase tracking-[0.16em] text-primary">Certification · Jun 2026</p>
              <div className="mt-9 space-y-5">
                {['AI Fundamentals', 'AI for Writing and Communication'].map((certificate) => <div key={certificate} className="flex items-start gap-4 border-b border-border pb-5 last:border-0 last:pb-0"><span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground"><Check size={14} /></span><div><h3 className="font-bold">{certificate}</h3><p className="mt-1 text-xs text-muted-foreground">Offered by Google from Coursera</p></div></div>)}
              </div>
            </div>
          </div>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-border p-7"><p className="mono-font text-xs uppercase tracking-[0.16em] text-primary">Interests</p><p className="mt-5 font-bold">Problem-Solving &amp; Algorithm Design<br />Machine Learning {'{'}AI{'}'}</p></div>
            <div className="rounded-3xl border border-border p-7"><p className="mono-font text-xs uppercase tracking-[0.16em] text-primary">Activities</p><p className="mt-5 font-bold">Learning and updating Computer science topics<br />Surfing through Internet</p></div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-secondary/45 py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div><p className="mono-font mb-3 text-xs uppercase tracking-[0.2em] text-primary">Contact</p><h2 className="display-font text-4xl font-bold leading-[0.95] sm:text-6xl">Let&apos;s make the next thing useful</h2><p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">Open to opportunities where I can contribute technical expertise while growing in AI Engineering and Software Development.</p><a href={resumePdf} download="Muhammad-Noman-Khan-CV.pdf" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary/90" data-testid="link-resume-contact"><Download size={16} /> Download CV</a></div>
              <div className="grid gap-3 sm:grid-cols-2">
                {contactLinks.map((link) => { const Icon = link.icon; return <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 card-lift" data-testid={`link-contact-${link.label.toLowerCase()}`}><span className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground"><Icon size={18} /></span><span><span className="block text-xs font-bold text-muted-foreground">{link.label}</span><span className="mt-1 block max-w-[190px] truncate text-sm font-semibold">{link.value}</span></span></span><ArrowUpRight size={16} className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></a>; })}
                <a href="https://github.com/noman-9900" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 card-lift sm:col-span-2" data-testid="link-contact-github"><span className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground"><Github size={18} /></span><span><span className="block text-xs font-bold text-muted-foreground">GitHub</span><span className="mt-1 block text-sm font-semibold">github.com/noman-9900</span></span></span><ArrowUpRight size={16} className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-7 text-xs text-muted-foreground sm:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-semibold text-foreground">Muhammad Noman Khan</p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://github.com/noman-9900" target="_blank" rel="noreferrer" className="interactive-line inline-flex items-center gap-2 font-semibold hover:text-primary" aria-label="Visit GitHub profile" data-testid="link-footer-github"><Github size={15} /> GitHub</a>
              <a href="https://wa.me/923117642893" target="_blank" rel="noreferrer" className="interactive-line inline-flex items-center gap-2 font-semibold hover:text-primary" aria-label="Message on WhatsApp" data-testid="link-footer-whatsapp"><MessageCircle size={15} /> WhatsApp</a>
              <a href="https://www.linkedin.com/in/muhammad-noman-khan-81a22a366" target="_blank" rel="noreferrer" className="interactive-line inline-flex items-center gap-2 font-semibold hover:text-primary" aria-label="Visit LinkedIn profile" data-testid="link-footer-linkedin"><Linkedin size={15} /> LinkedIn</a>
              <a href="mailto:nomankhan7256@gmail.com" className="interactive-line inline-flex items-center gap-2 font-semibold hover:text-primary" aria-label="Send an email" data-testid="link-footer-email"><Mail size={15} /> Email</a>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="mono-font">Built with curiosity · Lahore, Pakistan · 2026</p>
            <a href="#top" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent" data-testid="link-back-top">Back to top <ChevronDown size={14} className="rotate-180" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;