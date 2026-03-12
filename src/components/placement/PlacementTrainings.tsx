import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Code, Users, Presentation, FileText, Brain, Award } from 'lucide-react';

// Import training gallery images
import training1 from '../../assets/training/training1.jpeg';
import training2 from '../../assets/training/training2.jpeg';
import training3 from '../../assets/training/training3.jpeg';
import training4 from '../../assets/training/training4.jpeg';
import training5 from '../../assets/training/training5.jpeg';
import training6 from '../../assets/training/training6.jpeg';
import training7 from '../../assets/training/training7.jpeg';
import training8 from '../../assets/training/training8.jpeg';

const trainingPrograms = [
  { icon: <Brain size={28} />, title: 'Aptitude & Logical Reasoning', desc: 'Quantitative aptitude, logical reasoning, and data interpretation sessions.' },
  { icon: <Code size={28} />, title: 'Technical Interview Prep', desc: 'Core subject brush-up, data structures, and algorithms problem-solving.' },
  { icon: <Code size={28} />, title: 'Coding Practice Sessions', desc: 'Hands-on coding challenges for clearing technical rounds.' },
  { icon: <Users size={28} />, title: 'Group Discussions', desc: 'Mock GDs to improve communication and team-player skills.' },
  { icon: <FileText size={28} />, title: 'Resume Building', desc: 'Crafting professional ATS-friendly resumes and LinkedIn profiles.' },
  { icon: <Presentation size={28} />, title: 'Mock Interviews', desc: 'One-on-one mock interviews conducted by industry experts.' },
  { icon: <MessageSquare size={28} />, title: 'Soft Skills Training', desc: 'Communication, business etiquette, and personality development.' },
];

const galleryImages = [
  { src: training1, alt: 'Training Session 1' },
  { src: training2, alt: 'Training Session 2' },
  { src: training3, alt: 'Training Session 3' },
  { src: training4, alt: 'Training Session 4' },
  { src: training5, alt: 'Training Session 5' },
  { src: training6, alt: 'Training Session 6' },
  { src: training7, alt: 'Training Session 7' },
  { src: training8, alt: 'Training Session 8' },
];

export const PlacementTrainings = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-4xl mx-auto">
        <div className="bg-[var(--surface)]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-left relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#7c3aed]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3"></div>
          
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-6 flex items-center gap-3">
             <span className="w-8 h-px bg-[#7c3aed]"></span> Training Framework
          </h2>
          
          <p className="text-[var(--text2)] leading-relaxed mb-6 font-light text-lg">
            The Training and Placement Cell of GCEE conducts comprehensive training programs to enhance the employability of students. The objective is to equip students with necessary <strong className="text-white">technical skills, communication abilities, and aptitude</strong> required to succeed in campus recruitment processes.
          </p>
          <div className="flex items-center gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 mt-6 relative overflow-hidden group/badge hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-[#7c3aed]/20 rounded-xl flex items-center justify-center shrink-0 text-[#7c3aed] group-hover/badge:scale-110 transition-transform">
              <Award size={24} />
            </div>
            <p className="text-sm font-medium text-white/90">
              We highly collaborate with industry professionals and training partners to provide specialized certification programs and workshops.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {trainingPrograms.map((program, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            key={idx}
            className="group relative bg-[var(--surface)] p-8 rounded-[24px] border border-white/5 shadow-xl overflow-hidden hover:border-[#7c3aed]/50 hover:bg-[#161e2e] transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#7c3aed]/5 to-transparent rounded-bl-[100px] -z-10 transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#7c3aed] mb-6 group-hover:scale-110 group-hover:bg-[#7c3aed] group-hover:text-white transition-all duration-300 shadow-inner">
              {program.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 leading-tight font-playfair">{program.title}</h3>
            <p className="text-sm text-[var(--text2)] leading-relaxed group-hover:text-white/70 transition-colors">{program.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 bg-[var(--surface)]/50 border border-white/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] opacity-20 pointer-events-none"></div>
        
        <h3 className="text-2xl md:text-3xl font-playfair font-bold text-center mb-10 text-white flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-white/20"></span>
          Training Sessions Gallery
          <span className="w-12 h-px bg-white/20"></span>
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
          {galleryImages.map((image, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="aspect-square rounded-2xl border border-white/5 relative overflow-hidden group/img cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-4 opacity-0 group-hover/img:translate-y-0 group-hover/img:opacity-100 transition-all duration-500">
                 <p className="text-white text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 w-fit">
                    {image.alt}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
