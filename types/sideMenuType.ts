export interface bookmarkType {
    id: number
    img: string
    title:string
    url: string
}

export interface sideMenuType {
    id: number
    img: string
    title:string
    url: string
}

export interface sideMenuListType {
    title: string
    menuList: sideMenuType[]
}