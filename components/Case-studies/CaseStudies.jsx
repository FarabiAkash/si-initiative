'use client'
import Image from 'next/image'
import correctArrow from '../../public/assets/services/correctArrow.svg'
import caseImg from '../../public/assets/home/caseStudiesImg.png'
import caseImg2 from '../../public/assets/home/Blogs/blog1.png'
import caseImg3 from '../../public/assets/home/Blogs/blog2.png'
import caseImg4 from '../../public/assets/home/Blogs/blog3.png'
import Link from 'next/link'

const data = [
  {
    id: 1,
    title: 'Predictive Analytics for Disease Prevention',
    description:
      'Leveraging big data and machine learning, our platform predicts potential disease outbreaks and provides proactive healthcare insights.',
    img: caseImg4,
    tags: ['Digital Health'],
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
    ],
    challenges: [
      {
        title: 'Delayed Diagnosis',
        description:
          'Traditional diagnostic methods required manual analysis, often taking days to provide results. This delay hindered timely treatment decisions, especially for critical conditions.'
      },
      {
        title: 'Human Errors',
        description:
          'Inconsistencies in manual assessments led to varying diagnostic accuracy, increasing the risk of misdiagnosis.'
      },
      {
        title: 'Scalability Issues',
        description:
          'The hospital faced increasing patient loads, making it difficult to maintain efficiency with its existing diagnostic processes.'
      }
    ],
    solutions: [
      {
        title: 'Automated Image Analysis',
        description:
          'AI models were trained to analyze medical images, including X-rays, MRIs, and pathology slides, detecting abnormalities with high precision.'
      },
      {
        title: 'Predictive Insights',
        description:
          'Machine learning algorithms identified patterns and flagged potential diseases in their earliest stages, improving preventive care.'
      },
      {
        title: 'Seamless Integration',
        description:
          'The system was integrated with the hospital’s electronic health records (EHR), allowing real-time access to AI-powered diagnostic reports.'
      },
      {
        title: 'User-Friendly Dashboard',
        description:
          'A visual and interactive dashboard enabled healthcare professionals to interpret AI findings quickly and make data-driven decisions.'
      }
    ],
    metrics: [
      {
        title: '30% Faster Diagnosis',
        description:
          'AI reduced analysis time from 48 hours to just 12 hours, enabling quicker medical intervention.'
      },
      {
        title: '95% Accuracy Rate',
        description:
          'The AI system significantly improved precision in detecting abnormalities, reducing misdiagnosis rates.'
      },
      {
        title: '40% Decrease in Diagnostic Errors',
        description:
          'AI-assisted assessments led to more reliable and consistent results compared to traditional manual evaluations.'
      },
      {
        title: '5x Increase in Scalability',
        description:
          'The system efficiently handled increased patient data without additional strain on healthcare staff.'
      }
    ],
    clientTestimonial: {
      description:
        'With AI-driven diagnostics, our hospital reduced misdiagnoses and improved patient care significantly. The efficiency gains have been remarkable, and we are now able to detect critical diseases much earlier.',
      clientName: 'Dr. Sarah Matthews, Chief Radiologist'
    },
    conclusion:
      'The successful deployment of AI-powered diagnostics transformed the healthcare provider’s operations, ensuring faster, more accurate, and scalable diagnostic processes. Moving forward, we plan to integrate real-time remote diagnostics to extend AI-driven healthcare access to underserved regions.'
  },
  {
    id: 2,
    title: 'AI-Powered Chatbots for Patient Assistance',
    description:
      'A virtual health assistant provides 24/7 support, answering patient queries, booking appointments, and assisting in symptom analysis.',
    img: caseImg3,
    tags: ['Digital Health', 'R&D Innovations'],
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
    ],
    challenges: [
      {
        title: 'Delayed Diagnosis',
        description:
          'Traditional diagnostic methods required manual analysis, often taking days to provide results. This delay hindered timely treatment decisions, especially for critical conditions.'
      },
      {
        title: 'Human Errors',
        description:
          'Inconsistencies in manual assessments led to varying diagnostic accuracy, increasing the risk of misdiagnosis.'
      },
      {
        title: 'Scalability Issues',
        description:
          'The hospital faced increasing patient loads, making it difficult to maintain efficiency with its existing diagnostic processes.'
      }
    ],
    solutions: [
      {
        title: 'Automated Image Analysis',
        description:
          'AI models were trained to analyze medical images, including X-rays, MRIs, and pathology slides, detecting abnormalities with high precision.'
      },
      {
        title: 'Predictive Insights',
        description:
          'Machine learning algorithms identified patterns and flagged potential diseases in their earliest stages, improving preventive care.'
      },
      {
        title: 'Seamless Integration',
        description:
          'The system was integrated with the hospital’s electronic health records (EHR), allowing real-time access to AI-powered diagnostic reports.'
      },
      {
        title: 'User-Friendly Dashboard',
        description:
          'A visual and interactive dashboard enabled healthcare professionals to interpret AI findings quickly and make data-driven decisions.'
      }
    ],
    metrics: [
      {
        title: '30% Faster Diagnosis',
        description:
          'AI reduced analysis time from 48 hours to just 12 hours, enabling quicker medical intervention.'
      },
      {
        title: '95% Accuracy Rate',
        description:
          'The AI system significantly improved precision in detecting abnormalities, reducing misdiagnosis rates.'
      },
      {
        title: '40% Decrease in Diagnostic Errors',
        description:
          'AI-assisted assessments led to more reliable and consistent results compared to traditional manual evaluations.'
      },
      {
        title: '5x Increase in Scalability',
        description:
          'The system efficiently handled increased patient data without additional strain on healthcare staff.'
      }
    ],
    clientTestimonial: {
      description:
        'With AI-driven diagnostics, our hospital reduced misdiagnoses and improved patient care significantly. The efficiency gains have been remarkable, and we are now able to detect critical diseases much earlier.',
      clientName: 'Dr. Sarah Matthews, Chief Radiologist'
    },
    conclusion:
      'The successful deployment of AI-powered diagnostics transformed the healthcare provider’s operations, ensuring faster, more accurate, and scalable diagnostic processes. Moving forward, we plan to integrate real-time remote diagnostics to extend AI-driven healthcare access to underserved regions.'
  },
  {
    id: 3,
    title: 'AI-Powered Diagnostics for Early Disease Detection',
    description:
      'A leading healthcare provider faced challenges in detecting diseases early due to delayed diagnostics and human error and implemented an AI-driven diagnostic system.',
    img: caseImg,
    tags: ['AI Solution', 'Global Impact'],
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
    ],
    challenges: [
      {
        title: 'Delayed Diagnosis',
        description:
          'Traditional diagnostic methods required manual analysis, often taking days to provide results. This delay hindered timely treatment decisions, especially for critical conditions.'
      },
      {
        title: 'Human Errors',
        description:
          'Inconsistencies in manual assessments led to varying diagnostic accuracy, increasing the risk of misdiagnosis.'
      },
      {
        title: 'Scalability Issues',
        description:
          'The hospital faced increasing patient loads, making it difficult to maintain efficiency with its existing diagnostic processes.'
      }
    ],
    solutions: [
      {
        title: 'Automated Image Analysis',
        description:
          'AI models were trained to analyze medical images, including X-rays, MRIs, and pathology slides, detecting abnormalities with high precision.'
      },
      {
        title: 'Predictive Insights',
        description:
          'Machine learning algorithms identified patterns and flagged potential diseases in their earliest stages, improving preventive care.'
      },
      {
        title: 'Seamless Integration',
        description:
          'The system was integrated with the hospital’s electronic health records (EHR), allowing real-time access to AI-powered diagnostic reports.'
      },
      {
        title: 'User-Friendly Dashboard',
        description:
          'A visual and interactive dashboard enabled healthcare professionals to interpret AI findings quickly and make data-driven decisions.'
      }
    ],
    metrics: [
      {
        title: '30% Faster Diagnosis',
        description:
          'AI reduced analysis time from 48 hours to just 12 hours, enabling quicker medical intervention.'
      },
      {
        title: '95% Accuracy Rate',
        description:
          'The AI system significantly improved precision in detecting abnormalities, reducing misdiagnosis rates.'
      },
      {
        title: '40% Decrease in Diagnostic Errors',
        description:
          'AI-assisted assessments led to more reliable and consistent results compared to traditional manual evaluations.'
      },
      {
        title: '5x Increase in Scalability',
        description:
          'The system efficiently handled increased patient data without additional strain on healthcare staff.'
      }
    ],
    clientTestimonial: {
      description:
        'With AI-driven diagnostics, our hospital reduced misdiagnoses and improved patient care significantly. The efficiency gains have been remarkable, and we are now able to detect critical diseases much earlier.',
      clientName: 'Dr. Sarah Matthews, Chief Radiologist'
    },
    conclusion:
      'The successful deployment of AI-powered diagnostics transformed the healthcare provider’s operations, ensuring faster, more accurate, and scalable diagnostic processes. Moving forward, we plan to integrate real-time remote diagnostics to extend AI-driven healthcare access to underserved regions.'
  },
  {
    id: 4,
    title: 'AI-Powered Chatbots for Patient Assistance',
    description:
      'A virtual health assistant provides 24/7 support, answering patient queries, booking appointments, and assisting in symptom analysis.',
    img: caseImg2,
    tags: ['AI Solution', 'Global Impact'],
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
    ],
    challenges: [
      {
        title: 'Delayed Diagnosis',
        description:
          'Traditional diagnostic methods required manual analysis, often taking days to provide results. This delay hindered timely treatment decisions, especially for critical conditions.'
      },
      {
        title: 'Human Errors',
        description:
          'Inconsistencies in manual assessments led to varying diagnostic accuracy, increasing the risk of misdiagnosis.'
      },
      {
        title: 'Scalability Issues',
        description:
          'The hospital faced increasing patient loads, making it difficult to maintain efficiency with its existing diagnostic processes.'
      }
    ],
    solutions: [
      {
        title: 'Automated Image Analysis',
        description:
          'AI models were trained to analyze medical images, including X-rays, MRIs, and pathology slides, detecting abnormalities with high precision.'
      },
      {
        title: 'Predictive Insights',
        description:
          'Machine learning algorithms identified patterns and flagged potential diseases in their earliest stages, improving preventive care.'
      },
      {
        title: 'Seamless Integration',
        description:
          'The system was integrated with the hospital’s electronic health records (EHR), allowing real-time access to AI-powered diagnostic reports.'
      },
      {
        title: 'User-Friendly Dashboard',
        description:
          'A visual and interactive dashboard enabled healthcare professionals to interpret AI findings quickly and make data-driven decisions.'
      }
    ],
    metrics: [
      {
        title: '30% Faster Diagnosis',
        description:
          'AI reduced analysis time from 48 hours to just 12 hours, enabling quicker medical intervention.'
      },
      {
        title: '95% Accuracy Rate',
        description:
          'The AI system significantly improved precision in detecting abnormalities, reducing misdiagnosis rates.'
      },
      {
        title: '40% Decrease in Diagnostic Errors',
        description:
          'AI-assisted assessments led to more reliable and consistent results compared to traditional manual evaluations.'
      },
      {
        title: '5x Increase in Scalability',
        description:
          'The system efficiently handled increased patient data without additional strain on healthcare staff.'
      }
    ],
    clientTestimonial: {
      description:
        'With AI-driven diagnostics, our hospital reduced misdiagnoses and improved patient care significantly. The efficiency gains have been remarkable, and we are now able to detect critical diseases much earlier.',
      clientName: 'Dr. Sarah Matthews, Chief Radiologist'
    },
    conclusion:
      'The successful deployment of AI-powered diagnostics transformed the healthcare provider’s operations, ensuring faster, more accurate, and scalable diagnostic processes. Moving forward, we plan to integrate real-time remote diagnostics to extend AI-driven healthcare access to underserved regions.'
  },
  {
    id: 5,
    title: 'Predictive Analytics for Disease Prevention',
    description:
      'Leveraging big data and machine learning, our platform predicts potential disease outbreaks and provides proactive healthcare insights.',
    img: caseImg4,
    tags: ['Global Impact'],
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
    ],
    challenges: [
      {
        title: 'Delayed Diagnosis',
        description:
          'Traditional diagnostic methods required manual analysis, often taking days to provide results. This delay hindered timely treatment decisions, especially for critical conditions.'
      },
      {
        title: 'Human Errors',
        description:
          'Inconsistencies in manual assessments led to varying diagnostic accuracy, increasing the risk of misdiagnosis.'
      },
      {
        title: 'Scalability Issues',
        description:
          'The hospital faced increasing patient loads, making it difficult to maintain efficiency with its existing diagnostic processes.'
      }
    ],
    solutions: [
      {
        title: 'Automated Image Analysis',
        description:
          'AI models were trained to analyze medical images, including X-rays, MRIs, and pathology slides, detecting abnormalities with high precision.'
      },
      {
        title: 'Predictive Insights',
        description:
          'Machine learning algorithms identified patterns and flagged potential diseases in their earliest stages, improving preventive care.'
      },
      {
        title: 'Seamless Integration',
        description:
          'The system was integrated with the hospital’s electronic health records (EHR), allowing real-time access to AI-powered diagnostic reports.'
      },
      {
        title: 'User-Friendly Dashboard',
        description:
          'A visual and interactive dashboard enabled healthcare professionals to interpret AI findings quickly and make data-driven decisions.'
      }
    ],
    metrics: [
      {
        title: '30% Faster Diagnosis',
        description:
          'AI reduced analysis time from 48 hours to just 12 hours, enabling quicker medical intervention.'
      },
      {
        title: '95% Accuracy Rate',
        description:
          'The AI system significantly improved precision in detecting abnormalities, reducing misdiagnosis rates.'
      },
      {
        title: '40% Decrease in Diagnostic Errors',
        description:
          'AI-assisted assessments led to more reliable and consistent results compared to traditional manual evaluations.'
      },
      {
        title: '5x Increase in Scalability',
        description:
          'The system efficiently handled increased patient data without additional strain on healthcare staff.'
      }
    ],
    clientTestimonial: {
      description:
        'With AI-driven diagnostics, our hospital reduced misdiagnoses and improved patient care significantly. The efficiency gains have been remarkable, and we are now able to detect critical diseases much earlier.',
      clientName: 'Dr. Sarah Matthews, Chief Radiologist'
    },
    conclusion:
      'The successful deployment of AI-powered diagnostics transformed the healthcare provider’s operations, ensuring faster, more accurate, and scalable diagnostic processes. Moving forward, we plan to integrate real-time remote diagnostics to extend AI-driven healthcare access to underserved regions.'
  }
]

