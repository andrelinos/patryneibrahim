import { DogHappy } from './sessions/dog-happy'
import { HeroAn } from './sessions/hero'
import { Testimonial } from './sessions/testimonial'

export default function ANSchool() {
  return (
    <div className="flex w-full flex-col justify-center gap-8 bg-brand-green-300">
      <HeroAn />
      <DogHappy />
      <Testimonial />
    </div>
  )
}
