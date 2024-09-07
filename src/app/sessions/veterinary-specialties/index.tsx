import { BirdIcon, Cat, HandPlatterIcon, PawPrint } from 'lucide-react'

import { VeterinarySpecialtiesCard } from './components/card'

export function VeterinarySpecialties() {
  return (
    <div
      id="veterinary-specialties"
      className="flex w-full flex-col items-center gap-6 bg-white p-6"
    >
      <h2 className="text-3xl font-semibold text-secondary">
        Especialidades Veterinárias
      </h2>
      <div className="flex w-fit flex-wrap justify-center gap-6">
        <VeterinarySpecialtiesCard
          title="Medicina Felina"
          icon={<Cat size={80} strokeWidth={0.5} className="text-secondary" />}
        />
        <VeterinarySpecialtiesCard
          title="Dermatologia Veterinária"
          icon={
            <PawPrint size={80} strokeWidth={0.5} className="text-secondary" />
          }
        />
        <VeterinarySpecialtiesCard
          title="Alimentação Natural"
          icon={
            <HandPlatterIcon
              size={80}
              strokeWidth={0.5}
              className="text-secondary"
            />
          }
        />
        <VeterinarySpecialtiesCard
          title="Medicina de Aves"
          icon={
            <BirdIcon size={80} strokeWidth={0.5} className="text-secondary" />
          }
        />
        <VeterinarySpecialtiesCard
          title="Medicina Felina"
          icon={<Cat size={80} strokeWidth={0.5} className="text-secondary" />}
        />
        <VeterinarySpecialtiesCard
          title="Dermatologia Veterinária"
          icon={
            <PawPrint size={80} strokeWidth={0.5} className="text-secondary" />
          }
        />
        <VeterinarySpecialtiesCard
          title="Alimentação Natural"
          icon={
            <HandPlatterIcon
              size={80}
              strokeWidth={0.5}
              className="text-secondary"
            />
          }
        />
        <VeterinarySpecialtiesCard
          title="Medicina de Aves"
          icon={
            <BirdIcon size={80} strokeWidth={0.5} className="text-secondary" />
          }
        />
      </div>
    </div>
  )
}
