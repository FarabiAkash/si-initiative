'use client'
import { useState } from 'react'
import Image from 'next/image'
import p1 from '../../public/assets/home/partners/p1.png'
import p2 from '../../public/assets/home/partners/p2.png'
import p3 from '../../public/assets/home/partners/p3.png'
import p4 from '../../public/assets/home/partners/p4.png'
import p5 from '../../public/assets/home/partners/p5.png'
import p6 from '../../public/assets/home/partners/p6.png'
import p7 from '../../public/assets/home/partners/p7.png'
import ContactModal from '../shared/ContactModal'

const OurPartners = () => {
    const [showContact, setShowContact] = useState(false)
  return (
    <div className=' bg-gradient-to-bl from-white to-[#F5FDFF] custom-container'>
      <section className=' flex flex-col justify-center items-center gap-6  2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
          Our Partners
        </h1>
        <p className='text-paragraph text-[18px] font-[400] leading-[24px] w-[75vw] xl:w-[38vw] 2xl:w-[40vw] text-center'>
          We are proud to collaborate with top providers, tech
          innovators, and research institutions to create impactful digital solutions
        </p>
        {/* partners images */}
        <div className='flex flex-wrap justify-center items-center gap-10  py-8'>
          <Image
            src={p2}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={p7}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={p6}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={p5}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={p4}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={p3}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={p1}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
        </div>

        <p className='text-titleSubtitle text-[18px] font-[500] leading-[24px] w-full sm:w-[60vw] xl:w-[38vw] 2xl:w-[30vw] text-center'>
          Partner with us to innovate and accelerate your tech vision
        </p>
        <button 
          onClick={() => setShowContact(true)}
          className='text-[14px] rounded-[28px] bg-primary text-white font-[600] leading-[24px] tracking-[1.4px] shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[40px] py-[16px] uppercase'
        >
          Become Our Partner
        </button>
      </section>
      <ContactModal
        isOpen={showContact}
        onClose={() => setShowContact(false)}
        title={'Become Our Partner'}
        subtitle={'Partner with us to innovate and accelerate your tech vision.'}
        source={'Become Our Partner'}
        templateSlug={'become-our-partner'}
      />
    </div>
  )
}
export default OurPartners
