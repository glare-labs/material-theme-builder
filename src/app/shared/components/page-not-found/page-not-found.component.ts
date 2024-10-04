import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    standalone: true,
    selector: 'page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PageNotFoundComponent {
    private router = inject(Router)

    protected handleRedirectButtonClick() {
        this.router.navigate(['/'])
    }
}
