import React from 'react';
import { motion } from 'framer-motion';

import tcsLogo from '../../assets/tcs.jpeg';
import infosysLogo from '../../assets/infosys.jpeg';
import zohoLogo from '../../assets/zoho.jpeg';
import hexawareLogo from '../../assets/hexaware.jpeg';
import techmahindraLogo from '../../assets/techmahindra.jpeg';
import tafeLogo from '../../assets/tafe.jpeg';
import cognizantLogo from '../../assets/cognizant.jpeg';

const recruiters = [
  { name: 'TCS', logo: tcsLogo },
  { name: 'Infosys', logo: infosysLogo },
  { name: 'Zoho', logo: zohoLogo },
  { name: 'Hexaware', logo: hexawareLogo },
  { name: 'Tech Mahindra', logo: techmahindraLogo },
  { name: 'TAFE', logo: tafeLogo },
  { name: 'Cognizant', logo: cognizantLogo },
  { name: 'IBM', logo: null, defaultText: 'IBM' },
  { name: 'CTS', logo: null, defaultText: 'CTS' },
  { name: 'Wipro', logo: null, defaultText: 'Wipro' },
];

export const OurRecruiters = () => {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-4xl mx-auto">
        <div className="bg-[var(--surface)]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-left relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#00d4ff]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-white mb-6 flex items-center gap-3">
             <span className="w-8 h-px bg-[#00d4ff]"></span> Our Recruiters
          </h2>
          <p className="text-[var(--text2)] leading-relaxed text-lg font-light">
            Leading companies from various sectors visit GCEE every year for campus recruitment. Our students have been placed in reputed organizations including IT companies, core engineering firms, consulting organizations, and multinational corporations.
          </p>
        </div>
      </div>

      <div className="relative py-16 overflow-hidden bg-[var(--surface)]/30 rounded-[32px] border border-white/5 shadow-2xl backdrop-blur-sm">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[var(--bg2)] to-transparent z-10 pointer-events-none rounded-l-[32px]"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[var(--bg2)] to-transparent z-10 pointer-events-none rounded-r-[32px]"></div>

        <div className="flex animate-marquee hover:animate-marquee-hover mb-10">
          {[...recruiters, ...recruiters].map((company, idx) => (
            <div 
              key={`row1-${idx}`} 
              className="flex-shrink-0 w-[220px] h-[110px] mx-5 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center p-6 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] hover:border-[#00d4ff]/50 hover:bg-white/10 group backdrop-blur-md"
            >
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={`${company.name} Logo`} 
                  className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-lg"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="font-bold text-2xl text-white/20 group-hover:text-[#00d4ff] transition-all duration-500 uppercase tracking-widest drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                    {company.defaultText}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex animate-marquee-reverse hover:animate-marquee-hover">
          {[...recruiters, ...recruiters].reverse().map((company, idx) => (
            <div 
              key={`row2-${idx}`} 
              className="flex-shrink-0 w-[220px] h-[110px] mx-5 bg-white/5 rounded-2xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center p-6 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] hover:border-[#00d4ff]/50 hover:bg-white/10 group backdrop-blur-md"
            >
              {company.logo ? (
                <img 
                  src={company.logo} 
                  alt={`${company.name} Logo`} 
                  className="max-w-full max-h-full object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 drop-shadow-lg"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="font-bold text-2xl text-white/20 group-hover:text-[#00d4ff] transition-all duration-500 uppercase tracking-widest drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]">
                    {company.defaultText}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-220px * ${recruiters.length} - 2.5rem * ${recruiters.length})); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(calc(-220px * ${recruiters.length} - 2.5rem * ${recruiters.length})); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marqueeReverse 40s linear infinite;
        }
        .animate-marquee-hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};
