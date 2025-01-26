import type React from "react"
import "./LogoImage.scss"

const LogoImage: React.FC = () => {
  return (
    <div className="logo-image">
      <svg viewBox="0 0 120 40" className="logo-image__svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <path d="M20 10 H40 V30 H20 Z" fill="url(#logo-gradient)" />
        <text
          x="60"
          y="25"
          textAnchor="start"
          fill="#1F2937"
          fontSize="16"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          Hubnex
        </text>
      </svg>
    </div>
  )
}

export default LogoImage


  
  