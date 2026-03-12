import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlacementStatistics } from './placement/PlacementStatistics';
import { PlacementTrainings } from './placement/PlacementTrainings';
import { OurRecruiters } from './placement/OurRecruiters';
import { PlacementContact } from './placement/PlacementContact';
import placementLogo from '../assets/logo.jpeg'; 
const placementPhoto = "https://gcee.ac.in/assets/img/blog/TPCell.jpg";

const tabs = [
  { id: 'statistics', label: 'Placement Statistics' },
  { id: 'trainings', label: 'Placement Trainings' },
  { id: 'recruiters', label: 'Our Recruiters' },
  { id: 'contact', label: 'Contact Us' }
];

export const PlacementCell = () => {
  const [activeTab, setActiveTab] = useState('statistics');

  return (
    <section id="placements" className="py-24 bg-[var(--bg2)] relative min-h-screen overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,212,255,0.05)_0%,transparent_70%)] rounded-full -translate-y-1/2 translate-x-1/3"></div>
         <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(0,212,255,0.03)_0%,transparent_60%)] rounded-full translate-y-1/3 -translate-x-1/4"></div>
      </div>
      
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center mb-6"
          >
            {/* The Placement Photo integrated beautifully */}
            <div className="w-full max-w-6xl mx-auto h-[350px] md:h-[500px] rounded-[32px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 mb-10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg2)] via-transparent to-[var(--bg2)]/10 z-10 transition-opacity duration-500 group-hover:opacity-60"></div>
              <img src={placementPhoto} alt="GCEE Placement Cell" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 bg-[var(--surface)]/80 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl">
                 <img src={placementLogo} alt="Placement Cell Logo" className="w-8 h-8 rounded-full" />
                 <h3 className="font-playfair text-xl font-bold text-white tracking-wide">Training & Placement Cell</h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 text-[var(--primary)] text-[0.75rem] font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse shadow-[0_0_10px_var(--primary)]"></span> Career Development
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-playfair text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white"
          >
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--gold)]">Future Leaders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[var(--text2)] max-w-2xl mx-auto text-lg"
          >
            Connecting our talented graduates with leading companies globally through continuous training, industry collaboration, and dedicated career guidance.
          </motion.p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="inline-flex p-1.5 bg-[var(--surface)]/50 border border-white/10 rounded-2xl md:rounded-full backdrop-blur-md overflow-x-auto max-w-full w-max touch-pan-x shadow-2xl">
             {tabs.map(tab => (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className={`relative px-5 py-2.5 md:px-8 md:py-3.5 text-sm md:text-base font-semibold transition-colors whitespace-nowrap rounded-xl md:rounded-full z-10 ${activeTab === tab.id ? 'text-black' : 'text-[var(--text2)] hover:text-white'}`}
               >
                 {activeTab === tab.id && (
                   <motion.div 
                     layoutId="placement-tab"
                     className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--primary2)] rounded-xl md:rounded-full shadow-[0_0_20px_rgba(0,212,255,0.3)] z-[-1]"
                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
                   />
                 )}
                 {tab.label}
               </button>
             ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeTab === 'statistics' && <PlacementStatistics />}
              {activeTab === 'trainings' && <PlacementTrainings />}
              {activeTab === 'recruiters' && <OurRecruiters />}
              {activeTab === 'contact' && <PlacementContact />}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
