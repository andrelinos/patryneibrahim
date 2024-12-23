import Image from 'next/image'

export function TheAnSubject() {
  return (
    <div className="flex w-full flex-col justify-center gap-8 bg-white pb-16 shadow-lg">
      <h2 className="px-6 pt-16 text-center font-poppins text-3xl text-zinc-600">
        Prioridade na alimentação do seu pet
      </h2>

      <div className="mx-auto grid w-full max-w-6xl p-4 lg:grid-cols-2">
        <div className="">
          <Image
            width={500}
            height={500}
            src="/assets/images/image.png"
            alt=""
          />
        </div>
        <div className="space-y-4 p-6">
          <h2 className="text-center text-2xl font-medium lg:text-left">
            A alimentação do seu cão deve ser tratada como prioridade na vida
            dele!
          </h2>
          <p>
            A ração é um alimento cheio de aditivos químicos e conservantes que
            prejudicam a saúde dos cães e está diretamente ligada aos casos de{' '}
            <strong>diabetes</strong>, <strong>câncer</strong>,{' '}
            <strong>obesidade</strong>, <strong>alergias</strong>,{' '}
            <strong>queda de pelos</strong> e diversas outras doenças que estão
            se tornando cada vez mais comuns e têm reduzido a expectativa de
            vida deles.
          </p>
          <p>
            Existe uma modalidade muito mais eficiente de alimentá-los para
            garantir que tenham saúde e qualidade de vida, que é a alimentação
            natural!
          </p>
          <p>
            Na Escola da AN, você tem a oportunidade de aprender comigo como
            fazer essa alimentação de forma correta e balanceada,{' '}
            <strong>entendendo todas as quantidades</strong>,{' '}
            <strong>proporções e suplementação ideal para o seu cão</strong>!
          </p>
        </div>
      </div>
    </div>
  )
}
