import { afterEach, describe, expect, it, vi } from 'vitest';
import { scrollToId } from './utils';

afterEach(() => {
    document.body.innerHTML = '';
    vi.unstubAllGlobals();
});

function setupSection(reducedMotion: boolean) {
    vi.stubGlobal('matchMedia', vi.fn(() => ({ matches: reducedMotion })));
    document.body.innerHTML = '<section id="catalog"><h2>Hardware</h2></section>';
    const section = document.getElementById('catalog')!;
    const scroll = vi.fn();
    section.scrollIntoView = scroll;
    return { scroll, heading: section.querySelector('h2')! };
}

describe('section navigation', () => {
    it('moves keyboard focus to the destination heading', () => {
        const { heading, scroll } = setupSection(false);
        scrollToId('#catalog');
        expect(document.activeElement).toBe(heading);
        expect(scroll).toHaveBeenCalledWith({ behavior: 'smooth' });
    });

    it('uses instant scrolling when reduced motion is requested', () => {
        const { scroll } = setupSection(true);
        scrollToId('catalog');
        expect(scroll).toHaveBeenCalledWith({ behavior: 'instant' });
    });

    it('ignores missing sections without moving focus or scrolling', () => {
        const { scroll } = setupSection(false);
        scrollToId('missing');
        expect(document.activeElement).toBe(document.body);
        expect(scroll).not.toHaveBeenCalled();
    });
});
