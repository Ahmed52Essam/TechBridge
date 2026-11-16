import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/content';
import { scrollToId } from '../../lib/utils';
import { SITE_SECTIONS } from '../../lib/navigation';

export const Catalog = () => {
    const { t } = useTranslation();
    const { catalog } = useContent();
    return (
        <>
            <div className="max-w-2xl mb-10">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('catalog.title')}</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">{t('catalog.subtitle')}</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-10">
                {(['laptops', 'pcs', 'workstations'] as const).map((key) => {
                    const item = catalog.items[key];
                    return (
                        <article key={key} className="flex flex-col border-t border-slate-300 pt-6 min-w-0">
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="mt-3 text-slate-600 leading-relaxed">{item.description}</p>
                            <ul className="my-6 space-y-2 text-sm text-slate-700 list-disc ps-5">
                                {item.specs.map((spec) => <li key={spec}>{spec}</li>)}
                            </ul>
                            <button onClick={() => scrollToId(SITE_SECTIONS.CONTACT.id)} aria-label={item.buttonText + ': ' + item.title} className="mt-auto self-start text-primary font-semibold underline underline-offset-4 hover:text-dark text-start">
                                {item.buttonText}
                            </button>
                        </article>
                    );
                })}
            </div>
            <p className="mt-8 text-sm text-slate-600">{t('catalog.note')}</p>
            <p className="mt-4 text-sm text-slate-600">
                {catalog.differentConfig}{' '}
                <button onClick={() => scrollToId(SITE_SECTIONS.CONTACT.id)} className="text-primary underline underline-offset-4">{catalog.talkToTeam}</button>
            </p>
        </>
    );
};
