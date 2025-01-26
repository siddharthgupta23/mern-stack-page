
// import { Button } from "@mui/material"

// const CallToAction = () => {
//   return (
//     <section className="bg-blue-600 py-16">
//       <div className="container mx-auto px-4">
//         <div className="bg-blue-600 rounded-2xl overflow-hidden">
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <img
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IlUtlu3IoomUy4u3wxd2ciKRRdNXEH.png"
//                 alt="Sales Growth"
//                 className="rounded-lg w-full"
//               />
//             </div>
//             <div className="text-white">
//               <h2 className="text-3xl font-bold mb-4">Increase your sales revenue by 32% using Hubnex Labs.</h2>
//               <p className="mb-6">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec est sed quam consequat congue. Ut lac
//                 consect adipiscing elit.
//               </p>
//               <div className="flex space-x-4">
//                 <Button variant="contained" color="secondary">
//                   Join Us →
//                 </Button>
//                 <Button variant="outlined" className="text-white border-white hover:bg-white/10">
//                   Contact Us →
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CallToAction


// import { Button } from "@mui/material";
// import styles from '../styles/CallToAction.module.scss';

// const CallToAction = () => {
//   return (
//     <section className={`${styles.bgBlue600} ${styles.py16}`}>
//       <div className={styles.container}>
//         <div className={`${styles.bgBlue600} ${styles.rounded2xl} ${styles.overflowHidden}`}>
//           <div className={`${styles.grid} ${styles.mdGridCols2} ${styles.gap8} ${styles.itemsCenter}`}>
//             <div>
//               <img
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IlUtlu3IoomUy4u3wxd2ciKRRdNXEH.png"
//                 alt="Sales Growth"
//                 className={`${styles.roundedLg} ${styles.wFull}`}
//               />
//             </div>
//             <div className={styles.textWhite}>
//               <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb4}`}>
//                 Increase your sales revenue by 32% using Hubnex Labs.
//               </h2>
//               <p className={styles.mb6}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec est sed quam consequat congue. Ut lac
//                 consect adipiscing elit.
//               </p>
//               <div className={styles.flex}>
//                 <Button variant="contained" color="secondary">
//                   Join Us →
//                 </Button>
//                 <Button variant="outlined" className={`${styles.textWhite} ${styles.borderWhite} ${styles.hoverBgWhite10}`}>
//                   Contact Us →
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;

// import { Button } from "@mui/material";

// const CallToAction = () => {
//   const styles = {
//     section: {
//       backgroundColor: "#2563eb",
//       padding: "4rem 1rem",
//       display: "flex",
//       justifyContent: "center",
//     },
//     container: {
//       maxWidth: "1200px",
//       display: "grid",
//       gridTemplateColumns: "1fr",
//       gap: "2rem",
//       alignItems: "center",
//       borderRadius: "1rem",
//       overflow: "hidden",
//     },
//     containerTablet: {
//       gridTemplateColumns: "1fr 1fr",
//     },
//     imageWrapper: {
//       width: "100%",
//       display: "flex",
//       justifyContent: "center",
//     },
//     image: {
//       borderRadius: "0.5rem",
//       width: "100%",
//       maxWidth: "500px",
//     },
//     content: {
//       color: "#ffffff",
//       textAlign: "center",
//       padding: "1rem",
//     },
//     contentDesktop: {
//       textAlign: "left",
//     },
//     title: {
//       fontSize: "1.875rem",
//       fontWeight: 700,
//       marginBottom: "1rem",
//     },
//     titleMobile: {
//       fontSize: "1.5rem",
//     },
//     description: {
//       fontSize: "1rem",
//       marginBottom: "1.5rem",
//     },
//     buttonContainer: {
//       display: "flex",
//       justifyContent: "center",
//       gap: "1rem",
//     },
//     buttonContainerDesktop: {
//       justifyContent: "flex-start",
//     },
//     buttonOutlined: {
//       color: "#ffffff",
//       borderColor: "#ffffff",
//     },
//     buttonHover: {
//       backgroundColor: "rgba(255, 255, 255, 0.1)",
//     },
//   };

