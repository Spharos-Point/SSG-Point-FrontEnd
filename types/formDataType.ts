export interface LoginFormDataType {
    loginId: String,
    password: String,
    isAutoId: Boolean,
    isAutoLogin: Boolean,
  }

  export interface JoinFormDataType {
    loginId: string,
    name: string,
    password: string,
    pwChkId: string,
    email: string,
    phone: string
    address: string
  }

  export interface AuthFormDataType {
    loginId: string,
    name: string,
    phone: string
    birth: string
  }

  export interface ChangePwDataType {
    password: string,
  }

  export interface ChangePwdDataType {
    password: string,
    newPassword: string,
  }

  export interface ChangePointPwdDataType {
    newPointPassword: string,
    newPointPasswordCheck: string,
  }

  export interface ModifyDataType {
    address: string,
    email: string,
  }