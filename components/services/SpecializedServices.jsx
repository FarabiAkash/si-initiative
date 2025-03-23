import Image from 'next/image'
import tbIcon from '../../public/assets/home/services/tb.png'
import aiIcon from '../../public/assets/home/services/ai.png'
import prescriptionIcon from '../../public/assets/home/services/prescription.png'
import correctIcon from '../../public/assets/services/correctArrowWhite.png'

const services = [
  {
    icon: tbIcon,
    title: 'Tuberculosis Management Systems',
    description:
      'Streamlining tuberculosis detection, treatment, and monitoring for better public health outcomes.',
    features: [
      'AI-powered TB screening and diagnostics',
      'Real-time tracking of patient treatment progress',
      'Digital record management for seamless data access',
      'Automated alerts for missed doses and follow-ups',
      'Integration with national and global TB control programs'
    ],
    bgColor: '#8270E8'
  },
  {
    icon: aiIcon,
    title: 'AI-Powered Diagnostics',
    description:
      'Leveraging AI to enable early disease detection and accurate medical assessments.',
    features: [
      'AI-driven image analysis for accurate diagnostics',
      'Predictive modeling for early disease intervention',
      'Faster and more efficient medical assessments',
      'Automated anomaly detection in radiology and pathology reports',
      'Continuous learning models that improve diagnostic accuracy'
    ],
    bgColor: '#19BCE5'
  },
  {
    icon: prescriptionIcon,
    title: 'Digital Prescription Systems',
    description:
      'Simplifying prescriptions with secure, automated digital solutions for doctors and patients.',
    features: [
      'E-prescriptions with real-time doctor-patient integration',
      'Reduced medication errors and improved prescription accuracy',
      'Secure storage and access to prescription history',
      'Drug interaction alerts to prevent adverse effects',
      'Seamless integration with pharmacies for quick dispensing'
    ],
    bgColor: '#3467C7'
  }
]

const SpecializedServices = () => {
  return (
    <div className='custom-container bg-gradient-to-bl from-white to-[#F5FDFF]'>
      <div className='flex flex-col justify-center items-center text-center gap-4'>
        <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
          Specialized Services
        </h1>
        <p className='text-paragraph text-[18px] leading-[24px] font-[400]'>
          Tailored Solutions for Healthcare Challenges
        </p>
      </div>

      {/* Services Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-10 lg:mt-20'>
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-[8px] text-white shadow-md bg-[${
              service.bgColor
            }] flex flex-col items-center gap-[32px] text-center ${
              index == 1 ? 'lg:mb-6' : 'lg:mt-6'
            }`}
          >
            <div className='flex justify-center flex-col items-center gap-[16px]'>
              <div className='w-[96px] h-[96px] bg-white p-[24px] rounded-full'>
                <Image
                  src={service.icon}
                  alt={service.title}
                  className='w-[48px] h-[48px]'
                />
              </div>
              <h2 className='text-[28px] font-[600] leading-[32px]'>
                {service.title}
              </h2>
            </div>
            <p className='text-[18px] font-[400] leading-[24px]'>
              {service.description}
            </p>
            <ul className='text-left'>
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`py-[16px] flex items-center justify-self-start  text-[16px] font-[400] leading-[24px] border-b border-[#ffffff33] ${
                    idx === service.features.length - 1 && 'border-none'
                  }`}
                >
                  <Image
                    src={correctIcon}
                    alt='Check'
                    width={16}
                    height={16}
                    className='mr-2'
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <button className='px-6 py-3 bg-[#ffffff1a] text-white text-[14px] font-[600] rounded-[28px] hover:bg-gray-300 transition tracking-[1.4px] leading-[24px] uppercase'>
              Explore Projects
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecializedServices
