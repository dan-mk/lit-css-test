import { css, unsafeCSS, CSSResult } from 'lit'
import { theme, ThemeCategory } from './theme';

export type LitTheme = {
    [key in ThemeCategory]: {
        [key: string]: CSSResult;
    };
}

export const litTheme = {
    colors: {
        primary: css`${unsafeCSS(theme.colors.primary)}`,
        secondary: css`${unsafeCSS(theme.colors.secondary)}`,
        tertiary: css`${unsafeCSS(theme.colors.tertiary)}`,
    },
    space: {
        _1: css`${unsafeCSS(theme.space._1)}`,
        _2: css`${unsafeCSS(theme.space._2)}`,
        _3: css`${unsafeCSS(theme.space._3)}`,
        _4: css`${unsafeCSS(theme.space._4)}`,
    },
    fontSizes: {
        _1: css`${unsafeCSS(theme.fontSizes._1)}`,
        _2: css`${unsafeCSS(theme.fontSizes._2)}`,
        _3: css`${unsafeCSS(theme.fontSizes._3)}`,
        _4: css`${unsafeCSS(theme.fontSizes._4)}`,
    },
    fonts: {},
    lineHeights: {},
    borders: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
} as LitTheme;

