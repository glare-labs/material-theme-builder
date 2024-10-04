import { Component, computed, inject, signal } from '@angular/core'
import { EMaterialContrastLevel, EMaterialVariant, TMaterialVariant } from '@glare-labs/material-tokens-generator'
import { Hct, hexFromArgb, TonalPalette } from '@material/material-color-utilities'
import { MdFilledSelect, MdFilledTextField } from '@material/web/all'
import { MaterialThemeProviderThemeChangeEmitterType } from '../../../../shared/components/material-theme-provider/material-theme-provider.component'
import { MaterialThemeVariantService } from '../../../../shared/services/material-theme-variant.service'
import { ClipboardButtonComponent } from '../../components/clipboard-button/clipboard-button.component'

@Component({
    selector: 'application-page-dynamic-page',
    templateUrl: './dynamic-page.component.html',
    styleUrl: './dynamic-page.component.css'
})
export class DynamicPageComponent {
    private variantService = inject(MaterialThemeVariantService)

    protected readonly clipboardButton = ClipboardButtonComponent

    protected readonly sourceColor = signal({
        hue: 55,
        chroma: 55,
        tone: 55,
    })
    protected primaryKeyColor = signal({
        hue: 25,
        chroma: 55,
        tone: 55,
    })
    protected secondaryKeyColor = signal({
        hue: 75,
        chroma: 55,
        tone: 55,
    })
    protected tertiaryKeyColor = signal({
        hue: 125,
        chroma: 55,
        tone: 55,
    })
    protected neutralKeyColor = signal({
        hue: 175,
        chroma: 55,
        tone: 55,
    })
    protected neutralVariantKeyColor = signal({
        hue: 225,
        chroma: 55,
        tone: 55,
    })

    protected contrastLevel = EMaterialContrastLevel.Default
    protected variant = EMaterialVariant.Vibrant
    protected get variants() {
        return this.variantService.variants
    }

    protected readonly lightThemeStyleText = signal('')
    protected readonly darkThemeStyleText = signal('')
    protected readonly lightThemeMarkdownDataComputed = computed(() => `${'```css'}\n.light-mode {\n${this.lightThemeStyleText().replaceAll(';', ';\n').replaceAll('--md', '    --md')}}\n${'```'}`)
    protected readonly darkThemeMarkdownDataComputed = computed(() => `${'```css'}\n.dark-mode {\n${this.darkThemeStyleText().replaceAll(';', ';\n').replaceAll('--md', '    --md')}}\n${'```'}`)

    protected sourceColorHexComputed = computed(() => {
        const { chroma, hue, tone } = this.sourceColor()
        return hexFromArgb(Hct.from(hue, chroma, tone).toInt())
    })
    protected primaryTonalPaletteComputed = computed(() => {
        const { chroma, hue, tone } = this.primaryKeyColor()
        return TonalPalette.fromHct(Hct.from(hue, chroma, tone))
    })
    protected primaryColorHexComputed = computed(() => {
        const { chroma, hue, tone } = this.primaryKeyColor()
        return hexFromArgb(Hct.from(hue, chroma, tone).toInt())
    })
    protected secondaryTonalPaletteComputed = computed(() => {
        const { chroma, hue, tone } = this.secondaryKeyColor()
        return TonalPalette.fromHct(Hct.from(hue, chroma, tone))
    })
    protected secondaryColorHexComputed = computed(() => {
        const { chroma, hue, tone } = this.secondaryKeyColor()
        return hexFromArgb(Hct.from(hue, chroma, tone).toInt())
    })
    protected tertiaryTonalPaletteComputed = computed(() => {
        const { chroma, hue, tone } = this.tertiaryKeyColor()
        return TonalPalette.fromHct(Hct.from(hue, chroma, tone))
    })
    protected tertiaryColorHexComputed = computed(() => {
        const { chroma, hue, tone } = this.tertiaryKeyColor()
        return hexFromArgb(Hct.from(hue, chroma, tone).toInt())
    })
    protected neutralTonalPaletteComputed = computed(() => {
        const { chroma, hue, tone } = this.neutralKeyColor()
        return TonalPalette.fromHct(Hct.from(hue, chroma, tone))
    })
    protected neutralColorHexComputed = computed(() => {
        const { chroma, hue, tone } = this.neutralKeyColor()
        return hexFromArgb(Hct.from(hue, chroma, tone).toInt())
    })
    protected neutralVariantTonalPaletteComputed = computed(() => {
        const { chroma, hue, tone } = this.neutralVariantKeyColor()
        return TonalPalette.fromHct(Hct.from(hue, chroma, tone))
    })
    protected neutralVariantColorHexComputed = computed(() => {
        const { chroma, hue, tone } = this.neutralVariantKeyColor()
        return hexFromArgb(Hct.from(hue, chroma, tone).toInt())
    })

    protected handleHueSliderChange(paletteName: 'primaryKeyColor' | 'secondaryKeyColor' | 'tertiaryKeyColor' | 'neutralKeyColor' | 'neutralVariantKeyColor', e: number) {
        this[paletteName].update(v => ({ ...v, hue: e }))
    }

    protected handleChromaSliderChange(paletteName: 'primaryKeyColor' | 'secondaryKeyColor' | 'tertiaryKeyColor' | 'neutralKeyColor' | 'neutralVariantKeyColor', e: number) {
        this[paletteName].update(v => ({ ...v, chroma: e }))
    }

    protected handleToneSliderChange(paletteName: 'primaryKeyColor' | 'secondaryKeyColor' | 'tertiaryKeyColor' | 'neutralKeyColor' | 'neutralVariantKeyColor', e: number) {
        this[paletteName].update(v => ({ ...v, tone: e }))
    }

    protected handleContrastLevelChange(e: Event) {
        this.contrastLevel = Number((e.target as MdFilledTextField).value!)
    }

    protected handleVariantSelectChange(e: Event) {
        this.variant = Number((e.target as MdFilledSelect).value) as TMaterialVariant
    }

    protected handleMaterialThemeProviderThemeChange(mode: 'light' | 'dark', e: MaterialThemeProviderThemeChangeEmitterType) {
        if (mode === 'light') {
            this.lightThemeStyleText.set(e.data.styleText)
        } else {
            this.darkThemeStyleText.set(e.data.styleText)
        }
    }
}
