import { AfterViewInit, Component, inject, QueryList, ViewChildren } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs'
import { NavigationLinkType } from '../../interface/navigation'
import { NavigationLinkService } from '../../services/navigation-link.service'
import { NavigationRailTabComponent, NavigationRailTabEventClick } from '../navigation-rail-tab/navigation-rail-tab.component'

@Component({
    selector: 'navigation-rail',
    templateUrl: './navigation-rail.component.html',
    styleUrl: './navigation-rail.component.css'
})
export class NavigationRailComponent implements AfterViewInit {
    private navigationLink = inject(NavigationLinkService)
    private router = inject(Router)
    private ar = inject(ActivatedRoute)

    public get links() {
        return this.navigationLink
    }

    @ViewChildren(NavigationRailTabComponent) tabs!: QueryList<NavigationRailTabComponent>

    ngAfterViewInit() {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((value: NavigationEnd) => {
            if (this.tabs.length === 0) {
                return
            }
            const index = Object.entries(this.links.value).findIndex(link => link[1].url === value.url)
            this.tabs.map(tab => {
                tab.inactivate()
            })
            this.tabs.get(index !== -1 ? index : 0)!.activate()
        })
    }

    protected handleTabClick(e: NavigationRailTabEventClick, data: NavigationLinkType) {
        this.tabs.map(tab => {
            if (tab.elementRef.nativeElement !== e) {
                tab.active = false
            }
        })
        this.router.navigate([data.url])
    }

}
