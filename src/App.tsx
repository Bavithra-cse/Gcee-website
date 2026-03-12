import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import logo from './assets/logo.jpeg';
import gcee from './assets/gcee.jpeg';
import gce1 from './assets/gce1.jpeg';
import tcsLogo from './assets/tcs.jpeg';
import infosysLogo from './assets/infosys.jpeg';
import zohoLogo from './assets/zoho.jpeg';
import hexawareLogo from './assets/hexaware.jpeg';
import techmahindraLogo from './assets/techmahindra.jpeg';
import tafeLogo from './assets/tafe.jpeg';
import cognizantLogo from './assets/cognizant.jpeg';
import principalImg from './assets/principal.jpeg';

import mainCampusImg from './assets/maincampus.jpeg';
import sportsImg from './assets/sports.jpeg';
import auditoriumImg from './assets/auditorium.jpeg';
import researchImg from './assets/research.jpeg';

// CSE Staff Images
import annapooraniImg from './assets/cse_staffs/annapoorani.jpeg';
import gvImg from './assets/cse_staffs/gv.jpeg';
import kavidhaImg from './assets/cse_staffs/kavidha.jpeg';
import mageshImg from './assets/cse_staffs/magesh.jpeg';
import palanisamyImg from './assets/cse_staffs/palanisamy.jpeg';
import rssImg from './assets/cse_staffs/rss.jpeg';
import thenmozhiImg from './assets/cse_staffs/thenmozhi.jpeg';
import thilagavathiImg from './assets/cse_staffs/thilagavathi.jpeg';
import vasukiImg from './assets/cse_staffs/vasuki.jpeg';
import {
  Menu, X, Moon, Sun, ChevronDown, Award, BookOpen, Users,
  Building2, Briefcase, Microscope, Rocket, GraduationCap,
  MapPin, Mail, Phone, ExternalLink, Facebook, Twitter, Linkedin, Youtube,
  ArrowRight, Trophy, Lightbulb, Library, Dumbbell, Bus, HeartPulse,
  Stethoscope
} from 'lucide-react';

import { CampusGallery } from './components/CampusGallery';
import { PlacementCell } from './components/Placement';

// --- Components ---

const StatCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = target;
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <div ref={nodeRef}>{count}{suffix}</div>;
};

