import { useTranslation } from 'react-i18next';
import { useContent } from '../../lib/content';

export const Comparison = () => {
    const { t } = useTranslation();
    const { comparison } = useContent();
    const rows = comparison.rows(['upfront', 'repairs', 'upgrades', 'scalability']);
    return (
        <>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t('comparison.title')}</h2>
            <p className="mt-4 mb-8 text-slate-600">{t('comparison.subtitle')}</p>
            <table className="w-full table-fixed text-start text-xs sm:text-sm md:text-base">
                <caption className="sr-only">{t('comparison.title')}</caption>
                <thead>
                    <tr className="border-b-2 border-slate-300">
                        <th scope="col" className="w-[29%] py-4 pe-2 sm:pe-4 text-start font-semibold break-words">{comparison.headerLabel}</th>
                        <th scope="col" className="w-[33%] py-4 px-1 sm:px-4 text-start font-semibold break-words">{comparison.headerBuy}</th>
                        <th scope="col" className="w-[38%] py-4 ps-2 sm:ps-4 text-start font-semibold break-words">{comparison.headerRent}</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.key} className="border-b border-slate-200 align-top">
                            <th scope="row" className="py-5 pe-2 sm:pe-4 text-start font-medium break-words">{row.label}</th>
                            <td className="py-5 px-1 sm:px-4 text-slate-600 break-words">{row.buy}</td>
                            <td className="py-5 ps-2 sm:ps-4 text-dark break-words">{row.rent}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
