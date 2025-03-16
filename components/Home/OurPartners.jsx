import Image from 'next/image'
import dwsPartner from '../../public/assets/home/partners/dws.png'
import stripPartner from '../../public/assets/home/partners/stripe.png'
import tropicPartner from '../../public/assets/home/partners/tropic.png'
import ventuzPartner from '../../public/assets/home/partners/ventuz.png'
import grandJournalPartner from '../../public/assets/home/partners/grandJournal.png'
import irexPartner from '../../public/assets/home/partners/irex.png'
import forbesPartner from '../../public/assets/home/partners/forbes.png'
import diePartner from '../../public/assets/home/partners/die.png'

const OurPartners = () => {
  return (
    <section className='flex flex-col justify-center items-center gap-6 py-[50px] sm:py-[100px] px-12 xl:px-36 bg-gradient-to-bl from-white to-[#F5FDFF]'>
      <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
        Our Partners
      </h1>
      <p className='text-paragraph text-[18px] font-[400] leading-[24px] w-[75vw] xl:w-[38vw] 2xl:w-[30vw] text-center'>
        We are proud to collaborate with top healthcare providers, tech
        innovators, and research institutions to create impactful digital
        healthcare solutions.
      </p>
      {/* partners images */}
      <div className='flex flex-col gap-6 py-8'>
        <div className='flex flex-wrap justify-center items-center gap-3 lg:gap-14 2xl:gap-20'>
          <Image
            src={dwsPartner}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={stripPartner}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={tropicPartner}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
        </div>
        <div className='flex flex-wrap justify-center items-center gap-3 lg:gap-14 2xl:gap-20'>
          <Image
            src={ventuzPartner}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={grandJournalPartner}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={irexPartner}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
          <Image
            src={diePartner}
            alt='Partner Logo'
            className='w-[120px] lg:w-[180px] h-full lg:h-[64px]'
          />
        </div>
      </div>

      <p className='text-titleSubtitle text-[18px] font-[500] leading-[24px] w-full sm:w-[60vw] xl:w-[38vw] 2xl:w-[30vw] text-center'>
        Interested in partnering with us? Let’s work together to shape the
        future of healthcare?
      </p>
      <button className='text-[14px] rounded-[28px] bg-primary text-white font-[600] leading-[24px] tracking-[1.4px] shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[40px] py-[16px] uppercase'>
        Become Our Partner
      </button>
    </section>
  )
}
export default OurPartners
