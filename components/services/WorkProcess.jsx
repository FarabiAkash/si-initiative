import Image from 'next/image'
import correctArrowGray from '../../public/assets/services/correctArrowGray.svg'
import Arrow from '../../public/assets/services/Arrow.svg'

const steps = [
  {
    title: 'Understanding Needs & Research',
    points: [
      'AI-powered TB screening and diagnostics',
      'Real-time tracking of patient treatment progress',
      'Digital record management for seamless data access'
    ]
  },
  {
    title: 'Solution Design & Prototyping',
    points: [
      'UI/UX-focused wireframing and user journey mapping',
      'AI and technology framework planning',
      'Feedback-driven prototype iterations'
    ]
  },
  {
    title: 'Development & Integration',
    points: [
      'AI, IoT, and cloud-based system development',
      'Secure API and system integrations',
      'Compliance with healthcare regulations (HIPAA, GDPR, etc.)'
    ]
  },
  {
    title: 'Testing & Quality Assurance',
    points: [
      'Rigorous functional, security, and performance testing',
      'Real-world user testing for seamless experience',
      'Continuous bug fixes and optimizations'
    ]
  },
  {
    title: 'Deployment & Implementation',
    points: [
      'Scalable deployment for hospitals, clinics, and users',
      'Onboarding, training, and support for smooth adoption',
      'Seamless data migration and system integration'
    ]
  },
  {
    title: 'Monitoring & Continuous Improvement',
    points: [
      'Real-time system monitoring for reliability',
      'Data-driven enhancements and AI learning models',
      'Ongoing support and future upgrades'
    ]
  }
]

const WorkProcess = () => {
  return (
    <div className='custom-container flex flex-col justify-center items-center gap-10 lg:gap-20'>
      <div className='md:w-2/3 text-center space-y-[16px]'>
        <h2 className='text-[32px] font-[700] text-center leading-[40px] text-titleSubtitle'>
          Our Work Process
        </h2>
        <p className='text-[18px] font-[400] leading-[24px] text-paragraph'>
          Streamlined, research-driven, and technology-powered—our process
          ensures seamless execution and impactful healthcare solutions.
        </p>
      </div>

      <div className='relative w-full'>
        {/* Timeline Line */}
        <div className='absolute left-1/2 transform -translate-x-1/2 w-[1px] bg-[#C2D2D6] h-[90%] hidden md:block' />

        {/* Timeline Items */}
        {steps.map((step, index) => (
          <div
            key={index}
            className='mb-6 md:mb-12 flex flex-col md:flex-row items-center relative'
          >
            {/* Left Side Text for Odd Indexes */}
            {index % 2 !== 0 ? (
              <div className='w-full md:w-1/2 pr-0 md:pr-8 relative'>
                <div className='bg-white shadow-md rounded-lg p-6 relative  before:absolute  before:shadow-md before:right-[-10px] before:top-1/2 before:-translate-y-1/2 md:before:w-5 md:before:h-5 before:bg-white before:border before:border-gray-300 before:rotate-45 before:z-[-1]'>
                  <h2 className='text-[18px] font-[500] text-titleSubtitle leading-[20px] w-full'>{`${
                    index + 1
                  }. ${step.title}`}</h2>
                  <ul className='mt-3 space-y-2'>
                    {step.points.map((point, idx) => (
                      <li key={idx} className='flex items-start space-x-2'>
                        <Image
                          src={correctArrowGray}
                          alt='arrow'
                          className='w-5 h-5'
                        />
                        <span className='text-paragraph text-[16px] font-[400] leading-[24px]'>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className='w-full md:w-1/2 pl-0 md:pl-8'></div>
            )}

            {/* Connector Dot */}
            <div
              className={`w-[16px] h-[16px] ${
                index === 5 ? 'bg-[#F05232]' : 'bg-primary'
              } text-white hidden md:flex items-center justify-center rounded-full z-20 border border-white  `}
            />

            {/* Right Side Text for Even Indexes */}
            {index % 2 === 0 ? (
              <div className='w-full md:w-1/2 pl-0 md:pl-8 relative'>
                <div className='bg-white shadow-md rounded-lg p-6 relative  before:absolute before:left-[-10px] before:top-1/2 before:-translate-y-1/2 md:before:w-5 md:before:h-5 before:bg-white before:border before:border-gray-300 before:rotate-45  before:z-[-1]'>
                  <h2 className='text-[18px] font-[500] text-titleSubtitle leading-[20px] w-full'>{`${
                    index + 1
                  }. ${step.title}`}</h2>
                  <ul className='mt-3 space-y-2'>
                    {step.points.map((point, idx) => (
                      <li key={idx} className='flex items-start space-x-2'>
                        <Image
                          src={correctArrowGray}
                          alt='arrow'
                          className='w-5 h-5'
                        />
                        <span className='text-paragraph text-[16px] font-[400] leading-[24px]'>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className='w-full md:w-1/2 pr-8'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default WorkProcess
