// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center py-4">
//           <Link to="/" className="text-xl font-bold">
//             Hubnex Labs
//           </Link>
//           <div className="hidden md:flex space-x-4 items-center">
//             <Link to="/services" className="text-gray-600 hover:text-gray-900">
//               Services
//             </Link>
//             <Link to="/about" className="text-gray-600 hover:text-gray-900">
//               About
//             </Link>
//             <Link to="/contact" className="text-gray-600 hover:text-gray-900">
//               Contact
//             </Link>
//             <Button variant="contained" color="primary">
//               Connect Sales →
//             </Button>
//           </div>
//           <button className="md:hidden" onClick={toggleMenu}>
//             {isOpen ? <CloseIcon /> : <MenuIcon />}
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden bg-white py-2">
//           <div className="container mx-auto px-4">
//             <Link to="/services" className="block py-2 text-gray-600 hover:text-gray-900">
//               Services
//             </Link>
//             <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-900">
//               About
//             </Link>
//             <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-900">
//               Contact
//             </Link>
//             <Button variant="contained" color="primary" fullWidth className="mt-2">
//               Connect Sales →
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


// import type React from "react"
// import { useState } from "react"
// import { Link } from "react-router-dom"
// import "./Navbar.scss"
// import  MenuIcon from "@mui/material"
// import XIcon from "@mui/material"
// interface NavItem {
//   title: string
//   path?: string
//   dropdown?: NavItem[]
// }

// const navItems: NavItem[] = [
//   {
//     title: "Resources",
//     dropdown: [
//       { title: "Blog", path: "/blog" },
//       { title: "Case Studies", path: "/case-studies" },
//     ],
//   },
//   {
//     title: "Explore Services",
//     dropdown: [
//       { title: "Emerging Technology", path: "/services/emerging-tech" },
//       { title: "Data and Cloud", path: "/services/data-cloud" },
//       { title: "Software Development", path: "/services/software-dev" },
//       { title: "Marketing", path: "/services/marketing" },
//       { title: "Staff Augmentation", path: "/services/staff-augmentation" },
//       { title: "Artificial Intelligence", path: "/services/ai" },
//       { title: "Blockchain", path: "/services/blockchain" },
//       { title: "Robotic Automation", path: "/services/automation" },
//       { title: "Internet of Things", path: "/services/iot" },
//       { title: "Cybersecurity", path: "/services/security" },
//     ],
//   },
//   {
//     title: "Resources",
//     dropdown: [
//       { title: "Social Media", path: "/resources/social-media" },
//       { title: "SEO", path: "/resources/seo" },
//       { title: "Performance Marketing", path: "/resources/performance" },
//       { title: "Branding", path: "/resources/branding" },
//     ],
//   },
//   {
//     title: "Community",
//     dropdown: [
//       { title: "Work with us", path: "/careers" },
//       { title: "Apply as a Partner Agency", path: "/partners" },
//     ],
//   },
// ]

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav className="navbar">
//       <div className="navbar__container">
//         <Link to="/" className="navbar__logo">
//           Hubnex Labs
//         </Link>

//         <button className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
//         </button>

//         <div className={`navbar__menu ${isOpen ? "active" : ""}`}>
//           {navItems.map((item, index) => (
//             <div key={index} className="navbar__item">
//               {item.path ? (
//                 <Link to={item.path} className="navbar__link">
//                   {item.title}
//                 </Link>
//               ) : (
//                 <span className="navbar__link">{item.title}</span>
//               )}

//               {item.dropdown && (
//                 <div className="navbar__dropdown">
//                   {item.dropdown.map((dropdownItem, dropdownIndex) => (
//                     <Link key={dropdownIndex} to={dropdownItem.path || "#"} className="navbar__dropdown-item">
//                       {dropdownItem.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.scss";

// import { Menu as MenuIcon, Close as XIcon } from "@mui/icons-material";  // Correct imports

// interface NavItem {
//   title: string;
//   path?: string;
//   dropdown?: NavItem[];
// }

