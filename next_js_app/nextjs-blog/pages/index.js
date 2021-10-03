import Head from 'next/head'
import Card from '../components/card'

export default function Home() {
  return (
    <div className="container">
      <Head>
        {/* The below three meta tags must come first in the head
            Any other head content must come after these tags */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta name="author" content="Luke Zimmerman" />
        <meta name="description" content="Portfolio website for Luke Zimmerman" />

        <title>Luke Zimmerman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="flex flex-col justify-center w-screen h-screen bg-section-gray">
          <h1 className="align-middle">Luke Zimmerman</h1>
          <h3 className="text-2xl align-middle">Software Engineer at Preventice Solutions.</h3>
        </section>
        <section>
          <Card
            link="projects"
            title="Projects"
            description="Check out my current and past projects from courses at St. Olaf College."
          >
          </Card>
          <Card
            link="blog"
            title="Blog"
            description="Find out what's going on in my head and in the tech world."
          >
          </Card>
          <Card
            link="resume"
            title="Resume"
            description="Check out my resume!"
          >
          </Card>
        </section>
      </main>

    </div>
  )
}
