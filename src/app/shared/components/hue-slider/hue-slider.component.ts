import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, inject, Output } from '@angular/core'
import { EMaterialContrastLevel, EMaterialVariant } from '@glare-labs/material-tokens-generator'
import { DynamicColor, DynamicScheme, hexFromArgb, TonalPalette } from '@material/material-color-utilities'
import { MdSlider } from '@material/web/all'

@Component({
    standalone: true,
    selector: 'hue-slider',
    templateUrl: './hue-slider.component.html',
    styleUrl: './hue-slider.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HueSliderComponent implements AfterViewInit {

    @Output('slider-change') sliderChange = new EventEmitter<number>()

    private elementRef = inject<ElementRef<HTMLElement>>(ElementRef)

    ngAfterViewInit(): void {
        const colorMappingElement = this.elementRef.nativeElement.querySelector('.hue-slider-color-mapping')!

        const scheme = new DynamicScheme({
            isDark: false,
            contrastLevel: EMaterialContrastLevel.Default,
            // @ts-ignore
            variant: EMaterialVariant.Vibrant,
            sourceColorArgb: 0x000000,
        })
        const colors = []
        for (let index = 0; index <= 360; index += 1) {
            const zP = DynamicColor.fromPalette({
                name: 'z-0',
                palette: (s) => TonalPalette.fromHueAndChroma(index, 50),
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
