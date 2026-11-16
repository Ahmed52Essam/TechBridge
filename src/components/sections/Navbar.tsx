import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/Button';
import { scrollToId } from '../../lib/utils';
import { SITE_SECTIONS, getNavbarLinks, getSectionHref } from '../../lib/navigation';
import Logo from '/TechBridgelogo.png';

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleRef = useRef<HTMLButtonElement>(null);
    const isArabic = i18n.language.startsWith('ar');

    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const frame = requestAnimationFrame(() => scrollToId(location.hash));
            return () => cancelAnimationFrame(frame);
        }
    }, [location.pathname, location.hash]);

    const handleNavClick = (id: string) => {
        setIsMenuOpen(false);
        if (location.pathname !== '/') navigate('/#' + id);
        else scrollToId(id);
    };

    return (
        <>
            <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-4 focus:z-[60] focus:bg-white focus:p-3">{t('nav.skip')}</a>
            <header className="sticky top-0 z-50 bg-white border-b border-slate-200" dir={isArabic ? 'rtl' : 'ltr'}>
                <nav aria-label={t('nav.label')} className="relative mx-auto max-w-6xl px-4 md:px-6 py-4"
                    onKeyDown={(event) => {
                        if (event.key === 'Escape' && isMenuOpen) { setIsMenuOpen(false); toggleRef.current?.focus(); }
                    }}>
                    <div className="flex items-center justify-between gap-3">
                        <Link to="/" onClick={() => { setIsMenuOpen(false); if (location.pathname === '/') window.scrollTo({ top: 0, behavior: 'instant' }); }}
                            className="flex items-center gap-2 shrink-0" dir="ltr">
                            <img src={Logo} alt="" className="h-7 w-7 object-contain" />
                            <span className="text-xl sm:text-2xl font-bold tracking-tight">TechBridge</span>
                        </Link>
                        <div className="hidden lg:flex items-center gap-7">
                            {getNavbarLinks().map((link) => (
                                <a key={link.id} href={location.pathname === '/' ? getSectionHref(link) : '/' + getSectionHref(link)}
                                    onClick={(event) => { event.preventDefault(); handleNavClick(link.id); }}
                                    className="text-sm text-slate-600 hover:text-primary hover:underline underline-offset-4">{t(link.labelKey)}</a>
                            ))}
                        </div>
                        <div className="flex items-center gap-3">
                            <button onClick={() => i18n.changeLanguage(isArabic ? 'en' : 'ar')} lang={isArabic ? 'en' : 'ar'}
                                className="text-sm text-dark hover:text-primary min-h-11 px-1">
                                {isArabic ? 'English' : 'العربية'}
                            </button>
                            <Button onClick={() => handleNavClick(SITE_SECTIONS.CONTACT.id)} className="hidden lg:inline-flex">{t('nav.getStarted')}</Button>
                            <button ref={toggleRef} onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label={t(isMenuOpen ? 'nav.closeMenu' : 'nav.openMenu')} aria-expanded={isMenuOpen} aria-controls="mobile-navigation"
                                className="lg:hidden flex h-11 w-11 items-center justify-center text-dark hover:bg-slate-100 rounded-md">
                                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                    {isMenuOpen && (
                        <div id="mobile-navigation" className="lg:hidden absolute top-full inset-x-0 bg-white border-b border-slate-200 px-4 pb-5">
                            <div className="flex flex-col gap-1">
                                {getNavbarLinks().map((link) => (
                                    <a key={link.id} href={location.pathname === '/' ? getSectionHref(link) : '/' + getSectionHref(link)}
                                        onClick={(event) => { event.preventDefault(); handleNavClick(link.id); }}
                                        className="py-3 text-slate-700 hover:text-primary">{t(link.labelKey)}</a>
                                ))}
                                <Button className="mt-2" onClick={() => handleNavClick(SITE_SECTIONS.CONTACT.id)}>{t('nav.getStarted')}</Button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
};

