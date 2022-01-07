import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Encoded Studio</title>
        <meta name="description" content="We decode complexity into creative solutions" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#333" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#333" />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
        />
      </Head>

      <Header />

      <main className={styles.main}>


        <div className='w-full relative'>
          <img src={'/images/encoded-hero.png'} className='w-full' />

          <div className='absolute p-8 bottom-0 right-4 md:right-16 bg-black w-1/3'>
            <h1 className='text-white' style={{ fontSize: '4vw' }}>
              Encoded Studio
            </h1>
          </div>

          <div className='absolute p-8 -bottom-24 left-4 md:left-16 bg-gray-200 w-1/2'>
            <h2 className='text-black' style={{ fontSize: '4vw' }}>
              We decode complexity into creative solutions
            </h2>
          </div>

        </div>

        <div className='w-full relative mt-36'>
          <img src={'/images/planes.png'} className='w-full' />
          <div className='absolute absolute p-8 bottom-8 left-1/2 right-4 '>
            <h3 className='text-white text-2xl md:text-6xl tracking-wider text-right	'>
              We design new visual
              formats
            </h3>
          </div>
        </div>

        <div className='w-full relative '>
          <img src={'/images/immersivity.jpg'} className='w-full' />
          <div className='absolute absolute p-8 bottom-8 left-1/2 right-4 '>
            <h3 className='text-white text-2xl md:text-6xl tracking-wider text-right	'>
              We build immersive
              experiences
            </h3>
          </div>
        </div>

        <div className='w-full relative '>
          <img src={'/images/cluster.jpg'} className='w-full' />
          <div className='absolute absolute p-8 bottom-8 left-1/2 right-4 '>
            <h3 className='text-white text-2xl md:text-6xl tracking-wider text-right	'>
              We transform spaces
              with technology
            </h3>
          </div>
        </div>


        <div className='w-full relative bg-neutral-800 mt-24 text-white p-8'>
          <div className='flex text-3xl md:text-5xl justify-center py-8'>Say Hello</div>
          <div className='flex justify-center flex-col md:flex-row  py-8'>
            <div className='flex p-2 justify-center'>
              <a className='text-2xl md:text-3xl' href='mailto:encoded.studio@gmail.com' >email</a>
            </div>
            <div className='flex p-2 justify-center'></div>
            <div className='flex p-2 justify-center'>
              <a className='text-2xl md:text-3xl' href='https://www.instagram.com/encoded.studio/' target='_blank' rel="noreferrer">instagram</a>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <img className="block h-24 w-auto" src={'/images/logo.png'} alt="Encoded Logo" />
      </footer>
    </div>
  )
}
