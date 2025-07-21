import FadeIn from './FadeIn';

export default function Header() {
  return (
    <FadeIn position="down" className="w-full max-w-[1440px] flex items-center justify-between py-4 px-4 lg:px-20">
      <svg className='text-zinc-950 dark:text-zinc-50' width="32" height="32" viewBox="0 0 508 505" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M474.743 33.6004C446.699 5.55568 407.378 0.929749 359.674 0.929749H147.459C100.622 0.929749 61.3012 5.55568 33.2565 33.6004C5.50093 61.6451 0.875 100.387 0.875 147.514V357.704C0.875 405.409 5.21181 444.152 33.2565 472.196C61.3012 500.241 100.622 504.867 148.326 504.867H359.674C407.378 504.867 446.699 500.241 474.743 472.196C502.788 444.152 507.125 405.409 507.125 357.704V148.092C507.125 100.387 502.788 61.3559 474.743 33.6004ZM459.998 140.575V365.222C459.998 393.555 456.24 421.6 440.338 437.791C424.147 453.982 395.524 457.74 367.48 457.74H140.809C112.476 457.74 83.8526 453.692 67.6618 437.791C51.7602 421.6 48.2908 393.555 48.2908 365.222V141.153C48.2908 112.53 51.7602 84.1965 67.6618 68.0057C83.8526 51.815 112.765 48.0564 141.388 48.0564H367.48C395.524 48.0564 424.147 51.815 440.338 68.0057C456.24 84.1965 459.998 112.241 459.998 140.575Z" fill="currentColor" />
      </svg>

      <a href='mailto:titls@niklaspeterson.com' className='text-base font-medium rounded-lg px-5 py-3 flex gap-1 items-center text-zinc-50 bg-zinc-900 hover:bg-zinc-700 focus:outline-hidden focus:ring-4 focus:ring-zinc-300 dark:text-zinc-950 dark:bg-zinc-50 dark:hover:bg-zinc-200 dark:focus:ring-zinc-100'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
        </svg>
        <span className='mx-1'>Support</span>
      </a>
    </FadeIn>
  );
} 