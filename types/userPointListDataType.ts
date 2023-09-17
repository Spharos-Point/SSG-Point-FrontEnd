export interface UserPointListDataType {
    id: number
    pointId: number
    pointType: string
    pointTypeById: string
    createAt: string
    updatedAt: string
}

export interface PointDataType {
    point: number
    totalPoint: number
    pointType: string
    used: boolean
    createAt: string
    updatedAt: string
}

export interface purchaseDataType {
    id: number
    brandName: string
    branchName: string
    pointType: string
    used: boolean
    purchaseMount: number
    purchasePrice: number
    purchasePoint: number
    purchaseCreatedAt: string
}

export interface transDataType {
    id: number
    transPoint: number
    pointId: number
    extraId: number
}