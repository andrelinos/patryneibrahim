'use client'

import Image from 'next/image'
import Link from 'next/link'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

import { ListItem } from './components/list-item'

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Início
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Conheça-me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex size-full select-none flex-col justify-end rounded-md bg-secondary from-muted/50 to-muted py-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <span>
                      <Image
                        src="/assets/images/patryne-bg.png"
                        alt=""
                        width={100}
                        height={300}
                        className="w-full "
                      />
                    </span>
                    <div className="bg-white p-4">
                      <div className="mb-2 mt-4 text-2xl font-medium text-secondary">
                        Dra. Patryne Ibrahim
                      </div>
                      <p className="text-sm leading-tight text-primary">
                        Veterinária Nutróloga
                      </p>
                    </div>
                  </a>
                </NavigationMenuLink>
              </li>
              <div className="flex w-full flex-col gap-4 rounded-lg border border-gray-100 px-2 pt-6 ">
                <p className="text-sm leading-tight text-muted-foreground">
                  🐶 Te ensino a deixar o seu cão feliz e saudável sem comer
                  ração
                </p>
                <p className="text-sm leading-tight text-muted-foreground">
                  🥩 Criadora da Escola da AN
                </p>
              </div>
              <ListItem
                href="/lista-de-espera"
                title="Escola da alimentação natural"
              >
                Lista de espera - Escola da AN para cães
              </ListItem>

              <ListItem
                href="https://www.youtube.com/@meucaosemracao/videos"
                target="_blank"
                title="Conheça a Escola de Alimentação Natural para cães"
              >
                Alimentação Natural que Tornará seu Cão Mais Saudável e Feliz!
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contatos" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contatos
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contatos" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                'bg-yellow-500 text-zinc-700 hover:bg-yellow-500 hover:brightness-95',
              )}
            >
              AGENDAR
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
