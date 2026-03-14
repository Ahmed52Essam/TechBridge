import { motion } from 'framer-motion';
import { TrendingUp, Receipt, ShieldCheck, Truck, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FeatureCardProps {
    className?: string;
    children: React.ReactNode;
}

const FeatureCard = ({ className, children }: FeatureCardProps) => (
    <div className={cn(
        "relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-sm p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group",
        className
    )}>
        {/* Subtle mesh background for cards */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 opacity-50" />
        <div className="relative z-10 h-full flex flex-col">
            {children}
        </div>
    </div>
);

export const Features = () => {
    return (
        <section id="features" className="py-24 bg-slate-50/50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Why TechBridge?</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2">
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Modern Teams</span>
                    </h2>
                </div>

                {/* 6-Card Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-7xl mx-auto">

                    {/* Box 1 (Large): 0 EGP Upfront - spans 4 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-4 md:row-span-2"
                    >
                        <FeatureCard className="h-full bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
                            <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                                <div className="flex-1 text-left space-y-4">
                                    <div className="p-3 bg-primary/10 w-fit rounded-xl text-primary">
                                        <TrendingUp size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Zero Upfront Capital</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Stop draining your cash flow on depreciating assets. Switch to OpEx and keep your capital for growth, marketing, and hiring.
                                    </p>
                                </div>
                                <div className="flex-1 w-full flex items-center justify-center p-4">
                                    {/* First Year Cash Flow Simulation */}
                                    <div className="relative w-full max-w-md">
                                        {/* Chart Container */}
                                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                                            {/* Chart Title */}
                                            <div className="text-center mb-8">
                                                <h4 className="text-sm font-bold text-slate-800 mb-1">First Year Cash Flow</h4>
                                                <p className="text-xs text-slate-500">10 Enterprise Laptops</p>
                                            </div>

                                            {/* Bars Container */}
                                            <div className="relative h-64 mb-6">
                                                <div className="flex items-end justify-center gap-8 h-full">
                                                    {/* Bar 1: The Old Way - Buying */}
                                                    <div className="flex-1 max-w-[120px] h-full flex flex-col justify-end items-center relative">
                                                        {/* Floating Badge - Negative Impact */}
                                                        <motion.div
                                                            className="absolute -top-8 left-12/2 -translate-x-1/2 px-3 py-1.5 bg-red-100 border border-red-200 rounded-full shadow-md z-10 whitespace-nowrap"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 0.5 }}
                                                        >
                                                            <span className="text-xs font-bold text-red-700">-500k EGP</span>
                                                        </motion.div>

                                                        {/* Animated Bar - Shoots Up Aggressively */}
                                                        <motion.div
                                                            className="w-full bg-gradient-to-t from-red-500 via-red-400 to-red-300 rounded-t-2xl relative shadow-2xl overflow-hidden"
                                                            initial={{ height: "0%" }}
                                                            whileInView={{ height: "90%" }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
                                                        >
                                                            {/* Danger Stripes Pattern */}
                                                            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
                                                                <p className="text-white text-lg font-bold drop-shadow-lg">500k</p>
                                                                <p className="text-white/90 text-[10px] font-semibold">EGP</p>
                                                            </div>
                                                        </motion.div>

                                                        {/* Label */}
                                                        <div className="text-center mt-3 absolute -bottom-12 left-1/2 -translate-x-1/2 w-full">
                                                            <p className="text-xs font-bold text-slate-800">Buying</p>
                                                            <p className="text-[10px] text-slate-500">10 Workstations</p>
                                                        </div>
                                                    </div>

                                                    {/* Bar 2: TechFleet Way - Subscription */}
                                                    <div className="flex-1 max-w-[120px] h-full flex flex-col justify-end items-center relative">
                                                        {/* Floating Badge - Zero Upfront */}
                                                        <motion.div
                                                            className="absolute -top-8 left-11/2 -translate-x-1/2 px-3 py-1.5 bg-primary/10 border border-primary/30 rounded-full shadow-md z-10 whitespace-nowrap"
                                                            initial={{ opacity: 0, y: 10 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 0.8 }}
                                                        >
                                                            <span className="text-xs font-bold text-primary">0 EGP ✨</span>
                                                        </motion.div>

                                                        {/* Animated Bar - Stays Small and Calm */}
                                                        <motion.div
                                                            className="w-full bg-gradient-to-t from-primary via-violet-500 to-violet-400 rounded-t-2xl relative shadow-xl overflow-hidden min-h-[20px]"
                                                            initial={{ height: "0%" }}
                                                            whileInView={{ height: "10%" }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                                                        >
                                                        </motion.div>

                                                        {/* Label */}
                                                        <div className="text-center mt-3 absolute -bottom-12 left-1/2 -translate-x-1/2 w-full">
                                                            <p className="text-xs font-bold text-primary">TechBridge</p>
                                                            <p className="text-[10px] text-primary/70">Subscription</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Bottom Caption */}
                                            <div className="text-center pt-4 border-t border-slate-100">
                                                <p className="text-[11px] text-slate-500 italic">
                                                    Simulation based on market average for 10 Enterprise Laptops.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FeatureCard>
                    </motion.div>

                    {/* Box 3: Tax Deductible */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2"
                    >
                        <FeatureCard className="bg-white">
                            <div className="text-left space-y-4">
                                <div className="p-3 bg-green-50 w-fit rounded-xl text-green-600">
                                    <Receipt size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">100% Tax Deductible</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Leasing utilizes OpEx instead of CapEx, making every invoice 100% tax deductible.
                                </p>
                            </div>
                        </FeatureCard>
                    </motion.div>

                    {/* Box 4: Complete Protection - spans 2 columns */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-2"
                    >
                        <FeatureCard className="bg-white">
                            <div className="flex flex-col items-start gap-4">
                                <div className="p-3 bg-blue-50 w-fit rounded-xl text-blue-600">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Complete Protection</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Accidental damage protection included. You break it, we fix it or replace it.
                                </p>
                                <div className="flex gap-2 mt-2">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-bold text-slate-700">Theft</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-100">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-bold text-slate-700">Liquid</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCard>
                    </motion.div>

                    {/* Box 5: Fast Delivery */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="md:col-span-2"
                    >
                        <FeatureCard className="bg-gradient-to-br from-cyan-50 to-white border-cyan-100">
                            <div className="text-left space-y-4">
                                <div className="p-3 bg-cyan-100 w-fit rounded-xl text-cyan-600">
                                    <Truck size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Same-Day Delivery</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Order before noon, get your devices delivered the same day across Greater Cairo.
                                </p>
                                <div className="flex items-center gap-2 text-xs text-slate-500 mt-4">
                                    <div className="flex -space-x-1">
                                        <div className="w-6 h-6 rounded-full bg-cyan-200 border-2 border-white" />
                                        <div className="w-6 h-6 rounded-full bg-cyan-300 border-2 border-white" />
                                        <div className="w-6 h-6 rounded-full bg-cyan-400 border-2 border-white" />
                                    </div>
                                    <span className="font-medium">Express Fleet Active</span>
                                </div>
                            </div>
                        </FeatureCard>
                    </motion.div>

                    {/* Box 6: Instant Upgrades */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-2"
                    >
                        <FeatureCard className="bg-gradient-to-br from-violet-50 to-white border-violet-100">
                            <div className="text-left space-y-4">
                                <div className="p-3 bg-violet-100 w-fit rounded-xl text-violet-600">
                                    <Zap size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">Instant Upgrades</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Need more power? Upgrade to the latest models anytime without buying new hardware.
                                </p>
                                <div className="mt-4 p-2 bg-violet-50 rounded-lg border border-violet-100">
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-slate-600">Upgrade Availability</span>
                                        <span className="font-bold text-violet-600">24/7</span>
                                    </div>
                                </div>
                            </div>
                        </FeatureCard>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
