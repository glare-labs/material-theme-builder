import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, inject, Input, OnChanges, OnInit, Output } from '@angular/core'
import { EMaterialContrastLevel, EMaterialVariant, MaterialDynamicTokens, MaterialTokens, TMaterialColors, TMaterialVariant } from '@glare-labs/material-tokens-generator'
import { Hct, TonalPalette } from '@material/material-color-utilities'
import { MaterialThemeConfiguration } from '../../interface/material-theme-configuration'

export type MaterialThemeProviderThemeChangeEmitterType = {
    data: {
        configuration: MaterialThemeConfiguration,
        styleText: string,
        tokens: Record<keyof TMaterialColors, string>
    }
}

@Component({
    standalone: true,
    selector: 'material-theme-provider',
    templateUrl: './material-theme-provider.component.html',
    styleUrl: './material-theme-provider.component.css'
})
export class MaterialThemeProviderComponent implements OnInit, AfterViewInit, OnChanges {
    private elementRef = inject<ElementRef<HTMLElement>>(ElementRef)

    @Output('theme-change')
    public themeChange = new EventEmitter<MaterialThemeProviderThemeChangeEmitterType>()

    @Input({ required: false, alias: 'target-attribute-name' })
    public targetAttributeName = 'material-theme-styles-target'

    @Input({ required: false, alias: 'style-class-name' })
    public styleClassName = 'material-theme-styles'

    @Input({ alias: 'no-emit' })
    public noEmit = false

    @Input({ required: false })
    @HostBinding('[hue]')
    public hue = 50

    @Input({ required: false })
    @HostBinding('[chroma]')
    public chroma = 50

    @Input({ required: false })
    @HostBinding('[tone]')
    public tone = 50

    @Input({ required: false })
    @HostBinding('[variant]')
    public variant = EMaterialVariant.Content

    @Input({ alias: 'contrast-level', required: false })
    @HostBinding('[contrast-level]')
    public contrastLevel = EMaterialContrastLevel.Default

    @Input({ alias: 'is-dark', required: false })
    @HostBinding('[is-dark]')
    public isDark = false

    @Input({ alias: 'enable-dynamic', required: false })
    public enableDynamic = false

    @Input({ alias: 'primary-palette', required: false })
    @HostBinding('primary-palette')
    public primaryPalette: TonalPalette = TonalPalette.fromHct(Hct.from(50, 50, 50))

    @Input({ alias: 'secondary-palette', required: false })
    @HostBinding('secondary-palette')
    public secondaryPalette: TonalPalette = TonalPalette.fromHct(Hct.from(50, 50, 50))

    @Input({ alias: 'tertiary-palette', required: false })
    @HostBinding('tertiary-palette')
    public tertiaryPalette: TonalPalette = TonalPalette.fromHct(Hct.from(50, 50, 50))

    @Input({ alias: 'neutral-palette', required: false })
    @HostBinding('neutral-palette')
    public neutralPalette: TonalPalette = TonalPalette.fromHct(Hct.from(50, 50, 50))

    @Input({ alias: 'neutral-variant-palette', required: false })
    @HostBinding('neutral-variant-palette')
    public neutralVariantPalette: TonalPalette = TonalPalette.fromHct(Hct.from(50, 50, 50))

    public updateTheme() {
        const styleElement = this.getStyleElementFromElement()
        const theme = this.createTheme()
        const styleText = theme.cssText()
        const tokens = theme.tokens()
        styleElement.textContent = `[${this.targetAttributeName}] {${styleText}}`
        this.themeChange.emit({
            data: {
                configuration: {
                    chroma: this.chroma,
                    contrastLevel: this.contrastLevel,
                    hue: this.hue,
                    isDark: this.isDark,
                    tone: this.tone,
                    variant: this.variant
                },
                styleText,
                tokens,
            }
        })
    }
    public createTheme() {
        if (this.enableDynamic) {
            return new MaterialDynamicTokens({
                sourceColorHct: Hct.from(this.hue, this.chroma, this.tone),
                contrastLevel: this.contrastLevel,
                variant: this.variant as TMaterialVariant,
                isDark: this.isDark,
                primaryPalette: this.primaryPalette,
                secondaryPalette: this.secondaryPalette,
                tertiaryPalette: this.tertiaryPalette,
                neutralPalette: this.neutralPalette,
                neutralVariantPalette: this.neutralVariantPalette,
            })
        }
        return new MaterialTokens(Hct.from(this.hue, this.chroma, this.tone), {
            contrastLevel: this.contrastLevel,
            variant: this.variant as TMaterialVariant,
            isDark: this.isDark,
        })
    }
    private getStyleElementFromElement() {
        const styleElement = this.getStyleElement()
        if (!styleElement) {
            const newStyleElement = this.createStyleElement()
            this.insertStyleElementToRoot(newStyleElement)
            return newStyleElement
        }
        return styleElement
    }
    private createStyleElement() {
        const styleElement = document.createElement('style')
        styleElement.classList.add(`${this.styleClassName}`)
        return styleElement
    }
    private insertStyleElementToRoot(styleElement: HTMLElement) {
        this.elementRef.nativeElement.appendChild(styleElement)
    }
    private getStyleElement() {
        return this.elementRef.nativeElement.querySelector(`.${this.styleClassName}`)
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        if (!this.noEmit) {
            this.updateTheme()
        }
    }

    ngOnChanges(): void {
        if (!this.noEmit) {
            this.updateTheme()
        }
    }

}
