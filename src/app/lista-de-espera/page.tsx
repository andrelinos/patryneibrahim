import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ListWaiting() {
  return (
    <div className="relative flex bg-brand-green-500 p-6 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4">
        <div className="flex flex-col gap-6">
          <span className="">
            <Image
              src="/assets/images/logo-school.png"
              alt=""
              width={500}
              height={700}
              className="max-h-24 w-auto"
              priority
            />
          </span>
          <h2 className="mt-4 font-poppins text-4xl font-semibold leading-tight tracking-tight">
            Garanta com exclusividade sua vaga na próxima turma!
          </h2>

          <p className="mt-2 text-lg text-muted">
            Neste curso online, eu te ensino, do zero absoluto, como substituir
            a ração pela alimentação natural de forma correta e segura.
            Independente do porte, raça, idade, castração ou condição de saúde
            do seu cão, você aprenderá a proporcionar uma dieta saudável e
            equilibrada para seu cão.
          </p>

          <h2 className="mt-3 font-poppins text-2xl font-semibold leading-tight tracking-tight">
            Preencha o Formulário e Garanta Seu Lugar na Nossa Lista de Espera
            Exclusiva!
          </h2>

          <form className="flex flex-col justify-center gap-4 rounded-lg border border-white border-opacity-70 px-6 py-10">
            <Input className="py-6" placeholder="Seu primeiro nome" />
            <Input className="py-6" placeholder="Seu melhor e-mail" />
            <Input className="py-6" placeholder="Seu telefone com DDD" />
            <Button className="mx-auto h-12 w-full max-w-xs bg-yellow-500 font-bold text-zinc-700 transition-all duration-300 hover:bg-yellow-500 hover:brightness-95">
              ENTRAR NA LISTA DE ESPERA
            </Button>
          </form>
        </div>
        <div className="sticky top-0">
          <span className="flex w-full justify-center">
            <Image
              src="/assets/images/patryne-bg.png"
              alt=""
              width={500}
              height={700}
              className="max-h-[600px] w-auto"
              priority
            />
          </span>
          <div className="space-y-4 rounded-lg bg-white p-4 shadow-lg">
            <h2 className="font-poppins text-xl font-semibold leading-tight tracking-tight text-secondary">
              Domine a Alimentação Natural para seu Pet com Acompanhamento
              Especializado!
            </h2>
            <p className="text-xl text-muted-foreground">
              No curso, você aprende tudo sobre quantidades, proporções, preparo
              dos alimentos e suplementações ideais para as necessidades do seu
              cão. Com o meu acompanhamento por 1 ano, você fará a transição
              para a alimentação natural sem medo de errar.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
