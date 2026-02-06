import React from 'react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Comparison } from './components/sections/Comparison';
import { Catalog } from './components/sections/Catalog';
import { Features } from './components/sections/Features';
import { TrustSection } from './components/sections/TrustSection';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { motion } from 'framer-motion';

// Simple wrapper for scroll animations
const SectionWrapper = ({ children, id }: { children: React.ReactNode, id?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      id={id}
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-slate-900 antialiased selection:bg-secondary/20 selection:text-secondary">
      <Navbar />

      <main>
        <Hero />

        <SectionWrapper>
          <Comparison />
        </SectionWrapper>

        <SectionWrapper>
          <Catalog />
        </SectionWrapper>

        <SectionWrapper>
          <Features />
        </SectionWrapper>

        <SectionWrapper>
          <TrustSection />
        </SectionWrapper>

        <SectionWrapper>
          <Contact />
        </SectionWrapper>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
