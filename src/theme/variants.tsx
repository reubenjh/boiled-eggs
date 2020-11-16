import { theme } from './theme'

type ButtonVariant = 'primary' | 'danger' | 'default'

interface ButtonVariantStyle {
  '--background': string
  '--color': string
}

const {
  colors: { primary, neutral, danger },
} = theme

export const buttonVariants: Record<ButtonVariant, ButtonVariantStyle> = {
  primary: {
    '--background': primary[600],
    '--color': neutral[0],
  },
  danger: {
    '--background': danger[600],
    '--color': neutral[0],
  },
  default: {
    '--background': neutral[50],
    '--color': neutral[950],
  },
}
