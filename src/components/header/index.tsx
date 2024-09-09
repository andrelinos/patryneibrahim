import Image from 'next/image'

import { Menu } from './components/menu'

export function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-20 w-full justify-center gap-6 bg-secondary">
      <div className="relative flex h-full items-center gap-6 px-6">
        <Image
          src="/assets/images/logo-school.png"
          alt=""
          width={300}
          height={200}
          className="h-16 w-auto"
        />
        <Menu />
      </div>
    </div>
  )
}
