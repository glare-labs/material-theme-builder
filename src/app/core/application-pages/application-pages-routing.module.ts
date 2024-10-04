import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { DynamicPageComponent } from "./pages/dynamic-page/dynamic-page.component"
import { PrebuildPageComponent } from "./pages/prebuild-page/prebuild-page.component"
import { VariantPageComponent } from "./pages/variant-page/variant-page.component"

const routes: Routes = [
    {
        path: 'variant',
        component: VariantPageComponent
    },
    {
        path: 'dynamic',
        component: DynamicPageComponent
    },
    {
        path: 'prebuild',
        component: PrebuildPageComponent,
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ApplicationPagesRoutingModule {

}
