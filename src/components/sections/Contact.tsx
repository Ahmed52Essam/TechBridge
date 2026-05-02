import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';

export const Contact = () => {
    // The form submission is handled natively by formsubmit.co using the action attribute.

    return (
        <section id="contact" className="py-20 md:py-32 bg-slate-900 text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 p-4 opacity-50">
                <div className="h-64 w-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
            </div>

            <div className="container px-4 mx-auto md:px-6 relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                            Upgrade Your Office Today.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                            Get a custom proposal within 24 hours. No commitment required.
                            Let us handle the hardware so you can focus on growth.
                        </p>
                    </div>

                    <Card className="border-slate-800 bg-slate-950 text-white shadow-2xl">
                        <CardHeader>
                            <CardTitle>Request Proposal</CardTitle>
                            <CardDescription className="text-slate-400">
                                Tell us what you need. We'll build a plan for you.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form action="https://formsubmit.co/info@techbridge-eg.com" method="POST" className="space-y-4">
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_autoresponse" value="Thank you for your inquiry! We have received your request for a custom hardware proposal and our team will get back to you shortly." />
                                <input type="hidden" name="_subject" value="New Hardware Proposal Request" />
                                <input type="hidden" name="_template" value="table" />

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                        <Input id="name" name="name" placeholder="Ibrahim Ashraf" className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-secondary" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="company" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Company</label>
                                        <Input id="company" name="company" placeholder="Acme Inc." className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-secondary" required />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                        <Input id="email" name="email" type="email" placeholder="IbrahimCEO@company.com" className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-secondary" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone</label>
                                        <Input id="phone" name="phone" type="tel" placeholder="+20 1xx xxx xxxx" className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-secondary" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="devices" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">How many devices do you need?</label>
                                    <select
                                        id="devices"
                                        name="devices"
                                        className="flex h-10 w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-white ring-offset-background placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        <option value="1-5">1-5 Devices</option>
                                        <option value="5-20">5-20 Devices</option>
                                        <option value="20+">20+ Devices</option>
                                    </select>
                                </div>

                                <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90 text-white">
                                    Request Proposal
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};
