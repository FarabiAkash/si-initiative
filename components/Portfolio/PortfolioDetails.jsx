import Image from 'next/image'
import p1 from '../../public/assets/portfolio/p1.jpg'
import appStore from '../../public/assets/portfolio/appStore1.svg'
import googlePlay from '../../public/assets/portfolio/googlePlay1.svg'
import CoreFeatures from './CoreFeatures'
import TechnologyStack from './TechnologyStack'

const PortfolioDetails = () => {
  return (
    <section className="!pt-0 2xl-custom:w-[1580px] 2xl-custom:mx-auto">
      {/* Hero Section */}
      <div className="custom-container ">
        <Image
          src={p1}
          alt="SmartHealth Connect Preview"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>

      {/* Project Title */}
      <div className="text-center  custom-container ">
        <h1 className="text-3xl md:text-[48px] font-bold mb-4 text-[#0B3641]">
          SmartHealth Connect
        </h1>
        <p className="text-[#0B3641] leading-relaxed max-w-2xl mx-auto text-xl font-medium">
          SmartHealth Connect is a powerful app designed for doctors and
          caregivers to better monitor, record, and communicate with patients.
          It provides secure data sharing, appointment tracking, and an
          intuitive interface for managing healthcare efficiently.
        </p>
      </div>

      {/* Production Releases */}
      <div className="w-full bg-[#e9f4f8] py-16 text-center">
          <h2 className="text-2xl md:text-[32px] font-semibold text-[#0B3641] mb-6">
            Production Releases
          </h2>
          <div className="flex items-center flex-col justify-center gap-3">
            <div className='px-2 py3 bg-black rounded-lg flex items-center justify-center'>
              <Image src={appStore} alt="App Store" className="h-[56px] w-[166px]" />
            </div>
            <div className='px-2 py3 bg-black rounded-lg flex items-center justify-center'>
            <Image src={googlePlay} alt="Google Play" className="h-[56px] w-[166px]" />
            </div>
        </div>
      </div>

      {/* Core Features */}
     <CoreFeatures />

      {/* Project Summary */}
      <div className="w-full bg-[#e9f4f8] py-16">
        <div className="custom-container ">
          <h2 className="text-3xl md:text-[48px] font-bold mb-4 text-[#0B3641] text-center">
            Project Summary
          </h2>
          <p className="text-[#0B3641] leading-relaxed max-w-2xl mx-auto text-xl font-medium mb-6 text-center">
          A quick snapshot of key project details for SmartHealth Connect.
        </p>
          <table className="w-1/2 mx-auto border border-[#DDF1F7] rounded-lg overflow-hidden">
            <tbody>
              {[
                ['Project Title', 'SmartHealth Connect'],
                ['Client', 'HealthSync Innovations'],
                ['Duration', '6 Months'],
                ['Platform', 'iOS / Android'],
                ['Tech Stack', 'Flutter, Node.js, MongoDB'],
                ['Project Status', 'Live on App Store & Play Store'],
              ].map(([label, value], i) => (
                <tr
                  key={i}
                  className={`border-t border-[#DDF1F7] ${
                    i % 2 === 0 ? 'bg-white' : 'bg-[#F9FDFF]'
                  }`}
                >
                  <td className="font-medium text-[#0B3641] py-3 px-4">
                    {label}
                  </td>
                  <td className="text-[#0B3641] py-3 px-4">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Technology Stack */}
      <TechnologyStack />
    </section>
  )
}

export default PortfolioDetails
