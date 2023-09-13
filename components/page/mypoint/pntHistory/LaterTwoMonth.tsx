import React from 'react'

export default function LaterTwoMonth() {
        const today = new Date();
        // 현재 날짜
        const year = today.getFullYear();
        const month = String(today.getMonth() + 3).padStart(2, '0');
        const formattedDate = `${year}-${month}-01`;
            return (
                <div>
                    {formattedDate}
                </div>
            );
}

