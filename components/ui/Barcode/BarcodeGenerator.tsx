import React from 'react';
import { useBarcode } from 'next-barcode';

export default function BarcodeGenerator( {width, height, value}: { width?:number, height?:number, value?:string }) {

    const { inputRef } = useBarcode({
      // 유저의 포인트 카드번호 16자리를 받아 value에 입력받도록 변경 필요
      value: value ? value : '9350120018634486',
      options: {
        format: 'CODE128',
        displayValue: false,
        background: 'white',
        margin: 5,
        height: height ? height: 100,
        width: width ? width: 2,
        // 기본값 height:100, weight:2
      }
    });
  
  return <svg ref={inputRef} className='rounded-[4px]'/>;
};


