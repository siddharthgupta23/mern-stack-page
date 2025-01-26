// import type React from "react"
// import Slider from "react-slick"
// import { PrevArrow, NextArrow } from "../components/common/SlideArrows/SlideArrows"
// import "./DrivingResults.scss"

// interface Testimonial {
//   id: number
//   quote: string
//   subQuote: string
//   author: string
//   role: string
//   company: string
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     quote: "People now recognise that having a good performance conversation means that something happens as a result.",
//     subQuote:
//       "With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.",
//     author: "Rajat Sinha",
//     role: "Product Manager",
//     company: "Greyphus",
//   },
//   // Add more testimonials...
// ]

// const DrivingResults: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     autoplay: true,
//     autoplaySpeed: 5000,
//   }

//   return (
//     <section className="driving-results">
//       <div className="driving-results__container">
//         <h2>Driving results for leaders across the globe</h2>
//         <Slider {...settings} className="driving-results__slider">
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="driving-results__slide">
//               <blockquote className="driving-results__quote">
//                 <p className="driving-results__quote-main">{testimonial.quote}</p>
//                 <p className="driving-results__quote-sub">{testimonial.subQuote}</p>
//               </blockquote>
//               <div className="driving-results__author">
//                 <p className="driving-results__author-name">{testimonial.author}</p>
//                 <p className="driving-results__author-role">
//                   {testimonial.role}, {testimonial.company}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   )
// }

// export default DrivingResults



// const TestimonialSlider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const testimonials = [
//     {
//       quote: '"People now recognise that having a good performance conversation means that something happens as a result."',
//       author: 'Rajat Shina',
//       title: 'Product Manager, Sisyphus',
//     },
//   ];

//   const handleNextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
//   };

//   const handlePreviousSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
//     );
//   };
// const styles={
//     heading:{
//         textAlign: "center" as const,
//     }
// };
//   return (
//     <>
//     <div>
// <h1 style={styles.heading}>Driving Results across globe</h1>
//     <div className="testimonial-slider"> 
//       <div className="slider-container">
//         <div className="testimonial-content">
//           <p>{testimonials[currentSlide].quote}</p>
//           <div className="author-info">
//             <p className="author-name">{testimonials[currentSlide].author}</p>
//             <p className="author-title">{testimonials[currentSlide].title}</p>
//           </div>
//         </div>
//         <div className="slider-nav">
//           <button onClick={handlePreviousSlide} className="prev-button">
//           ◀
//           </button>
//           <button onClick={handleNextSlide} className="next-button">
//           ▶
//           </button>
//         </div>
//       </div>
//     </div>
//     </div>
//     </>
//   );
// };

// export default TestimonialSlider;

// const TestimonialSlider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const testimonials = [
//       {
//         quote: '"People now recognise that having a good performance conversation means that something happens as a result."',
//         author: 'Rajat Shina',
//         title: 'Product Manager, Sisyphus',
//       },
//       {
//         quote: '"People now recognise that having a good performance conversation means that something happens as a result."',
//         author: 'Rajat Shina',
//         title: 'Product Manager, Sisyphus',
//       },
//       {
//         quote: '"People now recognise that having a good performance conversation means that something happens as a result."',
//         author: 'Rajat Shina',
//         title: 'Product Manager, Sisyphus',
//       },
//     ];
  
//     const handleNextSlide = () => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
//     };
  
//     const handlePreviousSlide = () => {
//       setCurrentSlide((prevSlide) =>
//         prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
//       );
//     };
//     const styles={
//              heading:{
//                  textAlign: "center" as const,
//              }
//          }
//     return (
//         <>
//          <div>
//         <h1 style={styles.heading}>Driving Results across globe</h1>
//       <div className="testimonial-slider">
//         <div className="slider-container">
//           <div className="testimonial-content">
//             <p>{testimonials[currentSlide].quote}</p>
//             <div className="author-info">
//               <p className="author-name">{testimonials[currentSlide].author}</p>
//               <p className="author-title">{testimonials[currentSlide].title}</p>
//             </div>
//           </div>
//           <div className="slider-nav">
//             <button onClick={handlePreviousSlide} className="prev-button">
//               ◀
//             </button>
//             <button onClick={handleNextSlide} className="next-button">
//               ▶
//             </button>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//     );
//   };
  
//   export default TestimonialSlider;

// import type React from "react"
// import { useState } from "react"
// import "./DrivingResults.scss"

