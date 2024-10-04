import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, EventEmitter, HostListener, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core'
import { MdRipple } from '@material/web/all'

export type NavigationRailTabEventClick = HTMLElement

@Component({
    standalone: true,
    selector: 'navigation-rail-tab',
    templateUrl: './navigation-rail-tab.component.html',
    styleUrl: './navigation-rail-tab.component.css',
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationRailTabComponent implements OnChanges, AfterViewInit {
    @Input()
    public get active() {
        return this._active
    }
    public set active(value: boolean) {
        if (this._active === value) {
            return
        }
        this._active = value
        this.elementRef.nativeElement.querySelector('.navigation-rail-tab')!.setAttribute('active', value.toString())
    }

    private _active: boolean = false

    @Output('tab-click')
    private tabClick = new EventEmitter<HTMLElement>()
    public readonly elementRef = inject<ElementRef<NavigationRailTabEventClick>>(ElementRef)

    public activate() {
        this.active = true
    }
    public inactivate() {
        this.active = false
    }

    @HostListener('click', ['$event'])
    protected handleClick() {
        this.activate()
        this.tabClick.emit(this.elementRef.nativeElement)
    }

    ngAfterViewInit(): void {
        const control = this.elementRef.nativeElement as HTMLElement
        const ripple = this.elementRef.nativeElement.querySelector('.ripple')! as MdRipple
        ripple.attach(control)
    }

    ngOnChanges(changes: SimpleChanges): void {
    }
}
