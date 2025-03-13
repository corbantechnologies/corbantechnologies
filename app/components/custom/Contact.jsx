'use client';

function Contact() {
  return (
    <div className="rounded-t-xl p-4">
       <div className="bg-black h-[50vh] grid place-content-center p-5 rounded-xl gap-8">
        <p className="text-3xl md:text-5xl text-center text-white font-semibold">The partner to bring<br /> your vision to life.</p>
        <div className="flex justify-center">
        <button className="bg-primary w-fit text-white rounded-full px-8 py-3">Talk to Us</button>
        </div>
       </div>
    </div>
  )
}

export default Contact