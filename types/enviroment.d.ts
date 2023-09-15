namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        KAKAO_CLIENT_ID : string;
        KAKAO_CLIENT_SECRET : string;
        NAVER_CLIENT_ID : string;
        NAVER_CLIENT_SECRET : string;
        CRED_SECRET_KEY : string;
        BASE_API_URL : string;
    }
}