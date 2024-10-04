import { Component, computed, inject, signal } from '@angular/core'
import { EMaterialContrastLevel, EMaterialVariant, TMaterialVariant } from '@glare-labs/material-tokens-generator'
import { Hct, hexFromArgb } from '@material/material-color-utilities'
import { MdFilledSelect, MdFilledTextField } from '@material/web/all'
import { MaterialThemeProviderThemeChangeEmitterType } from '../../../../shared/components/material-theme-provider/material-theme-provider.component'
import { MaterialThemeVariantService } from '../../../../shared/services/material-theme-variant.service'
import { ClipboardButtonComponent } from '../../components/clipboard-button/clipboard-button.component'

@Component({
    selector: 'application-page-variant-page',
    templateUrl: './variant-page.component.html',
    styleUrl: './variant-page.component.css'
})
export class VariantPageComponent {
    private variantService = inject(MaterialThemeVariantService)

    protected readonly clipboardButton = ClipboardButtonComponent

    protected readonly lightThemeStyleText = signal('')
    protected readonly darkThemeStyleText = signal('')
    protected readonly sourceColor = signal({
        hue: 55,
        chroma: 55,
        tone: 55,
    })
    protected contrastLevel = EMaterialContrastLevel.Default
    protected variant = EMaterialVariant.Vibrant

    protected get variants() {
        return this.variantService.variants
    }

    protected readonly lightThemeMarkdownDataComputed = computed(() => `${'```css'}\n.light-mode {\n${this.lightThemeStyleText().replaceAll(';', ';\n').replaceAll('--md', '    --md')}}\n${'```'}`)
    protected readonly darkThemeMarkdownDataComputed = computed(() => `${'```css'}\n.dark-mode {\n${this.darkThemeStyleText().replaceAll(';', ';\n').replaceAll('--md', '    --md')}}\n${'```'}`)
    protected readonly sourceColorHexComputed = computed(() => {
        const { chroma, hue, tone } = this.sourceColor()
        return hexFromArgb(Hct.from(hue, chroma, tone).toInt())
    })


    protected getCssMarkdownFromStyleText(styleText: string) {
        return `:root {\n${styleText.replaceAll(';', ';\n').replaceAll('--md', '    --md')}}`
    }

    protected handleHueSliderChange(e: number) {
        this.sourceColor.update(v => ({ ...v, hue: e }))
    }

    protected handleChromaSliderChange(e: number) {
        this.sourceColor.update(v => ({ ...v, chroma: e }))
    }

    protected handleToneSliderChange(e: number) {
        this.sourceColor.update(v => ({ ...v, tone: e }))
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
