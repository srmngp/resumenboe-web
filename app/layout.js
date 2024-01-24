import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Resumen BOE',
  description: 'Created with ❤️ by @srmngp'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='h-screen w-full flex flex-col'>
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
