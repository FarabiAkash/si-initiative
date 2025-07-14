import Image from 'next/image'
import l1 from '../../public/assets/teams/l1.jpg'
import l2 from '../../public/assets/teams/l2.jpg'
import l3 from '../../public/assets/teams/l3.jpeg'
import l4 from '../../public/assets/teams/l4.jpg'
import l5 from '../../public/assets/teams/l5.jpg'
import l6 from '../../public/assets/teams/l6.jpg'
import l7 from '../../public/assets/teams/l7.jpg'
import linkedInIcon from '../../public/assets/teams/linkedin.png'

const leaders = [
  {
    name: 'Prof. Khondaker A Mamun, PhD',
    position: 'Team Lead, AI Scientist',
    desc: 'With 20+ years of experience, Prof. Mamun is a renowned scientist, innovator, and entrepreneur. He founded CMED Health, CMED Tech and leads pioneering work in AI, big data, IoT, and digital healthcare, with 200+ publications and global impact across health, MedTech, and inclusive tech solutions.',
    avatar: l1,
    linkedIn: 'https://www.linkedin.com/in/shahinur-alam-bhuiyan/'
  },
  {
    name: 'Mohammad Nurul Huda, PhD',
    position: 'NLP Scientist',
    desc: 'With 25+ years of experience, Dr. Huda is a leading expert in AI, NLP, and speech processing. He has contributed groundbreaking work in Bangla language technology, ASR, and AI-driven applications, with 100+ publications and leadership roles in academia and industry.',
    avatar: l2,
    linkedIn: 'https://www.linkedin.com/in/shahinur-alam-bhuiyan/'
  },
  {
    name: 'Farhana Sarker, PhD',
    position: 'Data Scientist',
    desc: 'With 20+ years of experience, Prof. Mamun is a renowned scientist, innovator, and entrepreneur. He founded CMED Health, CMED Tech and leads pioneering work in AI, big data, IoT, and digital healthcare, with 200+ publications and global impact across health, MedTech, and inclusive tech solutions.',
    avatar: l3,
    linkedIn: 'https://www.linkedin.com/in/shahinur-alam-bhuiyan/'
  },
  {
    name: 'Nabeel Mohammed, PhD',
    position: 'Machine Learning Scientist',
    desc: 'With 20+ years of experience, Prof. Mamun is a renowned scientist, innovator, and entrepreneur. He founded CMED Health, CMED Tech and leads pioneering work in AI, big data, IoT, and digital healthcare, with 200+ publications and global impact across health, MedTech, and inclusive tech solutions.',
    avatar: l4,
    linkedIn: 'https://www.linkedin.com/in/shahinur-alam-bhuiyan/'
  },
  {
    name: 'Ashraful Islam, PhD',
    position: 'Data Scientist',
    desc: 'With 20+ years of experience, Prof. Mamun is a renowned scientist, innovator, and entrepreneur. He founded CMED Health, CMED Tech and leads pioneering work in AI, big data, IoT, and digital healthcare, with 200+ publications and global impact across health, MedTech, and inclusive tech solutions.',
    avatar: l5,
    linkedIn: 'https://www.linkedin.com/in/shahinur-alam-bhuiyan/'
  },
  {
    name: 'Mohammad Shahriar Rahman, PhD',
    position: 'Security Expert',
    desc: 'With 20+ years of experience, Prof. Mamun is a renowned scientist, innovator, and entrepreneur. He founded CMED Health, CMED Tech and leads pioneering work in AI, big data, IoT, and digital healthcare, with 200+ publications and global impact across health, MedTech, and inclusive tech solutions.',
    avatar: l6,
    linkedIn: 'https://www.linkedin.com/in/shahinur-alam-bhuiyan/'
  },
  {
    name: 'Dr. Rashedur Rahman',
    position: 'Data Scientist',
    desc: 'With 20+ years of experience, Prof. Mamun is a renowned scientist, innovator, and entrepreneur. He founded CMED Health, CMED Tech and leads pioneering work in AI, big data, IoT, and digital healthcare, with 200+ publications and global impact across health, MedTech, and inclusive tech solutions.',
    avatar: l7,
    linkedIn: 'https://www.linkedin.com/in/shahinur-alam-bhuiyan/'
  }
]

const SingleLeader = ({ leader }) => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-[8px] border border-[#19BCE533] p-4 max-w-[600px]'>
      <div className='flex flex-col gap-6'>
        <div className='w-[192px] h-[192px]'>
          <Image
            className='w-full h-full object-cover rounded-[4px]'
            src={leader.avatar}
            alt={leader.name}
          />
        </div>
        <a
          href={leader.linkedIn}
          target='_blank'
          className='flex justify-start items-center gap-1 text-sm font-medium text-[#0B3641] border border-[#EEF6F8] rounded-[4px] px-4 py-[6px]'
        >
          <Image src={linkedInIcon} alt={leader.linkedIn} /> LinkedIn
        </a>
      </div>
      <div>
        <h2 className='text-[18px] sm:leading-[24px] font-semibold text-[#010101]'>
          {leader.name}
        </h2>
        <h5 className='text-[#19BCE5] text-base font-normal'>
          {leader.position}
        </h5>
        <p className='text-[#0B3641] font-normal text-base mt-3'>
          {leader.desc}
        </p>
      </div>
    </div>
  )
}

const VisionaryLeadership = () => {
  return (
    <div className='bg-gradient-to-bl from-white to-[#F5FDFF]'>
      <div className=' custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        <div className='flex flex-col justify-center items-center gap-4'>
          <h1 className='text-[32px] font-[700] text-[#0B3641] leading-[40px]'>
            Visionary Leadership
          </h1>
          <p className='text-[#677A7E] text-[18px] font-[400] leading-[24px] mt-2'>
            Meet the minds shaping our strategy, guiding innovation, and leading
            CMED Tech toward a smarter future.
          </p>
          <div className='grid grid-cols-1 lg:grid-cols-2 pb-0 sm:pb-6 mt-4 gap-6'>
            {leaders.map((leader, idx) => {
              const isLastOdd =
                leaders.length % 2 === 1 && idx === leaders.length - 1

              return (
                <div
                  key={idx}
                  className={
                    isLastOdd ? 'lg:col-span-2 flex justify-center' : ''
                  }
                >
                  <SingleLeader leader={leader} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
export default VisionaryLeadership
