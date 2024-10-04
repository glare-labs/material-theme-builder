import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { RouterOutlet } from '@angular/router'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ApplicationPagesModule } from './core/application-pages/application-pages.module'
import { NavigationModule } from './core/navigation/navigation.module'
import { ProductPageLayoutComponent } from './layouts/product-page-layout/product-page-layout.component'
import { ChangeThemeIconButtonComponent } from './shared/components/change-theme-icon-button/change-theme-icon-button.component'
import { MaterialThemeProviderComponent } from './shared/components/material-theme-provider/material-theme-provider.component'
import { MaterialThemeConfigurationService } from './shared/services/material-theme-configuration.service'

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterOutlet,
        AppRoutingModule,
        ProductPageLayoutComponent,
        NavigationModule,
        ApplicationPagesModule,
        MaterialThemeProviderComponent,
        ChangeThemeIconButtonComponent,
    ],
    providers: [
        MaterialThemeConfigurationService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
