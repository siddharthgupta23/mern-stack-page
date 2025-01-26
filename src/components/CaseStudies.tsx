// import React from "react";
// import { Button } from "@mui/material";
// import styles from './CaseStudies.module.scss';

// const CaseStudies = () => {
//   const caseStudies = [
//     {
//       title: "What is Ad Exposure and Why it Matters?",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       title: "What is Ad Exposure and Why it Matters?",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       title: "What is Ad Exposure and Why it Matters?",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];

//   return (
//     <section className={`${styles.bgWhite} ${styles.py16}`}>
//       <div className={styles.container}>
//         <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb4}`}>Case studies for the community</h2>
//         <p className={`${styles.textGray600} ${styles.mb8}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <div className={`${styles.grid} ${styles.mdGridCols2} ${styles.lgGridCols3} ${styles.gap8}`}>
//           {caseStudies.map((study, index) => (
//             <div key={index} className={`${styles.bgWhite} ${styles.roundedLg} ${styles.overflowHidden} ${styles.shadowLg}`}>
//               <img src={study.image || "/placeholder.svg"} alt={study.title} className={`${styles.wFull} ${styles.objectCover} ${styles.h48}`} />
//               <div className={styles.p6}>
//                 <h3 className={`${styles.fontBold} ${styles.mb2}`}>{study.title}</h3>
//                 <p className={`${styles.textGray600} ${styles.mb4}`}>{study.description}</p>
//                 <Button color="primary">Read Full Article →</Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;

// import React from "react";
// import { Button } from "@mui/material";
// import styles from '../styles/CaseStudies.module.scss';

// const CaseStudies = () => {
//   const caseStudies = [
//     {
//       title: "What is Ad Exposure and Why it Matters?",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       title: "What is Ad Exposure and Why it Matters?",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       title: "What is Ad Exposure and Why it Matters?",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];

//   return (
//     <section className={`${styles.bgWhite} ${styles.py16}`}>
//       <div className={styles.container}>
//         <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb4}`}>Case studies for the community</h2>
//         <p className={`${styles.textGray600} ${styles.mb8}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <div className={`${styles.grid} ${styles.mdGridCols2} ${styles.lgGridCols3} ${styles.gap8}`}>
//           {caseStudies.map((study, index) => (
//             <div key={index} className={`${styles.bgWhite} ${styles.roundedLg} ${styles.overflowHidden} ${styles.shadowLg}`}>
//               <img src={study.image || "/placeholder.svg"} alt={study.title} className={`${styles.wFull} ${styles.objectCover} ${styles.h48}`} />
//               <div className={styles.p6}>
//                 <h3 className={`${styles.fontBold} ${styles.mb2}`}>{study.title}</h3>
//                 <p className={`${styles.textGray600} ${styles.mb4}`}>{study.description}</p>
//                 <Button color="primary">Read Full Article →</Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudies;
// import type React from "react"
// import Slider from "react-slick"
// import { Link } from "react-router-dom"
// import "../styles/CaseStudies.module.scss"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// interface CaseStudy {
//   id: number
//   title: string
//   description: string
//   imageUrl: string
// }

// const caseStudies: CaseStudy[] = [
//   {
//     id: 1,
//     title: "Digital Transformation for Enterprise",
//     description: "How we helped a Fortune 500 company modernize their legacy systems.",
//     imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png",
//   },
//   {
//     id: 2,
//     title: "E-commerce Platform Optimization",
//     description: "Increasing conversion rates through UX improvements and performance optimization.",
//     imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png",
//   },
//   {
//     id: 3,
//     title: "AI-Powered Customer Service",
//     description: "Implementing intelligent automation to enhance customer support efficiency.",
//     imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mabOI2SLyLrUqyhBzZexOM3bSgedwv.png",
//   },
// ]

// const CaseStudies: React.FC = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   }

//   const CaseStudyCard: React.FC<CaseStudy> = ({ title, description, imageUrl }) => (
//     <div className="case-studies__card">
//       <div className="case-studies__image">
//         <img src={imageUrl || "/placeholder.svg"} alt={title} />
//       </div>
//       <div className="case-studies__content">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <Link to="#" className="btn">
//           Read Full Case Study →
//         </Link>
//       </div>
//     </div>
//   )

