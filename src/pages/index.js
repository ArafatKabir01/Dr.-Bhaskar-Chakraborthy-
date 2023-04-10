import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Banner } from '@/components/Banner/Banner'
import { Chamber } from '@/components/Chamber/Chamber'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main >
     <Banner/>
     <Chamber/>
    </main>
  )
}
