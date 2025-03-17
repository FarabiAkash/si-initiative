const InnovationCard = () => {
  return (
    <div className='bg-primary rounded-lg w-[70vw] mx-auto mt-10 mb-24 shadow-lg relative'>
      <div className='w-full flex flex-col xl:flex-row justify-center items-center gap-4 py-10 xl:py-16 px-12'>
        <h2 className='text-white font-poppins text-[28px] font-[700] leading-[35px] w-full xl:w-[288px] h-auto xl:h-[120px]'>
          Driving <br /> Innovation Through R&D
        </h2>

        <div className='flex flex-col justify-start items-start'>
          <hr className='w-1/4 border-t-[2px] border-[#EC5F43] hidden xl:block' />
          <p className='text-white text-[18px] leading-[28px] h-auto xl:h-[120px] w-auto xl:w-[700px]'>
            Exploring the frontiers of digital healthcare through groundbreaking
            research and innovative solutions. From AI-driven diagnostics to
            accessible virtual care, our projects aim to transform healthcare
            delivery, improve patient outcomes, and bridge critical gaps in
            medical services.
          </p>
        </div>
      </div>
      {/* Decorative Lines */}
      <hr className='absolute bottom-0 left-10 w-1/5 border-[1px] border-[#EC5F43] hidden xl:block' />
    </div>
  )
}

export default InnovationCard
