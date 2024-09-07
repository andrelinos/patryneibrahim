import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
  return (
    <div className="flex w-full flex-col gap-8 bg-white pt-8">
      <h2 className="text-center text-4xl text-muted-foreground">
        Agendar ou tirar dúvidas
      </h2>
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        <div className="mt-8 size-40 max-w-40 overflow-hidden rounded-full border border-secondary bg-primary p-0.5">
          <Image
            src="/assets/images/patryne-dog.png"
            alt=""
            width={400}
            height={400}
            className="size-full rounded-full object-cover"
          />
        </div>
        <h2 className="my-6 rounded-full font-poppins text-3xl font-semibold text-secondary">
          Dra Patryne Ibrahim Agendamentos
        </h2>

        <h2 className="mb-4 rounded-full  font-poppins text-xl font-semibold text-muted-foreground">
          Converse pelo WhatsApp
        </h2>
        <Button variant="secondary" className="mx-auto w-full max-w-xs">
          Iniciar conversa
        </Button>
      </div>
      <div className="size-full">
        <h2 className="p-6 text-center text-3xl font-semibold text-muted-foreground">
          Agende sua consulta ou tire suas dúvidas
        </h2>
        <div className="mx-auto grid w-full max-w-6xl gap-4 p-6 lg:grid-cols-2">
          <div className="relative flex w-full flex-col overflow-hidden rounded-lg">
            <div className="z-10 bg-white bg-opacity-25">
              <h2 className="p-4 text-xl font-semibold text-secondary">
                Horário de funcionamento
              </h2>
              <p className="bg-white px-4 py-2 text-center text-zinc-900">
                Segunda a sexta: 08:00 - 18:00
              </p>
              <p className="p-4 text-muted-foreground">
                Tires suas dúvidas ou caso precise de assistência adicional,
                estamos ansiosos para lhe ajudar a cuidar do seu pet.
              </p>
            </div>

            <Image
              src="/assets/images/dog-happy.jpg"
              alt=""
              width={500}
              height={700}
              className="absolute inset-0 hidden rounded-lg object-none object-bottom lg:block lg:h-[700px]"
              priority
            />
          </div>
          <form className="flex flex-col gap-4 rounded-lg bg-secondary p-6 text-white">
            <h2 className="text-xl font-semibold">Fale conosco</h2>

            <Input placeholder="Seu nome" />
            <Input placeholder="Seu e-mail" />
            <Input placeholder="Seu telefone" />
            <Input placeholder="Assunto" />
            <Textarea placeholder="Sua mensagem" />
            <Button
              variant="outline"
              className="mx-auto w-full max-w-xs font-medium text-muted-foreground"
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
