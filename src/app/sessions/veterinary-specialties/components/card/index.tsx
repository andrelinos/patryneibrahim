import type { ReactNode } from 'react'

interface VeterinarySpecialtiesCardProps {
  icon: ReactNode
  title: string
}

export function VeterinarySpecialtiesCard({
  icon,
  title,
}: VeterinarySpecialtiesCardProps) {
  return (
    <div className="flex size-64 min-w-64 flex-shrink-0 flex-grow-0 basis-1/6 cursor-pointer flex-col items-center justify-center gap-4 rounded-xl border border-zinc-300 p-4 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-secondary">
      <span>{icon}</span>
      <h2 className="text-2xl font-semibold text-secondary">{title}</h2>
    </div>
  )
}