const Reveal = ({ children, direction = 'up', delay = 0 }: { children: React.ReactNode; direction?: 'up' | 'left' | 'right'; delay?: number }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0
    },
    visible: { opacity: 1, y: 0, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const notices = [
  { id: '01', isNew: true, title: 'Pre-Incubation Centre at GCE Erode', desc: 'Delighted to announce that our college has been sanctioned a Pre-Incubator by StartupTN.' },
  { id: '02', isNew: true, title: 'LABMAN Probe Sonicator at Mechanical Department', desc: 'Mechanical department has enhanced its facilities with the installation of a LABMAN "Probe Sonicator".' },
  { id: '03', isNew: true, title: 'Congratulations to Our Proud Student', desc: 'Our M.E(CSE) student V. Krishnamoorthy got placed in Sierra Support Centre Pvt Ltd with annual package Rs.38.5 Lakhs.' },
  { id: '04', isNew: false, title: 'Congratulations to Our Proud Students', desc: 'Students R. Gowtham and C. Sahana Priya got placed in Cadence Design Systems, Bangalore with Rs.20.49 Lakhs package.' },
  { id: '05', isNew: false, title: 'Students placed in TCS', desc: 'Students from IT and CSE departments got placed in TCS (July 2024).' },
  { id: '06', isNew: false, title: '1998 Batch Alumni Silver Jubilee Meet', desc: 'Held on 22 & 23 July 2023.' },
  { id: '07', isNew: false, title: '1996 Batch Alumni Silver Jubilee Meet', desc: 'Held on 30.07.2022.' },
  { id: '08', isNew: false, title: '1997 Batch Alumni Silver Jubilee Meet', desc: 'Held on 17.07.2022.' },
];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState<"principal" | "cse" | null>(null);
  const { scrollYProgress } = useScroll();
  const footerCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  // Footer Particle Animation
  useEffect(() => {
    const canvas = footerCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    let pts: any[] = [];
    let raf: number;

    const mkPt = () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.3 + 0.3,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      life: Math.random(),
      ml: 0.55 + Math.random() * 0.45,
      hue: Math.random() > 0.5 ? '0,180,255' : '155,120,255'
    });

    const build = () => {
      pts = [];
      const n = Math.max(25, Math.floor((W * H) / 13000));
      for (let i = 0; i < n; i++) pts.push(mkPt());
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx; p.y += p.vy; p.life += 0.0025;
        if (p.life >= p.ml) { pts[i] = mkPt(); continue; }
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        const alpha = Math.sin((p.life / p.ml) * Math.PI) * 0.45;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue},${alpha})`;
        ctx.fill();
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 80) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,180,255,${(1 - d / 80) * 0.055})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      build();
    };

    window.addEventListener('resize', resize);
    build();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'History', href: '#history' },
    { name: 'Departments', href: '#departments' },
    { name: 'Placements', href: '#placements' },
    { name: 'Campus', href: '#campus' },
    { name: 'Events', href: '#events' },
    { name: 'Alumni', href: '#alumni' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen">
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4db8d4] to-[#e8703a] z-[10000] origin-left shadow-[0_0_8px_#4db8d4]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[1000] px-8 flex items-center justify-between transition-all duration-400 border-b border-[var(--border)] ${isScrolled ? 'h-[60px] bg-[var(--surface)]/90 backdrop-blur-xl shadow-2xl' : 'h-[70px] bg-[var(--bg)]/80 backdrop-blur-lg'}`}>
        <a href="#" className="flex items-center gap-3 no-underline group">
          <img src={logo} className="h-10 w-10 object-contain rounded-full bg-white/90 p-0.5 transition-transform duration-300 group-hover:scale-110" alt="GCEE Logo" />
          <div className="leading-tight">

            <span className="block font-playfair font-extrabold text-[0.95rem] text-[var(--text)]">Govt. College of Engineering, Erode</span>
            <span className="text-[0.65rem] text-[var(--text3)]">Formerly IRTT · Est. 1984 · AICTE Approved</span>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-1 list-none">
          {navLinks.map(link => (
            <li key={link.name}>
              <a href={link.href} className="text-[0.85rem] font-medium text-[var(--text2)] px-3.5 py-1.5 rounded-lg transition-all duration-200 hover:text-[var(--primary)] hover:bg-[var(--glow)]">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-9 h-9 rounded-full bg-[var(--surface2)] border border-[var(--border)] cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-[var(--glow)] hover:border-[var(--primary)]"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="https://gcee.ac.in/admissionug.php" className="hidden sm:block bg-gradient-to-br from-[var(--primary)] to-[var(--primary2)] text-black font-bold text-[0.8rem] px-5 py-2 rounded-lg no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,212,255,0.4)]">
            Apply Now
          </a>
          <button className="lg:hidden p-2 text-[var(--text)]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-[999] bg-[var(--bg)] pt-[90px] px-8 flex flex-col gap-4"
          >
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl p-4 border-b border-[var(--border)] text-[var(--text)] no-underline"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="mt-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] flex items-center justify-center gap-2"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* College Branding Banner */}
      <div className="pt-[70px] bg-gradient-to-b from-[#020c18] to-[#041226] border-b border-white/5">
        <div className="max-w-[1240px] mx-auto px-8 py-6 flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-4 shadow-2xl flex items-center justify-center group hover:border-[var(--primary)] transition-all duration-300 shrink-0"
            >
              <img src={logo} alt="College Logo" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform duration-500" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="font-[Noto_Sans_Tamil,sans-serif] text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white/90 mb-1">
                அரசினர் பொறியியல் கல்லூரி, ஈரோடு
              </h2>
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-1">
                GOVERNMENT COLLEGE OF ENGINEERING, <span className="text-gradient">ERODE</span>
              </h2>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-[0.8rem] text-[var(--text3)] font-medium uppercase tracking-[2px]">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></div> Formerly IRTT</span>
                <span className="opacity-30">|</span>
                <span>Established 1984</span>
                <span className="opacity-30">|</span>
                <span className="text-[var(--primary)]">Anna University Affiliated</span>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="md:ml-auto w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl p-3 flex shrink-0 items-center justify-center shadow-2xl relative overflow-hidden group hover:border-[var(--primary)] transition-all duration-300"
          >
            {/* Added relative path so missing asset won't crash Vite build. Please add tamilnadu.jpeg to src/assets folder */}
            <img src="/src/assets/tamilnadu.jpeg" alt="Tamil Nadu State Emblem" className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-500" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </motion.div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[var(--bg)]">
        <div className="absolute inset-0 z-0 bg-[var(--bg2)] transition-colors duration-300">
          <div className="absolute inset-0 z-[1]">
            <img src={gcee} alt="GCEE Background" className="w-full h-full object-cover opacity-20 dark:opacity-60 mix-blend-overlay dark:mix-blend-screen transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-[var(--bg)]/20 dark:to-transparent"></div>
          </div>
          <div className="absolute inset-0 z-[2] bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-shift"></div>
          <div className="absolute inset-0 overflow-hidden z-[2]">
            <div className="orb orb1 w-[600px] h-[600px] bg-[radial-gradient(circle,#00d4ff,transparent)] -top-[200px] -left-[200px] animate-orb-float-1 opacity-20 blur-[100px]"></div>
            <div className="orb orb2 w-[400px] h-[400px] bg-[radial-gradient(circle,#ff6b35,transparent)] bottom-[10%] right-[10%] animate-orb-float-2 opacity-20 blur-[100px]"></div>
            <div className="orb orb3 w-[300px] h-[300px] bg-[radial-gradient(circle,#7c3aed,transparent)] top-[40%] left-[60%] animate-orb-float-1 opacity-20 blur-[100px] [animation-direction:reverse]"></div>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-[900px] px-8 pt-20">
          <Reveal direction="up">
            <div className="inline-flex items-center gap-2 bg-[#00d4ff1a] border border-[#00d4ff4d] px-4 py-1.5 rounded-full text-[0.78rem] font-medium text-[var(--primary)] mb-6">
              <span className="w-1.5 h-1.5 bg-[var(--primary)] rounded-full animate-pulse-slow"></span>
              AICTE Approved · Anna University Affiliated
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6">
              <span className="block font-[Noto_Sans_Tamil,sans-serif] text-3xl md:text-4xl lg:text-5xl text-[var(--text)] mb-4">அரசு பொறியியல் கல்லூரி, ஈரோடு</span>
              <span className="block text-[var(--text)]">Government College of</span>
              <span className="block text-gradient">Engineering, Erode</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <p className="text-lg md:text-xl text-[var(--text2)] max-w-[600px] mx-auto mb-10 leading-relaxed">
              Formerly IRTT — Shaping Engineers Since 1984. A premier government institution dedicated to technical excellence.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.6}>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#departments" className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary2)] text-black font-bold text-base px-8 py-3.5 rounded-xl no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,212,255,0.4)]">
                Explore Programs
              </a>
              <button onClick={() => setIsVideoModalOpen(true)} className="bg-white/10 border border-white/20 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all duration-300 hover:border-white/40 hover:bg-white/20 backdrop-blur-md flex items-center gap-2 cursor-pointer shadow-xl hover:-translate-y-1">
                ▶ Discover GCEE
              </button>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.8}>
            <div className="flex flex-wrap gap-8 justify-center mt-16 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="font-mono text-3xl font-bold text-gradient"><StatCounter target={40} suffix="+" /></div>
                <div className="text-[0.8rem] text-[var(--text3)] mt-1">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-3xl font-bold text-gradient"><StatCounter target={3000} suffix="+" /></div>
                <div className="text-[0.8rem] text-[var(--text3)] mt-1">Students Enrolled</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-3xl font-bold text-gradient"><StatCounter target={150} suffix="+" /></div>
                <div className="text-[0.8rem] text-[var(--text3)] mt-1">Expert Faculty</div>
              </div>
              <div className="text-center">
                <div className="font-mono text-3xl font-bold text-gradient"><StatCounter target={500} suffix="+" /></div>
                <div className="text-[0.8rem] text-[var(--text3)] mt-1">Annual Placements</div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-[0.75rem] text-[var(--text3)] tracking-[2px] uppercase">Scroll</span>
          <div className="w-8 h-8 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text3)] animate-bounce-slow">
            <ChevronDown size={16} />
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <CampusGallery />

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20 z-10 cursor-pointer"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative"
            >
              <video
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
                src="/src/assets/gcee.mp4"
                onError={(e) => {
                  (e.target as HTMLVideoElement).style.display = 'none';
                  (e.target as HTMLVideoElement).parentElement!.innerHTML += '<div class="absolute inset-0 flex items-center justify-center text-white/50 bg-neutral-900">Please place gcee.mp4 in the src/assets folder to play this video.</div>';
                }}
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ticker */}
      <div className="bg-gradient-to-r from-[var(--primary2)] via-[#7c3aed] to-[var(--accent)] overflow-hidden relative py-2.5">
        <div className="flex whitespace-nowrap animate-ticker">
          {[1, 2].map(i => (
            <div key={i} className="flex items-center">
              <span className="px-10 text-[0.8rem] font-bold text-black tracking-wider flex items-center gap-4">
                🎉 V. KRISHNAMOORTHY placed at Sierra Support Centre – ₹38.5 LPA ◆
              </span>
              <span className="px-10 text-[0.8rem] font-bold text-black tracking-wider flex items-center gap-4">
                🎉 R. GOWTHAM & C. SAHANA PRIYA placed at Cadence Design Systems – ₹20.49 LPA ◆
              </span>
              <span className="px-10 text-[0.8rem] font-bold text-black tracking-wider flex items-center gap-4">
                📢 Applications open for GCEE Startup TN Pre-Incubation Centre ◆
              </span>
              <span className="px-10 text-[0.8rem] font-bold text-black tracking-wider flex items-center gap-4">
                🏆 NAAC Accredited Institution — AICTE Approved Programs ◆
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        {/* Abstract background glow behind About section */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(99,51,220,0.05)_0%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-[1600px] w-full mx-auto px-8 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* LEFT COLUMN: HERO IMAGE OVERLAY */}
            <Reveal direction="left">
              <div className="relative group">
                {/* Decorative border frame back */}
                <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--gold)]/20 rounded-[32px] md:rounded-[40px] blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>

                <div className="w-full aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/5] rounded-[24px] md:rounded-[32px] bg-gradient-to-br from-[#0a1520] to-[#020c18] border border-white/10 overflow-hidden relative shadow-2xl z-10">
                  <img src={gce1} alt="GCEE Campus" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity brightness-110 contrast-125 transition-transform duration-1000 group-hover:scale-105" />

                  {/* Subtle dark gradient overlay from bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020c18]/90 via-[#020c18]/40 to-transparent"></div>

                  {/* Floating Date Badge */}
                  <div className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></span>
                    <span className="font-mono text-[0.75rem] font-bold text-white tracking-widest uppercase">Est. 1984</span>
                  </div>

                  {/* Principal Details Overlay Card */}
                  <button onClick={() => setSelectedModal('principal')} className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-[var(--surface)]/90 backdrop-blur-2xl border border-white/20 rounded-2xl p-5 md:p-6 flex items-center gap-5 md:gap-6 shadow-[0_20px_40px_rgba(0,0,0,0.6)] transform transition-transform duration-500 hover:-translate-y-2 hover:border-[var(--primary)]/50 group/card text-left cursor-pointer w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)]">
                    <div className="w-16 h-16 md:w-22 md:h-22 rounded-full bg-gradient-to-br from-[#0f1b29] to-[#1a2a3a] border border-[var(--primary)]/30 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,212,255,0.15)] overflow-hidden relative group-hover/card:border-[var(--primary)] transition-colors duration-300">
                      <img src={principalImg} alt="Principal" className="w-full h-full object-cover relative z-10" />
                    </div>
                    <div>
                      <div className="text-[0.65rem] md:text-[0.7rem] text-[var(--primary)] font-bold tracking-[0.2em] uppercase mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-px bg-[var(--primary)]"></span>
                        Principal (View Profile)
                      </div>
                      <h4 className="font-playfair text-xl md:text-2xl font-bold text-white mb-1 group-hover/card:text-[var(--primary)] transition-colors">Dr. A. Saradha, Ph.D.</h4>
                      <p className="text-[0.75rem] md:text-[0.8rem] text-white/50 font-medium tracking-wide">34 Years Exp. · Semantic Web</p>
                    </div>
                  </button>
                </div>

                {/* Floating Stats Card */}
                <div className="absolute -left-6 bottom-32 md:-left-12 lg:-left-16 lg:bottom-40 bg-[var(--surface)]/80 border border-white/10 rounded-2xl p-5 backdrop-blur-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-1 z-20 animate-float">
                  <div className="text-4xl text-[var(--gold)] mb-1 drop-shadow-lg">⭐</div>
                  <div className="font-mono text-2xl font-bold text-white tracking-tight">NAAC</div>
                  <div className="text-[0.7rem] text-[var(--primary)] font-bold tracking-widest uppercase">A+ Grade</div>
                </div>
              </div>
            </Reveal>

            {/* RIGHT COLUMN: TEXT CONTENT */}
            <Reveal direction="right">
              <div className="flex flex-col h-full justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[var(--primary)] text-[0.75rem] font-bold tracking-widest uppercase mb-6 self-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></div> About GCEE
                </div>

                <h2 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
                  A Legacy of <br className="hidden lg:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--gold)]">Engineering Excellence</span>
                </h2>

                <div className="space-y-6 text-lg md:text-xl text-[var(--text2)] leading-relaxed font-light mb-12">
                  <p>
                    Established in 1984 under the Institute of Road and Transport (IRTT), GCEE has grown into a premier technical institution. Governed by the Directorate of Technical Education (DoTE) and affiliated to Anna University, Chennai.
                  </p>
                  <p className="text-base text-[var(--text3)]">
                    Located on a lush 200-acre campus near Erode, the institute offers 8 UG courses and 2 PG courses, fostering an ecosystem of innovation, research, and holistic development for future-ready engineers.
                  </p>
                </div>

                {/* Modern Highlights Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                  {[
                    { icon: '🏛️', label: 'Govt. Run', desc: 'DoTE Governed' },
                    { icon: '🎓', label: 'Affiliated', desc: 'Anna University' },
                    { icon: '📋', label: 'Approved', desc: 'AICTE Recognized' },
                    { icon: '🌟', label: 'Autonomous', desc: 'Awaiting Status' }
                  ].map(item => (
                    <div key={item.label} className="group relative bg-[#0a1520]/50 border border-white/5 rounded-2xl p-5 hover:bg-[var(--surface)] hover:border-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                      <div className="relative z-10">
                        <div className="text-3xl mb-3 drop-shadow-md group-hover:scale-110 transition-transform origin-left">{item.icon}</div>
                        <div className="font-bold text-white text-sm md:text-base tracking-wide mb-1">{item.label}</div>
                        <div className="text-[0.7rem] text-[var(--text3)] font-medium uppercase tracking-wider">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Vision & Mission Premium Cards */}
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  {/* Mission Card */}
                  <div className="relative bg-[#0a1520] rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(124,58,237,0.15)] transition-all duration-500">
                    {/* Colored Accent Bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#7c3aed] to-[#3b82f6] rounded-l-2xl group-hover:w-2 transition-all duration-300"></div>
                    {/* Subtle Background Glow */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#7c3aed]/10 rounded-full blur-3xl group-hover:bg-[#7c3aed]/20 transition-all duration-500 pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                          🎯
                        </div>
                        <h3 className="font-playfair text-3xl font-bold text-white tracking-wide group-hover:text-[#7c3aed] transition-colors duration-300">
                          Our Mission
                        </h3>
                      </div>
                      <p className="text-[0.95rem] text-[var(--text2)] leading-relaxed font-light">
                        To provide quality engineering education, foster research, evolve innovative applications, and mould students with professional responsibility to lead society for the betterment of the nation.
                      </p>
                    </div>
                  </div>

                  {/* Vision Card */}
                  <div className="relative bg-[#0a1520] rounded-2xl p-8 md:p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-white/5 overflow-hidden group hover:-translate-y-2 hover:shadow-[0_20px_50px_-10px_rgba(0,212,255,0.15)] transition-all duration-500">
                    {/* Colored Accent Bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#00d4ff] to-[#007acc] rounded-l-2xl group-hover:w-2 transition-all duration-300"></div>
                    {/* Subtle Background Glow */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#00d4ff]/10 rounded-full blur-3xl group-hover:bg-[#00d4ff]/20 transition-all duration-500 pointer-events-none"></div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                          🌍
                        </div>
                        <h3 className="font-playfair text-3xl font-bold text-white tracking-wide group-hover:text-[#00d4ff] transition-colors duration-300">
                          Our Vision
                        </h3>
                      </div>
                      <p className="text-[0.95rem] text-[var(--text2)] leading-relaxed font-light">
                        Providing the impetus in the young minds through value based quality education and imparting sound knowledge, intellectual skills, good character and innovative ideas to develop potential leadership, professional excellence and enlightened services to the global society.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* News / Notice Board Section */}
      <section id="news" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#0a0f1f] to-[#050814]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,212,255,0.05)_0%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,212,255,0.03)_0%,transparent_60%)] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <Reveal direction="up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00d4ff]/20 bg-[#00d4ff]/10 text-[#00d4ff] text-[0.75rem] font-bold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse shadow-[0_0_10px_#00d4ff]"></span> Updates
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-extrabold mb-4 text-white">
                From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#3b82f6]">News Room</span>
              </h2>
              <p className="text-[var(--text2)] max-w-[560px] mx-auto">Stay updated with the latest announcements, achievements, and events from our campus.</p>
            </Reveal>
          </div>

          <Reveal direction="up" delay={0.2}>
            <div className="relative max-w-4xl mx-auto h-[500px] overflow-hidden rounded-2xl bg-white/5 border border-[#00d4ff]/20 backdrop-blur-md shadow-[0_0_40px_rgba(0,212,255,0.05)]">
              {/* Gradient Overlays for Smooth Scrolling Disappearance */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0a0f1f]/90 to-transparent z-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050814]/90 to-transparent z-20 pointer-events-none"></div>

              {/* Scrolling Container */}
              <div className="flex flex-col animate-marquee-vertical hover:animate-marquee-vertical-hover pt-[100px]">
                {/* Loop notices twice for infinite seemingly seamless scroll */}
                {[...notices, ...notices].map((notice, idx) => (
                  <div key={`${notice.id}-${idx}`} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 md:px-8 border-b border-white/5 hover:bg-white/5 transition-colors group cursor-pointer w-full relative">
                    {/* Number Indicator */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#00d4ff]/30 bg-[#00d4ff]/10 flex items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.1)] group-hover:bg-[#00d4ff]/20 transition-colors duration-500">
                      <span className="text-[#00d4ff] font-mono text-xl font-bold">{notice.id}</span>
                    </div>

                    {/* Content Body */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1.5">
                        <h3 className="font-semibold text-lg text-white leading-snug tracking-wide group-hover:text-[#00d4ff] transition-colors duration-300">
                          {notice.title}
                        </h3>
                        {notice.isNew && (
                          <span className="px-2 py-0.5 rounded text-[0.65rem] font-bold tracking-widest bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-[#cfd6ff] text-[0.85rem] leading-relaxed font-light shadow-sm line-clamp-2 sm:line-clamp-none">
                        {notice.desc}
                      </p>
                    </div>

                    {/* Action Link */}
                    <div className="flex-shrink-0 sm:ml-4">
                      <span className="inline-flex items-center gap-2 text-[0.8rem] font-bold text-[#00d4ff] uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                        Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div className="mt-20 text-center">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent mb-12 shadow-[0_0_10px_rgba(0,212,255,0.2)]"></div>
              <a href="#" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00d4ff] to-[#3b82f6] text-[#050814] font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-xl hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,212,255,0.4)] transition-all duration-300 group">
                View All News <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-[#0a1520] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,180,255,0.05)_0%,transparent_70%)] rounded-full -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
        <div className="max-w-[1240px] mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[var(--primary)] text-[0.75rem] font-bold tracking-widest uppercase mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]"></div> Our Journey
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-extrabold mb-4">
              History of <span className="text-gradient">GCEE (IRTT)</span>
            </h2>
          </div>

          <div className="relative border-l-2 border-[var(--primary)]/30 pl-8 ml-4 md:ml-0 space-y-12">

            <Reveal direction="up">
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[var(--surface)] border-4 border-[var(--primary)] shadow-[0_0_10px_var(--primary)] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="bg-[var(--surface)]/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[var(--primary)]/50 transition-colors duration-300 shadow-xl">
                  <h3 className="font-mono text-2xl font-bold text-[var(--gold)] mb-3">1984</h3>
                  <p className="text-[var(--text2)] text-lg leading-relaxed">
                    The Institute commenced operations on <strong>10th October 1984</strong> as an Automobile Research-oriented Institution under the aegis of the Institute of Road Transport (IRT), Taramani, Chennai, and the State Transport Undertakings (STUs).
                  </p>
                  <p className="text-[var(--text3)] mt-3 leading-relaxed">
                    Established with the noble vision of delivering quality engineering education to the underprivileged and economically weaker sections of society, the Institute is unique in its mission and foundation.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up">
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[var(--surface)] border-4 border-[#7c3aed] shadow-[0_0_10px_#7c3aed] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="bg-[var(--surface)]/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[#7c3aed]/50 transition-colors duration-300 shadow-xl">
                  <h3 className="font-mono text-2xl font-bold text-[#7c3aed] mb-3">1986 – 2012</h3>
                  <p className="text-[var(--text2)] text-lg leading-relaxed">
                    At inception, the Institute admitted 120 students across Automobile, Computer Technology, Mechanical, and Transportation Engineering.
                  </p>
                  <p className="text-[var(--text3)] mt-3 leading-relaxed">
                    The intake gradually expanded from 120 to 420 students by 2012. Several new branches were added, including Electronics & Communication (1986), Electrical & Electronics (1994), and Information Technology (2002).
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up">
              <div className="relative group">
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-[var(--surface)] border-4 border-[#00d4ff] shadow-[0_0_10px_#00d4ff] group-hover:scale-125 transition-transform duration-300"></div>
                <div className="bg-[var(--surface)]/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-[#00d4ff]/50 transition-colors duration-300 shadow-xl">
                  <h3 className="font-mono text-2xl font-bold text-[#00d4ff] mb-3">2021 & Beyond</h3>
                  <p className="text-[var(--text2)] text-lg leading-relaxed">
                    In 2021, the college was transferred under the governance of the <strong>Directorate of Technical Education (DoTE)</strong> and subsequently renamed as <strong>Government College of Engineering, Erode</strong>.
                  </p>
                  <p className="text-[var(--text3)] mt-3 leading-relaxed">
                    Today, it stands as a premier Government Engineering College affiliated with Anna University. Located on a sprawling 200-acre campus, it functions as the Zonal Headquarters for Zone-XI (Erode Zone). A new course in CSE (Data Science) is also set to launch for the 2025-26 academic year.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Stats Band */}
      <div className="bg-[#020c18] border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-50"></div>
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5 relative z-10">
          {[
            { icon: <Users size={32} />, target: 3000, label: 'Enrolled Students' },
            { icon: <GraduationCap size={32} />, target: 150, label: 'Expert Faculty' },
            { icon: <Building2 size={32} />, target: 120, label: 'Top Recruiters' },
            { icon: <Microscope size={32} />, target: 85, label: 'High-Tech Labs' }
          ].map((stat, idx) => (
            <div key={idx} className="p-10 lg:p-14 text-center group relative overflow-hidden transition-all duration-500 hover:bg-white/[0.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 group-hover:border-[var(--primary)]/50 group-hover:bg-[var(--primary)]/10 transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="font-mono text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2 flex items-center gap-1 group-hover:text-shadow-glow">
                  <StatCounter target={stat.target} /><span className="text-[var(--primary)]">+</span>
                </div>
                <div className="text-[0.7rem] lg:text-[0.75rem] text-white/40 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Departments */}
      <section id="departments" className="py-24">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label mx-auto">Academic Programs</div>
            <h2 className="font-playfair text-4xl md:text-5xl font-extrabold mb-4">Our <span className="text-gradient">Departments</span></h2>
            <p className="text-[var(--text2)] max-w-[560px] mx-auto">Offering cutting-edge UG and PG programs affiliated to Anna University, designed to produce industry-ready engineers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏗️', title: 'Civil Engineering', desc: 'Structural design, construction management, environmental engineering, and infrastructure development.', intake: '60 | UG', color: '#ff6b35' },
              { icon: '🚗', title: 'Automobile Engineering', desc: 'Vehicle design, powertrain systems, automotive electronics, and sustainable transport technology.', intake: '60 | UG', color: '#00d4ff' },
              { icon: '⚙️', title: 'Mechanical Engineering', desc: 'Manufacturing, thermodynamics, robotics, CAD/CAM, and advanced materials engineering.', intake: '60 | UG', color: '#7c3aed' },
              { icon: '⚡', title: 'Electrical & Electronics', desc: 'Power systems, electrical machines, control systems, smart grids, and renewable energy.', intake: '60 | UG', color: '#ffd166' },
              { icon: '📡', title: 'Electronics & Communication', desc: 'VLSI design, embedded systems, signal processing, wireless communications, and IoT.', intake: '60 | UG', color: '#00d4ff' },
              { icon: '💻', title: 'Computer Science & Engg', desc: 'Algorithms, software engineering, AI, machine learning, cloud computing, and cybersecurity.', intake: '60 | UG', color: '#10b981' },
              { icon: '📊', title: 'CSE (Data Science)', desc: 'Big data analytics, statistical modelling, deep learning, visualization, and data engineering.', intake: '60 | UG', color: '#10b981' },
              { icon: '🌐', title: 'Information Technology', desc: 'Web development, networking, database management, cybersecurity, and enterprise systems.', intake: '60 | UG', color: '#7c3aed' },
              { icon: '🎓', title: 'M.E. CSE', desc: 'Advanced research in AI, distributed systems, high-performance computing and emerging technologies.', intake: 'PG Program', color: '#ff6b35' }
            ].map((dept, idx) => (
              <div key={dept.title}>
                <Reveal delay={idx * 0.05}>
                  <div
                    onClick={dept.title === 'Computer Science & Engg' ? () => setSelectedModal('cse') : undefined}
                    className="group relative bg-[var(--surface)] border border-[var(--border)] rounded-[20px] p-8 cursor-pointer transition-all duration-400 hover:-translate-y-2 hover:border-[var(--primary)] hover:shadow-[0_20px_40px_rgba(0,212,255,0.15)] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-5 bg-white/5" style={{ color: dept.color }}>
                        {dept.icon}
                      </div>
                      <h3 className="font-playfair text-xl font-bold mb-2 group-hover:text-[var(--primary)] transition-colors">{dept.title}</h3>
                      <p className="text-[0.82rem] text-[var(--text3)] leading-relaxed mb-4">{dept.desc}</p>
                      <div className="inline-block font-mono text-[0.7rem] px-2.5 py-1 rounded-md border border-[var(--border)] text-[var(--text3)]">
                        {dept.intake}
                      </div>
                      <div className="absolute bottom-8 right-8 text-xl text-white/10 transition-all duration-300 group-hover:text-[var(--primary)] group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowRight size={20} />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      {/* We are replacing the old placement section with the new detailed PlacementCell component */}
      <PlacementCell />

      {/* Campus Life */}
      <section id="campus" className="py-24 bg-white/5 border-y border-white/5">
        <div className="max-w-[1240px] mx-auto px-8">
          <Reveal direction="up">
            <div className="section-label">Campus Life</div>
            <h2 className="font-playfair text-4xl md:text-5xl font-extrabold mb-4">Life at <span className="text-gradient">GCEE</span></h2>
            <p className="text-[var(--text2)] max-w-[600px] mb-12">A vibrant campus experience with world-class facilities, clubs, sports, and a thriving student community.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 relative group rounded-2xl overflow-hidden cursor-pointer bg-[var(--surface)]">
              <div className="aspect-[21/9] flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-105 border border-white/10 relative">
                <img src={mainCampusImg} alt="Main Campus" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white font-semibold translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-10">
                Main Campus — Bird's Eye View
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer bg-[var(--surface)]">
              <div className="aspect-video md:aspect-auto h-full flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-105 border border-white/10 relative">
                <img src={sportsImg} alt="Sports Complex" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white font-semibold translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-10">
                Sports Complex
              </div>
            </div>
            <div className="relative group rounded-2xl overflow-hidden cursor-pointer bg-[var(--surface)]">
              <div className="aspect-video flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-105 border border-white/10 relative">
                <img src={auditoriumImg} alt="Auditorium" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white font-semibold translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-10">
                Auditorium
              </div>
            </div>
            <div className="md:col-span-2 relative group rounded-2xl overflow-hidden cursor-pointer bg-[var(--surface)]">
              <div className="aspect-[21/9] flex items-center justify-center text-6xl transition-transform duration-500 group-hover:scale-105 border border-white/10 relative">
                <img src={researchImg} alt="Research Laboratories" className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white font-semibold translate-y-full transition-transform duration-300 group-hover:translate-y-0 z-10">
                Research Laboratories
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[var(--bg2)]">
        <div className="max-w-[1240px] mx-auto px-8">
          <div className="text-center mb-16">
            <div className="section-label mx-auto">Get In Touch</div>
            <h2 className="font-playfair text-4xl md:text-5xl font-extrabold mb-4">Contact <span className="text-gradient">Us</span></h2>
            <p className="text-[var(--text2)] max-w-[560px] mx-auto">Reach out to us for admissions, research collaborations, campus visits, or any inquiries.</p>
          </div>

          <div className="max-w-[680px] mx-auto">
            <Reveal direction="up">
              <div className="bg-[var(--surface)] border border-white/10 rounded-[20px] p-10 shadow-2xl">
                <h3 className="font-playfair text-2xl font-bold mb-8 text-center">Send a Message</h3>
                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Message Sent!'); }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.8rem] text-[var(--text3)] font-medium">First Name</label>
                      <input type="text" placeholder="Rajesh" className="bg-[var(--surface)] border border-white/10 rounded-xl px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--glow)] transition-all" required />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[0.8rem] text-[var(--text3)] font-medium">Last Name</label>
                      <input type="text" placeholder="Kumar" className="bg-[var(--surface)] border border-white/10 rounded-xl px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--glow)] transition-all" required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.8rem] text-[var(--text3)] font-medium">Email Address</label>
                    <input type="email" placeholder="rajesh@example.com" className="bg-[var(--surface)] border border-white/10 rounded-xl px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--glow)] transition-all" required />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.8rem] text-[var(--text3)] font-medium">Message</label>
                    <textarea placeholder="Tell us how we can help you..." className="bg-[var(--surface)] border border-white/10 rounded-xl px-4 py-3 text-[var(--text)] outline-none focus:border-[var(--primary)] focus:ring-4 focus:ring-[var(--glow)] transition-all min-h-[120px] resize-y" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary2)] text-black font-bold text-base py-4 rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                    Send Message →
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#020c18] overflow-hidden pt-20">
        <canvas ref={footerCanvasRef} className="absolute inset-0 pointer-events-none z-0" />

        <div className="ft-orb ft-orb-1 absolute rounded-full blur-[110px] pointer-events-none z-0 w-[560px] h-[560px] bg-[radial-gradient(circle,rgba(0,180,255,0.14)_0%,transparent_70%)] -top-[180px] -left-[120px] animate-ft-orb-1"></div>
        <div className="ft-orb ft-orb-2 absolute rounded-full blur-[110px] pointer-events-none z-0 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(99,51,220,0.11)_0%,transparent_70%)] bottom-[30px] -right-[80px] animate-ft-orb-2"></div>

        <div className="relative z-10 max-w-[1240px] mx-auto px-8 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">

            {/* Brand */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative w-[60px] h-[60px] rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-xl overflow-hidden group hover:-translate-y-1 transition-all duration-500">
                  <img src={logo} alt="GCEE" className="w-[80%] h-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="font-bold">
                  <strong className="block text-white text-[0.93rem] tracking-tight text-gradient">GCE, ERODE</strong>
                  <em className="not-italic text-[0.68rem] text-white/40">Formerly IRTT · Est. 1984</em>
                </div>
              </div>
              <p className="text-[0.78rem] font-light leading-loose text-white/40">
                A premier government engineering institution dedicated to technical excellence and innovation since 1984.
              </p>
              <div className="flex gap-2">
                {['NAAC', 'AICTE', 'NIRF'].map(p => (
                  <span key={p} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[0.62rem] font-bold text-[var(--primary)] tracking-wider">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            {/* Links 1 */}
            <div>
              <div className="text-[0.66rem] font-bold uppercase tracking-[2.8px] text-white/90 mb-6 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-gradient-to-r after:from-[#00b4ff] after:to-[#6333dc]">
                Quick Links
              </div>
              <ul className="space-y-2 text-[0.78rem] text-white/40">
                {['Mandatory Disclosure', 'Help Desk', 'EDC', 'IPDC', 'GCEE Mail', 'NPTEL', 'Exam Cell'].map(link => (
                  <li key={link}>
                    <a href="#" className="flex items-center gap-2 transition-all duration-300 hover:text-white hover:translate-x-1">
                      <span className="w-1 h-1 rounded-full bg-[var(--primary)] opacity-30"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links 2 */}
            <div>
              <div className="text-[0.66rem] font-bold uppercase tracking-[2.8px] text-white/90 mb-6 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-gradient-to-r after:from-[#00b4ff] after:to-[#6333dc]">
                Resources
              </div>
              <ul className="space-y-2 text-[0.78rem] text-white/40">
                {['Academic Schedule', 'Staff Forms', 'Alumni Network', 'Anti-Ragging', 'Grievance Redressal', 'Transport'].map(link => (
                  <li key={link}>
                    <a href="#" className="flex items-center gap-2 transition-all duration-300 hover:text-white hover:translate-x-1">
                      <span className="w-1 h-1 rounded-full bg-[var(--primary)] opacity-30"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <div className="text-[0.66rem] font-bold uppercase tracking-[2.8px] text-white/90 mb-6 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-6 after:h-0.5 after:bg-gradient-to-r after:from-[#00b4ff] after:to-[#6333dc]">
                Contact
              </div>
              <div className="space-y-4">
                <a href="https://www.google.com/maps/place/Government+College+of+Engineering+Erode/@11.2753235,77.6065406,17z/data=!3m1!4b1!4m6!3m5!1s0x3ba96d7810fe32d5:0x85349facfaae0dc8!8m2!3d11.2753235!4d77.6091155!16s%2Fg%2F1pp2xjvw2?entry=ttu" target="_blank" rel="noopener noreferrer" className="block bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md group hover:border-[var(--primary)] hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-[0.62rem] font-bold uppercase tracking-widest text-[var(--primary)] mb-2 flex items-center gap-1.5">
                        <MapPin size={12} /> Address
                      </div>
                      <p className="text-[0.75rem] text-white/50 leading-relaxed group-hover:text-white/80 transition-colors">
                        Perundurai Road, Erode – 638052,<br />Tamilnadu, India.
                      </p>
                    </div>
                    <div className="text-white/30 group-hover:text-[var(--primary)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </a>
                <div className="flex flex-col gap-2">
                  <a href="tel:04242533579" className="flex items-center gap-3 text-[0.74rem] text-white/60 hover:text-[var(--primary)] transition-colors">
                    <Phone size={14} /> +91 0424 2533579
                  </a>
                  <a href="mailto:principal@gcee.ac.in" className="flex items-center gap-3 text-[0.74rem] text-white/60 hover:text-[var(--primary)] transition-colors">
                    <Mail size={14} /> principal@gcee.ac.in
                  </a>
                </div>
                <div className="flex gap-2 pt-2">
                  {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all duration-300 hover:-translate-y-1">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6 text-[0.72rem] text-white/30">
            <p>© 2025 Government College of Engineering, Erode. All Rights Reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Popups / Modals */}
      <AnimatePresence>
        {selectedModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative bg-[#0a1520] border border-white/10 rounded-3xl shadow-2xl p-6 md:p-10 w-full overflow-hidden my-auto max-h-full overflow-y-auto ${selectedModal === 'principal' ? 'max-w-2xl' : 'max-w-5xl'}`}
            >
              <button
                onClick={() => setSelectedModal(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-[var(--primary)] hover:border-[var(--primary)] transition-all z-20 cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Principal Content */}
              {selectedModal === 'principal' && (
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10 pt-4">
                  <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden border-2 border-[var(--primary)]/30 shadow-[0_0_30px_rgba(0,212,255,0.15)]">
                    <img src={principalImg} alt="Dr. A. Saradha" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 w-full text-center md:text-left">
                    <div className="inline-flex items-center justify-center md:justify-start gap-2 px-3 py-1 rounded-full border border-white/10 bg-[var(--primary)]/10 text-[var(--primary)] text-[0.7rem] font-bold tracking-widest uppercase mb-4 mx-auto md:mx-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse"></span> Principal of GCEE
                    </div>
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-2">Dr. A. Saradha</h2>
                    <p className="text-[var(--gold)] font-mono text-sm md:text-base mb-6">M.E., Ph.D.</p>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 border-b border-white/5 pb-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--primary)] shrink-0"><Award size={18} /></div>
                        <div>
                          <div className="text-[0.7rem] text-[var(--text3)] uppercase tracking-wider font-bold">Experience</div>
                          <div className="text-white text-sm md:text-base font-medium">34 Years</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 border-b border-white/5 pb-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--primary)] shrink-0"><Lightbulb size={18} /></div>
                        <div>
                          <div className="text-[0.7rem] text-[var(--text3)] uppercase tracking-wider font-bold">Specialization</div>
                          <div className="text-white text-sm md:text-base font-medium">Semantic Web, Neural Networks</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 border-b border-white/5 pb-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--primary)] shrink-0"><Phone size={18} /></div>
                        <div>
                          <div className="text-[0.7rem] text-[var(--text3)] uppercase tracking-wider font-bold">Contact</div>
                          <div className="text-white text-sm md:text-base font-medium">+91-0424 2533579, 9443630000</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-left">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[var(--primary)] shrink-0"><Mail size={18} /></div>
                        <div>
                          <div className="text-[0.7rem] text-[var(--text3)] uppercase tracking-wider font-bold">Email</div>
                          <div className="text-white text-sm md:text-base font-medium">gceeprincipal@gmail.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CSE Department Content */}
              {selectedModal === 'cse' && (
                <div className="relative z-10 w-full pt-4">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-[#10b981]/10 text-[#10b981] text-[0.75rem] font-bold tracking-widest uppercase mb-4 mx-auto">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span> Faculty Directory
                    </div>
                    <h2 className="font-playfair text-3xl md:text-5xl font-extrabold text-white">Computer Science & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#00d4ff]">Engineering</span></h2>
                  </div>

                  {/* HOD Profile Highlight */}
                  <div className="mb-12 bg-[#0d1b26] border border-[#10b981]/20 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden group shadow-[0_10px_30px_rgba(16,185,129,0.05)]">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <img src={kavidhaImg} alt="Dr.A.Kavitha" className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border-2 border-[#10b981]/50 shadow-[0_0_20px_rgba(16,185,129,0.2)] shrink-0 z-10" />
                    <div className="z-10 text-center md:text-left flex-1 w-full">
                      <div className="text-[#10b981] font-bold text-sm tracking-widest uppercase mb-1">Head of the Department</div>
                      <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-1">Dr. A. Kavitha <span className="text-[var(--gold)] text-sm font-mono ml-2">M.E., Ph.D</span></h3>
                      <p className="text-[0.8rem] text-white/60 mb-4">Semantic Web Expert</p>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-left transition-colors hover:border-[#10b981]/50">
                          <div className="text-[0.65rem] text-white/40 uppercase font-bold tracking-wider mb-1">Conferences</div>
                          <div className="font-mono text-xl text-white">3</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-left transition-colors hover:border-[#10b981]/50">
                          <div className="text-[0.65rem] text-white/40 uppercase font-bold tracking-wider mb-1">Journals</div>
                          <div className="font-mono text-xl text-white">6</div>
                        </div>
                        <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-left lg:col-span-2 transition-colors hover:border-[#10b981]/50">
                          <div className="text-[0.65rem] text-white/40 uppercase font-bold tracking-wider mb-1">Contact</div>
                          <div className="text-sm text-white truncate text-ellipsis">9442513055<br /><span className="text-[0.7rem] text-[#10b981]">kavitha@gcee.ac.in</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Staff Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {[
                      { name: 'Mr. R. Sivasubramanian', role: 'Associate Professor', img: rssImg },
                      { name: 'Dr. G. Venkatachalam', role: 'Associate Professor', img: gvImg },
                      { name: 'Dr. A. Kavidha', role: 'Associate Professor', img: null },
                      { name: 'Mrs. M. Annapoorani', role: 'Assistant Professor (SR)', img: annapooraniImg },
                      { name: 'Dr. S. Palanisamy', role: 'Assistant Professor (SR)', img: palanisamyImg },
                      { name: 'Dr. N. Magesh', role: 'Assistant Professor (SR)', img: mageshImg },
                      { name: 'Dr. D.S. Thenmozhi', role: 'Assistant Professor (SR)', img: thenmozhiImg },
                      { name: 'Dr. V. Thilagavathe', role: 'Assistant Professor', img: thilagavathiImg },
                      { name: 'Mrs. N. Vasuki', role: 'Assistant Professor', img: vasukiImg }
                    ].map(staff => (
                      <div key={staff.name} className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:bg-white/[0.08] hover:border-[#10b981]/30 hover:-translate-y-1 group">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black/40 flex justify-center items-center">
                          {staff.img ? (
                            <img src={staff.img} alt={staff.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                          ) : (
                            <Users size={24} className="text-white/20" />
                          )}
                        </div>
                        <div className="flex flex-col justify-center text-left">
                          <h4 className="font-bold text-[0.85rem] md:text-sm text-white leading-tight mb-1 group-hover:text-[#10b981] transition-colors">{staff.name}</h4>
                          <div className="text-[0.65rem] text-white/50">{staff.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-center text-xs text-white/30 mt-8">Note: This is a representative directory containing available records.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
