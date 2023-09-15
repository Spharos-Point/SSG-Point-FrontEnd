"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './Barcode.module.css'
import { useBarcode } from 'next-barcode';


export default function Barcode({ setShowBarcode, showBarcode, cardNumber }: { setShowBarcode: Dispatch<SetStateAction<boolean>>, showBarcode: boolean, cardNumber: string }) {

    const [barcode, setBarcode] = useState<string>('1234567890121234')


    const { inputRef } = useBarcode({
        value: barcode ? barcode : "default_value", // barcode가 없을 경우의 기본값
        
        options: {
            background: '#ffffff',
            width: 2.4,
            height: 52,
            font: "bold 24px Inter",
            textAlign: "right",
        }
    });
    



    useEffect(() => {
        // const getBarcode = async () => {
        //     if (!token) {
        //         console.error("Token is not provided.");
        //         return;
        //     }
        //     try {
        //         const response = await fetch(`https://smilekarina.duckdns.org/api/v1/card/pointcard`, {
        //             method: 'GET',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //                 'Authorization': `Bearer ${token}`
        //             }
        //         });

        //         if (!response.ok) {
        //             throw new Error(`Fetch failed with status: ${response.status}`);
        //         }
                
        //         const data = await response.json();
        //         //console.log(data.result.cardNumber);
        //         setBarcode(data.result.cardNumber);

        //     } catch (error) {
        //         console.error('Error fetching barcode:', error);
        //     }
        // };

        // getBarcode();

    }, []);


    return (
        <div
            className={
                showBarcode ? 
                `${styles.point_barcode} ${styles.slide}` 
                : `${styles.point_barcode}`}
        >
            <div className={`${styles.bacrode_banner}`}>
                <div className={`${styles.contents_barcode}`}>
                    <div className='flex justify-between items-center'>
                    <p className={`${styles.txt}`}>SHINSEGAE POINT</p>
                    <p className={`${styles.point}`}>3254</p>
                    </div>
                    <div className={`${styles.image_barcode}`}>
                        <div id="barcode0" className={`${styles.barcode0}`}>
                            <div>
                                <svg ref={inputRef} />
                            </div>
                            <div style={{ "display": "none" }}> 바코드 생성 실패 </div>
                        </div>
                    </div>
                    <div className={`${styles.txt_link_box}`}>
                        <a href="" className={`${styles.txt_link_btn} ${styles.bk}`}>포인트 비밀번호 변경</a>
                        <a href="" className={`${styles.txt_link_btn} ${styles.bk}`}>스마트 영수증</a>
                    </div>
                </div>
                        
            </div>
            <button className={showBarcode ? `${styles.shows_barcode} ${styles.on}` : styles.shows_barcode } onClick={()=>setShowBarcode(!showBarcode)}>
                <span className={`${styles.hidden}`}>토글</span>
            </button>
        </div>
    )
}
