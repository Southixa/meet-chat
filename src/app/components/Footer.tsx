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
      <footer 
        className="relative pt-24 pb-20 text-[#fafafa]"
        style={{
          backgroundImage: 'linear-gradient(rgba(77, 163, 176, 0.85), rgba(77, 163, 176, 0.85)), url(/assets/desktop/image-footer.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-3 gap-10 items-center text-center md:text-left">
            <h2 className="text-3xl md:text-3xl font-black">Experience more together</h2>
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