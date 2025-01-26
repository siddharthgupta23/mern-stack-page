import type React from "react"

interface StatCardProps {
  value: string
  label: string
  subtitle: string
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, subtitle }) => {
  return (
    <div className="stat-card">
      <div className="stat-card__content">
        <h3 className="stat-card__value">{value}</h3>
        <p className="stat-card__label">{label}</p>
        <p className="stat-card__subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

