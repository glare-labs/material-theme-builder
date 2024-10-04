import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

@Component({
    standalone: true,
    selector: 'clipboard-button',
    templateUrl: './clipboard-button.component.html',
    styleUrl: './clipboard-button.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClipboardButtonComponent {

}
