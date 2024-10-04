import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject } from '@angular/core'
import { MdDialog } from '@material/web/all'

@Component({
    standalone: true,
    selector: 'md-toggle-dialog',
    templateUrl: './md-toggle-dialog.component.html',
    styleUrl: './md-toggle-dialog.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MdToggleDialogComponent {
    private elementRef = inject<ElementRef<HTMLElement>>(ElementRef)

    private getDialogElement() {
        return this.elementRef.nativeElement.querySelector('.dialog-wrapper>md-dialog') as MdDialog | null
    }

    protected async show() {
        await this.getDialogElement()?.show()
    }

    public async close() {
        await this.getDialogElement()?.close()
    }

    public preventDialogCancel(e: Event) {
        e.preventDefault()
    }
}
