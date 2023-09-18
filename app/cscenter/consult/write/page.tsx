'use client'
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

function ConsultWritepage() {
  useEffect(() => {
    // 이 컴포넌트가 클라이언트 사이드에서 실행되는지 확인
    if (typeof window !== 'undefined') {
      // 개발 중 알림을 띄우기 위한 Swal.fire 호출
      Swal.fire({
        title: '개발 중 상태입니다.',
        icon: 'info',
        confirmButtonText: '확인',
        confirmButtonColor: '#615EFF',
      });
    }
  }, []);

  return (

    <div>
    </div>
  );
}
export default ConsultWritepage