import { Injectable } from '@angular/core'
import { MaterialThemeConfigurationService } from '../../../shared/services/material-theme-configuration.service'

@Injectable({
    providedIn: 'root'
})
export class MaterialThemeConfigurationScopedService extends MaterialThemeConfigurationService {

    constructor() {
        super()
    }

}
