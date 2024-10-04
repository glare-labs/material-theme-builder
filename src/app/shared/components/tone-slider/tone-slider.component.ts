import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, inject, Input, Output } from '@angular/core'
import { EMaterialContrastLevel, EMaterialVariant } from '@glare-labs/material-tokens-generator'
import { DynamicColor, DynamicScheme, hexFromArgb, TonalPalette } from '@material/material-color-utilities'
import { MdSlider } from '@material/web/all'

@Component({
    standalone: true,
    selector: 'tone-slider',
    templateUrl: './tone-slider.component.html',
    styleUrl: './tone-slider.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ToneSliderComponent implements AfterViewInit {
    @Input({ required: false })
    public get hueAndChroma() {
        return this._hueAndChroma
    }
    public set hueAndChroma(value: [number, number]) {
        if (value === this._hueAndChroma) {
            return
        }
        this._hueAndChroma = value
        const colorMappingElement = this.elementRef.nativeElement.querySelector('.tone-slider-color-mapping')!

        const scheme = new DynamicScheme({
            isDark: false,
            contrastLevel: EMaterialContrastLevel.Default,
            // @ts-ignore
            variant: EMaterialVariant.Vibrant,
            sourceColorArgb: 0x000000,
        })
        const colors = []
        for (let index = 0; index <= 100; index += 1) {
            const zP = DynamicColor.fromPalette({
                name: 'z-0',
                palette: (s) => TonalPalette.fromHueAndChroma(value[0], value[1]),
                tone: () => index
            }).getArgb(scheme)
            colors.push(hexFromArgb(zP))
        }
        const styleText = `background-image: linear-gradient(to right, ${colors.map(color => `${color}`).join(',')})`

        colorMappingElement.setAttribute('style', styleText)
    }
    @Output('slider-change')
    private sliderChange = new EventEmitter<number>()

    private _hueAndChroma: [number, number] = [55, 55]
    private elementRef = inject<ElementRef<HTMLElement>>(ElementRef)

    ngAfterViewInit(): void {

    }

    protected handleSliderInput(e: Event) {
        const slider = e.target as MdSlider
        this.sliderChange.emit(slider.value)
    }
}
