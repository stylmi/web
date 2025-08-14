import React from 'react'

type Props = { title: string; description?: string; action?: React.ReactNode }

const EmptyState: React.FC<Props> = ({ title, description, action }) => {
  return (
    <div className="text-center p-8 bg-white rounded-xl border border-gray-100">
      <div className="text-xl font-semibold text-gray-900 mb-2">{title}</div>
      {description && <div className="text-gray-600 mb-4">{description}</div>}
      {action}
    </div>
  )
}

export default EmptyState


