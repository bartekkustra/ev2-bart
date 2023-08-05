declare module Theme {
  type ThemeModeType = 'light' | 'dark'
  
  interface PaletteColorOptions {
    100?: string
    200?: string
    300?: string
    400?: string
    500?: string
    600?: string
    700?: string
    800?: string
    900?: string
  }

  interface TypographyOptions {
    fontFamily?: string
    fontSize?: number
  }

  interface Typography {
    body: TypographyOptions
    h1?: TypographyOptions
    h2?: TypographyOptions
    h3?: TypographyOptions
    h4?: TypographyOptions
    h5?: TypographyOptions
    h6?: TypographyOptions
  }
  
  interface Palette {
    gray?: PaletteColorOptions
    primary?: PaletteColorOptions
    greenAccent?: PaletteColorOptions
    redAccent?: PaletteColorOptions
    blueAccent?: PaletteColorOptions
    bg?: PaletteColorOptions
  }
  
  interface Theme {
    palette: {
      mode: 'dark' | 'light'
      Palette: Palette
    }
    typography: Typography
  }
  
  interface ThemeOptions {
    palette?: Palette
    typography?: Typography
  }
}