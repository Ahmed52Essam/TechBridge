import { motion } from 'framer-motion';

export const TrustSection = () => {
    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Removed heavy grainy backdrop filter here to fix mobile lag */}

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <span className="text-secondary font-mono text-sm tracking-wider uppercase">Active Zones</span>
                            <h2 className="text-3xl md:text-5xl font-display font-bold mt-2">
                                Cairo’s Fastest <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-400">Tech Implementation.</span>
                            </h2>
                        </div>

                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                            We operate a decentralized fleet of technicians across Greater Cairo. This allows us to guarantee 4-hour replacement times for our premium subscribers.
                        </p>

                        <div className="flex gap-8 border-t border-slate-800 pt-8">
                            <div>
                                <h3 className="text-3xl font-bold text-white">45<span className="text-secondary">+</span></h3>
                                <p className="text-slate-500 text-sm mt-1">Active Startups</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white">4h<span className="text-emerald-500">.</span></h3>
                                <p className="text-slate-500 text-sm mt-1">Avg. Response</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-white">100<span className="text-secondary">%</span></h3>
                                <p className="text-slate-500 text-sm mt-1">Uptime</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Minimal Map Visualization */}
                    <div className="relative h-[400px] w-full bg-slate-800/50 rounded-3xl border border-slate-700/50 p-6 flex items-center justify-center overflow-hidden">
                        {/* Abstract Map Background */}
                        <div className="absolute inset-0 opacity-20">
                            {/* Grid lines simulating map */}
                            <div className="absolute top-0 left-1/4 w-px h-full bg-slate-500/30"></div>
                            <div className="absolute top-0 left-2/4 w-px h-full bg-slate-500/30"></div>
                            <div className="absolute top-0 left-3/4 w-px h-full bg-slate-500/30"></div>
                            <div className="absolute top-1/4 left-0 w-full h-px bg-slate-500/30"></div>
                            <div className="absolute top-2/4 left-0 w-full h-px bg-slate-500/30"></div>
                            <div className="absolute top-3/4 left-0 w-full h-px bg-slate-500/30"></div>

                            {/* "River" */}
                            <svg className="absolute inset-0 w-full h-full text-slate-700" viewBox="0 0 400 400" preserveAspectRatio="none">
                                <path d="M180,0 C180,0 200,100 160,200 C120,300 190,400 190,400" stroke="currentColor" strokeWidth="20" fill="none" />
                            </svg>
                        </div>

                        {/* Locations */}
                        {/* New Cairo */}
                        <div className="absolute top-[30%] right-[20%] flex flex-col items-center group cursor-pointer">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-secondary/20 rounded-full animate-ping" />
                                <div className="w-3 h-3 bg-secondary rounded-full relative z-10 border-2 border-slate-900" />
                            </div>
                            <div className="mt-2 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-xs font-bold text-white">New Cairo</span>
                            </div>
                        </div>

                        {/* Maadi */}
                        <div className="absolute bottom-[25%] right-[35%] flex flex-col items-center group cursor-pointer">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-secondary/20 rounded-full animate-ping delay-700" />
                                <div className="w-3 h-3 bg-secondary rounded-full relative z-10 border-2 border-slate-900" />
                            </div>
                            <div className="mt-2 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-xs font-bold text-white">Maadi</span>
                            </div>
                        </div>

                        {/* Zayed */}
                        <div className="absolute top-[20%] left-[15%] flex flex-col items-center group cursor-pointer">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-secondary/20 rounded-full animate-ping delay-1000" />
                                <div className="w-3 h-3 bg-secondary rounded-full relative z-10 border-2 border-slate-900" />
                            </div>
                            <div className="mt-2 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-xs font-bold text-white">Sheikh Zayed</span>
                            </div>
                        </div>

                        {/* 6th October */}
                        <div className="absolute top-[35%] left-[8%] flex flex-col items-center group cursor-pointer">
                            <div className="relative">
                                <div className="absolute -inset-4 bg-secondary/20 rounded-full animate-ping delay-500" />
                                <div className="w-3 h-3 bg-secondary rounded-full relative z-10 border-2 border-slate-900" />
                            </div>
                            <div className="mt-2 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-xs font-bold text-white">6th October</span>
                            </div>
                        </div>

                        {/* Downtown */}
                        <div className="absolute top-[45%] left-[45%] flex flex-col items-center group cursor-pointer">
                            <div className="w-2 h-2 bg-slate-600 rounded-full border border-slate-800" />
                            <div className="mt-2 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-xs text-slate-400">Downtown</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
