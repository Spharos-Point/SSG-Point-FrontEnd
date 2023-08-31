import { Agreement } from "../types/agreeDataType";


// 회원가입 인증 동의
export const certAgreements: Agreement[] = [
    { id: 'agree01', label: '[필수] 휴대전화 인증 서비스 이용약관' },
    { id: 'agree02', label: '[필수] 고유식별정보 처리 동의' },
    { id: 'agree03', label: '[필수] 통신사 이용약관 동의' },
    { id: 'agree04', label: '[필수] 개인정보 수집/이용동의' },
  ];

  // 회원가입 약관동의 
  export const agreements: Agreement[] = [
    { id: 'agree01', label: '[필수] 신세계포인트 회원 이용약관' },
    { id: 'agree02', label: '[필수] 개인정보 수집 및 이용동의' },
    { id: 'agree03', label: '[필수] 이마트/신세계 공동 개인정보 수집 및 이용 동의' },
    { id: 'agree04', label: '[필수] 통합회원 서비스 제동 개인정보 제3자 제공 동의' },
    { id: 'agree05', label: '[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의' },
    { id: 'agree06', label: '[선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의' },
  ];

  export const formAgreements: Agreement[] = [
    {
      id: 'agree01',
      label: '[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의'
    },
    {
      id: 'agree02',
      label: ' [선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의'
    }
  ]

  // 광고 정보 수신 동의
  export const adAgreement: Agreement[] = [
    {
      id: 'adAgree01',
      label: '이메일'
    },
    {
      id: 'adAgree02',
      label: '문자'
    },
    {
      id: 'adAgree03',
      label: 'DM'
    },
    {
      id: 'adAgree04',
      label: 'TM'
    },
  ]