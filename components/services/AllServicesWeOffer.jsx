import s1 from '../../public/assets/services/icons/s1.png'
import s2 from '../../public/assets/services/icons/s2.png'
import s3 from '../../public/assets/services/icons/s3.png'
import s4 from '../../public/assets/services/icons/s4.png'
import s5 from '../../public/assets/services/icons/s5.png'
import s6 from '../../public/assets/services/icons/s6.png'
import s7 from '../../public/assets/services/icons/s7.png'
import s8 from '../../public/assets/services/icons/s8.png'
import s9 from '../../public/assets/services/icons/s9.png'
import s10 from '../../public/assets/services/icons/s10.png'
import s11 from '../../public/assets/services/icons/s11.png'
import s12 from '../../public/assets/services/icons/s12.png'
import Image from 'next/image'

const services = [
  {
    icon: s1,
    title: 'Custom Software Development',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s2,
    title: 'AI/ML Integration',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s3,
    title: 'Web and Mobile App Development',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s4,
    title: 'Cybersecurity Services',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s5,
    title: 'R&D Innovation',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s6,
    title: 'Cloud Computing Services',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s7,
    title: 'it consultations',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s8,
    title: 'IT Infrastructure Management',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s9,
    title: 'Data Analysis',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s10,
    title: 'DevOps and CI/CD',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s11,
    title: 'VoIP and Communication Solutions',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  },
  {
    icon: s12,
    title: 'Quality Assurance',
    desc: 'Revolutionizing healthcare with AI-powered diagnostics, personalized treatments, and predictive analytics.'
  }
]

const AllServicesWeOffer = () => {
  return (
    <div className='bg-gradient-to-bl from-white to-[#F5FDFF]'>
      <div className=' custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-[32px] font-[700] text-[#0B3641] leading-[40px]'>
            All the Services We Offer
          </h1>
          <p className='text-[#677A7E] text-[18px] font-[400] leading-[24px] mt-2'>
            Empowering Healthcare with Innovation, Expertise, and Trust.
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pb-0 sm:pb-6 mt-4'>
            {services.map((service, index) => (
              <div
                className={`flex flex-col justify-center items-center gap-4 pt-4 pr-[24px] w-full sm:w-[400px] pb-[10px] sm:pb-[32px] sm:border-offWhite border-white 
                 ${
                   (index + 1) % 3 === 0 ? 'pl-0 sm:pl-4' : ' xl:border-r-[1px]'
                 }
                 ${index < 9 ? 'xl:border-b-[1px]' : ''} `}
                key={index}
              >
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={48}
                  height={48}
                />
                <p className='text-[#010101] text-[18px] font-[600] leading-[20px]'>
                  {service.title}
                </p>
                <p className='text-[#677A7E] text-[16px] font-[400] leading-[24px] text-center'>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default AllServicesWeOffer
