// import React from "react"

// const GlobalPresence = () => {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-3xl font-bold mb-6">Unleash the full power of data</h2>
//             <p className="text-gray-600 mb-6">
//               We guide global businesses through the challenges of developing purposeful technology that addresses their
//               needs and advances their growth. We have established offices in India, the UAE, and the USA.
//             </p>
//             <div className="grid grid-cols-3 gap-8 mb-8">
//               <div>
//                 <h3 className="text-3xl font-bold text-blue-600 mb-2">40+</h3>
//                 <p className="text-sm text-gray-600">Integrations</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl font-bold text-blue-600 mb-2">600%</h3>
//                 <p className="text-sm text-gray-600">Return on investment</p>
//               </div>
//               <div>
//                 <h3 className="text-3xl font-bold text-blue-600 mb-2">4k+</h3>
//                 <p className="text-sm text-gray-600">Global customers</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="text-sm text-gray-600">Featured in</span>
//               {/* Add featured company logos here */}
//             </div>
//           </div>
//           <div className="relative">
//             <img
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aX25RQ1DuLiO1NecgJmv6IQoYbk2Ps.png"
//               alt="Global Presence"
//               className="rounded-lg w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default GlobalPresence


import "../styles/GlobalPresence.scss"; // Import the SCSS file

const GlobalPresence = () => {
  return (
    <section className="global-presence">
      <div className="container">
        <div className="grid">
          <div className="left-section">
            <h2>Unleash the full power of data</h2>
            <p>
              We guide global businesses through the challenges of developing
              purposeful technology that addresses their needs and advances their
              growth. We have established offices in India, the UAE, and the USA.
            </p>
            <div className="stats">
              <div>
                <h3>40+</h3>
                <p>Integrations</p>
              </div>
              <div>
                <h3>600%</h3>
                <p>Return on investment</p>
              </div>
              <div>
                <h3>4k+</h3>
                <p>Global customers</p>
              </div>
            </div>
            <div className="featured">
              <span>Featured in</span>
          <img src="image 34.png"/>
           <img src="image 36.png"/>
           <img src="image 37 (1).png"/>
          
            </div>
          </div>
          <div className="right-section">
            <img
              src="image 5.png"
              alt="Global Presence"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
