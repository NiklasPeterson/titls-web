import FadeIn from './components/FadeIn';
import Header from './components/Header';
import Footer from './components/Footer';
import DownloadButton from './components/DownloadButton';

export default function Home() {

  return (
    <main className="w-full max-w-[1440px] flex flex-col">

      <Header />

      <FadeIn className='flex w-full justify-between items-center px-4 my-16 flex-col gap-10 md:flex-row lg:gap-40 lg:px-20'>
        <div className='flex flex-col justify-center gap-4 px-4 items-center md:items-start'>
          <h1 className='text-4xl md:text-[64px] font-bold leading-tight text-zinc-950 dark:text-zinc-50 max-w-4xl text-center md:text-start'>Titls, organize your <br /> home screens</h1>
          <p className='text-xl md:text-2xl text-center md:text-start'>Titls is a small iOS app that lets you create titles and then <br /> use widgets to organize your iOS home screens.</p>
          <DownloadButton />
        </div>
        <video
          className='rounded-[20px] overflow-hidden h-[480px] sm:h-[560px] dark:border dark:border-zinc-800'
          playsInline
          muted
          autoPlay
          loop
        >
          <source src="../titls.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </FadeIn>
      
      <Footer />

    </main>
  )
}