'use client'
import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

const faqData = [
  {
    question: 'Do you provide customized solutions?',
    answer:
      'Yes. Every business is unique, and we tailor our solutions to align with your specific goals, challenges, and long-term vision.'
  },
  {
    question: 'How do you ensure data security?',
    answer:
      'We follow industry best practices and global standards in cybersecurity, implementing advanced protection measures to safeguard your data and digital assets.'
  },
  {
    question: 'Can you handle both small and large-scale projects?',
    answer:
      'Absolutely. With a team of 100+ IT and AI professionals, we have the expertise and resources to manage projects of all sizes, from quick deployments to enterprise-scale transformations.'
  },
  {
    question: 'Do you provide ongoing support after project delivery?',
    answer:
      'Yes. Our services don’t end at deployment—we provide continuous support, maintenance, and optimization to ensure long-term success.'
  },
  {
    question: 'How can I get started with CMED Innovation?',
    answer:
      'Simply reach out through our contact form or consultation request, and our team will connect with you to discuss your needs and the best path forward.'
  }
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='bg-gradient-to-bl from-white to-[#F5FDFF] '>
      <div className='custom-container  2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        <div className='text-center'>
          <h1 className='text-titleSubtitle text-[32px] font-bold leading-[40px]'>
            Frequently Asked Questions (FAQ)
          </h1>
          <p className='text-paragraph text-[18px] font-normal leading-[24px]  pt-3'>
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
    </div>
  )
}

export default FAQ
