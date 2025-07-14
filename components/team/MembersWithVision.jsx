import Image from 'next/image'
import { members } from '@/data/team'
import memberImg from '../../public/assets/teams/member.jpg'
import linkedInIcon from '../../public/assets/teams/linkedin.png'

const SingleMember = ({ member }) => {
  return (
    <div className='w-full'>
      <h1 className='text-[#010101] text-[24px] font-semibold sm:leading-[32px] text-center'>
        {member.domain}
      </h1>
      <div className='flex flex-wrap justify-center items-center pb-0 sm:pb-6 mt-4 gap-4  border-t border-[#19BCE580] py-4'>
        {member.member?.map((m, idx) => (
          <SingleMemberCard key={idx} card={m} />
        ))}
      </div>
    </div>
  )
}

const SingleMemberCard = ({ card }) => {
  return (
    <div className='w-full  md:w-[270px]  2xl:w-[310px] border border-[#19BCE533] p-4 flex flex-col justify-center items-center gap-4 rounded-[8px]'>
      <div className='w-[168px] h-[168px] rounded-full'>
        <Image
          src={memberImg}
          alt={card.name}
          className='w-full h-full object-cover rounded-full'
        />
      </div>
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-[#010101] text-[18px] font-semibold sm:leading-[24px]'>
          {card.name}
        </h2>
        <h3 className='text-[#19BCE5] text-base sm:leading-[24px] font-normal'>
          {card.position}
        </h3>
      </div>
      <a
        href={card.linkedIn}
        target='_blank'
        className='flex justify-between items-center gap-1 text-sm font-medium text-[#0B3641] border border-[#EEF6F8] rounded-[4px] px-4 py-[6px]'
      >
        <Image src={linkedInIcon} alt={card.linkedIn} /> LinkedIn
      </a>
    </div>
  )
}

const MembersWithVision = () => {
  return (
    <div className=' custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className='text-[32px] font-[700] text-[#0B3641] leading-[40px]'>
          Members with Shared Vision
        </h1>
        <p className='text-[#677A7E] text-[18px] font-[400] leading-[24px] mt-2 text-center'>
          AI engineers to UX designers, data scientists to project managers;
          <br />
          our diverse team works as one to build solutions that matter.
        </p>

        <div className='grid grid-cols-1 pb-0 sm:pb-6 mt-4 gap-6'>
          {members.map((member, idx) => {
            return <SingleMember key={idx} member={member} />
          })}
        </div>
      </div>
    </div>
  )
}
export default MembersWithVision
