const AboutHeader = () => {
  return (
    <div className='custom-container'>
      {/* Breadcrumb */}
      <div className='w-full min-h-[56px] flex items-center border-y border-[#F1F3F4]'>
        <p className='text-[16px] font-medium flex items-center gap-4'>
          <span className='text-paragraph'>Home</span>
          <span className='text-[#F05232]'>/</span>
          <span className='text-primary'>About Us</span>
        </p>
      </div>

      {/* Hero Section */}
      <div
        className='xl:relative mt-6 lg:mt-24 p-6 rounded-[16px] flex flex-col-reverse lg:flex-row items-center  xl:items-start'
        style={{
          background:
            'linear-gradient(109deg, #F7FDFF 0%, #E3F1F7 41.07%, #C4E3F2 71.08%)'
        }}
      >
        <div className='lg:w-2/4 pt-6 lg:pt-0 pl-0 xl:pl-[80px] xl:py-[72px]'>
          <h1 className='text-[28px] md:text-[32px] lg:text-[48px] font-bold sm:leading-[36px] lg:leading-[64px] text-titleSubtitle'>
            Revolutionizing Healthcare Through Innovation
          </h1>
          <p className=' text-paragraph text-[20px] font-[400] leading-[32px]'>
            Empowering the future of healthcare with AI, digital transformation,
            and research-driven solutions.
          </p>
        </div>
        {/* Positioned Image */}
        <div className='xl:absolute top-[-30%] right-10 w-full lg:w-[496px] h-[300px] sm:h-[496px] bg-[#D9D9D9] rounded-[8px]'></div>
      </div>
    </div>
  )
}

export default AboutHeader
