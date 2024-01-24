import Link from 'next/link'

export default function Home () {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>

                <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                  Welcome to Resumen BOE
                </h1>

                <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 m-auto'>
                  Resumen BOE is a tool to help you to read the BOE (Official State Gazette) in a more efficient way.
                </p>

              </div>

              <Link
                className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                href='/asdf'
              >
                Try it now
              </Link>

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
