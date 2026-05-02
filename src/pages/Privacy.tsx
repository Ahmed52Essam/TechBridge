import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Privacy = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-40 pb-24 min-h-screen bg-slate-50">
            <div className="container px-4 mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200"
                >
                    <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">
                        {t('privacy.title')}
                    </h1>
                    <p className="text-slate-500 mb-8 font-medium">
                        {t('privacy.lastUpdated')}
                    </p>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg text-slate-700 leading-relaxed mb-12">
                            {t('privacy.introduction')}
                        </p>

                        <div className="space-y-12">
                            {Array.isArray(t('privacy.sections', { returnObjects: true })) ? 
                             (t('privacy.sections', { returnObjects: true }) as any[]).map((section: any, index: number) => (
                                <section key={index} className="space-y-4">
                                    <h2 className="text-2xl font-bold text-slate-900">
                                        {section.title}
                                    </h2>
                                    <p className="text-slate-600 leading-relaxed">
                                        {section.content}
                                    </p>
                                </section>
                            )) : (
                                <p className="text-slate-500 italic">Content loading or unavailable...</p>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Privacy;