//   return (
//     <section className="case-studies">
//       <div className="case-studies__container">
//         <div className="case-studies__header">
//           <h2>Case Studies</h2>
//           <p>Learn how we've helped our clients achieve their goals</p>
//         </div>

//         {/* Desktop and Tablet Grid */}
//         <div className="case-studies__grid">
//           {caseStudies.map((study) => (
//             <CaseStudyCard key={study.id} {...study} />
//           ))}
//         </div>

//         {/* Mobile Slider */}
//         <div className="case-studies__slider">
//           <Slider {...sliderSettings}>
//             {caseStudies.map((study) => (
//               <div key={study.id}>
//                 <CaseStudyCard {...study} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CaseStudies

// import type React from "react"
// import Slider from "react-slick"
// import { Link } from "react-router-dom"
// import "./CaseStudies.scss"
// import CaseStudyImage from "../components/common/CaseStudyImage/CaseStudyImage"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// interface CaseStudy {
//   id: number
//   title: string
//   description: string
// }

// const caseStudies: CaseStudy[] = [
//   {
//     id: 1,
//     title: "Digital Transformation for Enterprise",
//     description: "How we helped a Fortune 500 company modernize their legacy systems.",
//   },
//   {
//     id: 2,
//     title: "E-commerce Platform Optimization",
//     description: "Increasing conversion rates through UX improvements and performance optimization.",
//   },
//   {
//     id: 3,
//     title: "AI-Powered Customer Service",
//     description: "Implementing intelligent automation to enhance customer support efficiency.",
//   },
// ]

// const CaseStudies: React.FC = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   }

//   const CaseStudyCard: React.FC<CaseStudy> = ({ title, description }) => (
//     <div className="case-studies__card">
//       <div className="case-studies__image">
//         <CaseStudyImage />
//       </div>
//       <div className="case-studies__content">
//         <h3>{title}</h3>
//         <p>{description}</p>
//         <Link to="#" className="btn">
//           Read Full Case Study →
//         </Link>
//       </div>
//     </div>
//   )

//   return (
//     <section className="case-studies">
//       <div className="case-studies__container">
//         <div className="case-studies__header">
//           <h2>Case Studies</h2>
//           <p>Learn how we've helped our clients achieve their goals</p>
//         </div>

//         {/* Desktop and Tablet Grid */}
//         <div className="case-studies__grid">
//           {caseStudies.map((study) => (
//             <CaseStudyCard key={study.id} {...study} />
//           ))}
//         </div>

//         {/* Mobile Slider */}
//         <div className="case-studies__slider">
//           <Slider {...sliderSettings}>
//             {caseStudies.map((study) => (
//               <div key={study.id}>
//                 <CaseStudyCard {...study} />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CaseStudies


import type React from "react"
import Slider from "react-slick"
import { Link } from "react-router-dom"
import "./CaseStudies.scss"
import CaseStudyImage from "../components/common/CaseStudyImage/CaseStudyImage"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface CaseStudy {
  id: number
  title: string
  description: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
  },
  {
    id: 2,
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
  },
  {
    id: 3,
    title: "What is Ad Exposure and Why It Matters?",
    description: "Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum.",
  },
]
const styles={
  description: {
    fontSize: "18px",
    color: "#666666",
    lineHeight: 1.6,

  },
}

const CaseStudies: React.FC = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }


  const CaseStudyCard: React.FC<CaseStudy> = ({ title, description }) => (
    <div className="case-studies__card">
      <div>
        <CaseStudyImage />
      </div>
      <div className="case-studies__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="#" className="btn">
          Read Full Case Study →
        </Link>
      </div>
    </div>
  )

  return (
    <section className="case-studies">
      <div className="case-studies__container">
        <div className="case-studies__header">
          <h2>Case Studies</h2>
          <p style={styles.description}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>

        {/* Desktop and Tablet Grid */}
        <div className="case-studies__grid">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="case-studies__slider">
          <Slider {...sliderSettings}>
            {caseStudies.map((study) => (
              <div key={study.id} className="case-studies__slide">
                <div className="case-studies__slide-content">
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <a href="#" className="case-studies__read-more">
                    Read Full Article →
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies


