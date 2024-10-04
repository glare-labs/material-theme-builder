import { TMaterialContrastLevel, TMaterialVariant } from '@glare-labs/material-tokens-generator'

export interface MaterialThemeConfiguration {
    hue: number
    chroma: number
    tone: number
    variant: TMaterialVariant | number
    contrastLevel: TMaterialContrastLevel | number
    isDark: boolean
}
