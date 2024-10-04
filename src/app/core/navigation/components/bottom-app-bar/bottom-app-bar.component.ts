import { AfterViewInit, Component, ElementRef, inject } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { MdNavigationBar } from '@material/web/labs/navigationbar/navigation-bar'
import { NavigationTab } from '@material/web/labs/navigationtab/internal/navigation-tab'
import { filter } from 'rxjs'
import { NavigationLinkService } from '../../services/navigation-link.service'

@Component({
    selector: 'bottom-app-bar',
    templateUrl: './bottom-app-bar.component.html',
    styleUrl: './bottom-app-bar.component.css'
})
export class BottomAppBarComponent implements AfterViewInit {
    private elementRef = inject<ElementRef<HTMLElement>>(ElementRef)
    private navigationLink = inject(NavigationLinkService)
    private router = inject(Router)

    public get links() {
        return this.navigationLink
    }

    private preventFirstTimeActivated = true

    ngAfterViewInit() {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((value: NavigationEnd) => {
            const bar = this.elementRef.nativeElement.querySelector('.bottom-app-bar') as MdNavigationBar
            bar.activeIndex = Object.values(this.links.value).findIndex(e => e.url === value.url)
        })
    }

    protected handleBarClick(e: Event) {
        if (this.preventFirstTimeActivated) {
            this.preventFirstTimeActivated = false
            e.preventDefault()
            return
        }

        this.router.navigate([(e as CustomEvent<{ tab: NavigationTab, activeIndex: number }>).detail.tab.querySelector('.link-wrapper')!.getAttribute('url')])
    }
}
