import Image from 'next/image'
import HeroImg from '../../public/assets/home/whyHero.png'
import HeroBg from '../../public/assets/home/hero-background2.png'

const features = [
  {
    id: 1,
    title: 'Decision Support Systems',
    description:
      'We leverage AI, IoT, and cloud-based solutions to revolutionize healthcare services.'
  },
  {
    id: 2,
    title: 'Proven Expertise',
    description:
      'Our team of industry experts, researchers, and engineers ensures top-tier solutions.'
  },
  {
    id: 3,
    title: 'User-Centric Approach',
    description:
      'Designed with patients and healthcare providers in mind, ensuring seamless experiences.'
  },
  {
    id: 4,
    title: 'Scalable & Secure Solutions',
    description:
      'HIPAA-compliant, highly scalable, and secure platforms for diverse healthcare needs.'
  },
  {
    id: 5,
    title: 'Global Impact & Accessibility',
    description:
      'Bridging healthcare gaps worldwide with accessible, innovative, and inclusive solutions.'
  },
  {
    id: 6,
    title: 'Research-Driven Innovation',
    description:
      'Backed by continuous R&D to deliver groundbreaking digital healthcare advancements.'
  }
]

const WhyChooseUs = () => {
  return (
    <div className='custom-container flex items-end justify-between gap-4'>
      {/* Left Section */}

      <div className='flex flex-col justify-start items-start gap-4'>
        <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
          Why Choose Us
        </h1>
        <p className='text-paragraph text-[18px] font-[400] leading-[24px]'>
          Empowering Healthcare with Innovation, Expertise, and Trust.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 pb-0 sm:pb-6'>
          {features.map((feature, index) => (
            <div
              className={`flex flex-col justify-center items-start gap-4 pt-4 pr-[24px] w-full 2xl:w-[400px] 2xl-custom:w-full pb-[10px] sm:pb-[32px] sm:border-offWhite border-white 
                 ${index % 2 === 0 ? 'border-r-[1px]' : 'pl-0 sm:pl-4'}
                 ${index < 4 ? 'border-b-[1px]' : ''} `}
              key={index}
            >
              <div className='flex justify-start items-center gap-4'>
                <p className='w-[48px] h-[48px] p-[16px] flex items-center justify-center bg-[#F1F3F4] text-primary rounded-[50%]'>
                  {feature.id}
                </p>
                <p className='text-titleSubtitle text-[18px] font-[500] leading-[20px]'>
                  {feature.title}
                </p>
              </div>
              <p className='text-[#677A7E] text-[16px] font-[400] leading-[24px]'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Image Section */}
      <div className='relative mt-[100px] hidden lg:block'>
        <div className='overflow-hidden h-[480px] w-[480px] flex justify-end items-end'>
          <Image
            className='mt-40 w-full h-2/3'
            src={HeroBg}
            alt='Hero Background'
          />
          <Image
            src={HeroImg}
            alt='Hero Image'
            fill
            className='object-cover '
          />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
