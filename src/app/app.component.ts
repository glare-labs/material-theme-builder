import { Component, inject } from '@angular/core'
import { ChangeThemeIconButtonEventEmitterType } from './shared/components/change-theme-icon-button/change-theme-icon-button.component'
import { MaterialThemeConfigurationService } from './shared/services/material-theme-configuration.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    private materialThemeConfiguration = inject(MaterialThemeConfigurationService)

    protected get mdconfig() {
        return this.materialThemeConfiguration.configurationComputed()
    }

    protected handleChangeThemeIconButtonClick(e: ChangeThemeIconButtonEventEmitterType) {
        this.materialThemeConfiguration.isDark = e.data.isDark
    }
}
