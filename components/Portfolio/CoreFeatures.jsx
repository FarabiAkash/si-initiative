const features = [
  {
    id: 1,
    title: 'AI-Powered SRMH Tool',
    description:
      'Secure, real-time video calls that connect patients with licensed doctors from anywhere.'
  },
  {
    id: 2,
    title: 'Adolescent Care Pathways',
    description:
      'Guides young people with confidential, accurate, and appropriate directions with care.'
  },
  {
    id: 3,
    title: 'Vitals Monitoring',
    description:
      'Embedded within the SuSastho platform for unified and easy access.'
  },
  {
    id: 4,
    title: 'Seamless Integration',
    description:
      'Embedded within the SuSastho platform for unified and easy access.'
  },
  {
    id: 5,
    title: 'Validated for Inclusivity',
    description:
      'Developed with clinical validation and cultural considerations to ensure trust and adoption.'
  },
  {
    id: 6,
    title: 'Bangla Medical Chatbot',
    description:
      'Provides risk assessment, education, screening, and referral pathways to ensure support.'
  }
]

const CoreFeatures = () => {
  return (
    <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-3xl md:text-[48px] font-bold mb-4 text-[#0B3641]'>
            Core Features
        </h1>
        <p className='text-paragraph text-[18px] font-[400] leading-[24px]'>
          Designed to make SRMH knowledge and support more accessible, inclusive, and confidential.
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 pb-0 sm:pb-6 mt-4'>
          {features.map((feature, index) => (
            <div
              className={`flex flex-col justify-center items-center gap-4 pt-4 pr-[24px] w-full sm:w-[400px] pb-[10px] sm:pb-[32px] lg:border-offWhite border-white 
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

export default CoreFeatures
