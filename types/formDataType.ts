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
    email: string,
    phone: string
    // address: string
  }

  export interface AuthFormDataType {
    name: string,
    phone: string
  }