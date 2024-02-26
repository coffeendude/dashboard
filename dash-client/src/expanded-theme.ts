// probably don't need this import
// eslint-disable-next-line 
// import { Palette, PaletteColor } from '@mui/material/styles/createPalette';

/* This is extending these properties to the MUI theme typescript that has already been created. This
enables us to use these properties in our theme settings.
*/
declare module '@mui/material/styles/createPalette' {
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}