import { Linkedin, MessageSquare } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
            <div className="container px-4 mx-auto md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2">TechBridge</h3>
                        <p className="text-sm">Proudly serving the Egyptian Business Community.</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>

                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://wa.me/201008078769" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 rounded-full hover:bg-slate-800 hover:text-white transition-colors" aria-label="WhatsApp">
                            <MessageSquare className="h-5 w-5" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-slate-600">
                    &copy; {new Date().getFullYear()} TechBridge Egypt. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
