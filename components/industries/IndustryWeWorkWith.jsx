const industriesData = [
  {
    domain: 'FinTech',
    subDomains: [
      'Custom Banking & Wallet Platforms',
      'AI/ML: Fraud Detection, Robo-Advisory',
      'Cloud Computing & Data Processing',
      'PCI-DSS-Compliant Cybersecurity & API Security',
      'DevOps & CI/CD for Rapid Deployment',
      'Business Intelligence & Real-Time Dashboards'
    ]
  },
  {
    domain: 'EdTech',
    subDomains: [
      'Learning Management Systems (Web/Mobile)',
      'AI-Driven Adaptive Learning & Student Analytics',
      'Cloud Video & Assessment Delivery',
      'Scalable IT Infrastructure',
      'QA for Interactive Learning Modules'
    ]
  },
  {
    domain: 'HealthTech',
    subDomains: [
      'EHR, Telemedicine & Patient Portals',
      'AI/ML for Diagnostics & Risk Prediction',
      'HIPAA-Compliant Cybersecurity',
      'Medical Data Backup & Recovery',
      'VoIP for Remote Consultations'
    ]
  },
  {
    domain: 'E-Commerce',
    subDomains: [
      'Scalable Online Stores with Payment Integration',
      'AI: Product Recommendations & Dynamic Pricing',
      'DevOps for A/B Testing & Fast Releases',
      'Cloud Storage & Global CDN',
      'QA for UX & Checkout Optimization'
    ]
  },
  {
    domain: 'Startups',
    subDomains: [
      'MVP Design, Development & Scaling',
      'Tech Stack & Product-Market Fit Consulting',
      'DevOps for Agile Development',
      'QA for Early-Stage Products'
    ]
  },
  {
    domain: 'Real Estate (PropTech)',
    subDomains: [
      'Virtual Property Tours & CRM Integration',
      'AI: Price Prediction & Lead Scoring',
      'Cloud-Based Property Data Hosting',
      'Web & Mobile Portals'
    ]
  },
  {
    domain: 'Energy & Utilities',
    subDomains: [
      'Smart Grid & IoT Integration',
      'Predictive Maintenance & Analytics',
      'Cloud-Based Big Data Platforms',
      'Cybersecurity for Critical Systems'
    ]
  },
  {
    domain: 'GovTech / Public Sector',
    subDomains: [
      'E-Governance Portals',
      'AI Chatbots for Citizen Services',
      'Secure Infrastructure & Compliance',
      'DevOps for Public Platforms'
    ]
  },
  {
    domain: 'Automotive & Smart Mobility',
    subDomains: [
      'Fleet & Maintenance Management',
      'AI for Autonomous Systems & Diagnostics',
      'Real-Time Cloud Integration',
      'Mobile Apps for Drivers & Users'
    ]
  }
]

const IndustryWeWorkWith = () => {
  return (
    <div className='bg-gradient-to-b from-white to-[#F5FDFF] py-6 sm:py-16'>
      <div className=' custom-container 2xl-custom:w-[1580px] 2xl-custom:mx-auto'>
        <div className='flex flex-col justify-center items-center sm:gap-4'>
          {/* Header */}
          <h1 className='text-[24px] sm:text-[32px] font-[700] text-[#0B3641] sm:leading-[40px]'>
            Industry We Work with
          </h1>
          <p className='text-[#677A7E] text-[18px] font-[400] leading-[24px] mt-2 text-center'>
            Meet the minds shaping our strategy, guiding innovation, and <br />{' '}
            leading CMED Tech toward a smarter future.
          </p>

          {/* Domain Sections */}
          <div className='space-y-6 mt-4'>
            {industriesData.map((industry, idx) => (
              <div
                key={idx}
                className='flex flex-col justify-center items-center py-4'
              >
                <h3 className='text-lg md:text-[24px] font-semibold text-[#010101] sm:leading-[32px] mb-4 border-b border-[#19BCE540] w-full text-center pb-3'>
                  {industry.domain}
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mx-auto'>
                  {industry.subDomains.map((item, subIdx) => (
                    <div
                      key={subIdx}
                      className='bg-[#FFFFFF80] border border-[#19BCE540] rounded-[4px] px-3 sm:px-6 py-3 sm:text-[18px] font-semibold sm:leading-[24px] text-[#19BCE5] bg-white hover:shadow-sm transition text-center'
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndustryWeWorkWith
