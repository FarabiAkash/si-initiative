import Image from 'next/image'
import correctArrow from '../../public/assets/services/correctArrow.svg'
import caseImg from '../../public/assets/home/caseStudiesImg.png'
import caseImg2 from '../../public/assets/home/Blogs/blog1.png'
import caseImg3 from '../../public/assets/home/Blogs/blog2.png'
import caseImg4 from '../../public/assets/home/Blogs/blog3.png'

const data = [
  {
    title: 'Predictive Analytics for Disease Prevention',
    description:
      'Leveraging big data and machine learning, our platform predicts potential disease outbreaks and provides proactive healthcare insights.',
    img: caseImg4,
    options: [
      {
        title: 'Early Disease Prediction',
        description: 'AI identifies at-risk individuals before symptoms appear'
      },
      {
        title: 'Personalized Health Recommendations',
        description: 'Tailored wellness plans based on data insights'
      },
      {
        title: 'Hospital Resource Optimization',
        description:
          'Predicting patient influx to improve hospital preparedness'
      },
      {
        title: 'Real-Time Data Processing',
        description: 'Analyzing millions of health records for patterns'
      }
    ]
  },
  {
    title: 'AI-Powered Chatbots for Patient Assistance',
    description:
      'A virtual health assistant provides 24/7 support, answering patient queries, booking appointments, and assisting in symptom analysis.',
    img: caseImg3,
    options: [
      {
        title: '24/7 Patient Support',
        description: 'Immediate responses to common health queries'
      },
      {
        title: 'Appointment Scheduling',
        description: 'Seamless booking without human intervention'
      },
      {
        title: 'Symptom Checker',
        description: 'AI analyzes symptoms and suggests possible conditions'
      },
      {
        title: 'Multilingual Support',
        description: 'Catering to patients worldwide with language translation'
      }
    ]
  },
  {
    title: 'AI-Powered Diagnostics for Early Disease Detection',
    description:
      'A leading healthcare provider faced challenges in detecting diseases early due to delayed diagnostics and human error and implemented an AI-driven diagnostic system.',
    img: caseImg,
    options: [
      {
        title: '30% Faster Diagnosis',
        description: 'Reduced analysis time from 48 hours to 12 hours'
      },
      {
        title: '95% Accuracy Rate',
        description: 'Improved precision in detecting abnormalities'
      },
      {
        title: '40% Decrease in Diagnostic Errors',
        description: 'AI-assisted assessments led to more reliable results'
      },
      {
        title: 'Seamless Scalability',
        description: 'Processed 5x more cases without additional workforce'
      }
    ]
  },
  {
    title: 'AI-Driven Medical Imaging Enhancement',
    description:
      'Using advanced AI models, our system enhances MRI and CT scan quality, allowing doctors to detect anomalies faster and with greater precision.',
    img: caseImg2, // Updated image
    options: [
      {
        title: 'Enhanced Image Clarity',
        description: 'AI-powered denoising improves scan resolution'
      },
      {
        title: 'Real-Time Scan Analysis',
        description: 'Immediate anomaly detection with 98% accuracy'
      },
      {
        title: 'Reduced Diagnosis Time',
        description: 'Decreased image processing from 1 hour to 10 minutes'
      },
      {
        title: 'Lower Radiation Exposure',
        description: 'Efficient imaging reduces patient radiation by 30%'
      }
    ]
  },
  {
    title: 'AI-Powered Chatbots for Patient Assistance',
    description:
      'A virtual health assistant provides 24/7 support, answering patient queries, booking appointments, and assisting in symptom analysis.',
    img: caseImg3,
    options: [
      {
        title: '24/7 Patient Support',
        description: 'Immediate responses to common health queries'
      },
      {
        title: 'Appointment Scheduling',
        description: 'Seamless booking without human intervention'
      },
      {
        title: 'Symptom Checker',
        description: 'AI analyzes symptoms and suggests possible conditions'
      },
      {
        title: 'Multilingual Support',
        description: 'Catering to patients worldwide with language translation'
      }
    ]
  },
  {
    title: 'Predictive Analytics for Disease Prevention',
    description:
      'Leveraging big data and machine learning, our platform predicts potential disease outbreaks and provides proactive healthcare insights.',
    img: caseImg4,
    options: [
      {
        title: 'Early Disease Prediction',
        description: 'AI identifies at-risk individuals before symptoms appear'
      },
      {
        title: 'Personalized Health Recommendations',
        description: 'Tailored wellness plans based on data insights'
      },
      {
        title: 'Hospital Resource Optimization',
        description:
          'Predicting patient influx to improve hospital preparedness'
      },
      {
        title: 'Real-Time Data Processing',
        description: 'Analyzing millions of health records for patterns'
      }
    ]
  }
]

const CaseStudies = () => {
  return (
    <div className='custom-container'>
      <div className='flex flex-col gap-[28px] sm:gap-[36px] justify-center items-center'>
        {data.map((item, index) => (
          <div
            key={index}
            className='flex flex-col lg:flex-row justify-center items-center gap-[24px] lg:gap-[48px] w-full border border-[#F1F3F4] p-[24px] rounded-[16px]'
          >
            <div className='relative w-full h-[300px] sm:h-[500px]'>
              <Image
                src={item.img}
                alt={item.title}
                className='rounded-[4px]'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='flex flex-col justify-start items-start gap-[24px]'>
              <h1 className='text-[24px] sm:text-[32px] font-[700] sm:leading-[40px] text-titleSubtitle'>
                {item.title}
              </h1>
              <p className='text-[18px] text-paragraph font-[400] sm:leading-[28px] sm:text-justify'>
                {item.description}
              </p>
              <div className=' space-y-[16px]'>
                {item.options.map((option, index) => (
                  <div
                    key={index}
                    className='flex justify-start items-center gap-4'
                  >
                    <div className='w-[24px] h-[24px] pl-[3px] pr-[2px] pt-[6px] pb-[7px] bg-[#F1F3F4] rounded-full'>
                      <Image src={correctArrow} alt='arrow' className='' />
                    </div>
                    <div className='flex flex-col justify-start items-start text-[16px] leading-[20px]'>
                      <p className='text-titleSubtitle font-[600]'>
                        {option.title}
                      </p>
                      <p className='text-paragraph font-[400]'>
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <button className='text-[14px] rounded-[28px] bg-primary text-white font-[600] leading-[24px] tracking-[1.4px] shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[24px] py-[10px] sm:py-[16px] uppercase'>
                Read Details
              </button>
            </div>
          </div>
        ))}

        <button className='h-[56px] px-[40px] py-[16px] border border-[#C2D2D6] text-[#338499] uppercase tracking-[1.4px] leading-[24px] font-[600] rounded-[28px]'>
          load more
        </button>
      </div>
    </div>
  )
}

export default CaseStudies
