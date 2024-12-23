import { AboutAn } from './sessions/about-an'
import { CourseModules } from './sessions/course-modules'

export default function ANSchool() {
  return (
    <div className="flex w-full flex-col justify-center gap-8 bg-brand-green-300">
      {/* <HeroAn /> */}
      {/* <DogHappy /> */}
      {/* <Testimonial /> */}
      <CourseModules />
      {/* <TheAn /> */}
      {/* <TheAnSubject /> */}
      {/* <AboutPatryne /> */}
      <AboutAn />
    </div>
  )
}
