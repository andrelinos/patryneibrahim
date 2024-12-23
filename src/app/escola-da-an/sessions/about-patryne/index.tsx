import Image from 'next/image'

export function AboutPatryne() {
  return (
    <div className="flex w-full flex-col justify-center gap-8 bg-white pb-16 shadow-lg">
      <h2 className="px-6 pt-16 text-center font-poppins text-3xl text-zinc-600">
        Quem será a sua mentora?
      </h2>

      <div className="mx-auto grid w-full max-w-6xl p-4 lg:grid-cols-2 lg:gap-0 lg:p-6">
        <div className="w-full flex-1">
          <Image
            width={600}
            height={600}
            className="w-full rounded-t-xl object-cover lg:rounded-none lg:rounded-l-xl"
            src="/assets/images/patryne-card.webp"
            alt=""
          />
        </div>
        <div className="space-y-6 rounded-b-xl bg-brand-green-300 p-6 text-lg tracking-tight text-white lg:rounded-none lg:rounded-r-xl">
          <p>
            Meu nome é Patryne Ibrahim,{' '}
            <strong>
              sou médica veterinária com especialização em nutrologia animal
            </strong>
            .
          </p>
          <p>
            Já ajudei <strong>mais de 1000 cães</strong> espalhados pelo Brasil
            e pelo mundo a ter mais saúde e qualidade de vida se alimentando da
            forma correta, isto é, livre de qualquer tipo de ração.
          </p>
          <p>
            Se você deseja que o seu cão viva com mais saúde e por mais tempo, a
            Escola da AN te trará as ferramentas certas para que ele viva com
            muito mais qualidade! Garanta a sua vaga agora mesmo clicando no
            botão. Te espero lá!
          </p>
        </div>
      </div>
    </div>
  )
}
