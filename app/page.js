import Image from 'next/image';
import FadeIn from './components/FadeIn';
import DownloadButton from './components/DownloadButton';

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <main className="w-full h-full justify-center flex flex-col min-h-screen px-4 lg:px-20">

      <FadeIn className='flex w-full justify-between items-center flex-col gap-10 md:flex-row lg:gap-40 my-16'>
        <header className='flex flex-col justify-center px-4 gap-4 md:gap-6 max-w-2xl items-center md:items-start'>
          <h1 className='text-4xl md:text-[64px] font-bold leading-tight text-zinc-950 dark:text-white text-center md:text-start'>Titls, organize your home screens</h1>
          <div>
            <p className='text-xl md:text-2xl text-center md:text-start'>Titls is a small iOS app that lets you create titles and then use widgets to organize your iOS home screens.</p>
            <div className='items-center mt-2 hidden md:flex'>Made by <a href="https://x.com/niklas_peterson" className='group plainButton h-8 w-fit pl-1 pr-3 ml-1 gap-2 rounded-full' target='_blank' rel="noopener noreferrer">
              <Image src="/niklaspeterson.jpg" width={24} height={24} alt='Profile picture of Niklas Peterson' className='rounded-full' /> Niklas Peterson</a>
            </div>
          </div>

          <div className='flex flex-1 flex-col gap-4'>

            <div className='flex flex-wrap gap-4 items-center justify-center md:justify-start'>
              <DownloadButton />
              <a href='mailto:help@titls.app' className='text-base font-medium rounded-lg px-5 py-3 flex gap-1 items-center text-zinc-950 bg-zinc-100 border border-zinc-200 hover:bg-zinc-200 dark:text-white dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                </svg>
                <span className='mx-1'>Support</span>
              </a>
            </div>

            <div className="hidden md:flex gap-1">
              {[
                ['1', 'https://x.com/niklas_peterson', 'M17.7512 2.96094H20.818L14.1179 10.6187L22 21.0391H15.8284L10.9946 14.7192L5.46359 21.0391H2.39494L9.5613 12.8483L2 2.96094H8.32828L12.6976 8.7376L17.7512 2.96094ZM16.6748 19.2035H18.3742L7.4049 4.70015H5.58133L16.6748 19.2035Z'],
                ['2', 'https://www.threads.net/@niklas.peterson', 'M16.5178 11.1523C16.6094 11.1898 16.6927 11.2314 16.7802 11.2689C17.9966 11.8563 18.8881 12.7353 19.3547 13.8267C20.0087 15.3472 20.0712 17.8175 18.0924 19.7921C16.5844 21.3001 14.7473 21.9792 12.152 22H12.1395C9.21513 21.9792 6.96976 20.996 5.45758 19.0756C4.11203 17.3676 3.4205 14.989 3.39551 12.0104V11.9979V11.9896C3.41634 9.01104 4.10786 6.63237 5.45341 4.92439C6.9656 3.00396 9.21513 2.02083 12.1395 2H12.152C15.0806 2.02083 17.3551 2.99979 18.9131 4.91189C19.6796 5.85753 20.2462 6.99479 20.6044 8.31535L18.9214 8.76526C18.6257 7.69048 18.1799 6.77401 17.5801 6.04082C16.3636 4.54947 14.539 3.78296 12.1437 3.7663C9.76918 3.78713 7.97372 4.54947 6.80313 6.03249C5.71169 7.4197 5.14514 9.42762 5.12431 11.9979C5.14514 14.5682 5.71169 16.5761 6.80313 17.9675C7.96956 19.4505 9.76918 20.2129 12.1437 20.2337C14.2849 20.217 15.7013 19.7088 16.8802 18.5299C18.2258 17.1885 18.2008 15.5388 17.7717 14.5349C17.5176 13.9433 17.0593 13.4518 16.4428 13.081C16.2887 14.2016 15.9512 15.0931 15.4138 15.7805C14.7015 16.6886 13.6892 17.1802 12.3853 17.251C11.4022 17.3051 10.4565 17.0677 9.72336 16.5845C8.85687 16.0096 8.34864 15.1348 8.29449 14.1141C8.19034 12.1021 9.78168 10.6565 12.2603 10.5149C13.1393 10.4649 13.9641 10.5024 14.7265 10.6315C14.6265 10.015 14.4224 9.52343 14.1183 9.16517C13.7017 8.67778 13.0518 8.42783 12.1937 8.42366H12.1645C11.473 8.42366 10.5399 8.61529 9.94414 9.51927L8.51111 8.53614C9.31094 7.32389 10.6065 6.65736 12.1687 6.65736H12.202C14.8098 6.67403 16.3636 8.30285 16.5219 11.1439L16.5136 11.1523H16.5178ZM10.0191 14.0183C10.0733 15.0639 11.2022 15.5513 12.2937 15.4889C13.3601 15.4305 14.5682 15.014 14.7723 12.4395C14.2224 12.3187 13.6142 12.2562 12.9643 12.2562C12.7644 12.2562 12.5644 12.2604 12.3645 12.2729C10.5773 12.3728 9.98164 13.2393 10.0233 14.0142L10.0191 14.0183Z'],
              ].map(([key, url, path]) => (
                <a className='plainButton rounded-lg h-8 w-8' href={url} target='_blank' rel='noopener' key={key}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d={path} /></svg>
                </a>
              ))}

            </div>
          </div>
        </header>

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

      <FadeIn className='flex md:hidden mb-8'>
        <footer className='flex flex-col w-full items-center gap-2'>
          <div className="flex gap-1">
            {[
              ['1', 'https://x.com/niklas_peterson', 'M17.7512 2.96094H20.818L14.1179 10.6187L22 21.0391H15.8284L10.9946 14.7192L5.46359 21.0391H2.39494L9.5613 12.8483L2 2.96094H8.32828L12.6976 8.7376L17.7512 2.96094ZM16.6748 19.2035H18.3742L7.4049 4.70015H5.58133L16.6748 19.2035Z'],
              ['2', 'https://www.threads.net/@niklas.peterson', 'M16.5178 11.1523C16.6094 11.1898 16.6927 11.2314 16.7802 11.2689C17.9966 11.8563 18.8881 12.7353 19.3547 13.8267C20.0087 15.3472 20.0712 17.8175 18.0924 19.7921C16.5844 21.3001 14.7473 21.9792 12.152 22H12.1395C9.21513 21.9792 6.96976 20.996 5.45758 19.0756C4.11203 17.3676 3.4205 14.989 3.39551 12.0104V11.9979V11.9896C3.41634 9.01104 4.10786 6.63237 5.45341 4.92439C6.9656 3.00396 9.21513 2.02083 12.1395 2H12.152C15.0806 2.02083 17.3551 2.99979 18.9131 4.91189C19.6796 5.85753 20.2462 6.99479 20.6044 8.31535L18.9214 8.76526C18.6257 7.69048 18.1799 6.77401 17.5801 6.04082C16.3636 4.54947 14.539 3.78296 12.1437 3.7663C9.76918 3.78713 7.97372 4.54947 6.80313 6.03249C5.71169 7.4197 5.14514 9.42762 5.12431 11.9979C5.14514 14.5682 5.71169 16.5761 6.80313 17.9675C7.96956 19.4505 9.76918 20.2129 12.1437 20.2337C14.2849 20.217 15.7013 19.7088 16.8802 18.5299C18.2258 17.1885 18.2008 15.5388 17.7717 14.5349C17.5176 13.9433 17.0593 13.4518 16.4428 13.081C16.2887 14.2016 15.9512 15.0931 15.4138 15.7805C14.7015 16.6886 13.6892 17.1802 12.3853 17.251C11.4022 17.3051 10.4565 17.0677 9.72336 16.5845C8.85687 16.0096 8.34864 15.1348 8.29449 14.1141C8.19034 12.1021 9.78168 10.6565 12.2603 10.5149C13.1393 10.4649 13.9641 10.5024 14.7265 10.6315C14.6265 10.015 14.4224 9.52343 14.1183 9.16517C13.7017 8.67778 13.0518 8.42783 12.1937 8.42366H12.1645C11.473 8.42366 10.5399 8.61529 9.94414 9.51927L8.51111 8.53614C9.31094 7.32389 10.6065 6.65736 12.1687 6.65736H12.202C14.8098 6.67403 16.3636 8.30285 16.5219 11.1439L16.5136 11.1523H16.5178ZM10.0191 14.0183C10.0733 15.0639 11.2022 15.5513 12.2937 15.4889C13.3601 15.4305 14.5682 15.014 14.7723 12.4395C14.2224 12.3187 13.6142 12.2562 12.9643 12.2562C12.7644 12.2562 12.5644 12.2604 12.3645 12.2729C10.5773 12.3728 9.98164 13.2393 10.0233 14.0142L10.0191 14.0183Z'],
            ].map(([key, url, path]) => (
              <a className='plainButton rounded-lg h-8 w-8' href={url} target='_blank' rel='noopener' key={key}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d={path} /></svg>
              </a>
            ))}

          </div>
          <small className='flex items-center gap-1 text-sm text-center'>© {currentYear} <a href="https://niklaspeterson.com" target='_blank' className='flex items-center font-semibold text-zinc-950 dark:text-white'>Niklas Peterson</a></small>
        </footer>
      </FadeIn>

    </main>
  )
}