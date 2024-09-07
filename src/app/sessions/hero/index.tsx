import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="flex w-full flex-col items-center bg-white">
      <div className="relative grid size-full max-w-7xl items-center justify-center lg:grid-cols-2">
        <div className="order-2 size-full lg:order-1">
          <div className="flex size-full flex-col items-center justify-center py-6">
            <span className="rounded-full font-poppins text-3xl font-semibold text-secondary">
              Dra Patryne Ibrahim
            </span>
            <span className="text-2xl font-light text-primary">
              Veterinária Nutróloga
            </span>
          </div>
        </div>
        <div className="order-1 size-80 w-full pt-8 lg:order-2">
          <div className="flex size-full justify-center">
            <Image
              className="size-auto"
              width={300}
              height={300}
              src="/assets/images/patryne-dog-bg.png"
              alt=""
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-6 bg-primary p-8 shadow-lg lg:flex-row">
        <Link
          href="/contatos"
          className="mx-auto inline-flex h-10 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium text-secondary ring-offset-background transition-colors hover:bg-accent hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:mx-0"
        >
          Agendar consulta
        </Link>
        <Link
          href="/lista-de-espera"
          className="mx-auto inline-flex h-10 w-full max-w-xs items-center justify-center whitespace-nowrap rounded-md bg-secondary text-sm font-medium text-white ring-offset-background transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 lg:mx-0"
        >
          Escola da AN para cães
        </Link>
      </div>
    </div>
  )
}
