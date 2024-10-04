import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { BottomAppBarComponent } from './components/bottom-app-bar/bottom-app-bar.component'
import { NavigationRailTabComponent } from './components/navigation-rail-tab/navigation-rail-tab.component'
import { NavigationRailComponent } from './components/navigation-rail/navigation-rail.component'
import { NavigationLinkService } from './services/navigation-link.service'



@NgModule({
    declarations: [
        NavigationRailComponent,
        BottomAppBarComponent,
    ],
    exports: [
        NavigationRailComponent,
        BottomAppBarComponent,
    ],
    imports: [
        CommonModule,
        NavigationRailTabComponent,
    ],
    providers: [
        NavigationLinkService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationModule { }
