export interface LocalEventDataType {
    id: number
    event_id: number
    event_img: string
    event_name: string
    description: string
    reg_date: string
    event_reg_date: string
    event_ex_date: string
    event_type: string
    prize_type: string
}

export interface EventDataType {
    id: number
    eventName: string
    regDate: string
    endDate: string
    eventDesc: string
    eventType: string
    prizeType: string
    img: string
    expired: boolean
}