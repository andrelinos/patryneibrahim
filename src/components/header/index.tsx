import { Menu } from './components/menu'

export function Header() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex h-20 w-full justify-center gap-6 bg-secondary p-6">
      <Menu />
    </div>
  )
}
