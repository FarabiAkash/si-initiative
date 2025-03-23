'use client'
import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

const faqData = [
  {
    question: 'How can I get started with your digital healthcare solutions?',
    answer:
      'Getting started is simple! Explore our core and specialized services, and if you need guidance, reach out via our Contact Us section. Our team will assist you in finding the right solution for your needs.'
  },
  {
    question: 'Are your healthcare platforms secure and HIPAA-compliant?',
    answer:
      'Yes, our platforms follow strict security protocols and comply with HIPAA regulations to ensure data protection.'
  },
  {
    question:
      'Can I integrate your solutions with my existing healthcare system?',
    answer:
      'Absolutely! Our solutions are designed to integrate seamlessly with existing healthcare infrastructures.'
  },
  {
    question: 'Do you offer customized digital healthcare solutions?',
    answer:
      'Yes, we provide tailored solutions based on the specific needs of your organization.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='custom-container bg-gradient-to-bl from-white to-[#F5FDFF]'>
      <div className='text-center'>
        <h1 className='text-titleSubtitle text-[32px] font-bold leading-[40px]'>
          Frequently Asked Questions (FAQ)
        </h1>
        <p className='text-paragraph text-[18px] font-normal leading-[24px] w-[75vw] mx-auto pt-3'>
          Answers to Your Most Common Questions
        </p>
      </div>

      <div className='space-y-3 w-full sm:w-3/4 mx-auto pt-16'>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border-[1px] border-[#F1F3F4] py-[0.5rem] rounded-lg bg-white  ${
              openIndex === index && 'shadow-md'
            }`}
          >
            <button
              className={`w-full flex items-center text-start justify-between px-6 py-4 text-[18px] font-[600] ${
                openIndex === index ? 'text-titleSubtitle' : 'text-[#586A78]'
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {index + 1}. {item.question}
              {openIndex === index ? (
                <ChevronUp className='text-gray-600' />
              ) : (
                <ChevronDown className='text-gray-600' />
              )}
            </button>
            {openIndex === index && (
              <div className='px-6 pb-4 text-[#484E4F] text-base font-[400]'>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
