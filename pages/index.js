import Image from 'next/image'
import { Inter } from 'next/font/google'
import Activity from '@/components/Activity/Activity'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='max-w-[1440px]'>
   <Activity />
   </div>
  )
}