//   // Adjust styles dynamically for responsiveness
//   const isTabletOrDesktop = window.innerWidth >= 768;

//   return (
//     <section style={styles.section}>
//       <div
//         style={{
//           ...styles.container,
//           ...(isTabletOrDesktop ? styles.containerTablet : {}),
//         }}
//       >
//         <div style={styles.imageWrapper}>
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IlUtlu3IoomUy4u3wxd2ciKRRdNXEH.png"
//             alt="Sales Growth"
//             style={styles.image}
//           />
//         </div>
//         <div
//           style={{
//             ...styles.content,
//             ...(isTabletOrDesktop ? styles.contentDesktop : {}),
//           }}
//         >
//           <h2
//             style={{
//               ...styles.title,
//               ...(window.innerWidth < 768 ? styles.titleMobile : {}),
//             }}
//           >
//             Increase your sales revenue by 32% using Hubnex Labs.
//           </h2>
//           <p style={styles.description}>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
//             est sed quam consequat congue. Ut lacus consect adipiscing elit.
//           </p>
//           <div
//             style={{
//               ...styles.buttonContainer,
//               ...(isTabletOrDesktop ? styles.buttonContainerDesktop : {}),
//             }}
//           >
//             <Button variant="contained" color="secondary">
//               Join Us →
//             </Button>
//             <Button
//               variant="outlined"
//               style={styles.buttonOutlined}
//               sx={{
//                 ":hover": styles.buttonHover,
//               }}
//             >
//               Contact Us →
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;
import { Button } from "@mui/material";
import React, { CSSProperties } from "react";

const CallToAction: React.FC = () => {
  const styles: Record<string, CSSProperties> = {
    section: {
      backgroundColor: "#2563eb",
      padding: "4rem 1rem",
      display: "flex",
      justifyContent: "center",
    },
    container: {
      maxWidth: "1200px",
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "2rem",
      alignItems: "center",
      borderRadius: "1rem",
      overflow: "hidden",
    },
    containerTablet: {
      gridTemplateColumns: "1fr 1fr",
    },
    imageWrapper: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
    image: {
      borderRadius: "0.5rem",
      width: "100%",
      maxWidth: "500px",
    },
    content: {
      color: "#ffffff",
      textAlign: "center",
      padding: "1rem",
    },
    contentDesktop: {
      textAlign: "left",
    },
    title: {
      fontSize: "1.875rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    titleMobile: {
      fontSize: "1.5rem",
    },
    description: {
      fontSize: "1rem",
      marginBottom: "1.5rem",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "1rem",
    },
    buttonContainerDesktop: {
      justifyContent: "flex-start",
    },
    buttonOutlined: {
      color: "#ffffff",
      borderColor: "#ffffff",
    },
    buttonHover: {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
    },
  };

  // Use media query or screen width to determine layout
  const isTabletOrDesktop = window.innerWidth >= 768;

  return (
    <section style={styles.section}>
      <div
        style={{
          ...styles.container,
          ...(isTabletOrDesktop ? styles.containerTablet : {}),
        }}
      >
        <div style={styles.imageWrapper}>
          <img
            src="image (3).png"
            alt="Sales Growth"
            style={styles.image}
          />
        </div>
        <div
          style={{
            ...styles.content,
            ...(isTabletOrDesktop ? styles.contentDesktop : {}),
          }}
        >
          <h2
            style={{
              ...styles.title,
              ...(window.innerWidth < 768 ? styles.titleMobile : {}),
            }}
          >
            Increase your sales revenue by 32% using Hubnex Labs.
          </h2>
          <p style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
            est sed quam consequat congue. Ut lacus consect adipiscing elit.
          </p>
          <p style={styles.description}>
            <img src="Avatar group (2).png"/>
          456+ Companies 
joined to make their business success!
          </p>
          <div
            style={{
              ...styles.buttonContainer,
              ...(isTabletOrDesktop ? styles.buttonContainerDesktop : {}),
            }}
          >
            <Button variant="contained" color="secondary">
              Join Us →
            </Button>
            <Button
              variant="outlined"
              style={styles.buttonOutlined}
              sx={{
                ":hover": styles.buttonHover,
              }}
            >
              Contact Us →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
