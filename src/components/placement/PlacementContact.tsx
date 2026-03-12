import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Building2, User } from 'lucide-react';

export const PlacementContact = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6">Placement Contact</h2>
        <p className="text-[var(--text2)] text-lg font-light">
          Get in touch with our Training and Placement Cell for recruitment drives, internships, and industry collaborations.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[var(--surface)]/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group/card"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover/card:bg-[var(--primary)]/20 transition-colors duration-700"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#7c3aed]/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 group-hover/card:bg-[#7c3aed]/20 transition-colors duration-700"></div>

          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover/card:scale-110 group-hover/card:border-[var(--primary)]/50 transition-all duration-500 shadow-inner">
                <User className="text-[var(--primary)]" size={32} />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-white mb-1">Dr. P. Kaliram</h3>
                <p className="text-[var(--primary)] font-semibold text-sm tracking-widest uppercase">Placement Officer</p>
              </div>
            </div>

            <div className="h-px w-full bg-gradient-to-r from-[var(--primary)]/30 via-white/10 to-transparent"></div>

            <div className="space-y-6">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-black/20 border border-white/5 flex items-center justify-center shrink-0 shadow-inner group-hover/card:bg-white/5 transition-colors">
                  <Building2 className="text-[var(--text3)]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white/90">Institution</p>
                  <p className="text-[var(--text2)] leading-relaxed mt-2 text-sm font-light">
                    Government College of Engineering<br />
                    Erode - 638 316<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-black/20 border border-white/5 flex items-center justify-center shrink-0 shadow-inner group-hover/card:bg-white/5 transition-colors">
                  <Mail className="text-[var(--text3)]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white/90">Email Address</p>
                  <div className="mt-2 space-y-2 text-sm">
                    <a href="mailto:gceerodeplacement@gmail.com" className="block text-[var(--primary)] hover:text-white hover:underline transition-all">gceerodeplacement@gmail.com</a>
                    <a href="mailto:placement@gcee.ac.in" className="block text-[var(--primary)] hover:text-white hover:underline transition-all">placement@gcee.ac.in</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-black/20 border border-white/5 flex items-center justify-center shrink-0 shadow-inner group-hover/card:bg-white/5 transition-colors">
                  <Phone className="text-[var(--text3)]" size={20} />
                </div>
                <div>
                  <p className="font-semibold text-white/90">Phone</p>
                  <div className="mt-2 space-y-3 text-sm flex flex-col">
                    <div className="flex items-center gap-3">
                       <a href="tel:9280091830" className="text-[var(--text2)] hover:text-[var(--primary)] transition-colors font-mono">9280091830</a> 
                       <span className="text-[0.6rem] bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Official</span>
                    </div>
                    <div className="flex items-center gap-3">
                       <a href="tel:8610539611" className="text-[var(--text2)] hover:text-[var(--primary)] transition-colors font-mono">8610539611</a> 
                       <span className="text-[0.6rem] bg-[#7c3aed]/10 text-[#7c3aed] border border-[#7c3aed]/20 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Personal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full py-4 rounded-xl bg-gradient-to-r from-[var(--primary)] to-[var(--primary2)] text-black font-extrabold text-base uppercase tracking-wider shadow-[0_10px_30px_rgba(0,212,255,0.3)] flex items-center justify-center gap-3 hover:shadow-[0_15px_40px_rgba(0,212,255,0.5)] transition-shadow duration-300"
            >
              <Mail size={18} /> Send Message
            </motion.button>

          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="h-full min-h-[400px] rounded-[32px] bg-[#0a1520] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center group/map"
        >
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 hue-rotate-180 mix-blend-screen pointer-events-none"></div>
           
           <div className="relative z-10 w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/map:scale-110 group-hover/map:bg-[var(--primary)]/10 group-hover/map:border-[var(--primary)]/30 transition-all duration-500 shadow-inner backdrop-blur-sm mb-6">
             <MapPin size={40} className="text-white/30 group-hover/map:text-[var(--primary)] transition-colors duration-500" />
           </div>
           
           <p className="text-white/50 font-bold uppercase tracking-[0.2em] text-xs z-10 relative bg-black/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 group-hover/map:text-white/80 group-hover/map:border-white/20 transition-colors">Interactive Map</p>
           
           <div className="absolute top-6 left-6 right-6 bottom-6 border-2 border-dashed border-white/10 rounded-3xl pointer-events-none group-hover/map:border-[var(--primary)]/30 transition-colors duration-500"></div>
        </motion.div>
      </div>
    </div>
  );
};
