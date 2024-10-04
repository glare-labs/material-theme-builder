import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core'
import { EMaterialContrastLevel, EMaterialVariant } from '@glare-labs/material-tokens-generator'
import { DynamicColor, DynamicScheme, hexFromArgb, TonalPalette } from '@material/material-color-utilities'
import { MdSlider } from '@material/web/all'

@Component({
    standalone: true,
    selector: 'chroma-slider',
    templateUrl: './chroma-slider.component.html',
    styleUrl: './chroma-slider.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChromaSliderComponent implements AfterViewInit {
    @Input({ required: false })
    public get hue() {
        return this._hue
    }
    public set hue(value: number) {
        if (value === this._hue) {
            return
        }
        this._hue = value
        this.updateColorMapping()
    }
    @Output('slider-change')
    private sliderChange = new EventEmitter<number>()

    private _hue = 55
    private elementRef = inject<ElementRef<HTMLElement>>(ElementRef)

    ngAfterViewInit(): void {
        this.updateColorMapping()
    }

    private updateColorMapping() {
        const colorMappingElement = this.elementRef.nativeElement.querySelector('.chroma-slider-color-mapping')!

        const scheme = new DynamicScheme({
            isDark: false,
            contrastLevel: EMaterialContrastLevel.Default,
            // @ts-ignore
            variant: EMaterialVariant.Vibrant,
            sourceColorArgb: 0x000000,
        })
        const colors = []
        for (let index = 0; index <= 150; index += 1) {
            const zP = DynamicColor.fromPalette({
                name: 'z-0',
                palette: (s) => TonalPalette.fromHueAndChroma(this.hue, index),
                tone: () => 55
            }).getArgb(scheme)
            colors.push(hexFromArgb(zP))
        }
        const styleText = `background-image: linear-gradient(to right, ${colors.map(color => `${color}`).join(',')})`

        colorMappingElement.setAttribute('style', styleText)
    }

    protected handleSliderInput(e: Event) {
        const slider = e.target as MdSlider
        this.sliderChange.emit(slider.value)
    }
}
