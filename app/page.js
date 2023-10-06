import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-500 to-blue-500 justify-center items-center">
      <Head>
        <title>Nicholas Kwok&apos;s Personal Website</title>
        <meta name="description" content="Nicholas Kwok's Personal Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center flex-1 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Nicholas Kwok&apos;s Personal Website
        </h1>

        <p className="mt-3 text-2xl">
          Bioinformatician | PhD Candidate at HKUMed  The University of Hong Kong
        </p>

        <div className="flex items-center justify-center mt-6">
          <a href="/contact" className="m-3 p-2 border-2 border-grey-100 rounded text-2xl text-grey-300 hover:bg-white-500 hover:text-white transition-all">
            Don&apos;t be shy, push me!
          </a>
        </div>
      </main>
    </div>
  );
}