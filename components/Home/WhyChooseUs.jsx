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
    <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
          Why Choose Us
        </h1>
        <p className='text-paragraph text-[18px] font-[400] leading-[24px]'>
          Empowering Healthcare with Innovation, Expertise, and Trust.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 pb-0 sm:pb-6 mt-4'>
          {features.map((feature, index) => (
            <div
              className={`flex flex-col justify-center items-center gap-4 pt-4 pr-[24px] w-full sm:w-[400px] pb-[10px] sm:pb-[32px] sm:border-offWhite border-white 
                 ${index % 2 === 0 ? 'border-r-[1px]' : 'pl-0 sm:pl-4'}
                 ${index < 4 ? 'border-b-[1px]' : ''} `}
              key={index}
            >
              <p className='text-[#19BCE5] text-[18px] font-[600] leading-[20px]'>
                {feature.title}
              </p>
              <p className='text-[#677A7E] text-[16px] font-[400] leading-[24px] text-center'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
