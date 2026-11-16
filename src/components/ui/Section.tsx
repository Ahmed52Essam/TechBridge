import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '../../lib/utils';
import type { NavSection } from '../../lib/navigation';

interface SectionProps extends ComponentPropsWithoutRef<'section'> {
    section?: NavSection;
    variant?: 'default' | 'alt' | 'dark' | 'none';
    containerSize?: 'default' | 'narrow' | 'wide' | 'none';
}

export const Section = ({
    children, section, variant = 'default', containerSize = 'default', className, id, ...props
}: SectionProps) => {
    const variants = {
        default: 'bg-white',
        alt: 'bg-background',
        dark: 'bg-dark text-white',
        none: '',
    };
    const containers = {
        default: 'container px-4 md:px-6 mx-auto max-w-6xl',
        narrow: 'container px-4 md:px-6 mx-auto max-w-4xl',
        wide: 'container px-4 md:px-6 mx-auto max-w-6xl',
        none: '',
    };
    return (
        <section id={section?.id || id} className={cn('py-12 md:py-16', variants[variant], className)} {...props}>
            <div className={containers[containerSize]}>{children}</div>
        </section>
    );
};
