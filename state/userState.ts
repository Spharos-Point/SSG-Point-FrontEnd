import { atom } from "recoil";

export const userState = atom({
    key: 'userState',
    default: {
        userPoint: null,
        barcode: null,
        name: null,
    },
});
