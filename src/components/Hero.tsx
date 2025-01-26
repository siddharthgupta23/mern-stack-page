
// import  Button  from "@mui/material/Button"

// const Hero = () => {
//   return (
//     <section className="relative bg-white py-12">
//       <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] opacity-5"></div>
//       <div className="container mx-auto px-4">
//         <div className="mb-4 inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-1 text-sm">
//           <span className="mr-2 rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">
//             Puppal Paul
//           </span>
//           <span className="text-gray-600">Check out to invest in our success →</span>
//         </div>

//         <h1 className="mb-6 text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
//           High-performing remote teams.
//           <br />
//           The future of work.
//         </h1>

//         <p className="mx-auto mb-8 max-w-2xl text-center text-lg text-gray-600">
//           Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep employees engaged
//           from anywhere.
//         </p>

//         <div className="mb-8 flex justify-center space-x-4">
//           <Button variant="contained" color="primary" size="large">
//             Contact Us
//           </Button>
//           <Button variant="outlined" color="primary" size="large">
//             Join Us →
//           </Button>
//         </div>

//         <div className="flex justify-center">
//           <div className="flex items-center space-x-1">
//             {"★★★★★".split("").map((star, i) => (
//               <span key={i} className="text-yellow-400">
//                 {star}
//               </span>
//             ))}
//             <span className="ml-2 text-sm text-gray-600">4.5 (from 200+ reviews)</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Hero

// import Button from "@mui/material/Button";
//  // Import the SCSS file

// const Hero = () => {
//   return (
//     <section className="hero">
//       <div className="bg-pattern"></div>
//       <div className="container">
//         <div className="badge">
//             <br>
//             </br>
//             <br></br>
//             <br>
//             </br>
//             <br></br>
//           <span className="badge-text">Be our partner</span>
//           <span className="badge-description">Check out to invest in our success →</span>
//         </div>

//         <h1 className="heading">
//           High-performing remote teams.
//           <br />
//           The future of work.
//         </h1>

//         <p className="subheading">
//           Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep employees engaged
//           from anywhere.
//         </p>

//         <div className="button-group">
//           <Button variant="contained" color="primary" size="large">
//             Contact Us
//           </Button>
//           <Button variant="outlined" color="primary" size="large">
//             Join Us →
//           </Button>
//         </div>

//         <div className="rating">
//           {"★★★★★".split("").map((star, i) => (
//             <span key={i} className="star">
//               {star}
//             </span>
//           ))}
//           <span className="review-text">4.5 (from 200+ reviews)</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import Button from "@mui/material/Button";

const Hero = () => {
  const styles={
    imageContainer: {
      position: "relative" as const,
      width: "80%",
      height: "200px",
      borderRadius: "16px",
      overflow: "hidden"
    },
    image: {
      width: "80%",
      height: "80%",
      objectFit: "cover" as const,
    },
  }
  return (
    <section className="hero">
      <div className="bg-pattern"></div>
      <div className="container">
        <br>
        </br>
        <br></br>
        <div className="badge-container">

        <div className="badge">
          
          <span className="badge-text">Be our partner</span>
          <span className="badge-description">Check out to invest in our success →</span>
        </div>
        </div>

        <h1 className="heading">
          High-performing remote teams.
          <br />
          The future of work.
        </h1>

        <p className="subheading">
          Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep employees engaged
          from anywhere.
          <div style={styles.imageContainer}>
          <img
            src="Circle 8.png"
            alt="Remote team collaboration"
            style={styles.image}
          />
        </div>
        </p>

        <div className="button-group">
          <Button variant="contained" color="primary" size="large" className="contact-us">
            Contact Us
          </Button>
          <Button variant="outlined" color="primary" size="large" className="join-us">
            Join Us →
          </Button>
      
        </div>

        <div className="rating">
          {"★★★★★".split("").map((star, i) => (
            <span key={i} className="star">
              {star}
            </span>
          ))}
          <span className="review-text">4.5 (from 200+ reviews)</span>
        </div>
     
      </div>
      
    </section>
  );
};

export default Hero;