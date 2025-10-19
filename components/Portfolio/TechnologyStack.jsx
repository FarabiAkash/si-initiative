'use client'
import Image from 'next/image'
import { useState } from 'react'

// Import your tech logos
import flutter from '../../public/assets/portfolio/flutter.png'
import nextjs from '../../public/assets/portfolio/next.png'

const TechnologyStack = () => {
  const [activeTab, setActiveTab] = useState('Front-end')

  const techData = {
    'Front-end': [
      { name: 'Flutter', img: flutter },
      { name: 'Next.js', img: nextjs },
    ],
    'Back-end': [
      { name: 'Node.js', img: nextjs },
      { name: 'Firebase', img: flutter },
    ],
    Database: [
      { name: 'MongoDB', img: nextjs },
      { name: 'Firebase DB', img: flutter },
    ],
    Cloud: [
      { name: 'AWS', img: flutter },
      { name: 'Firebase Hosting', img: nextjs },
    ],
    Integration: [
      { name: 'Zapier', img: flutter },
      { name: 'REST APIs', img: nextjs },
    ],
    Tools: [
      { name: 'Git', img: flutter },
      { name: 'VS Code', img: nextjs },
    ],
  }

  return (
    <section className="custom-container">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Technology Stack</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Tools and technologies used to build scalable, secure, and high-performing
          digital solutions.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-8 border-b border-gray-200 mb-10">
          {Object.keys(techData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-base font-medium relative ${
                activeTab === tab
                  ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-sky-400'
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tech grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
          {techData[activeTab].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-[#F9FDFF] border border-[#DDF1F7] rounded-2xl p-6 shadow-sm hover:shadow-md transition w-[184px] h-[144px]"
            >
              <div className='h-24 w-24'>
                <Image
                src={tech.img}
                alt={tech.name}
                className="h-full w-full mb-3 object-cover"
              />
              </div>
              <p className="text-sm font-medium text-gray-800">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnologyStack
