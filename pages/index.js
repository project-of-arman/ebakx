import Image from 'next/image'
import { Inter } from 'next/font/google'
import Activity from '@/components/Activity/Activity'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='max-w-[1440px] mx-auto'>
    <Head>
        <title>Activity</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
   <Activity />
   </div>
  )
}
