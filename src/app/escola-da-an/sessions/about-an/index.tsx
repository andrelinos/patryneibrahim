export function AboutAn() {
  return (
    <div className="flex bg-white">
      <div className="mx-auto w-full max-w-6xl p-4">
        <h2 className="py-16 text-center text-3xl font-medium text-zinc-700">
          A escola da AN
        </h2>
        <div className="flex w-full max-w-6xl flex-wrap justify-center gap-6">
          <div className="flex h-96 w-full flex-col rounded-3xl bg-secondary px-4  py-20 lg:w-[30%]">
            <h2 className="pb-6 text-center text-3xl font-medium tracking-tight text-white">
              Do zero ao avançado
            </h2>
            <p className="text-white">
              Mesmo que você ainda alimente seu cão com ração e não saiba nem
              por onde começar a fazer alimentação natural, vai aprender comigo
              a montar toda a dieta dele e realizar uma transição segura!
            </p>
          </div>

          <div className="flex h-96 w-full flex-col rounded-3xl bg-secondary px-4  py-20 lg:w-[30%]">
            <h2 className="pb-6 text-center text-3xl font-medium tracking-tight text-white">
              Para QUALQUER cão
            </h2>
            <p className="text-white">
              Independente de qual seja a raça, o porte, a idade ou a condição
              de saúde atual do seu cão, a Escola da AN será fundamental para
              transformar a vida dele.
            </p>
          </div>

          <div className="flex h-96 w-full flex-col rounded-3xl bg-secondary px-4  py-20 lg:w-[30%]">
            <h2 className="pb-6 text-center text-3xl font-medium tracking-tight text-white">
              Personalizada
            </h2>
            <p className="text-white">
              Além de ter todo o meu suporte por 1 ano, você vai aprender a
              fazer uma alimentação que atenda as necessidades que o seu cão
              possui de acordo com as características dele, afinal de contas
              cada cão tem o seu organismo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
