import type React from "react"
import { useState } from "react"
import "./Image.scss"

interface ImageProps {
  src: string
  alt: string
  className?: string
  width?: number | string
  height?: number | string
}

const Image: React.FC<ImageProps> = ({ src, alt, className = "", width, height }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setError(true)
  }

  return (
    <div className={`image-container ${className}`} style={{ width, height }}>
      {isLoading && (
        <div className="image-placeholder">
          <div className="image-spinner" />
        </div>
      )}

      {error ? (
        <div className="image-error">
          <span>Failed to load image</span>
        </div>
      ) : (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className={`image ${isLoading ? "image-hidden" : ""}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
    </div>
  )
}

export default Image

