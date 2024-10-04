export interface INavigation {
    links: Record<string, NavigationLinkType>
}

export type NavigationLinkType = {
    url: string
    iconString: string
    label: string
  }