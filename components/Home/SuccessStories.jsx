'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Dynamically import react-slick
const Slider = dynamic(() => import('react-slick'), { ssr: false })

// Custom Left Arrow Component
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className='absolute hidden lg:block left-[-100px] top-1/2 transform -translate-y-1/2 bg-[#F1F3F4]  rounded-[50%] p-2 z-10'
  >
    <Image
      src='/assets/home/leftArrow.svg'
      alt='Prev'
      className='w-[20px] h-[20px]'
      width={20}
      height={20}
    />
  </button>
)

// Custom Right Arrow Component
const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className='absolute hidden lg:block right-[-100px] top-1/2 transform -translate-y-1/2 bg-[#F1F3F4]  rounded-[50%] p-2 z-10'
  >
    <Image
      src='/assets/home/rightArrow.svg'
      alt='Prev'
      className='w-[20px] h-[20px]'
      width={20}
      height={20}
    />
  </button>
)

// Reviews Data
const reviews = [
  {
    id: 1,
    name: 'Dr. Al-Mamun',
    position: 'Professor & Director, IRIIC',
    review:
      'Using the AI diagnostic tool, our clinic detected early-stage breast cancer in a patient, enabling timely treatment. The tool has since been adopted in 50+ underserved communities, improving survival rates and healthcare access.',
    image: '/assets/home/reviews/alMamun.png'
  },
  {
    id: 2,
    name: 'Rasel Hossain',
    position: 'UI/UX Designer',
    review:
      'AI-driven tools have transformed our diagnostics, reducing errors by 40% and improving patient outcomes significantly. tools have transformed our diagnostics With AI-assisted analysis',
    image: '/assets/home/reviews/rasel.png'
  },
  {
    id: 3,
    name: 'Shahinur Alam Bhuiyan',
    position: 'Full Stack Developer',
    review:
      'With AI-assisted analysis, our team can now predict complications earlier, improving surgical success rates by 30%. tools have transformed our diagnostics With AI-assisted analysis',
    image: '/assets/home/reviews/shahin.png'
  }
]
const SuccessStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  }

  return (
    <div className='py-[50px] px-12 xl:px-36 flex flex-col justify-center items-center gap-8'>
      {/* Heading */}
      <div className='text-center'>
        <h1 className='text-titleSubtitle text-[32px] font-[700] leading-[40px]'>
          Success Stories
        </h1>
        <p className='text-paragraph text-[18px] font-[400] leading-[24px] pt-3'>
          Real Stories of Impact and Innovation
        </p>
      </div>

      {/* Review Slider */}
      <div className='w-full max-w-3xl relative'>
        <Slider {...settings}>
          {reviews.map(review => (
            <div key={review.id} className='px-4 mb-8'>
              <div className='relative  p-[48px] rounded-[16px] border border-[#F1F3F4] bg-white shadow-[0px_16px_16px_0px_rgba(15,72,87,0.10)] flex flex-col justify-start items-start text-center'>
                {/* Quote Icon */}
                <Image
                  src='/assets/home/reviewQuoteIcon.svg'
                  alt='quote icon'
                  width={50}
                  height={50}
                  className='absolute top-4 right-4'
                />

                <div className='flex-col sm:flex-row sm:flex justify-center sm:justify-start  items-center gap-2 sm:gap-4'>
                  {/* Profile Image */}
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={64}
                    height={64}
                    className='rounded-full mb-4'
                  />

                  {/* Reviewer Name & Position */}
                  <div className='flex flex-col justify-start items-start'>
                    <h3 className='text-titleSubtitle font-semibold text-[18px]'>
                      {review.name}
                    </h3>
                    <p className='text-paragraph text-sm  mb-4'>
                      {review.position}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <p className='text-paragraph text-base text-start'>
                  {review.review}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SuccessStories
