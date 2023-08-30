import React from 'react'
import Barcode from 'react-barcode'

interface BarcodeGeneratorProps {
    value: string
}

{/* 포인트 카드번호 받아서 value에 집어 넣기 */}
// export default function BarcodeGenerator({value}: BarcodeGeneratorProps) {
//   return (
//     <div>
//         <Barcode value={value} />
//     </div>
//   )
// }


export default function BarcodeGenerator() {
  return (
    <div className='w-[56px] h-[24px]'>
        <Barcode value={"123456789"} />
    </div>
  )
}

