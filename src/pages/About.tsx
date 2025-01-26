
// import { Button } from "@mui/material";

// function About() {
//     return (
//         <div className="pt-16">
//             <section className="py-20 bg-gray-100">
//                 <div className="container mx-auto px-4">
//                     <h1 className="text-4xl font-bold mb-8 text-center">About Hubnex Labs</h1>
//                     <div className="max-w-3xl mx-auto text-center">
//                         <p className="text-xl mb-8">
//                             Hubnex Labs is a leading technology consultancy firm dedicated to solving complex challenges and driving
//                             innovation for businesses worldwide.
//                         </p>
//                         <Button variant="contained" color="primary" size="large">
//                             Learn More About Our Mission
//                         </Button>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-20">
//                 <div className="container mx-auto px-4">
//                     <div className="grid md:grid-cols-2 gap-12 items-center">
//                         <div>
//                             <h2 className="text-3xl font-bold mb-6">Our Story</h2>
//                             <p className="mb-4">
//                                 Founded in 2015, Hubnex Labs has grown from a small startup to a global technology partner trusted by
//                                 businesses of all sizes. Our journey is marked by continuous learning, innovation, and a commitment to
//                                 excellence.
//                             </p>
//                             <p>
//                                 We believe in the power of technology to transform businesses and improve lives. This belief drives us
//                                 to stay at the forefront of technological advancements and deliver cutting-edge solutions to our
//                                 clients.
//                             </p>
//                         </div>
//                         <div>
//                             <img
//                                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aX25RQ1DuLiO1NecgJmv6IQoYbk2Ps.png"
//                                 alt="Hubnex Labs Team"
//                                 className="rounded-lg shadow-lg" />
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section className="py-20 bg-gray-100">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
//                     <div className="grid md:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 title: "Innovation",
//                                 description: "We constantly push the boundaries of what's possible in technology.",
//                             },
//                             {
//                                 title: "Integrity",
//                                 description: "We uphold the highest standards of honesty and ethical behavior in all our dealings.",
//                             },
//                             {
//                                 title: "Client-Centric",
//                                 description: "Our clients' success is our top priority, driving everything we do.",
//                             },
//                         ].map((value, index) => (
//                             <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                                 <h3 className="text-xl font-bold mb-4">{value.title}</h3>
//                                 <p>{value.description}</p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default About


import Button from "@mui/material/Button";
import styles from '../styles/About.module.scss';

function About() {
    return (
        <div className={styles.pt16}>
            <section className={`${styles.py20} ${styles.bgGray100}`}>
                <div className={styles.container}>
                    <h1 className={`${styles.text4xl} ${styles.fontBold} ${styles.mb8} ${styles.textCenter}`}>About Hubnex Labs</h1>
                    <div className={`${styles.maxW3xl} ${styles.mxAuto} ${styles.textCenter}`}>
                        <p className={`${styles.textxl} ${styles.mb8}`}>
                            Hubnex Labs is a leading technology consultancy firm dedicated to solving complex challenges and driving
                            innovation for businesses worldwide.
                        </p>
                        <Button variant="contained" color="primary" size="large">
                            Learn More About Our Mission
                        </Button>
                    </div>
                </div>
            </section>

            <section className={styles.py20}>
                <div className={styles.container}>
                    <div className={`${styles.grid} ${styles.mdGridCols2} ${styles.gap12} ${styles.itemsCenter}`}>
                        <div>
                            <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb6}`}>Our Story</h2>
                            <p className={styles.mb4}>
                                Founded in 2015, Hubnex Labs has grown from a small startup to a global technology partner trusted by
                                businesses of all sizes. Our journey is marked by continuous learning, innovation, and a commitment to
                                excellence.
                            </p>
                            <p>
                                We believe in the power of technology to transform businesses and improve lives. This belief drives us
                                to stay at the forefront of technological advancements and deliver cutting-edge solutions to our
                                clients.
                            </p>
                        </div>
                        <div>
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aX25RQ1DuLiO1NecgJmv6IQoYbk2Ps.png"
                                alt="Hubnex Labs Team"
                                className={`${styles.roundedLg} ${styles.shadowLg}`} />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`${styles.py20} ${styles.bgGray100}`}>
                <div className={styles.container}>
                    <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb12} ${styles.textCenter}`}>Our Values</h2>
                    <div className={`${styles.grid} ${styles.mdGridCols3} ${styles.gap8}`}>
                        {[
                            {
                                title: "Innovation",
                                description: "We constantly push the boundaries of what's possible in technology.",
                            },
                            {
                                title: "Integrity",
                                description: "We uphold the highest standards of honesty and ethical behavior in all our dealings.",
                            },
                            {
                                title: "Client-Centric",
                                description: "Our clients' success is our top priority, driving everything we do.",
                            },
                        ].map((value, index) => (
                            <div key={index} className={`${styles.bgWhite} ${styles.p6} ${styles.roundedLg} ${styles.shadowMd}`}>
                                <h3 className={`${styles.textxl} ${styles.fontBold} ${styles.mb4}`}>{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
