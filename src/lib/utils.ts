import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function scrollToId(id: string) {
    const element = document.getElementById(id.replace('#', ''));
    if (!element) return;
    const target = element.querySelector<HTMLElement>('h2') || element;
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
    element.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
}
