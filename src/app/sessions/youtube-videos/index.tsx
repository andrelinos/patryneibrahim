'use client'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const videos = [
  {
    url: 'https://www.youtube.com/embed/eXlv-ypZqPA?enablejsapi=1',
  },
  {
    url: 'https://www.youtube.com/embed/4A0BFQVXKK0?enablejsapi=1',
  },
  {
    url: 'https://www.youtube.com/embed/UYEoOrMl_aM?enablejsapi=1',
  },
  {
    url: 'https://www.youtube.com/embed/3DTHjR9r4k0?enablejsapi=1',
  },
  {
    url: 'https://www.youtube.com/embed/BDegabbl5c0?enablejsapi=1',
  },
  {
    url: 'https://www.youtube.com/embed/HyttXNR9iiw?enablejsapi=1',
  },
  {
    url: 'https://www.youtube.com/embed/KOLHRl0QOvs?enablejsapi=1',
  },
  {
    url: 'https://www.youtube.com/embed/NNry_KfnZ5I?enablejsapi=1',
  },
  {
    url: 'https://www.youtube.com/embed/e7jgBdkrpLk?enablejsapi=1',
  },
]

export function YouTubeVideos() {
  const progressCircle = useRef<any>(null)
  const progressContent = useRef<any>(null)
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`)
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
  }

  const onSlideChange = () => {
    const iframes = document.querySelectorAll('iframe')
    iframes.forEach((iframe) => {
      iframe.contentWindow?.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*',
      )
    })
  }

  return (
    <div
      id="youtube-videos"
      className="relative flex w-full flex-col items-center gap-6 pt-24"
    >
      <h2 className="text-3xl font-semibold text-secondary">Para você</h2>
      <div className="h-auto w-full bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          onSlideChange={onSlideChange}
          className="relative min-h-64 max-w-6xl"
        >
          {videos.map((video, index) => {
            return (
              <SwiperSlide key={index} className="relative h-0 pb-[56.25%]">
                <div className="flex size-full flex-1 items-center justify-center">
                  <iframe
                    src={video.url}
                    className="absolute inset-0 z-10 size-full"
                    title="O que é alimentação natural? Aprenda a deixar o seu cão feliz e saudável com essa modalidade"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  />
                </div>
              </SwiperSlide>
            )
          })}

          <div
            className="autoplay-progress absolute bottom-0 right-0"
            slot="container-end"
          >
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20" className="stroke-zinc-400" />
            </svg>
            <span ref={progressContent} className="text-zinc-400" />
          </div>
        </Swiper>
      </div>
    </div>
  )
}
