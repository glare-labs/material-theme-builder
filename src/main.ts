
/**
 * Material Web Components
 */
import '@material/web/all'
import '@material/web/labs/navigationbar/navigation-bar'
import '@material/web/labs/navigationtab/navigation-tab'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'


platformBrowserDynamic().bootstrapModule(AppModule, {
    ngZoneEventCoalescing: true
})
    .catch(err => console.error(err))
