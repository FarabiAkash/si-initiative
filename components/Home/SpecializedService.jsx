import tbIcon from '../../public/assets/home/services/tb.png'
import aiIcon from '../../public/assets/home/services/ai.png'
import prescriptionIcon from '../../public/assets/home/services/prescription.png'
import Image from 'next/image'

const specializedServices = [
  {
    id: 1,
    title: 'TB Management Systems',
    description:
      'Streamlining tuberculosis detection, treatment, and monitoring for better public health outcomes.',
    icon: tbIcon,
    color: 'bg-[#8270E8]'
  },
  {
    id: 2,
    title: 'AI-Powered Diagnostics',
    description:
      'Leveraging AI to enable early disease detection and accurate medical assessments.',
    icon: aiIcon,
    color: 'bg-[#19BCE5]'
  },
  {
    id: 3,
    title: 'Digital Prescription Systems',
    description:
      'Simplifying prescriptions with secure, automated digital solutions for doctors and patients.',
    icon: prescriptionIcon,
    color: 'bg-[#3467C7]'
  }
]
const SpecializedService = () => {
  return (
    <div className='bg-gradient-to-bl from-white to-[#F5FDFF]  py-[100px] px-12 xl:px-36 flex flex-col justify-center items-center gap-8'>
      <div>
        <h1 className='text-titleSubtitle text-center text-[32px] font-[700] leading-[40px]'>
          Specialized Services
        </h1>
        <p className='text-paragraph text-center text-[18px] font-[400] leading-[24px] pt-3'>
          Tailored Innovations for Targeted Healthcare Needs.
        </p>
      </div>
      <div className='flex flex-wrap xl:flex-nowrap justify-center items-center gap-4 pt-10 pb-20'>
        {specializedServices.map(service => (
          <div
            key={service.id}
            className={`${
              service.color
            } rounded-[8px] text-white w-[320px] sm:w-[392px] h-auto p-[32px] ${
              service.id === 2 && 'mb-0 xl:mb-[32px]'
            } flex gap-[36px] flex-col justify-start items-start`}
          >
            <div
              className='rounded-full w-[64px] h-[64px] bg-white 
              flex items-center justify-center transition-all duration-300'
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={40}
                height={40}
              />
            </div>
            <div>
              <h2 className='text-[18px] font-[600] leading-[20px]'>
                {service.title}
              </h2>
              <p className='text-[16px] font-[400] leading-[24px] pt-4'>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default SpecializedService
