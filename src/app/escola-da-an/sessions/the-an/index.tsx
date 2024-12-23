import { CheckCheck } from 'lucide-react'

import { theAnItems } from './components/the-an-items'

export function TheAn() {
  return (
    <div className="flex w-full flex-col justify-center gap-8 bg-white pb-24 shadow-lg">
      <h2 className="px-6 pt-16 text-center  font-poppins text-3xl text-zinc-600">
        Você vai aprender tudo sobre alimentação natural
      </h2>

      <div className="relative mx-auto min-h-64 w-full max-w-6xl px-6">
        <ul className="space-y-4">
          {theAnItems.map((item) => {
            return (
              <li key={item} className="flex items-center gap-2 text-xl">
                <CheckCheck className="text-brand-green-500" /> {item}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
