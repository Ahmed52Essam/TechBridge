import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { scrollToId } from '../../lib/utils';
import { SITE_SECTIONS } from '../../lib/navigation';
import { ROUTES } from '../../lib/constants';
import AppleLogo from '/apple-logo.png';
import DellLogo from '/dell-logo.png';
import HpLogo from '/hp-logo.png';
import LenovoLogo from '/lenovo-logo.png';

export const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="bg-background py-12 md:py-16">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
                <p className="text-sm text-slate-600 mb-6">{t('hero.badge')}</p>
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-20 items-end">
                    <div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-dark">
                            {t('hero.titleMain')}<br />{t('hero.titleSub')}
                        </h1>
                        <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">{t('hero.description')}</p>
                        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                            <button onClick={() => scrollToId(SITE_SECTIONS.CONTACT.id)} className="bg-primary text-white hover:bg-dark px-6 py-3 rounded-md font-semibold transition-colors">
                                {t('hero.requestQuote')}
                            </button>
                            <a href="#catalog" onClick={(e) => { e.preventDefault(); scrollToId(SITE_SECTIONS.HARDWARE.id); }} className="font-semibold text-dark underline underline-offset-4 hover:text-primary">
                                {t('hero.exploreHardware')}
                            </a>
                        </div>
                    </div>
                    <div className="border-s-2 border-primary ps-6 py-2 max-w-md">
                        <h2 className="text-2xl font-semibold text-dark">{t('hero.serviceTitle')}</h2>
                        <p className="mt-3 text-slate-600 leading-relaxed">{t('hero.serviceDescription')}</p>
                        <p className="mt-4 text-sm text-slate-600 leading-relaxed">{t('hero.serviceHours')}</p>
                        <Link to={ROUTES.terms} className="inline-block mt-3 text-sm text-primary underline underline-offset-4">{t('hero.serviceTerms')}</Link>
                    </div>
                </div>
                <div className="mt-12 md:mt-16 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center gap-6">
                    <p className="text-sm text-slate-600 shrink-0">{t('hero.brandLabel')}</p>
                    <ul className="flex flex-wrap items-center gap-x-8 gap-y-5" aria-label={t('hero.brandLabel')}>
                        {[['Dell', DellLogo], ['HP', HpLogo], ['Lenovo', LenovoLogo], ['Apple', AppleLogo]].map(([name, src]) => (
                            <li key={name}><img src={src} alt={name} className="h-6 w-auto max-w-[100px] object-contain grayscale" /></li>
                        ))}
                        <li className="font-semibold text-slate-600">Microsoft</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
