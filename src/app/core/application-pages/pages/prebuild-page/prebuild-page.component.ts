import { Component } from '@angular/core'
import { Hct, TonalPalette } from '@material/material-color-utilities'
import { ClipboardButtonComponent } from '../../components/clipboard-button/clipboard-button.component'

@Component({
    selector: 'application-page-prebuild-page',
    templateUrl: './prebuild-page.component.html',
    styleUrl: './prebuild-page.component.css'
})
export class PrebuildPageComponent {
    protected readonly clipboardButton = ClipboardButtonComponent

    protected createTonalPalette(hue: number, chroma: number, tone: number) {
        return TonalPalette.fromHct(Hct.from(hue, chroma, tone))
    }

    protected wrapMdThemeProviderStyleTextToMarkdown(styleText: string) {
        return {
            light: `${'```css'}\n.light {\n${styleText.replaceAll('--md', '    --md').replaceAll(';', ';\n')}}\n${'```'}`,
            dark: `${'```css'}\n.dark {\n${styleText.replaceAll('--md', '    --md').replaceAll(';', ';\n')}}\n${'```'}`,
        }
    }
}
