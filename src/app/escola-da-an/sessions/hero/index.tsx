export function HeroAn() {
  return (
    <div className="flex w-full flex-col justify-center gap-8 bg-brand-green-300 pb-16 shadow-lg">
      <span className="bg-orange-500 px-6 py-1 text-center font-poppins text-white">
        ÚLTIMAS VAGAS COM 400 REAIS DE DESCONTO!
      </span>
      <h2 className="py-8 text-center text-3xl font-medium text-white">
        Aprenda a deixar o seu cão feliz e saudável, sem comer ração
      </h2>

      <div className="relative mx-auto min-h-64 w-full max-w-6xl">
        <p className="bg-white bg-opacity-70 py-1 text-center text-secondary">
          📣 Aperte o play e certifique-se de que seu som esteja ligado.
        </p>
        <div className="relative h-0 w-full bg-fuchsia-300 pb-[56.25%]">
          <div className="flex size-full flex-1 items-center justify-center bg-red-300">
            <iframe
              src="https://www.youtube.com/embed/czasFc4a6xI?enablejsapi=1"
              className="absolute inset-0 z-10 size-full"
              title="O que é alimentação natural? Aprenda a deixar o seu cão feliz e saudável com essa modalidade"
              allow="accelerometer; autoplay; encrypted-media; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
        <p className="p-6 text-2xl tracking-tight text-white">
          Independente do porte, raça, idade ou de qualquer problema de saúde
          que o seu cão tenha, na Escola da AN você vai aprender a fazer
          alimentação natural de forma correta, balanceada e responsável.
        </p>
      </div>
    </div>
  )
}
