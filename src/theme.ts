export type ThemeCategory =
    'colors' | 'space' | 'fontSizes' | 'fonts' | 'lineHeights' | 'borders' | 'radii' | 'shadows' | 'zIndices' | 'transitions';

export type Theme = {
    [key in ThemeCategory]: {
        [key in string]: string;
    };
};

export const theme = {
    colors: {
        primary: 'var(--vg-theme-colors-primary, #0070f3)',
        secondary: 'var(--vg-theme-colors-secondary, #ff4081)',
        tertiary: 'var(--vg-theme-colors-tertiary, #f5f5f5)',
    },
    space: {
        _1: 'var(--vg-theme-space-1, 0.5rem)',
        _2: 'var(--vg-theme-space-2, 1rem)',
        _3: 'var(--vg-theme-space-3, 2rem)',
        _4: 'var(--vg-theme-space-4, 4rem)',
    },
    fontSizes: {
        _1: 'var(--vg-theme-font-sizes-1, 0.75rem)',
        _2: 'var(--vg-theme-font-sizes-2, 1rem)',
        _3: 'var(--vg-theme-font-sizes-3, 1.5rem)',
        _4: 'var(--vg-theme-font-sizes-4, 2rem)',
    },
    fonts: {},
    lineHeights: {},
    borders: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
} as Theme;
