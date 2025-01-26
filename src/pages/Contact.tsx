
// import Button from "@mui/material/Button"
// import TextField from "@mui/material/TextField"
// import { Phone, Email, LocationOn } from "@mui/icons-material"

// const Contact = () => {
//   return (
//     <div className="pt-16">
//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
//           <div className="max-w-3xl mx-auto text-center">
//             <p className="text-xl mb-8">Have questions or want to discuss a project? We're here to help!</p>
//           </div>
//         </div>
//       </section>

//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
//               <form className="space-y-4">
//                 <TextField fullWidth label="Name" variant="outlined" />
//                 <TextField fullWidth label="Email" variant="outlined" type="email" />
//                 <TextField fullWidth label="Phone" variant="outlined" />
//                 <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
//                 <Button variant="contained" color="primary" size="large">
//                   Send Message
//                 </Button>
//               </form>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <Phone className="text-blue-600 mr-4" />
//                   <span>+1 (555) 123-4567</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Email className="text-blue-600 mr-4" />
//                   <span>info@hubnexlabs.com</span>
//                 </div>
//                 <div className="flex items-center">
//                   <LocationOn className="text-blue-600 mr-4" />
//                   <span>123 Tech Street, Silicon Valley, CA 94000</span>
//                 </div>
//               </div>
//               <div className="mt-8">
//                 <h3 className="text-xl font-bold mb-4">Office Hours</h3>
//                 <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
//                 <p>Saturday - Sunday: Closed</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-20 bg-gray-100">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-8">Find Us on the Map</h2>
//           <div className="aspect-w-16 aspect-h-9">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1637309850935!5m2!1sen!2sus"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen={true}
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Contact



import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Phone, Email, LocationOn } from "@mui/icons-material"
import styles from '../styles/Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.pt16}>
      <section className={`${styles.py20} ${styles.bgGray100}`}>
        <div className={styles.container}>
          <h1 className={`${styles.text4xl} ${styles.fontBold} ${styles.mb8} ${styles.textCenter}`}>Contact Us</h1>
          <div className={`${styles.maxW3xl} ${styles.mxAuto} ${styles.textCenter}`}>
            <p className={`${styles.textxl} ${styles.mb8}`}>Have questions or want to discuss a project? We're here to help!</p>
          </div>
        </div>
      </section>

      <section className={styles.py20}>
        <div className={styles.container}>
          <div className={`${styles.grid} ${styles.mdGridCols2} ${styles.gap12}`}>
            <div>
              <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb6}`}>Get in Touch</h2>
              <form className={styles.spaceY4}>
                <TextField fullWidth label="Name" variant="outlined" />
                <TextField fullWidth label="Email" variant="outlined" type="email" />
                <TextField fullWidth label="Phone" variant="outlined" />
                <TextField fullWidth label="Message" variant="outlined" multiline rows={4} />
                <Button variant="contained" color="primary" size="large">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb6}`}>Contact Information</h2>
              <div className={styles.spaceY4}>
                <div className={`${styles.flex} ${styles.itemsCenter}`}>
                  <Phone className={`${styles.textBlue600} ${styles.mr4}`} />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className={`${styles.flex} ${styles.itemsCenter}`}>
                  <Email className={`${styles.textBlue600} ${styles.mr4}`} />
                  <span>info@hubnexlabs.com</span>
                </div>
                <div className={`${styles.flex} ${styles.itemsCenter}`}>
                  <LocationOn className={`${styles.textBlue600} ${styles.mr4}`} />
                  <span>123 Tech Street, Silicon Valley, CA 94000</span>
                </div>
              </div>
              <div className={styles.mt8}>
                <h3 className={`${styles.textxl} ${styles.fontBold} ${styles.mb4}`}>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.py20} ${styles.bgGray100}`}>
        <div className={styles.container}>
          <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb8} ${styles.textCenter}`}>Find Us on the Map</h2>
          <div className={`${styles.aspectW16} ${styles.aspectH9}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1637309850935!5m2!1sen!2sus"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact


