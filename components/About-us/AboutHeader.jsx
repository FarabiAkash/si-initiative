const AboutHeader = () => {
  return (
    <div className='custom-container'>
      {/* Breadcrumb */}
      <div className='w-full h-[56px] flex items-center border-y border-[#F1F3F4]'>
        <p className='text-[16px] font-medium flex items-center gap-4'>
          <span className='text-paragraph'>Home</span>
          <span className='text-[#F05232]'>/</span>
          <span className='text-primary'>About Us</span>
        </p>
      </div>

      {/* Hero Section */}
      <div
        className=' sm:relative mt-24 p-6 rounded-[16px] flex flex-col md:flex-row items-center md:items-start'
        style={{
          background:
            'linear-gradient(109deg, #F7FDFF 0%, #E3F1F7 41.07%, #C4E3F2 71.08%)'
        }}
      >
        <div className='md:w-2/4 pl-[80px] py-[72px]'>
          <h1 className='text-[28px] md:text-[48px] font-bold leading-[64px] text-titleSubtitle'>
            Revolutionizing Healthcare Through Innovation
          </h1>
          <p className=' text-paragraph text-[20px] font-[400] leading-[32px]'>
            Empowering the future of healthcare with AI, digital transformation,
            and research-driven solutions.
          </p>
        </div>
        {/* Positioned Image */}
        <div className='sm:absolute top-[-30%] right-10 sm:w-[496px] sm:h-[496px] bg-[#D9D9D9] rounded-[8px]'></div>
      </div>
    </div>
  )
}

export default AboutHeader
