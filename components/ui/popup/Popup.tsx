import React from 'react'

export default function Popup({isOpen, onClose}) {
    if(!isOpen) return null;
  return (
        <div className="popup">
          <div className="popup-content">
            <span className="popup-close" onClick={onClose}>&times;</span>
            <p>팝업 내용</p>
          </div>
        </div>
  )
}
