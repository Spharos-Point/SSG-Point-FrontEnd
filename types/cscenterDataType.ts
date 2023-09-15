export interface CscenterNoticeProps {
    id: number,
    url: string,
    title : string,
    date: string,
    // context : string,
    // noticeId : number,
    // createAt : string,
}

export interface CscenterFaqProps {
    id: number,
    q_type1: string,
    q_type2: string,
    q_txt: string,
    a_txt: string,
}

export interface noticeDataType {
    id: number,
    title : string,
    context : string,
    noticeId : number,
    createAt : string,
}
// export interface CscenterConsultProps {
//     id: number
//     url: string
//     q_type: number
//     q_txt: string
//     a_txt: string
// }