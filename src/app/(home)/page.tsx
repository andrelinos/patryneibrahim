import { Hero } from '../sessions/hero'
import { InstagramPosts } from '../sessions/instagram-post'
import { VeterinarySpecialties } from '../sessions/veterinary-specialties'
import { YouTubeVideos } from '../sessions/youtube-videos'

export default function Home() {
  return (
    <div id="home" className="grid w-full grid-cols-1 gap-24 bg-white">
      <Hero />
      <VeterinarySpecialties />
      <YouTubeVideos />
      <InstagramPosts />
    </div>
  )
}