const CaseStudies = ({ selectedTag }) => {
  const filteredCases =
    selectedTag === 'All'
      ? data
      : data.filter(cs => cs.tags.includes(selectedTag))
  return (
    <div className='custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
      <div className='flex flex-col gap-[28px] sm:gap-[36px] justify-center items-center'>
        {filteredCases.map((item, index) => (
          <div
            key={index}
            className='flex flex-col lg:flex-row justify-center items-center gap-[24px] lg:gap-[48px] w-full border border-[#F1F3F4] p-[24px] rounded-[16px]'
          >
            <div className='relative w-full h-[300px] sm:h-[500px]'>
              <Image
                src={item.img}
                alt={item.title}
                fill
                className='rounded-[4px] object-cover'
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
              <Link href={`/case-studies/${item.id}`}>
                <button className='text-[14px] rounded-[28px] bg-primary text-white font-[600] leading-[24px] tracking-[1.4px] shadow-[0px_16px_16px_0px_rgba(25,188,229,0.20)] px-[24px] py-[10px] sm:py-[16px] uppercase'>
                  Read Details
                </button>
              </Link>
            </div>
          </div>
        ))}
        {filteredCases.length === 0 && (
          <p className='text-gray-500'>No blogs found for "{selectedTag}"</p>
        )}
        {filteredCases.length > 0 && (
          <button className='h-[56px] px-[40px] py-[16px] border border-[#C2D2D6] text-[#338499] uppercase tracking-[1.4px] leading-[24px] font-[600] rounded-[28px]'>
            load more
          </button>
        )}
      </div>
    </div>
  )
}

export default CaseStudies
