// 보류


import { UUID } from "crypto"
import { EnumType } from "typescript"

export interface PntHistoryProps {
    pnt_id : number
    status: string
    point_used :Boolean
    point_type : EnumType
    reg_date : string
    uuid : UUID

}