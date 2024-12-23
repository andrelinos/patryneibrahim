'use client'

import { InstagramEmbed } from 'react-social-media-embed'

import { ScrollArea } from '@/components/ui/scroll-area'

const postsInstagram = [
  {
    url: 'https://www.instagram.com/p/C-yttTIOxd_/?img_index=1',
  },
  {
    url: 'https://www.instagram.com/p/C-qfT3dyKsI/',
  },
  {
    url: 'https://www.instagram.com/p/C-oEEH9uaIt/',
  },
  {
    url: 'https://www.instagram.com/p/C-8xypFOSEi/',
  },
]

export function InstagramPosts() {
  return (
    <div
      id="instagram"
      className="flex w-full flex-col items-center gap-6 py-24"
    >
      <h2 className="text-3xl font-semibold text-secondary">
        Nossas dicas no Instagram
      </h2>
      <div className="mx-auto flex h-auto w-fit max-w-6xl flex-wrap justify-center gap-4 lg:justify-between">
        {postsInstagram.map((post, i) => {
          return (
            <ScrollArea
              key={String(i)}
              className="mt-6 max-h-[60rem] rounded-lg p-2 shadow-lg sm:w-2/5 lg:w-[30%]"
            >
              <div className="">
                <InstagramEmbed url={post.url} width="100%" />
              </div>
            </ScrollArea>
          )
        })}
      </div>
    </div>
  )
}
