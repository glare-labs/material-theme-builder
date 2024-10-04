import { Injectable } from '@angular/core'
import { NavigationLinkType } from '../interface/navigation'

@Injectable({
    providedIn: 'root'
})
export class NavigationLinkService implements Iterable<NavigationLinkType> {

    public get value() {
        return ({
            variant: {
                url: '/variant',
                iconString: 'home',
                label: 'Variant'
            },
            dynamic: {
                url: '/dynamic',
                iconString: 'palette',
                label: 'Dynamic'
            },
            prebuild: {
                url: '/prebuild',
                iconString: 'database',
                label: 'Prebuild'
            },
        })
    }

    public [Symbol.iterator](): Iterator<NavigationLinkType, any> {
        let index = 0
        const linkObj = Object.values(this.value)
        return ({
            next: (): IteratorResult<NavigationLinkType, undefined> => {
                if (index >= linkObj.length) {
                    return ({
                        value: undefined,
                        done: true
                    })
                }
                return ({
                    value: linkObj[index++],
                    done: false
                })
            },
            return: (): IteratorResult<NavigationLinkType, NavigationLinkType | undefined> => {
                return ({
                    value: undefined,
                    done: true,
                })
            }
        })
    }
}
