// import React from "react"
// import CheckCircleIcon from "@mui/icons-material/CheckCircle"

// const Benefits = () => {
//   const benefits = [
//     {
//       title: "On-time delivery",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "Dedicated Project Manager",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "24x7 round the clock support",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "100% customer satisfaction",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "Escrow account keeping your money safe",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "Escrow account keeping your money safe",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//   ]

//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Benefits to Join Hubnex Labs</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {benefits.map((benefit, index) => (
//             <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
//               <div className="flex-shrink-0">
//                 <CheckCircleIcon className="h-6 w-6 text-blue-600" />
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600 text-sm">{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Benefits

// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import styles from '../styles/Benefits.module.scss';

// const Benefits = () => {
//   const benefits = [
//     {
//       title: "On-time delivery",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "Dedicated Project Manager",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "24x7 round the clock support",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "100% customer satisfaction",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "Escrow account keeping your money safe",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "Escrow account keeping your money safe",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//   ];

//   return (
//     <section className={`${styles.py16} ${styles.bgWhite}`}>
//       <div className={styles.container}>
//         <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.textCenter} ${styles.mb12}`}>
//           Benefits to Join Hubnex Labs
//         </h2>
//         <div className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols2} ${styles.lgGridCols3} ${styles.gap8}`}>
//           {benefits.map((benefit, index) => (
//             <div key={index} className={`${styles.flex} ${styles.itemsStart} ${styles.spaceX4} ${styles.p6} ${styles.bgWhite} ${styles.roundedLg} ${styles.shadowSm}`}>
//               <div className={styles.flexShrink0}>
//                 <CheckCircleIcon className={`${styles.h6} ${styles.w6} ${styles.textBlue600}`} />
//               </div>
//               <div>
//                 <h3 className={`${styles.fontSemibold} ${styles.mb2}`}>{benefit.title}</h3>
//                 <p className={`${styles.textGray600} ${styles.textSm}`}>{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefits;
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import styles from "../styles/Benefits.module.scss";

// const Benefits = () => {
//   const benefits = [
//     {
//       title: "On-time delivery",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "Dedicated Project Manager",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "24x7 round the clock support",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "100% customer satisfaction",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "Escrow account keeping your money safe",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//     {
//       title: "Escrow account keeping your money safe",
//       description: "Clarity gives you the blocks & components you need to create a website.",
//     },
//   ];

//   return (
//     <section className={`${styles.benefitClass}__section`}>
//       <div className={styles.benefitClass}>
//         <h2 className={`${styles.benefitClass}__title`}>Benefits to Join Hubnex Labs</h2>
//         <div className={`${styles.benefitClass}__grid`}>
//           {benefits.map((benefit, index) => (
//             <div key={index} className={`${styles.benefitClass}__card`}>
//               <CheckCircleIcon className={`${styles.benefitClass}__icon`} />
//               <div>
//                 <h3 className={`${styles.benefitClass}__cardTitle`}>{benefit.title}</h3>
//                 <p className={`${styles.benefitClass}__cardDescription`}>{benefit.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Benefits;
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Benefits = () => {
  const benefits = [
    {
      title: "On-time delivery",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "Dedicated Project Manager",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "24x7 round the clock support",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "100% customer satisfaction",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "Escrow account keeping your money safe",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
    {
      title: "Escrow account keeping your money safe",
      description: "Clarity gives you the blocks & components you need to create a website.",
    },
  ];

  const styles = {
    section: {
      padding: "4rem 0",
      backgroundColor: "#ffffff",
    },
    container: {
      margin: "0 auto",
      padding: "0 1rem",
    },
    title: {
      textAlign: "center" as const,
      fontSize: "1.875rem",
      fontWeight: 700,
      marginBottom: "3rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gap: "2rem",
    },
    card: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
      padding: "1.5rem",
      backgroundColor: "#ffffff",
      borderRadius: "0.5rem",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
    },
    icon: {
      flexShrink: 0,
      height: "1.5rem",
      width: "1.5rem",
      color: "#2563eb",
    },
    cardTitle: {
      fontWeight: 600,
      marginBottom: "0.5rem",
    },
    cardDescription: {
      color: "#4a4a4a",
      fontSize: "0.875rem",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.title}>Benefits to Join Hubnex Labs</h2>
        <div
          style={{
            ...styles.grid,
            gridTemplateColumns: "repeat(1, 1fr)",
            ...(window.innerWidth >= 768
              ? { gridTemplateColumns: "repeat(2, 1fr)" }
              : {}),
            ...(window.innerWidth >= 1024
              ? { gridTemplateColumns: "repeat(3, 1fr)" }
              : {}),
          }}
        >
          {benefits.map((benefit, index) => (
            <div key={index} style={styles.card}>
              <CheckCircleIcon style={styles.icon} />
              <div>
                <h3 style={styles.cardTitle}>{benefit.title}</h3>
                <p style={styles.cardDescription}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
