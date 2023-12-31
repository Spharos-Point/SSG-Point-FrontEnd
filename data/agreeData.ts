import { Agreement, AgreementSide } from "../types/agreeDataType";


// 회원가입 인증 동의
export const certAgreements: Agreement[] = [
    { id: 1, label: '휴대전화 인증 약관', title: '[필수] 휴대전화 인증 서비스 이용약관',  isCheck : false },
    { id: 2, label: '휴대전화 인증 약관', title: '[필수] 고유식별정보 처리 동의',  isCheck : false },
    { id: 3, label: '휴대전화 인증 약관', title: '[필수] 통신사 이용약관 동의',  isCheck : false },
    { id: 4, label: '휴대전화 인증 약관', title: '[필수] 개인정보 수집/이용동의',  isCheck : false },
  ];

  // 회원가입 약관동의 
  export const agreements: Agreement[] = [
    { id: 1, label: '회원가입 약관동의', title: '[필수] 신세계포인트 회원 이용약관', isCheck : false},
    { id: 2, label: '회원가입 약관동의', title: '[필수] 개인정보 수집 및 이용동의', isCheck : false },
    { id: 3, label: '회원가입 약관동의', title: '[필수] 이마트/신세계 공동 개인정보 수집 및 이용 동의', isCheck : false },
    { id: 4, label: '회원가입 약관동의', title: '[필수] 통합회원 서비스 제동 개인정보 제3자 제공 동의', isCheck : false },
    { id: 5, label: '회원가입 약관동의', title: '[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의', isCheck : false },
    { id: 6, label: '회원가입 약관동의', title: '[선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의', isCheck : false },
  ];

  export const formAgreements: AgreementSide[] = [
    {
      id: '1',
      label: '[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의'
    },
    {
      id: '2',
      label: '[선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의',
    }
  ]

  // 광고 정보 수신 동의
  export const adAgreement: Agreement[] = [
    {
      id: 1,
      label: '휴대전화 인증 약관',
      title: '이메일', 
      isCheck : false
    },
    {
      id: 2,
      label: '휴대전화 인증 약관',
      title: '문자', 
      isCheck : false
    },
    {
      id: 3,
      label: '휴대전화 인증 약관',
      title: 'DM', 
      isCheck : false
    },
    {
      id: 4,
      label: '휴대전화 인증 약관',
      title: 'TM', 
      isCheck : false
    },
  ]