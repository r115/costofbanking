import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cost of Banking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'w-full h-full flex flex-row'}>
          <div className={'w-1/5 min-h-screen bg-black px-3'}>
              <div className={'text-yellow-200 pt-4 font-mono text-lg'}>
                  //cost.of.banking
              </div>
              <div className={'text-yellow-200 pt-2 font-mono text-xs'}>
                  Banking tariffs comparison engine.
              </div>
          </div>
          <div className={'w-4/5'}>
              <div>Pick a transaction to see alternatives</div>
          </div>

      </main>

      <footer>

      </footer>
    </div>
  )
}
