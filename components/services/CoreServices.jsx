import Image from 'next/image'
import decisionIcon from '../../public/assets/home/services/decision.png'
import dataIcon from '../../public/assets/home/services/data.png'
import cloudIcon from '../../public/assets/home/services/cloud.png'
import iotIcon from '../../public/assets/home/services/iot.png'

import correctIcon from '../../public/assets/services/correctArrow.svg'

const services = [
  {
    icon: decisionIcon,
    title: 'Decision Support Systems',
    description:
      'Enhancing clinical decision-making with AI-driven insights and predictive analytics.',
    features: [
      'AI-powered diagnostics to enhance accuracy',
      'Predictive analytics for early disease detection',
      'Real-time data processing for informed decision-making'
    ]
  },
  {
    icon: dataIcon,
    title: 'Data Analysis & Quality Assurance',
    description:
      'Ensuring data accuracy and integrity for informed healthcare strategies.',
    features: [
      'Advanced data cleaning and structuring',
      'Quality assurance for medical records and reports',
      'Compliance with healthcare regulations and industry standards'
    ]
  },
  {
    icon: cloudIcon,
    title: 'Cloud-Based Healthcare Platforms',
    description:
      'Providing secure, scalable solutions for seamless healthcare management.',
    features: [
      'Real-time access to patient data and EHR',
      'Secure telemedicine and remote monitoring integration',
      'HIPAA and GDPR-compliant cloud security'
    ]
  },
  {
    icon: iotIcon,
    title: 'IoT-Enabled Healthcare Models',
    description:
      'Connecting smart devices for real-time patient monitoring and improved outcomes.',
    features: [
      'IoT-powered wearable and sensor-based tracking',
      'Automated alerts for patient vitals and emergencies',
      'Enhanced remote patient monitoring and chronic disease management'
    ]
  }
]

const CoreService = () => {
  return (
    <div className='px-12 xl:px-36 py-16'>
      <div className='flex flex-col justify-center items-center text-center'>
        <h1 className='text-gray-800 text-3xl font-bold'>Core Services</h1>
        <p className='text-gray-600 text-lg pt-3'>
          Revolutionizing Healthcare with Cutting-edge Technological Solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-white p-[32px] rounded-2xl shadow-md hover:shadow-lg transition-all flex flex-col gap-[16px] justify-start items-start'
          >
            <div className='flex items-center justify-start gap-[16px]'>
              <div className='w-[72px] h-[72px] rounded-full bg-[#F1F3F4]  flex justify-center items-center'>
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                />
              </div>
              <h2 className='text-[24px] font-[600] text-titleSubtitle leading-[32px]'>
                {service.title}
              </h2>
            </div>
            <p className='text-paragraph'>{service.description}</p>
            <ul className='flex flex-col justify-start items-start gap-[16px]'>
              {service.features.map((feature, idx) => (
                <li
                  key={idx}
                  className='flex items-center justify-center gap-[16px] text-titleSubtitle text-base leading-[20px]'
                >
                  <div className='w-[40px] h-[40px] rounded-full bg-[#F1F3F4] flex justify-center items-center'>
                    <Image src={correctIcon} className='w-[19px] h-[11px]' />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
            <button className='mt-4 px-[24px] py-[16px] text-[14px] font-[600] leading-[24px] tracking-[1.4px] uppercase text-[#338499] border-[1px] border-[#C2D2D6] rounded-[28px] h-[24px] flex justify-center items-center'>
              Explore Projects{' '}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CoreService
