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
    name: 'Mahfuz Alam Khandakar',
    position: 'CEO, Urban Tech Clinic',
    review:
      'Using the AI diagnostic tool, our clinic detected early-stage breast cancer in a patient, enabling timely treatment. The tool has since been adopted in 50+ underserved communities, improving survival rates and healthcare access.',
    image: '/assets/home/reviews/alam.jpg'
  },
  {
    id: 2,
    name: 'Dr. Shaila Rahman',
    position: 'Medical Director, Lifecare Hospital',
    review:
      'The AI system streamlined our radiology workflow, reducing diagnostic errors and report turnaround time by 40%. Patients now receive faster, more accurate diagnoses, transforming our quality of care across departments.',
    image: '/assets/home/reviews/shaila.jpg'
  },
  {
    id: 3,
    name: 'Engr. Tanvir Hossain',
    position: 'CTO, MediLink Innovations',
    review:
      'Integrating this AI tool into our telemedicine platform enhanced early disease detection and remote consultation accuracy. It’s now supporting thousands of virtual check-ups monthly, bridging healthcare gaps in rural areas.',
    image: '/assets/home/reviews/tanvir.jpg'
  }
]
const SuccessStories = ({ pageName }) => {
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
    <div
      className={`${
        pageName === 'services' && 'bg-gradient-to-bl from-white to-[#F5FDFF]'
      } 2xl-custom:w-[1580px] 2xl-custom:mx-auto`}
    >
      <div className='custom-container flex flex-col justify-center items-center gap-8'>
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
          <Slider {...settings} dotsClass='slick-dots custom-dots'>
            {reviews.map(review => (
              <div key={review.id} className='sm:px-4 mb-8'>
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
                    <div className='w-[64px] h-[64px]'>
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={64}
                        height={64}
                        className='rounded-full mb-4 object-cover w-full h-full'
                      />
                    </div>

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
    </div>
  )
}

export default SuccessStories
