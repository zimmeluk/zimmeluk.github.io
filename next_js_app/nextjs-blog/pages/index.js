import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

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
        <h1>Luke Zimmerman</h1>
        <h3 className="text-2xl">Software Engineer at Preventice Solutions.</h3>
      </main>

    </div>
  )
}
