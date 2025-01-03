'use client'

import Image from 'next/image'
import { Navigation, Pagination, Parallax } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

const modules = [
  {
    title: 'Demonstrações de preparo',
    description: '',
    content: [
      'Além de você ter em mãos receitas e todas as quantidades e proporções que o seu cão precisa, eu te mostro na prática como faço para preparar os alimentos em cada categoria de AN utilizando os métodos mix e 1 po 1!',
    ],
  },
  {
    title: 'Módulo 1',
    description: 'Noções básicas',
    content: [
      'Aula 1: Como funciona o organismo do cão',
      'Aula 2: Macro e micronutrientes',
      'Aula 3: Categorias utilizadas',
      'Aula 4: Alimentos proibidos',
    ],
  },
  {
    title: 'Módulo 2',
    description: 'Tipos de AN',
    content: [
      'Aula 1: AN cozida',
      'Aula 2: AN crua sem ossos',
      'Aula 3: AN crua com ossos',
      'Aula 4: Congelamento profilático',
      'Aula 5: Defina qual usa com seu cão',
    ],
  },
  {
    title: 'Módulo 3',
    description: 'Quanto servir',
    content: [
      'Aula 1: Quanto o cão adulto deve comer',
      'Aula 2: Quando filhotes devem comer',
      'Aula 3: Quantas refeições servir ao dia',
      'Aula 4: Proporções de cada categoria',
    ],
  },
  {
    title: 'Módulo 4',
    description: 'Organização',
    content: ['Aula 1: Quanto comprar', 'Aula 2: Ida ao mercado'],
  },
  {
    title: 'Módulo 5',
    description: 'Preparo das refeições',
    content: [
      'Aula 1: Como preparar',
      'Aula 2: Como descongelar',
      'Aula 3: Como armazenar',
      'Aula 4: Como armazenar',
      'Aula 5: O que fazer durante viagens',
    ],
  },
  {
    title: 'Módulo 6',
    description: 'Transição',
    content: [
      'Aula 1: Transição comum',
      'Aula 2: Transição cães mais sensíveis',
      'Aula 3: O que esperar após a AN',
      'Aula 4: Seletividade alimentar',
    ],
  },
  {
    title: 'Receitas',
    description: '',
    content: [
      'Receitas prontas para cada categoria de alimentação natural',
      'Receitas de petiscos naturais',
    ],
  },
  {
    title: '12 encontros ao vivo',
    description: '',
    content: [
      'Teremos um encontro mensal em grupo',
      'você terá a oportunidade de tirar suas dúvidas diretamente comigo',
    ],
  },
  {
    title: 'Calculadora da AN',
    description: '',
    content: [
      'Você preenche os dados do seu cão e a calculadora automaticamente te informa quantidades, proporções e número de refeições para o seu cão fazer',
    ],
  },
]

export function CourseModules() {
  return (
    <div className="grid w-full grid-cols-1 bg-primary">
      <div className="mx-auto flex w-full flex-col items-center bg-brand-green-300 px-6 pt-8">
        <h2 className="py-8 text-center text-3xl font-medium text-white">
          Conheça tudo o que você terá acesso
        </h2>
        <h3 className="text-center text-xl font-light text-muted">
          (Passe para o lado para visualizar os módulos)
        </h3>
      </div>
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={true}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="flex flex-col"
      >
        <div
          slot="container-start"
          className="absolute inset-x-0 h-[800px]  w-[130%]"
          data-swiper-parallax="-23%"
        />
        {modules?.map((module, i) => (
          <SwiperSlide
            key={String(i)}
            className="relative  flex w-full items-center justify-center lg:min-h-[500px]"
          >
            <div className="hidden lg:flex lg:size-full">
              <Image
                width={1080}
                height={400}
                src="/assets/images/dog-flying.jpg"
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="z-10 flex size-full w-full flex-col items-center justify-center gap-2 bg-brand-green-500 px-8 py-4 text-left text-white">
              <div className="space-y-6">
                <div
                  className="px-6 text-4xl font-semibold lg:px-0"
                  data-swiper-parallax="-300"
                >
                  {module.title}
                </div>
                <div
                  className="px-6 text-xl lg:px-0"
                  data-swiper-parallax="-200"
                >
                  {module.description}
                </div>
                <div
                  className="max-w-96 text-sm leading-5"
                  data-swiper-parallax="-100"
                >
                  <div className="flex flex-col gap-2 px-6 lg:px-0">
                    {module.content.map((content, i) => (
                      <p key={String(i)}>
                        {content}
                        <br />
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex w-full flex-col items-center bg-brand-green-300 px-6 py-8">
        <h3 className="text-xl font-light text-muted">
          Além de materiais complementares, para nada passar em branco.
        </h3>
        <h3 className="text-xl font-light text-muted">
          Garantindo assim o seu desenvolvimento no treinamento!
        </h3>
      </div>
    </div>
  )
}
