import { useTranslation } from 'react-i18next';

type ServiceItem = { title: string; description: string };

export const Features = () => {
    const { t } = useTranslation();
    const steps = t('process.steps', { returnObjects: true }) as ServiceItem[];
    const included = t('features.items', { returnObjects: true }) as ServiceItem[];
    return (
        <>
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('process.title')}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{t('process.description')}</p>
            </div>
            <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                    <li key={step.title}>
                        <span className="text-primary font-semibold tabular-nums" aria-hidden="true">{index + 1}.</span>
                        <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                        <p className="mt-3 text-slate-600 leading-relaxed">{step.description}</p>
                    </li>
                ))}
            </ol>
            <div className="mt-12 pt-10 border-t border-slate-200 grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16">
                <div>
                    <h3 className="text-2xl font-semibold">{t('features.title')}</h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">{t('features.description')}</p>
                </div>
                <dl className="divide-y divide-slate-200">
                    {included.map((item, index) => (
                        <div key={item.title} className={index === 0 ? 'pb-5' : 'py-5 last:pb-0'}>
                            <dt className="font-semibold">{item.title}</dt>
                            <dd className="mt-2 text-slate-600 leading-relaxed">{item.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </>
    );
};
