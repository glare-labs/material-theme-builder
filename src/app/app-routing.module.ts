import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ApplicationPagesRoutingModule } from './core/application-pages/application-pages-routing.module'
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component'

const routes: Routes = [
    {
        path: '',
        redirectTo: '/variant',
        pathMatch: 'full'
    },
    {
        path: '**',
        pathMatch: 'full',
        component: PageNotFoundComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        ApplicationPagesRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
