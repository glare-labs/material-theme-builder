import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { CLIPBOARD_OPTIONS, MarkdownModule, MARKED_OPTIONS, provideMarkdown } from 'ngx-markdown'
import { ChromaSliderComponent } from '../../shared/components/chroma-slider/chroma-slider.component'
import { HueSliderComponent } from '../../shared/components/hue-slider/hue-slider.component'
import { MaterialThemeProviderComponent } from '../../shared/components/material-theme-provider/material-theme-provider.component'
import { ToneSliderComponent } from '../../shared/components/tone-slider/tone-slider.component'
import { ClipboardButtonComponent } from './components/clipboard-button/clipboard-button.component'
import { ColorMappingComponent } from './components/color-mapping/color-mapping.component'
import { MdComponentsColorMappingComponent } from './components/md-components-color-mapping/md-components-color-mapping.component'
import { MdToggleDialogComponent } from './components/md-toggle-dialog/md-toggle-dialog.component'
import { PrebuildThemePreviewCardComponent } from './components/prebuild-theme-preview-card/prebuild-theme-preview-card.component'
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component'
import { HeaderLayoutComponent } from './layouts/header-layout/header-layout.component'
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component'
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component'
import { PrebuildPageComponent } from './pages/prebuild-page/prebuild-page.component'
import { VariantPageComponent } from './pages/variant-page/variant-page.component'
import { MaterialThemeConfigurationScopedService } from './services/material-theme-configuration-scoped.service'


@NgModule({
    declarations: [
        VariantPageComponent,
        PrebuildPageComponent,
        DynamicPageComponent,
    ],
    imports: [
        CommonModule,
        HeaderLayoutComponent,
        ContentLayoutComponent,
        HueSliderComponent,
        ChromaSliderComponent,
        ToneSliderComponent,
        ColorMappingComponent,
        MaterialThemeProviderComponent,
        MarkdownModule,
        ClipboardButtonComponent,
        MdToggleDialogComponent,
        PageLayoutComponent,
        ContentLayoutComponent,
        HeaderLayoutComponent,
        PrebuildThemePreviewCardComponent,
        MdComponentsColorMappingComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        MaterialThemeConfigurationScopedService,
        provideMarkdown({
            markedOptions: {
                provide: MARKED_OPTIONS,
                useValue: {
                    gfm: true,
                    breaks: false,
                    pedantic: false,
                },
            },
            clipboardOptions: {
                provide: CLIPBOARD_OPTIONS,
                useValue: {
                    buttonComponent: ClipboardButtonComponent,
                },
            },
        })
    ]
})
export class ApplicationPagesModule { }
