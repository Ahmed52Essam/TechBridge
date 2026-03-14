import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';
import { Laptop, Monitor, Cpu, ArrowRight } from 'lucide-react';

export const Catalog = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const BridgeOptions = [
        {
            title: 'Enterprise Laptops',
            icon: Laptop,
            description: 'High-performance units for mobile professionals and management.',
            specs: [
                'Intel Core i5/i7',
                'Lightweight Chassis',
                'Long Battery Life'
            ],
            buttonText: 'Request Quote',
            buttonStyle: 'outline',
            accentColor: 'from-blue-500 to-cyan-500',
            iconBg: 'from-blue-100 to-cyan-100',
            iconColor: 'text-blue-600'
        },
        {
            title: 'Custom PC Builds',
            icon: Monitor,
            description: 'Tailored desktop configurations for admin, operations, or specific office needs.',
            specs: [
                'Fully Customizable',
                'Upgradable Storage',
                'Cost Effective'
            ],
            buttonText: 'Build Your Config',
            buttonStyle: 'primary',
            accentColor: 'from-violet-500 to-purple-500',
            iconBg: 'from-violet-100 to-purple-100',
            iconColor: 'text-violet-600',
            featured: true
        },
        {
            title: 'High-Power Workstations',
            icon: Cpu,
            description: 'Extreme performance for rendering, development, and graphic design.',
            specs: [
                'Xeon or i9 Processors',
                'RTX Graphics',
                '32GB+ RAM'
            ],
            buttonText: 'Contact Sales',
            buttonStyle: 'outline',
            accentColor: 'from-purple-500 to-pink-500',
            iconBg: 'from-purple-100 to-pink-100',
            iconColor: 'text-purple-600'
        },
    ];

    return (
        <section id="catalog" className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-slate-50/50">
            {/* Subtle Background Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-[100px] -z-10" />

            <div className="container px-4 mx-auto md:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                            Our Hardware <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">Bridge</span>
                        </h2>
                        <p className="text-lg text-slate-600 italic">
                            Premium devices tailored to your workflow. Contact us for a custom quote.
                        </p>
                    </motion.div>
                </div>

                {/* 3-Column Grid */}
                <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
                    {BridgeOptions.map((option, index) => (
                        <motion.div
                            key={index}
                            className={cn(
                                "flex flex-col relative rounded-3xl p-8 transition-all duration-300 group cursor-default h-full",
                                "bg-white/60 backdrop-blur-xl border border-white/80 shadow-lg hover:shadow-2xl hover:-translate-y-2",
                                option.featured && "md:scale-105 ring-2 ring-violet-200/50"
                            )}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {/* Featured Badge */}
                            {option.featured && (
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            {/* Icon */}
                            <div className="mb-6">
                                <div className={cn(
                                    "inline-flex p-4 rounded-2xl bg-gradient-to-br shadow-sm",
                                    option.iconBg
                                )}>
                                    <option.icon className={cn("w-10 h-10", option.iconColor)} strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                {option.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                {option.description}
                            </p>

                            {/* Specs */}
                            <div className="mb-8 space-y-3">
                                {option.specs.map((spec, i) => (
                                    <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                                        <div className="mt-1.5 w-1 h-1 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 shrink-0" />
                                        <span>{spec}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Divider */}
                            <div className="border-t border-slate-200/60 mb-6" />

                            {/* Button */}
                            <button
                                onClick={scrollToContact}
                                className={cn(
                                    "w-full py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-auto",
                                    option.buttonStyle === 'primary'
                                        ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-0.5"
                                        : "bg-white/80 text-slate-700 border-2 border-slate-200 hover:border-violet-300 hover:bg-white hover:text-violet-600"
                                )}
                            >
                                <span>{option.buttonText}</span>
                                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>

                            {/* Hover Gradient Accent */}
                            <div className={cn(
                                "absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10",
                                `bg-gradient-to-br ${option.accentColor} blur-2xl`
                            )} style={{ transform: 'scale(0.8)' }} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-sm text-slate-500">
                        Need a different configuration? <button onClick={scrollToContact} className="text-violet-600 font-semibold hover:underline">Talk to our team →</button>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
