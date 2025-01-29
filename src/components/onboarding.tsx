import type React from "react"
import { Pencil, User, Folder, Check } from "lucide-react"

interface StepCardProps {
  icon: React.ReactNode
  step: string
  title: string
  description: string
}

function StepCard({ icon, step, title, description }: StepCardProps) {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "white",
    padding: "32px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }

  const iconStyle: React.CSSProperties = {
    width: "48px",
    height: "48px",
    marginBottom: "16px",
    color: "#2048ff",
  }

  const stepStyle: React.CSSProperties = {
    color: "#666",
    marginBottom: "8px",
    fontSize: "14px",
  }

  const titleStyle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
  }

  const descriptionStyle: React.CSSProperties = {
    color: "#666",
    fontSize: "16px",
    lineHeight: "1.6",
  }

  return (
    <div style={cardStyle}>
      <div style={iconStyle}>{icon}</div>
      <div style={stepStyle}>{step}</div>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
    </div>
  )
}

export default function OnboardingSteps() {
  const sectionStyle: React.CSSProperties = {
    backgroundColor: "#f8f9ff",
    padding: "60px 20px",
  }

  const containerStyle: React.CSSProperties = {
    maxWidth: "1200px",
    margin: "0 auto",
  }

  const titleStyle: React.CSSProperties = {
    fontSize: "clamp(28px, 4vw, 32px)",
    textAlign: "center",
    marginBottom: "40px",
    fontWeight: "bold",
  }

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
  }

  const steps = [
    {
      icon: <img src="icons8-sign-up-40 1.png"/>,
      step: "Step 1",
      title: "Free sign-up",
      description: "Register on our Partner Dashboard and have your contact details verified instantly.",
    },
    {
      icon: <img src="icons8-project-setup-48 1.png"/>,
      step: "Step 2",
      title: "Profile setup",
      description: "Access your personalized dashboard to complete your profile.",
    },
    {
      icon: <img src="icons8-folder-48 1.png" />,
      step: "Step 3",
      title: "Showcase your work",
      description: "Upload your portfolio and past work examples to attract clients to your profile.",
    },
    {
      icon: <img src="icons8-verify-48 1.png"/>,
      step: "Step 4",
      title: "Start Working",
      description: "Get verified by our team and easily manage your work through our Partner Dashboard.",
    },
  ]

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>How to get on board with us</h2>
        <div style={gridStyle}>
          {steps.map((step) => (
            <StepCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  )
}

