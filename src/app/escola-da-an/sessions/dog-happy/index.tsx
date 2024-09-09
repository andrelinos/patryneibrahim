import Image from 'next/image'

export function DogHappy() {
  return (
    <div className="flex w-full flex-col justify-center gap-8 bg-brand-green-300 pb-16 pt-8 shadow-lg">
      <h2 className="py-8 text-center text-3xl font-medium text-white">
        Se você quer que o seu cão
      </h2>
      <div className="flex h-auto w-full">
        <div className="w-1/3 p-4">
          <div className="group h-80 overflow-hidden rounded-lg bg-white shadow-lg">
            <span className="flex max-h-44 w-full overflow-hidden">
              <Image
                src="/assets/images/dog-run-1.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
                priority
              />
            </span>
            <p className="p-4 text-lg tracking-tighter ">
              Sinta felicidade durante as refeições{' '}
              <strong>
                e você nunca mais tenha que ficar implorando para ele comer
              </strong>
              .
            </p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="group h-80 overflow-hidden rounded-lg bg-white shadow-lg">
            <span className="flex max-h-44 w-full overflow-hidden">
              <Image
                src="/assets/images/dog-smile-1.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
                priority
              />
            </span>
            <p className="p-4 text-lg tracking-tighter ">
              Viva por mais tempo ao seu lado com{' '}
              <strong>qualidade de vida</strong> e tenha energia para brincar.
            </p>
          </div>
        </div>
        <div className="w-1/3 p-4">
          <div className="group h-80 overflow-hidden rounded-lg bg-white shadow-lg">
            <span className="flex max-h-44 w-full overflow-hidden">
              <Image
                src="/assets/images/dog-smile-2.jpg"
                alt=""
                width={300}
                height={300}
                className="w-full object-cover transition-all duration-500 ease-in-out group-hover:scale-125"
                priority
              />
            </span>
            <p className="p-4 text-lg tracking-tighter ">
              Não precise ficar refém de consultas veterinárias frequentes por
              causa de problemas de saúde.
            </p>
          </div>
        </div>
      </div>
      <h2 className="py-8 text-center font-poppins text-3xl font-medium text-white">
        Então a Escola da AN é o lugar perfeito para você!
      </h2>
    </div>
  )
}
