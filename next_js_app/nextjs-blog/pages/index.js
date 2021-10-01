import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        // -- The below three meta tags must come first in the head
        // Any other head content must come after these tags --
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="author" content="Luke Zimmerman" />
        <meta name="description" content="Portfolio website for Luke Zimmerman" />

        <title>Luke Zimmerman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="flex flex-col justify-center w-screen h-screen bg-gray-700">
          <h1 className="align-middle">Luke Zimmerman</h1>
          <h3 className="text-2xl align-middle">Software Engineer at Preventice Solutions.</h3>
        </section>
      </main>

    </div>
  )
}
