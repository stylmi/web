import React from 'react'

type Props = { title: string; subtitle?: string }

const SectionHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  )
}

export default SectionHeader


