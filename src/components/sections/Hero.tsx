import { motion } from 'framer-motion';
import { ChevronRight, Play, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';
import AppleLogo from '/apple-logo.png';
import DellLogo from '/dell-logo.png';
import HpLogo from '/hp-logo.png';
import LenovoLogo from '/lenovo-logo.png';
import TechBridgeLogo from '/TechBridgelogo.png';

export const Hero = () => {
    const { t, i18n } = useTranslation();
    const scrollToPricing = () => {
        const element = document.getElementById('catalog');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFeatures = () => {
        const element = document.getElementById('features');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32 min-h-[90vh] flex items-center">
            {/* Soft Mesh Gradient Background - Hazy Aurora */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E0C3FC] via-[#D4E7FE] to-white opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white via-[#E0C3FC]/30 to-[#D4E7FE]/40" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-violet-200/30 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px]" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Text Content */}
                    <div className="flex flex-col items-start text-start space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            {/* Pill Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-sm">
                                <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
                                <span className="text-sm font-semibold text-slate-700">{t('hero.badge')}</span>
                            </div>

                            {/* Massive Headline with Gradient */}
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-display font-bold tracking-tight leading-[0.95]">
                                <span className="text-slate-900">{t('hero.titleMain')}</span>
                                <br />
                                <span className="bg-gradient-to-b from-violet-600 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                                    {t('hero.titleSub')}
                                </span>
                            </h1>
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed font-normal"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            {t('hero.description')}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            {/* Primary Button - Gradient with Glow */}
                            <button
                                onClick={scrollToPricing}
                                className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/60 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                <span>{t('hero.viewPricing')}</span>
                                <ChevronRight className={cn("w-5 h-5 transition-transform", i18n.language === 'ar' ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1")} />
                            </button>

                            {/* Secondary Button - White Pill */}
                            <button
                                onClick={scrollToFeatures}
                                className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-full border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                                <Play className="w-4 h-4 fill-current" />
                                <span>{t('hero.howItWorks')}</span>
                            </button>
                        </motion.div>


                    </div>

                    {/* Right Column: 3D Laptop with Floating Cards */}
                    <motion.div
                        className="relative hidden lg:block h-[600px]"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-300/40 to-blue-300/40 rounded-full blur-[120px] -z-10" />

                        {/* Wrapper Container for Laptop + Floating Cards */}
                        <div className="relative w-fit mx-auto">
                            {/* Laptop Mockup - Base Layer */}
                            <motion.div
                                className="relative z-[1]"
                                animate={{
                                    y: [0, -15, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Laptop Screen - Glass Card */}
                                <div className="w-[320px] md:w-[400px] lg:w-[480px] aspect-[16/10] bg-white/60 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/80">
                                    {/* Screen Content */}
                                    <div className="w-full h-full bg-white rounded-lg flex items-center justify-center relative overflow-hidden">
                                        <img src={TechBridgeLogo} alt="TechBridge" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Laptop Base */}
                                <div className="w-[360px] md:w-[440px] lg:w-[520px] h-3 bg-gradient-to-r from-secondary via-slate-300 to-secondary rounded-b-xl mx-auto -mt-1 shadow-lg" />
                            </motion.div>

                            {/* Floating Card 1: "0 EGP Upfront" - Top Left */}
                            <motion.div
                                className={cn("absolute bottom-[15%] z-10", i18n.language === 'ar' ? "-right-[8%]" : "-left-[8%]")}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <motion.div
                                    className="px-4 py-2 bg-white/60 backdrop-blur-lg rounded-full shadow-lg border border-white/80 text-xs font-semibold text-slate-700 whitespace-nowrap"
                                    animate={{ rotate: [0, 5, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {t('hero.floatingCard1')}
                                </motion.div>
                            </motion.div>

                            {/* Floating Card 3: "Grade A Hardware" - Top Right */}
                            <motion.div
                                className={cn("absolute top-[10%] z-10", i18n.language === 'ar' ? "left-[-10%]" : "right-[-10%]")}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <motion.div
                                    className="px-6 py-4 bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/60 flex items-center gap-3"
                                    animate={{ y: [0, 15, 0] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                >
                                    <div className="p-2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg">
                                        <Sparkles className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div className="text-start">
                                        <p className="text-xs text-slate-500 font-medium">{t('hero.floatingCard2Label')}</p>
                                        <p className="text-sm font-bold text-slate-900">{t('hero.floatingCard2')}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Brand Logo Ticker - Bottom */}
                <motion.div
                    className="mt-24 pt-12 border-t border-slate-200/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <p className="text-center text-xs font-medium text-slate-400 mb-8 uppercase tracking-widest">{t('hero.brandLabel')}</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-40 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-500">
                        {/* Dell Logo */}
                        <img src={DellLogo} alt="Dell" className="h-8 md:h-10 w-auto object-contain" />

                        {/* HP Logo */}
                        <img src={HpLogo} alt="HP" className="h-8 md:h-10 w-auto object-contain" />

                        {/* Lenovo Logo */}
                        <img src={LenovoLogo} alt="Lenovo" className="h-8 md:h-10 w-auto object-contain" />

                        {/* Apple Logo */}
                        <img src={AppleLogo} alt="Apple" className="h-8 md:h-10 w-auto object-contain" />

                        {/* Microsoft Logo */}
                        <svg className="h-8 md:h-10 w-auto" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                            <rect x="5" y="8" width="12" height="12" fill="#F25022" />
                            <rect x="19" y="8" width="12" height="12" fill="#7FBA00" />
                            <rect x="5" y="22" width="12" height="12" fill="#00A4EF" />
                            <rect x="19" y="22" width="12" height="12" fill="#FFB900" />
                            <text x="38" y="28" fontFamily="Segoe UI, Arial, sans-serif" fontSize="18" fontWeight="600" fill="#5E5E5E">Microsoft</text>
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