// const navItems: NavItem[] = [
//   {
//     title: "Resources",
//     dropdown: [
//       { title: "Blog", path: "/blog" },
//       { title: "Case Studies", path: "/case-studies" },
//     ],
//   },
//   {
//     title: "Explore Services",
//     dropdown: [
//       { title: "Emerging Technology", path: "/services/emerging-tech" },
//       { title: "Data and Cloud", path: "/services/data-cloud" },
//       { title: "Software Development", path: "/services/software-dev" },
//       { title: "Marketing", path: "/services/marketing" },
//       { title: "Staff Augmentation", path: "/services/staff-augmentation" },
//       { title: "Artificial Intelligence", path: "/services/ai" },
//       { title: "Blockchain", path: "/services/blockchain" },
//       { title: "Robotic Automation", path: "/services/automation" },
//       { title: "Internet of Things", path: "/services/iot" },
//       { title: "Cybersecurity", path: "/services/security" },
//     ],
//   },
//   {
//     title: "Resources",
//     dropdown: [
//       { title: "Social Media", path: "/resources/social-media" },
//       { title: "SEO", path: "/resources/seo" },
//       { title: "Performance Marketing", path: "/resources/performance" },
//       { title: "Branding", path: "/resources/branding" },
//     ],
//   },
//   {
//     title: "Community",
//     dropdown: [
//       { title: "Work with us", path: "/careers" },
//       { title: "Apply as a Partner Agency", path: "/partners" },
//     ],
//   },
// ];

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar__container">
//         <Link to="/" className="navbar__logo">
//           Hubnex Labs
//         </Link>

//         <button className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
//         </button>

//         <div className={`navbar__menu ${isOpen ? "active" : ""}`}>
//           {navItems.map((item, index) => (
//             <div key={index} className="navbar__item">
//               {item.path ? (
//                 <Link to={item.path} className="navbar__link">
//                   {item.title}
//                 </Link>
//               ) : (
//                 <span className="navbar__link">{item.title}</span>
//               )}

//               {item.dropdown && (
//                 <div className="navbar__dropdown">
//                   {item.dropdown.map((dropdownItem, dropdownIndex) => (
//                     <Link key={dropdownIndex} to={dropdownItem.path || "#"} className="navbar__dropdown-item">
//                       {dropdownItem.title}
//                     </Link>
//                   ))}
//                 </div>
//               )}
              
//             </div>
           
                    
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import { Menu as MenuIcon, Close as XIcon } from "@mui/icons-material";  // Correct imports

interface NavItem {
  title: string;
  path?: string;
  dropdown?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Resources",
    dropdown: [
      { title: "Blog", path: "/blog" },
      { title: "Case Studies", path: "/case-studies" },
    ],
  },
  {
    title: "Explore Services",
    dropdown: [
      { title: "Emerging Technology", path: "/services/emerging-tech" },
      { title: "Data and Cloud", path: "/services/data-cloud" },
      { title: "Software Development", path: "/services/software-dev" },
      { title: "Marketing", path: "/services/marketing" },
      { title: "Staff Augmentation", path: "/services/staff-augmentation" },
      { title: "Artificial Intelligence", path: "/services/ai" },
      { title: "Blockchain", path: "/services/blockchain" },
      { title: "Robotic Automation", path: "/services/automation" },
      { title: "Internet of Things", path: "/services/iot" },
      { title: "Cybersecurity", path: "/services/security" },
    ],
  },
  {
    title: "Resources",
    dropdown: [
      { title: "Social Media", path: "/resources/social-media" },
      { title: "SEO", path: "/resources/seo" },
      { title: "Performance Marketing", path: "/resources/performance" },
      { title: "Branding", path: "/resources/branding" },
    ],
  },
  {
    title: "Community",
    dropdown: [
      { title: "Work with us", path: "/careers" },
      { title: "Apply as a Partner Agency", path: "/partners" },
    ],
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          <img src="Hubnex Labs left align.png"/>
        </Link>

        <button className="navbar__hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>

        <div className={`navbar__menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <div key={index} className="navbar__item">
              {item.path ? (
                <Link to={item.path} className="navbar__link">
                  {item.title}
                </Link>
              ) : (
                <span className="navbar__link">{item.title}</span>
              )}

              {item.dropdown && (
                <div className="navbar__dropdown">
                  {item.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link key={dropdownIndex} to={dropdownItem.path || "#"} className="navbar__dropdown-item">
                      {dropdownItem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Add the "Connect Sales" button */}
        <button className="navbar__connect-sales"> Connect Sales →</button>
      </div>
    </nav>
  );
};

export default Navbar;

