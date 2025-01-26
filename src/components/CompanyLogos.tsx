

// const CompanyLogos = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-center text-xl font-medium mb-8">Join 4,000+ companies already growing</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D1gYN4y6hDLufRhthth3QaM0eTFjrg.png"
//             alt="Dealers Matrix"
//             className="h-12 object-contain"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D1gYN4y6hDLufRhthth3QaM0eTFjrg.png"
//             alt="JSW ONE"
//             className="h-12 object-contain"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D1gYN4y6hDLufRhthth3QaM0eTFjrg.png"
//             alt="QUXOAI"
//             className="h-12 object-contain"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D1gYN4y6hDLufRhthth3QaM0eTFjrg.png"
//             alt="Lifesight"
//             className="h-12 object-contain"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D1gYN4y6hDLufRhthth3QaM0eTFjrg.png"
//             alt="Axis Bank"
//             className="h-12 object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CompanyLogos


// import "../styles/CompanyLogos.scss"; // Import the SCSS file

// const CompanyLogos = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container">
//         <h2 className="text-center text-xl font-medium mb-8">Join 4,000+ companies already growing</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D1gYN4y6hDLufRhthth3QaM0eTFjrg.png"
//             alt="Dealers Matrix"
//             className="h-12 object-contain"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D1gYN4y6hDLufRhthth3QaM0eTFjrg.png"
//             alt="JSW ONE"
//             className="h-12 object-contain"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D1gYN4y6hDLufRhthth3QaM0eTFjrg.png"
//             alt="QUXOAI"
//             className="h-12 object-contain"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D1gYN4y6hDLufRhthth3QaM0eTFjrg.png"
//             alt="Lifesight"
//             className="h-12 object-contain"
//           />
//           <img
//             src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-D1gYN4y6hDLufRhthth3QaM0eTFjrg.png"
//             alt="Axis Bank"
//             className="h-12 object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyLogos;

// import React, { CSSProperties } from "react";

// const CompanyLogos: React.FC = () => {
//   const styles: Record<string, CSSProperties> = {
//     section: {
//       paddingTop: "3rem",
//       paddingBottom: "3rem",
//       backgroundColor: "#f9fafb",
//     },
//     container: {
//       maxWidth: "1200px",
//       margin: "0 auto",
//       padding: "0 1rem",
//     },
//     heading: {
//       textAlign: "center",
//       fontSize: "1.25rem",
//       fontWeight: 500,
//       marginBottom: "2rem",
//     },
//     grid: {
//       display: "grid",
//       gridTemplateColumns: "repeat(2, 1fr)",
//       gap: "2rem",
//       alignItems: "center",
//       justifyItems: "center",
//     },
//     gridTablet: {
//       gridTemplateColumns: "repeat(3, 1fr)",
//     },
//     gridDesktop: {
//       gridTemplateColumns: "repeat(5, 1fr)",
//     },
//     image: {
//       height: "3rem",
//       objectFit: "contain",
//     },
//   };

//   // Dynamically adjust grid based on screen width
//   const getGridStyle = (): CSSProperties => {
//     if (window.innerWidth >= 1024) {
//       return { ...styles.grid, ...styles.gridDesktop };
//     } else if (window.innerWidth >= 768) {
//       return { ...styles.grid, ...styles.gridTablet };
//     }
//     return styles.grid;
//   };

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>Join 4,000+ companies already growing</h2>
//         <div style={getGridStyle()}>
//           <img
//             src="image 53.png"
//             alt="Dealers Matrix"
//             style={styles.image}
//           />
//           <img
//             src="my-react-app\public\image 54.png"
//             alt="JSW ONE"
//             style={styles.image}
//           />
//           <img
//             src="image 61.png"
//             alt="QUXOAI"
//             style={styles.image}
//           />
//           <img
//             src="image 60.png"
//             alt="Lifesight"
//             style={styles.image}
//           />
//           <img
//             src="image 62.png"
//             alt="Axis Bank"
//             style={styles.image}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyLogos;

import { CSSProperties } from "react";

const useResponsiveGrid = () => {
  const isMobile = window.innerWidth <= 480;
  const isTablet = window.innerWidth > 480 && window.innerWidth <= 768;
  const isDesktop = window.innerWidth > 768 && window.innerWidth <= 1200;
  const isLargeDesktop = window.innerWidth > 1200;

  if (isMobile) {
    return { gridTemplateColumns: "1fr" }; // 1 column for mobile
  } else if (isTablet) {
    return { gridTemplateColumns: "repeat(2, 1fr)" }; // 2 columns for tablets
  } else if (isDesktop) {
    return { gridTemplateColumns: "repeat(3, 1fr)" }; // 3 columns for desktop
  } else if (isLargeDesktop) {
    return { gridTemplateColumns: "repeat(5, 1fr)" }; // 5 columns for large desktop
  }

  return {}; // Fallback styles
};

const ResponsivePage = () => {
  const gridStyle = useResponsiveGrid();

  const styles: Record<string, CSSProperties> = {
    section: {
      paddingTop: "3rem",
      paddingBottom: "3rem",
      backgroundColor: "#f9fafb",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    heading: {
      textAlign: "center",
      fontSize: "1.25rem",
      fontWeight: 500,
      marginBottom: "2rem",
    },
    grid: {
      display: "grid",
      gap: "2rem",
      alignItems: "center",
      justifyItems: "center",
      ...gridStyle, // Apply dynamic grid styles
    },
    image: {
      height: "3rem",
      objectFit: "contain",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Responsive Grid</h2>
        <div style={styles.grid}>
          {/* Example images or items */}
          <img style={styles.image} src="image 53.png" alt="Image 1" />
          <img style={styles.image} src="image 54.png" alt="Image 2" />
          <img style={styles.image} src="image 61.png" alt="Image 3" />
          <img style={styles.image} src="image 60.png" alt="Image 4" />
          <img style={styles.image} src="image 62.png" alt="Image 5" />
        </div>
      </div>
    </section>
  );
};

export default ResponsivePage;