// interface Testimonial {
//   id: number
//   quote: string
//   subQuote: string
//   author: string
//   role: string
//   company: string
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     quote: "People now recognise that having a good performance conversation means that something happens as a result.",
//     subQuote:
//       "With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.",
//     author: "Rajat Sinha",
//     role: "Product Manager",
//     company: "Greyphus",
//   },
//   {
//     id: 2,
//     quote: "People now recognise that having a good performance conversation means that something happens as a result.",
//     subQuote:
//       "With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.",
//     author: "Rajat Sinha",
//     role: "Product Manager",
//     company: "Greyphus",
//   },
  
// ]

// const DrivingResults: React.FC = () => {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isHovered, setIsHovered] = useState(false)

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   return (
//     <section className="driving-results">
//       <div className="driving-results__container">
//         <h2 className="driving-results__title">Driving results for leaders across the globe</h2>

//         <div
//           className={`driving-results__slider ${isHovered ? "is-hovered" : ""}`}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//         >
//           <button
//             className="driving-results__arrow driving-results__arrow--prev"
//             onClick={prevSlide}
//             aria-label="Previous testimonial"
//           >
//             ←
//           </button>

//           <div className="driving-results__content">
//             {testimonials.map((testimonial, index) => (
//               <div key={testimonial.id} className={`driving-results__slide ${index === currentSlide ? "active" : ""}`}>
//                 <blockquote className="driving-results__quote">
//                   <p className="driving-results__quote-main">{testimonial.quote}</p>
//                   <p className="driving-results__quote-sub">{testimonial.subQuote}</p>
//                 </blockquote>
//                 <div className="driving-results__author">
//                   <p className="driving-results__author-name">{testimonial.author}</p>
//                   <p className="driving-results__author-role">
//                     {testimonial.role}, {testimonial.company}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             className="driving-results__arrow driving-results__arrow--next"
//             onClick={nextSlide}
//             aria-label="Next testimonial"
//           >
//             →
//           </button>

//           <div className="driving-results__dots">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 className={`driving-results__dot ${index === currentSlide ? "active" : ""}`}
//                 onClick={() => setCurrentSlide(index)}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default DrivingResults

import type React from "react"
import { useState, useCallback } from "react"
import "./DrivingResults.scss"

interface Testimonial {
  id: number
  quote: string
  subQuote: string
  author: string
  role: string
  company: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "People now recognise that having a good performance conversation means that something happens as a result.",
    subQuote:
      "With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.",
    author: "Rajat Sinha",
    role: "Product Manager",
    company: "Greyphus",
  },
  {
    id: 2,
    quote: "People now recognise that having a good performance conversation means that something happens as a result.",
    subQuote:
      "With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.",
    author: "Rajat Sinha",
    role: "Product Manager",
    company: "Greyphus",
    
  },
  {
    id:3,
    
    quote: "People now recognise that having a good performance conversation means that something happens as a result.",
    subQuote:
      "With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.",
    author: "Rajat Sinha",
    role: "Product Manager",
    company: "Greyphus",
 
  },
]

const DrivingResults: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right")
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSlideChange = useCallback(
    (direction: "left" | "right") => {
      if (isAnimating) return

      setIsAnimating(true)
      setSlideDirection(direction)

      setCurrentSlide((prev) => {
        if (direction === "right") {
          return (prev + 1) % testimonials.length
        }
        return (prev - 1 + testimonials.length) % testimonials.length
      })

      setTimeout(() => {
        setIsAnimating(false)
      }, 500)
    },
    [isAnimating],
  )

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setSlideDirection(index > currentSlide ? "right" : "left")
    setCurrentSlide(index)
  }

  return (
    <section className="driving-results">
      <div className="driving-results__container">
        <h2>Driving results for leaders across the globe</h2>

        <div className="driving-results__slider">
          <button
            className="driving-results__arrow driving-results__arrow--prev"
            onClick={() => handleSlideChange("left")}
            aria-label="Previous testimonial"
          >
            <img src="Arrow down-circle.png"/>
          </button>

          <div className="driving-results__track-container">
            <div
              className={`driving-results__track ${isAnimating ? `sliding-${slideDirection}` : ""}`}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`driving-results__slide ${index === currentSlide ? "active" : ""}`}
                >
                  <blockquote className="driving-results__quote">
                    <p className="driving-results__quote-main">{testimonial.quote}</p>
                    <p className="driving-results__quote-sub">{testimonial.subQuote}</p>
                  </blockquote>
                  <div className="driving-results__author">
                    <p className="driving-results__author-name">{testimonial.author}</p>
                    <p className="driving-results__author-role">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="driving-results__arrow driving-results__arrow--next"
            onClick={() => handleSlideChange("right")}
            aria-label="Next testimonial"
          >
         <img src="Arrow down-circle (1).png"/>
          </button>
        </div>

        <div className="driving-results__dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`driving-results__dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DrivingResults

