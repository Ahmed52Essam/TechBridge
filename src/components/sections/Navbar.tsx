import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Benefits', href: '#comparison' },
        { name: 'Hardware', href: '#catalog' },
        { name: 'How It Works', href: '#features' },
        { name: 'FAQ', href: '#faq' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav className={cn(
                "pointer-events-auto transition-all duration-300 ease-in-out border border-white/20",
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-glass py-3 px-6 rounded-full w-full max-w-4xl"
                    : "bg-transparent py-4 px-6 rounded-full w-full max-w-5xl"
            )}>
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <img src="/TechBridgelogo.jpeg" alt="TechBridge Logo" className="h-8 w-auto rounded-sm" />
                        <span className="text-2xl font-display font-bold text-slate-900 tracking-tight">TechBridge</span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 shadow-sm">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(link.href);
                                }}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            onClick={() => scrollToSection('#contact')}
                            className="relative overflow-hidden group bg-primary hover:bg-primary/90 rounded-full px-6 shadow-glow"
                        >
                            <span className="relative z-10">Get Started</span>
                            <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-0"></div>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-slate-700 bg-white/50 rounded-full backdrop-blur-sm shadow-sm"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav Dropdown */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="absolute top-full left-0 right-0 mt-4 p-4 bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden md:hidden"
                        >
                            <div className="flex flex-col space-y-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(link.href);
                                        }}
                                        className="text-base font-medium text-slate-700 hover:text-primary py-2 px-4 rounded-lg hover:bg-slate-50"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <Button className="w-full rounded-xl" onClick={() => scrollToSection('#contact')}>
                                    Get Started
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};
