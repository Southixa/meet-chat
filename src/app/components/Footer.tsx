import React from 'react'

export default function Footer() {
  return (
    <>
      {/* Footer number indicator */}
      <div className="relative mt-40 mb-[-35px] flex justify-center z-10">
        <div className="inline-block relative h-14 w-14 border border-[#71717e]/25 rounded-[1.8125rem] p-4 text-[#71717e] bg-[#fafafa] before:content-[''] before:absolute before:top-0 before:left-0 before:translate-x-[1.65rem] before:translate-y-[-100%] before:w-[0.0625rem] before:h-[5.25rem] before:bg-[#71717e]/25">
          02
        </div>
      </div>

      {/* Footer content with background image */}
      <footer className="relative pt-24 pb-20 text-[#fafafa] bg-[rgba(77,163,176,0.85)] before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[url('/assets/mobile/image-footer.jpg')] before:bg-cover before:bg-no-repeat before:z-[-1] md:before:bg-[url('/assets/tablet/image-footer.jpg')] lg:before:bg-[url('/assets/desktop/image-footer.jpg')]">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black">Experience more together</h2>
            <p className="max-w-xs mx-auto md:mx-0">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </p>
            <div className="flex justify-center md:justify-end">
              <button className="text-[#fafafa] bg-[#845eb0] hover:bg-[#d9b8ff] py-4 px-10 rounded-full cursor-pointer border-none font-bold whitespace-nowrap">Download v1.3</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
} 