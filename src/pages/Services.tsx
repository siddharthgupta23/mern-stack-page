import React from "react"
import Button from "@mui/material/Button"
import { Code, Cloud, Smartphone, BarChart } from "@mui/icons-material"
import styles from '../styles/Services.module.scss'

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: "Custom Software Development",
      description: "Tailored software solutions to meet your unique business needs.",
    },
    {
      icon: <Cloud />,
      title: "Cloud Services",
      description: "Scalable and secure cloud infrastructure and migration services.",
    },
    {
      icon: <Smartphone />,
      title: "Mobile App Development",
      description: "Innovative mobile applications for iOS and Android platforms.",
    },
    {
      icon: <BarChart />,
      title: "Data Analytics",
      description: "Unlock the power of your data with our advanced analytics solutions.",
    },
  ]

  return (
    <div className={styles.pt16}>
      <section className={`${styles.py20} ${styles.bgGray100}`}>
        <div className={styles.container}>
          <h1 className={`${styles.text4xl} ${styles.fontBold} ${styles.mb8} ${styles.textCenter}`}>Our Services</h1>
          <div className={`${styles.maxW3xl} ${styles.mxAuto} ${styles.textCenter}`}>
            <p className={`${styles.textxl} ${styles.mb8}`}>
              Hubnex Labs offers a wide range of technology services to help your business thrive in the digital age.
            </p>
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.py20}>
        <div className={styles.container}>
          <div className={`${styles.grid} ${styles.mdGridCols2} ${styles.lgGridCols4} ${styles.gap8}`}>
            {services.map((service, index) => (
              <div key={index} className={`${styles.bgWhite} ${styles.p6} ${styles.roundedLg} ${styles.shadowMd} ${styles.textCenter}`}>
                <div className={`${styles.textBlue600} ${styles.mb4}`}>
                  {React.cloneElement(service.icon, { className: styles.icon })}
                </div>
                <h3 className={`${styles.textxl} ${styles.fontBold} ${styles.mb4}`}>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.py20} ${styles.bgBlue600} ${styles.textWhite}`}>
        <div className={styles.container}>
          <div className={`${styles.maxW3xl} ${styles.mxAuto} ${styles.textCenter}`}>
            <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb8}`}>Ready to transform your business?</h2>
            <p className={`${styles.textxl} ${styles.mb8}`}>
              Let's discuss how our services can help you achieve your goals and stay ahead in the competitive market.
            </p>
            <Button className="secondary" variant="contained" size="large">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services


