import type React from "react"

interface FeatureCardProps {
  number: string
  title: string
  description: string
}

function FeatureCard({ number, title, description }: FeatureCardProps) {
  const cardStyle: React.CSSProperties = {
    padding: "24px",
    border: "1px solid #e1e1e1",
    borderRadius: "12px",
    backgroundColor: "white",
    height: "100%",
  }

  const numberStyle: React.CSSProperties = {
    color: "#2048ff",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
  }

  const titleStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
  }

  const descriptionStyle: React.CSSProperties = {
    color: "#666",
    lineHeight: "1.6",
    fontSize: "16px",
  }

  return (
    <div style={cardStyle}>
      <div style={numberStyle}>{number}</div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  )
}

export default function Partners_pageee() {
  const sectionStyle: React.CSSProperties = {
    padding: "60px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  }

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "60px",
  }

  const titleStyle: React.CSSProperties = {
    fontSize: "clamp(28px, 4vw, 32px)",
    fontWeight: "bold",
    marginBottom: "16px",
  }

  const subtitleStyle: React.CSSProperties = {
    color: "#666",
    maxWidth: "600px",
    margin: "0 auto",
    fontSize: "clamp(14px, 3vw, 16px)",
    lineHeight: "1.6",
  }

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "24px",
  }

  const features = [
    {
      number: "1",
      title: "Fast MVP Development",
      description:
        "We develop the prototype and MVP for the ERP System within a few months and optimize the final product based on its performance metrics and your feedback.",
    },
    {
      number: "2",
      title: "Maintenance & Support",
      description:
        "Our work does not end with delivery. We offer complete support and maintenance post the launch of the ERP systems to ensure their smooth functioning.",
    },
    {
      number: "3",
      title: "Smooth ERP Integration",
      description:
        "We ensure smooth ERP integration with other business parts, including other ERPs, Salesforce, Office Suite, and IoT systems, for effective, seamless business operations.",
    },
  ]

  return (
    <section style={sectionStyle}>
      <div style={headerStyle}>
        <h2 style={titleStyle}>Why Choose Us?</h2>
        <p style={subtitleStyle}>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum
        </p>
      </div>

      <div style={gridStyle}>
        {features.map((feature) => (
          <FeatureCard key={feature.number} {...feature} />
        ))}
      </div>
    </section>
  )
}

