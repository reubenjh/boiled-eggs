import { useTheme as emotionUseTheme } from 'emotion-theming'
import { theme } from './theme'

export const useTheme = () => emotionUseTheme<typeof theme>()
