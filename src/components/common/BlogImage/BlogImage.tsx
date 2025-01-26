/*import type React from "react"
import "./BlogImage.scss"

interface BlogImageProps {
  category: "leadership" | "design" | "development"
}

const BlogImage: React.FC<BlogImageProps> = ({ category }) => {
  const getIconPath = () => {
    switch (category) {
      case "leadership":
        return <path d="M50 25 L75 50 L50 75 L25 50 Z M50 35 L65 50 L50 65 L35 50 Z" fill="currentColor" />
      case "design":
        return <path d="M30 30 H70 V70 H30 Z M40 40 H60 V60 H40 Z" fill="currentColor" />
      case "development":
        return (
          <path
            d="M25 50 L45 30 L50 35 L35 50 L50 65 L45 70 Z M75 50 L55 30 L50 35 L65 50 L50 65 L55 70 Z"
            fill="currentColor"
          />
        )
    }
  }

  return (
    <div className={`blog-image blog-image--${category}`}>
      <svg viewBox="0 0 100 100" className="blog-image__svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`gradient-${category}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#7C3AED" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" fill={`url(#gradient-${category})`} opacity="0.1" />
        {getIconPath()}
        <text x="50" y="85" textAnchor="middle" fill="#4F46E5" fontSize="8" fontFamily="Arial">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </text>
      </svg>
    </div>
  )
}

export default BlogImage*/


