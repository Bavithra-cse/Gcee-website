import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Briefcase, TrendingUp } from 'lucide-react';

const StatCounter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
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

  return <div ref={nodeRef}>{prefix}{count}{suffix}</div>;
};

const barData = [
  { branch: 'ECE', count: 33 },
  { branch: 'CSE', count: 30 },
  { branch: 'IT', count: 30 },
  { branch: 'CIVIL', count: 25 },
  { branch: 'EEE', count: 24 },
  { branch: 'MECH', count: 16 },
  { branch: 'AUTO', count: 15 },
];

const officialStatsPics = [
  { title: "2020-2024 Batch Details", url: "https://gcee.ac.in/placement/PlacedList2024New1.jpg" },
  { title: "2024-2025 Batch Details", url: "https://gcee.ac.in/placement/PlacedList2025New1.jpg" }
];

const pastPlacements = [
  { year: '2024-2025', companies: 27, placed: 173, highest: '₹ 20.49 LPA' },
  { year: '2020-2024', companies: 26, placed: 189, highest: '₹ 17.50 LPA' }
];

export const PlacementStatistics = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-4xl mx-auto">
        <div className="bg-[var(--surface)]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-[var(--primary)]/20 transition-all duration-700"></div>
          
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-6 flex items-center gap-3">
             <span className="w-8 h-px bg-[var(--primary)]"></span> Overview
          </h2>
          <p className="text-[var(--text2)] leading-relaxed mb-6 text-lg font-light">
            Government College of Engineering, Erode has an active Training and Placement Cell dedicated to preparing students for successful careers. The placement cell organizes campus recruitment drives, training programs, mock interviews, and industry interaction sessions. Every year <strong className="text-[var(--primary)] font-bold">more than 90%</strong> of eligible students get placed in reputed companies across India.
          </p>
          <p className="text-[var(--text3)] leading-relaxed mb-6">
            The placement cell works closely with industries and alumni networks to provide internship opportunities and career guidance to students. Regular workshops, aptitude training sessions, and technical skill development programs are conducted to enhance employability.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-[var(--text2)] font-medium">
             <TrendingUp size={16} className="text-[var(--primary)]" /> Strong relationships with IT, core, and consulting sectors.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Companies Visited', value: 27, icon: <Building2 size={24} />, suffix: ' (Batch 24-25)' },
          { title: 'Students Attended', value: 309, icon: <Users size={24} />, suffix: '' },
          { title: 'Students Placed', value: 173, icon: <Briefcase size={24} />, suffix: '' },
          { title: 'Highest Package', value: 20.49, icon: <TrendingUp size={24} />, prefix: '₹ ', suffix: ' LPA' },
        ].map((stat, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            key={idx} 
            className="bg-[var(--surface)]/50 backdrop-blur-md p-8 rounded-[24px] border border-white/5 shadow-xl flex flex-col items-center justify-center text-center group hover:border-[var(--primary)]/30 hover:bg-[var(--surface)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 group-hover:bg-[var(--primary)]/10 transition-transform duration-500">
              {stat.icon}
            </div>
            <div className="text-4xl font-bold text-white mb-2 font-mono text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[#3b82f6]">
              <StatCounter target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            </div>
            <div className="text-[0.7rem] font-bold text-[var(--text3)] uppercase tracking-[0.2em]">{stat.title}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--surface)]/50 backdrop-blur-md p-8 md:p-10 rounded-[24px] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--primary)]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
          
          <h3 className="text-2xl font-playfair font-bold text-white mb-8 border-b border-white/10 pb-4">Latest Branch-wise Placements</h3>
          
          <div className="space-y-6 relative z-10">
            {barData.map((item, idx) => (
              <div key={idx} className="relative group/bar">
                <div className="flex justify-between text-sm font-bold text-white/80 mb-2 tracking-wide">
                  <span>{item.branch}</span>
                  <span className="text-[var(--primary)]">{item.count} Placed</span>
                </div>
                <div className="h-3 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(item.count / 35) * 100}%` }} // Adjusted relative to max count
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-[var(--primary2)] to-[var(--primary)] rounded-full relative group-hover/bar:brightness-125 transition-all"
                  >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] animate-[progress_1s_linear_infinite]"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--surface)]/50 backdrop-blur-md p-8 md:p-10 rounded-[24px] border border-white/10 shadow-2xl flex flex-col"
        >
          <h3 className="text-2xl font-playfair font-bold text-white mb-8 border-b border-white/10 pb-4">Record of Excellence</h3>
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-4 font-semibold text-[var(--text3)] uppercase tracking-wider text-xs">Academic Year</th>
                  <th className="py-4 px-4 font-semibold text-[var(--text3)] uppercase tracking-wider text-xs">Companies</th>
                  <th className="py-4 px-4 font-semibold text-[var(--text3)] uppercase tracking-wider text-xs">Placed</th>
                  <th className="py-4 px-4 font-semibold text-[var(--text3)] uppercase tracking-wider text-xs">Highest Salary</th>
                </tr>
              </thead>
              <tbody>
                {pastPlacements.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors group/row">
                    <td className="py-6 px-4 font-bold text-[var(--primary)]">{row.year}</td>
                    <td className="py-6 px-4 text-white font-mono">{row.companies}</td>
                    <td className="py-6 px-4 text-white font-mono">{row.placed}</td>
                    <td className="py-6 px-4 font-mono font-bold text-[var(--gold)]">{row.highest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-[var(--primary)]/20 flex items-start gap-4 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-3xl relative z-10">🏆</span>
            <p className="text-sm text-[var(--text2)] leading-relaxed relative z-10">
              GCEE has consistently achieved excellent placement records year after year, with our alumni making significant contributions in top multinational corporations globally.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Official Batch Reports - "pic in placement statistics" */}
      <div className="mt-16 bg-[var(--surface)]/30 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-16">
        <h3 className="text-3xl font-playfair font-bold text-white mb-12 text-center flex items-center justify-center gap-6">
           <span className="w-12 h-px bg-white/20"></span> Official Academic Reports <span className="w-12 h-px bg-white/20"></span>
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          {officialStatsPics.map((report, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6 group"
            >
              <h4 className="text-xl font-bold text-[var(--text2)] group-hover:text-[var(--primary)] transition-colors inline-flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--primary)]"></span> {report.title}
              </h4>
              <div className="rounded-[24px] overflow-hidden border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] bg-white/5 p-2 group-hover:border-[var(--primary)]/30 transition-all duration-500">
                 <img 
                    src={report.url} 
                    alt={report.title} 
                    className="w-full h-auto object-contain rounded-[20px] group-hover:scale-[1.02] transition-transform duration-700" 
                 />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { background-position: 1rem 0; }
          to { background-position: 0 0; }
        }
      `}</style>
    </div>
  );
};
