// import Button from "@mui/material/Button";

// const BlogPosts = () => {
//   const posts = [
//     {
//       title: "Bill Walsh leadership lessons",
//       author: "Alex Williams",
//       date: "17 Jan 2023",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1uc3OmK8PsRo61zdcmMlduAOVZMLzk.png",
//       description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     },
//     {
//       title: "PM mental models",
//       author: "Dave Williams",
//       date: "18 Jan 2023",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1uc3OmK8PsRo61zdcmMlduAOVZMLzk.png",
//       description: "Mental models are simple expressions of complex processes or relationships.",
//     },
//     {
//       title: "What is Wireframing?",
//       author: "Caroline Wu",
//       date: "19 Jan 2023",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1uc3OmK8PsRo61zdcmMlduAOVZMLzk.png",
//       description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
//     },
//   ]

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold mb-4">Blog posts for the community</h2>
//         <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((post, index) => (
//             <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
//               <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full object-cover h-48" />
//               <div className="p-6">
//                 <div className="flex items-center text-sm text-gray-600 mb-2">
//                   <span>{post.author}</span>
//                   <span className="mx-2">•</span>
//                   <span>{post.date}</span>
//                 </div>
//                 <h3 className="font-bold mb-2">{post.title}</h3>
//                 <p className="text-gray-600 mb-4">{post.description}</p>
//                 <Button color="primary">Read Full Article →</Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BlogPosts

// import React from "react";
// import Button from "@mui/material/Button";
// import styles from '../styles/BlogPosts.module.scss';

// const BlogPosts = () => {
//   const posts = [
//     {
//       title: "Bill Walsh leadership lessons",
//       author: "Alex Williams",
//       date: "17 Jan 2023",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1uc3OmK8PsRo61zdcmMlduAOVZMLzk.png",
//       description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     },
//     {
//       title: "PM mental models",
//       author: "Dave Williams",
//       date: "18 Jan 2023",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1uc3OmK8PsRo61zdcmMlduAOVZMLzk.png",
//       description: "Mental models are simple expressions of complex processes or relationships.",
//     },
//     {
//       title: "What is Wireframing?",
//       author: "Caroline Wu",
//       date: "19 Jan 2023",
//       image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1uc3OmK8PsRo61zdcmMlduAOVZMLzk.png",
//       description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
//     },
//   ];

//   return (
//     <div className="blogpost">

//     <section className={`${styles.py16} ${styles.bgGray50}`}>
//       <div className={styles.container}>
//         <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb4}`}>Blog posts for the community</h2>
//         <p className={`${styles.textGray600} ${styles.mb8}`}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>
//         <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols2} ${styles.lgGridCols3} ${styles.gap8}`}>
//           {posts.map((post, index) => (
//             <div key={index} className={`${styles.bgWhite} ${styles.roundedLg} ${styles.overflowHidden} ${styles.shadowLg}`}>
//               <img src={post.image || "/placeholder.svg"} alt={post.title} className={`${styles.wFull} ${styles.objectCover} ${styles.h48}`} />
//               <div className={styles.p6}>
//                 <div className={`${styles.flex} ${styles.itemsCenter} ${styles.textSm} ${styles.textGray600} ${styles.mb2}`}>
//                   <span>{post.author}</span>
//                   <span className={`${styles.mx2}`}>•</span>
//                   <span>{post.date}</span>
//                 </div>
//                 <h3 className={`${styles.fontBold} ${styles.mb2}`}>{post.title}</h3>
//                 <p className={`${styles.textGray600} ${styles.mb4}`}>{post.description}</p>
//                 <Button color="primary">Read Full Article →</Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//     </div>
//   );
// };

// export default BlogPosts;

// import type React from "react"
// import { Link } from "react-router-dom"

// import BlogImage from "../components/common/BlogImage/BlogImage"

// interface BlogPost {
//   id: number
//   title: string
//   author: string
//   date: string
//   description: string
//   category: "leadership" | "design" | "development"
// }

// const posts: BlogPost[] = [
//   {
//     id: 1,
//     title: "Bill Walsh leadership lessons",
//     author: "Alex Williams",
//     date: "17 Jan 2023",
//     description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     category: "leadership",
//   },
//   {
//     id: 2,
//     title: "PM mental models",
//     author: "Dave Williams",
//     date: "18 Jan 2023",
//     description: "Mental models are simple expressions of complex processes or relationships.",
//     category: "design",
//   },
//   {
//     id: 3,
//     title: "What is Wireframing?",
//     author: "Caroline Wu",
//     date: "19 Jan 2023",
//     description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
//     category: "development",
//   },
// ]

