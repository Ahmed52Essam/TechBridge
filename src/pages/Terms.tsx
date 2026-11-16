import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


const Terms = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-12 md:py-16 min-h-screen bg-background">
            <div className="container px-4 mx-auto max-w-4xl">
                <div
                    className="text-start"
                >
                    <h1 className="text-4xl font-display font-bold text-dark mb-2">
                        {t('terms.title')}
                    </h1>
                    <p className="text-slate-500 mb-8 font-medium">
                        {t('terms.lastUpdated')}
                    </p>

                    <div className="prose prose-slate max-w-none">
                        <p className="text-lg text-slate-700 leading-relaxed mb-12">
                            {t('terms.introduction')}
                        </p>

                        <div className="space-y-12">
                            {Array.isArray(t('terms.sections', { returnObjects: true })) ? 
                             (t('terms.sections', { returnObjects: true }) as { title: string; content: string }[]).map((section, index: number) => (
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
                </div>
            </div>
        </div>
    );
};

export default Terms;
