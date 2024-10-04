import { computed, Injectable, signal } from '@angular/core'
import { EMaterialContrastLevel, EMaterialVariant, TMaterialContrastLevel, TMaterialVariant } from '@glare-labs/material-tokens-generator'
import { MaterialThemeConfiguration } from '../interface/material-theme-configuration'

@Injectable({
    providedIn: 'root'
})
export class MaterialThemeConfigurationService implements MaterialThemeConfiguration {
    private readonly configuration = signal<MaterialThemeConfiguration>({
        hue: 50,
        chroma: 50,
        tone: 50,
        variant: EMaterialVariant.Content,
        contrastLevel: EMaterialContrastLevel.Default,
        isDark: false,
    })

    public readonly configurationComputed = computed(() => this.configuration())

    public get hue() {
        return this.configuration().hue
    }
    public set hue(value: number) {
        this.configuration.update(e => ({ ...e, hue: value }))
    }

    public get chroma() {
        return this.configuration().chroma
    }
    public set chroma(value: number) {
        this.configuration.update(e => ({ ...e, chroma: value }))
    }

    public get tone() {
        return this.configuration().tone
    }
    public set tone(value: number) {
        this.configuration.update(e => ({ ...e, tone: value }))
    }

    public get variant() {
        return this.configuration().variant
    }
    public set variant(value: TMaterialVariant | number) {
        this.configuration.update(e => ({ ...e, variant: value }))
    }

    public get contrastLevel() {
        return this.configuration().contrastLevel
    }
    public set contrastLevel(value: TMaterialContrastLevel | number) {
        this.configuration.update(e => ({ ...e, contrastLevel: value }))
    }

    public get isDark() {
        return this.configuration().isDark
    }
    public set isDark(value: boolean) {
        this.configuration.update(e => ({ ...e, isDark: value }))
    }
}
