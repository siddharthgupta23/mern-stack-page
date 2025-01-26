import type React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./SlideArrows.scss"

interface SliderArrowProps {
  onClick?: () => void
  className?: string
}

export const PrevArrow: React.FC<SliderArrowProps> = ({ onClick, className }) => (
  <button
    className={`slider-arrow slider-arrow--prev ${className || ""}`}
    onClick={onClick}
    aria-label="Previous slide"
  >
    <ChevronLeft />
  </button>
)

export const NextArrow: React.FC<SliderArrowProps> = ({ onClick, className }) => (
  <button className={`slider-arrow slider-arrow--next ${className || ""}`} onClick={onClick} aria-label="Next slide">
    <ChevronRight />
  </button>
)



