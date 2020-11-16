// Colors

interface Color {
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

interface NeutralColor extends Color {
  0: string
  50: string
  150: string
  250: string
  350: string
  450: string
  550: string
  650: string
  750: string
  850: string
  950: string
  1000: string
}

type Transparency = 0 | 1 | 2 | 3 | 4 | 5

const transparencies: Record<Transparency, string> = {
  0: '0.08',
  1: '0.16',
  2: '0.24',
  3: '0.32',
  4: '0.4',
  5: '0.48',
}

// eslint-disable-next-line @typescript-eslint/no-shadow
const transparency = (hexColor: string, transparency: Transparency) => {
  let fullHex: string[] = []
  if (hexColor.length < 4) {
    fullHex = ['0', '0', '0']
  } else if (hexColor.length < 7) {
    fullHex = Array.from(hexColor.slice(1, 4)).map(s => s.repeat(2))
  } else {
    fullHex = [hexColor.slice(1, 3), hexColor.slice(3, 5), hexColor.slice(5, 7)]
  }
  const [r, g, b] = fullHex.map(h => parseInt(h, 16))
  return `rgba(${r},${g},${b},${transparencies[transparency]})`
}

interface Colors {
  primary: Color
  accent: Color
  info: Color
  success: Color
  warning: Color
  danger: Color
  neutral: NeutralColor
  transparency: typeof transparency
}

const colors: Colors = {
  transparency,
  primary: {
    100: '#C9FCCD',
    200: '#95F9A7',
    300: '#5FED86',
    400: '#37DC75',
    500: '#00C65E',
    600: '#00AA61',
    700: '#008E60',
    800: '#007258',
    900: '#005F53',
  },
  accent: {
    100: '#E1DCF4',
    200: '#C5BBEA',
    300: '#9287C2',
    400: '#5B5385',
    500: '#1E1A34',
    600: '#16132C',
    700: '#100D25',
    800: '#0A081E',
    900: '#060418',
  },
  info: {
    100: '#CFEAFF',
    200: '#9FD1FF',
    300: '#6FB4FF',
    400: '#4B9AFF',
    500: '#0F6FFF',
    600: '#0A55DB',
    700: '#073FB7',
    800: '#042C93',
    900: '#021F7A',
  },
  success: {
    100: '#E6FCDC',
    200: '#C9FABA',
    300: '#A1F194',
    400: '#7CE376',
    500: '#4BD14F',
    600: '#36B345',
    700: '#25963D',
    800: '#177934',
    900: '#0E642F',
  },
  warning: {
    100: '#FEF9CC',
    200: '#FDF399',
    300: '#FBE966',
    400: '#F7DE40',
    500: '#F2CE04',
    600: '#D0AD02',
    700: '#AE8E02',
    800: '#8C7001',
    900: '#745B00',
  },
  danger: {
    100: '#FFE2D6',
    200: '#FFBEAE',
    300: '#FF9385',
    400: '#FF6B67',
    500: '#FF3542',
    600: '#DB2642',
    700: '#B71A40',
    800: '#93103C',
    900: '#7A0A39',
  },
  neutral: {
    0: '#ffffff',
    50: '#f2f2f2',
    100: '#e6e6e6',
    150: '#d9d9d9',
    200: '#cccccc',
    250: '#bfbfbf',
    300: '#b3b3b3',
    350: '#a6a6a6',
    400: '#999999',
    450: '#8c8c8c',
    500: '#808080',
    550: '#737373',
    600: '#666666',
    650: '#595959',
    700: '#4d4d4d',
    750: '#404040',
    800: '#333333',
    850: '#262626',
    900: '#191919',
    950: '#0d0d0d',
    1000: '#000000',
  },
}

// Border radius

interface BorderRadius {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

const borderRadius: BorderRadius = {
  xs: '0.125rem',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '2rem',
}

// Font sizes

interface FontSizes {
  xxs: string
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
  xxxl: string
  xxxxl: string
}

const fontSizes: FontSizes = {
  xxs: '0.5625rem',
  xs: '0.6875rem',
  sm: '0.8125rem',
  md: '1rem',
  lg: '1.1875rem',
  xl: '1.5rem',
  xxl: '1.875rem',
  xxxl: '2.5rem',
  xxxxl: '3.25rem',
}

// Space

interface Spaces {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
}

type Space = ((...args: ('0' | keyof Spaces)[]) => string) & Spaces

const spaces: Spaces = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '2rem',
  xl: '4rem',
}

const space: Space = Object.assign(
  (...args: ('0' | keyof Spaces)[]) => args.map(a => (a === '0' ? '0' : spaces[a])).join(' '),
  spaces
)

// Size

type Size = (arg: number) => string

const sizeFactor = 1
const sizeUnit = 'rem'

const size: Size = (arg: number) => `${arg * sizeFactor}${sizeUnit}`

// Theme

interface ITheme {
  borderRadius: BorderRadius
  colors: Colors
  fontSizes: FontSizes
  size: Size
  space: Space
}

export const theme: ITheme = {
  borderRadius,
  colors,
  fontSizes,
  size,
  space,
}
