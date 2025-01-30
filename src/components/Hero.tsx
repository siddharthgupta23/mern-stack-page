
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

// import Button from "@mui/material/Button";

// const Hero = () => {
//   const styles={
//     imageContainer: {
//       position: "relative" as const,
//       width: "80%",
//       height: "200px",
//       borderRadius: "16px",
//       overflow: "hidden"
//     },
//     image: {
//       width: "80%",
//       height: "80%",
//       objectFit: "cover" as const,
//     },
//   }
//   return (
//     <section className="hero">
//       <div className="bg-pattern"></div>
//       <div className="container">
//         <br>
//         </br>
//         <br></br>
//         <div className="badge-container">

//         <div className="badge">
          
//           <span className="badge-text">Be our partner</span>
//           <span className="badge-description">Check out to invest in our success →</span>
//         </div>
//         </div>

//         <h1 className="heading">
//           High-performing remote teams.
//           <br />
//           The future of work.
//         </h1>

//         <p className="subheading">
//           Powerful, self-serve team engagement tools and analytics. Supercharge your managers & keep employees engaged
//           from anywhere.
//           <div style={styles.imageContainer}>
//           <img
//             src="Circle 8.png"
//             alt="Remote team collaboration"
//             style={styles.image}
//           />
//         </div>
//         </p>

//         <div className="button-group">
//           <Button variant="contained" color="primary" size="large" className="contact-us">
//             Contact Us
//           </Button>
//           <Button variant="outlined" color="primary" size="large" className="join-us">
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
  const styles = {
    hero: {
      position: "relative" as const,
      paddingTop: "3rem",
      paddingBottom: "3rem",
      backgroundColor: "#ffffff",
    },
    bgPattern: {
      position: "absolute" as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: "url('/pattern-bg.svg')",
      opacity: 0.05,
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    badgeContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "1rem",
    },
    badge: {
      display: "inline-flex",
      alignItems: "center",
      border: "1px solid #e5e7eb",
      backgroundColor: "#ffffff",
      fontSize: "0.875rem",
      fontFamily: "Helvetica, Arial, sans-serif",
      padding: "4px 16px",
      gap: "8px",
      borderRadius: "50px",
    },
    badgeText: {
      backgroundColor: "#000000",
      color: "#ffffff",
      borderRadius: "9999px",
      padding: "0.25rem 0.5rem",
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "20px",
      textAlign: "center" as const,
      marginRight: "8px",
      marginTop:"90px"
    },
    badgeDescription: {
      color: "#4b5563",
      fontSize: "0.875rem",
      lineHeight: "20px",
    },
    heading: {
      marginBottom: "1.5rem",
      textAlign: "center" as const,
      fontSize: "2.25rem",
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: "-0.5px",
    },
    subheading: {
      margin: "0 auto",
      marginBottom: "2rem",
      maxWidth: "35rem",
      textAlign: "center" as const,
      fontSize: "1.125rem",
      color: "#4b5563",
    },
    imageContainer: {
      position: "relative" as const,
      width: "80%",
      height: "200px",
      borderRadius: "16px",
      overflow: "hidden",
      margin: "1.5rem auto",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover" as const,
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
      marginBottom: "2rem",
    },
    button: {
      padding: "0.75rem 1.5rem",
      fontSize: "1rem",
      borderRadius: "9999px",
    },
    joinUs: {
      border: "2px solid #007bff",
      color: "#007bff",
      transition: "background-color 0.3s, color 0.3s",
      "&:hover": {
        backgroundColor: "#ffffff",
        color: "#007bff",
      },
    },
    rating: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    star: {
      color: "#fbbf24",
    },
    reviewText: {
      marginLeft: "0.5rem",
      fontSize: "0.875rem",
      color: "#4b5563",
    },
  };

  return (
    <section style={styles.hero}>
      <div style={styles.bgPattern}></div>
      <div style={styles.container}>
        <div style={styles.badgeContainer}>
          <div style={styles.badge}>
            <span style={styles.badgeText}>Be our partner</span>
            <span style={styles.badgeDescription}>
              Check out to invest in our success →
            </span>
          </div>
        </div>

        <h1 style={styles.heading}>
        Transforming Businesses with Smarter, Customized IT Solutions to Empower Innovation, Boost Efficiency, and Drive Growth.
          <br />
          The future of work.
        </h1>

        <p style={styles.subheading}>
        We continuously strive to exceed our clients' expectations by delivering personalized solutions,
unwavering dedication, and unparalleled cutting-edge technology.
          <div style={styles.imageContainer}>
            <img
              src="Circle 8.png"
              alt="Remote team collaboration"
              style={styles.image}
            />
          </div>
        </p>

        <div style={styles.buttonGroup}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={styles.button}
          >
            know Our Services →
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            style={{ ...styles.button, ...styles.joinUs }}
          >
            Get Free Consultation →
          </Button>
        </div>

        <div style={styles.rating}>
          {"★★★★★".split("").map((star, i) => (
            <span key={i} style={styles.star}>
              {star}
            </span>
          ))}
          <span style={styles.reviewText}>4.5 (from 200+ reviews)</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
