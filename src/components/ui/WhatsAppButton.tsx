import { MessageCircle } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const whatsappMessage = encodeURIComponent(
        "Hi! I'm interested in reducing my company's hardware costs with TechBridge. Can you help me switch from CapEx to OpEx?"
    );

    return (
        <a
            href={`https://wa.me/201008078769?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 focus:outline-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Chat on WhatsApp"
        >
            <motion.div
                layout
                className={cn(
                    "flex items-center gap-2 rounded-full shadow-lg p-1 pr-1",
                    "bg-[#25D366] text-white hover:bg-[#20b858] transition-colors"
                )}
                initial={{ width: '3.5rem', height: '3.5rem' }}
                animate={{
                    width: isHovered ? 'auto' : '3.5rem',
                    height: '3.5rem'
                }}
            >
                <div className="h-12 w-12 flex items-center justify-center shrink-0">
                    <MessageCircle className="h-6 w-6" fill="white" />
                </div>

                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            className="overflow-hidden whitespace-nowrap pr-5"
                        >
                            <span className="font-semibold text-sm">Chat with an Expert</span>
                            <span className="ml-2 inline-block w-2 H-2 rounded-full bg-white animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </a>
    );
};
