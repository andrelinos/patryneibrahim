'use client'

import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ScrollArea } from '@/components/ui/scroll-area'

export function Testimonial() {
  return (
    <div className="grid w-full grid-cols-1 gap-8 bg-white pt-8">
      <h2 className="px-6 pt-8 text-center text-3xl font-medium text-secondary">
        Veja o que os meus alunos estão falando sobre o curso
      </h2>
      <div className="flex h-auto w-full max-w-full">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 60,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className=""
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col overflow-hidden rounded-lg bg-brand-green-500 p-0 px-4 py-6"
              style={{
                background: 'rgb(11 66 8 / var(--tw-bg-opacity))',
              }}
            >
              <ScrollArea className="h-44 w-full">
                <p className="text-justify text-sm tracking-tight text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  neque, eum mollitia magni illum ipsam eaque cupiditate quae,
                  et soluta voluptates. Provident mollitia dolorum, rerum in
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  neque, eum mollitia magni illum ipsam eaque cupiditate quae,
                  et soluta voluptates. Provident mollitia dolorum, rerum in
                  eveniet ullam incidunt! Voluptatibus ipsum distinctio
                  quibusdam numquam consequatur.
                </p>
              </ScrollArea>
              <h3 className="py-2 text-zinc-100">José Paulo</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
