import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES } from '../../lib/constants';

export const TrustSection = () => {
    const { t } = useTranslation();
    return (
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('trust.title')}</h2>
                <p className="mt-4 text-slate-300 leading-relaxed max-w-lg">{t('trust.description')}</p>
            </div>
            <div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-lg">
                    {['newCairo', 'maadi', 'zayed', 'october', 'downtown'].map((location) => (
                        <li key={location}>{t('trust.locations.' + location)}</li>
                    ))}
                </ul>
                <p className="mt-6 pt-6 border-t border-white/20 text-sm text-slate-300 leading-relaxed">{t('trust.conditions')}</p>
                <Link to={ROUTES.terms} className="inline-block mt-3 text-sm text-white underline underline-offset-4">{t('trust.terms')}</Link>
            </div>
        </div>
    );
};
