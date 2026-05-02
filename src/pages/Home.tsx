import { Hero } from '../components/sections/Hero';
import { Comparison } from '../components/sections/Comparison';
import { Catalog } from '../components/sections/Catalog';
import { Features } from '../components/sections/Features';
import { TrustSection } from '../components/sections/TrustSection';
import { Contact } from '../components/sections/Contact';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// Simple wrapper for scroll animations
const SectionWrapper = ({ children, id }: { children: ReactNode, id?: string }) => {
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

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
