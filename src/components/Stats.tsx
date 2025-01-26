

// const Stats = () => {
//   const stats = [
//     {
//       value: "6+",
//       label: "Years of experience",
//       description: "We've helped over 4,000 amazing global companies.",
//     },
//     {
//       value: "4.8/5",
//       label: "Success rate",
//       description: "We've helped over 4,000 amazing global companies.",
//     },
//     {
//       value: "30M+",
//       label: "Global users",
//       description: "We've helped over 4,000 amazing global companies.",
//     },
//     {
//       value: "60+",
//       label: "Projects completed",
//       description: "We've helped over 4,000 amazing global companies.",
//     },
//   ]

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="text-center">
//               <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
//               <p className="font-medium mb-2">{stat.label}</p>
//               <p className="text-sm text-gray-600">{stat.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Stats

// import "../styles/Stats.module.scss"; // Import the SCSS file

// const Stats = () => {
//   const stats = [
//     {
//       value: "6+",
//       label: "Years of experience",
//       description: "We've helped over 4,000 amazing global companies.",
//     },
//     {
//       value: "4.8/5",
//       label: "Success rate",
//       description: "We've helped over 4,000 amazing global companies.",
//     },
//     {
//       value: "30M+",
//       label: "Global users",
//       description: "We've helped over 4,000 amazing global companies.",
//     },
//     {
//       value: "60+",
//       label: "Projects completed",
//       description: "We've helped over 4,000 amazing global companies.",
//     },
//   ];

//   return (
//     <section className="stats-section">
//       <div className="container">
//         <div className="stats-grid">
//           {stats.map((stat, index) => (
//             <div key={index} className="stat-item">
//               <h3 className="stat-value">{stat.value}</h3>
//               <p className="stat-label">{stat.label}</p>
//               <p className="stat-description">{stat.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;


import type React from "react"
import "./Stats.scss"
import { StatCard } from "./StatCard"

const Stats: React.FC = () => {
  const stats = [
    {
      value: "6+",
      label: "Years of experience",
      subtitle: "We've helped over 4,000 amazing global companies",
    },
    {
      value: "4.8/5",
      label: "Success rate",
      subtitle: "We've helped over 4,000 amazing global companies",
    },
    {
      value: "30M+",
      label: "Global users",
      subtitle: "We've helped over 4,000 amazing global companies",
    },
    {
      value: "60+",
      label: "Projects completed",
      subtitle: "We've helped over 4,000 amazing global companies",
    },
  ]

  return (
    <section className="stats">
      <div className="stats__container">
        <h2 className="stats__title">We are big enough to deliver and small enough to care</h2>
        <p className="stats__subtitle">Teams large and small rely on Hubnex Labs</p>
        <button className="stats__cta">Connect Sales →</button>
        <div className="stats__grid">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
       
      </div>
    </section>
  )
}

export default Stats