// const BlogPosts: React.FC = () => {
//   return (
//     <section className="blog-posts">
//       <div className="blog-posts__container">
//         <h2 className="blog-posts__title">Blog posts for the community</h2>
//         <p className="blog-posts__subtitle">Latest insights, tips, and expert opinions from our team</p>
//         <div className="blog-posts__grid">
//           {posts.map((post) => (
//             <article key={post.id} className="blog-posts__card">
//               <div className="blog-posts__image">
//                 <BlogImage category={post.category} />
//               </div>
//               <div className="blog-posts__content">
//                 <div className="blog-posts__meta">
//                   <span>{post.author}</span>
//                   <span>•</span>
//                   <span>{post.date}</span>
//                 </div>
//                 <h3>{post.title}</h3>
//                 <p>{post.description}</p>
//                 <Link to="#" className="blog-posts__link">
//                   Read Full Article →
//                 </Link>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BlogPosts

// import type React from "react"
// import Slider from "react-slick"
// import { PrevArrow, NextArrow } from "../components/common/SlideArrows/SlideArrows"
// import "./BlogPost.scss"

// interface BlogPost {
//   id: number
//   title: string
//   author: string
//   date: string
//   description: string
//   image: string
// }

// const blogPosts: BlogPost[] = [
//   {
//     id: 1,
//     title: "PM mental models",
//     author: "Alec Whitten",
//     date: "17 Jan 2022",
//     description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     image: "Image.png",
//   },
//   {
//     id: 2,
//     title: "What is Wireframing?",
//     author: "Alec Whitten",
//     date: "17 Jan 2022",
//     description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     image: "Image (1).png",
//   },
//   {
//     id: 3,
//     title: "Bill Walsh leadership lessons",
//     author: "Alec Whitten",
//     date: "17 Jan 2022",
//     description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
//     image: "Image (2).png",
//   },
// ]

// const BlogPosts: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <PrevArrow />,
//     nextArrow: <NextArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   }

//   return (
//     <section className="blog-posts">
//       <div className="blog-posts__container">
//         <h2>Blog posts for the community</h2>
//         <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>

//         <div className="blog-posts__slider">
//           <Slider {...settings}>
//             {blogPosts.map((post) => (
//               <article key={post.id} className="blog-post">
//                 <div className="blog-post__image">
//                   <img src={post.image || "/placeholder.svg"} alt={post.title} />
//                 </div>
//                 <div className="blog-post__content">
//                   <div className="blog-post__meta">
//                     <span className="blog-post__author">{post.author}</span>
//                     <span className="blog-post__date">• {post.date}</span>
//                   </div>
//                   <h3 className="blog-post__title">{post.title}</h3>
//                   <p className="blog-post__description">{post.description}</p>
//                 </div>
//               </article>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default BlogPosts

import React from "react"
import Slider from "react-slick"
import { PrevArrow, NextArrow } from "../components/common/SlideArrows/SlideArrows"

interface BlogPost {
  id: number
  title: string
  author: string
  date: string
  description: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "PM mental models",
    author: "Alec Whitten",
    date: "17 Jan 2022",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "Image.png",
  },
  {
    id: 2,
    title: "What is Wireframing?",
    author: "Alec Whitten",
    date: "17 Jan 2022",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "Image (1).png",
  },
  {
    id: 3,
    title: "Bill Walsh leadership lessons",
    author: "Alec Whitten",
    date: "17 Jan 2022",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    image: "Image (2).png",
  },
]

const BlogPosts: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section
      className="blog-posts"
      style={{ padding: "2rem 1rem", marginBottom: "2rem" }} // Adjust padding/margin here if needed
    >
      <div className="blog-posts__container" style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h2 style={{ marginBottom: "0.5rem" }}>Blog posts for the community</h2>
        <p style={{ marginBottom: "1rem", color: "#6B7280" }}>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>

        <div className="blog-posts__slider" style={{ marginTop: "1rem" }}>
          <Slider {...settings}>
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post" style={{ margin: "0 10px" }}>
                <div className="blog-post__image">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                </div>
                <div className="blog-post__content" style={{ marginTop: "0.5rem" }}>
                  <div className="blog-post__meta" style={{ fontSize: "0.875rem", color: "#6B7280" }}>
                    <span className="blog-post__author">{post.author}</span>
                    <span className="blog-post__date"> • {post.date}</span>
                  </div>
                  <h3 className="blog-post__title" style={{ fontSize: "1.125rem", margin: "0.5rem 0" }}>
                    {post.title}
                  </h3>
                  <p className="blog-post__description" style={{ fontSize: "0.875rem", color: "#4B5563" }}>
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default BlogPosts


