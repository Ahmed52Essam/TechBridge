import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { CONTACT_INFO } from '../../lib/constants';

export const WhatsAppButton = () => {
    const { t } = useTranslation();
    return (
        <a href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(t('whatsapp.message'))}`}
            target="_blank" rel="noopener noreferrer" aria-label={t('whatsapp.button')}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:bg-[#20B858] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-dark">
            <MessageCircle className="h-6 w-6" fill="currentColor" aria-hidden="true" />
        </a>
    );
};
