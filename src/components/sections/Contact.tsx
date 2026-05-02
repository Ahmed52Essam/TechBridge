import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    // The form submission is handled natively by formsubmit.co using the action attribute.

    return (
        <section id="contact" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 p-4 opacity-50">
                <div className="h-64 w-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
            </div>

            <div className="container px-4 mx-auto md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6 text-start">
                        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                            {t('contact.title')}
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                            {t('contact.subtitle')}
                        </p>
                    </div>

                    <Card className="border-slate-800 bg-slate-950 text-white shadow-2xl">
                        <CardHeader className="text-start">
                            <CardTitle>{t('contact.cardTitle')}</CardTitle>
                            <CardDescription className="text-slate-400">
                                {t('contact.cardDescription')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action="https://formsubmit.co/info@techbridge-eg.com" method="POST" className="space-y-4 text-start">
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_autoresponse" value={t('contact.form.autoResponse')} />
                                <input type="hidden" name="_subject" value="New Hardware Proposal Request" />
                                <input type="hidden" name="_template" value="table" />

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('contact.form.name')}</label>
                                        <Input id="name" name="name" placeholder={t('contact.form.namePlaceholder')} className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-secondary" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('contact.form.company')}</label>
                                        <Input id="company" name="company" placeholder={t('contact.form.companyPlaceholder')} className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-secondary" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('contact.form.email')}</label>
                                        <Input id="email" name="email" type="email" placeholder={t('contact.form.emailPlaceholder')} className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-secondary" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('contact.form.phone')}</label>
                                        <Input id="phone" name="phone" type="tel" placeholder={t('contact.form.phonePlaceholder')} className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-secondary" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="devices" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">{t('contact.form.devicesLabel')}</label>
                                    <select
                                        id="devices"
                                        name="devices"
                                        className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <option value="1-5">{t('contact.form.devicesOptions.1-5')}</option>
                                        <option value="5-20">{t('contact.form.devicesOptions.5-20')}</option>
                                        <option value="20+">{t('contact.form.devicesOptions.20+')}</option>
                                    </select>
                                </div>

                                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                                    {t('contact.form.submit')}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
