import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, HostListener, Input, Output } from '@angular/core'

export type ChangeThemeIconButtonEventEmitterType = { data: { isDark: boolean } }

@Component({
    standalone: true,
    selector: 'change-theme-icon-button',
    templateUrl: './change-theme-icon-button.component.html',
    styleUrl: './change-theme-icon-button.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ChangeThemeIconButtonComponent {

    private _isDark = false

    @Output('button-click')
    public readonly buttonClick = new EventEmitter<ChangeThemeIconButtonEventEmitterType>()

    @Input({ alias: 'is-dark' })
    public get isDark() {
        return this._isDark
    }

    public set isDark(value: boolean) {
        if (this._isDark === value) {
            return
        }
        this._isDark = value
        this.buttonClick.emit({ data: { isDark: value } })
    }

    protected get isDarkText() {
        return this.isDark ? 'light_mode' : 'dark_mode'
    }

    @HostListener('click', [])
    protected handleClick() {
        this.isDark = !this.isDark
    }
}
