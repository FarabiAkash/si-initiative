import Image from 'next/image'
import blog1 from '../../public/assets/blogs/blog1.png'
import blog2 from '../../public/assets/blogs/blog2.png'
import blog3 from '../../public/assets/blogs/blog3.png'
import blog4 from '../../public/assets/blogs/blog4.png'
import blog5 from '../../public/assets/blogs/blog5.png'
import blog6 from '../../public/assets/blogs/blog6.png'
import blog7 from '../../public/assets/blogs/blog7.png'
import blog8 from '../../public/assets/blogs/blog8.png'
import blog9 from '../../public/assets/blogs/blog9.png'
import blog10 from '../../public/assets/blogs/blog10.png'
import blog11 from '../../public/assets/blogs/blog11.png'
import blog12 from '../../public/assets/blogs/blog12.jpeg'

const blogs = [
  {
    title: 'The Future of AI in Healthcare: Transforming Patient Care',
    description:
      'AI is revolutionizing healthcare, from early disease detection to personalized treatment plans.',
    img: blog1
  },
  {
    title: 'Digital Prescription Systems: The End of Paper-Based Errors',
    description:
      'Traditional prescriptions often lead to misinterpretation and errors, but digital systems ensure accuracy.',
    img: blog2
  },
  {
    title: 'How IoT is Enhancing Remote Patient Monitoring',
    description:
      'IoT-powered healthcare devices bridge the gap between doctors and patients by providing real-time data.',
    img: blog3
  },
  {
    title: 'Nutrition and Health: The Science Behind a Balanced Diet',
    description:
      'Understanding the importance of balanced meals can significantly impact overall health and wellness.',
    img: blog4
  },
  {
    title: 'Surgeon’s Perspective: The Role of Technology in Modern Surgery',
    description:
      'With AI and robotics, modern surgeries have become safer and more efficient than ever before.',
    img: blog5
  },
  {
    title: 'AI-Driven Digital Health Records: A New Era of Efficiency',
    description:
      'AI-powered EHR systems are making healthcare records more accessible and accurate for patients and doctors.',
    img: blog6
  },
  {
    title: 'Wearable Tech: The Future of Preventive Healthcare',
    description:
      'Smartwatches and wearable sensors are helping individuals track their health in real-time.',
    img: blog7
  },
  {
    title: 'The Growing Importance of Telemedicine in Post-Pandemic Healthcare',
    description:
      'Remote consultations have become a standard part of healthcare delivery worldwide.',
    img: blog8
  },
  {
    title: 'AI-Powered Drug Discovery: Speeding Up Medical Breakthroughs',
    description:
      'AI algorithms are transforming how new drugs are researched and tested for global health needs.',
    img: blog9
  },
  {
    title: 'Blockchain in Healthcare: Ensuring Data Security & Privacy',
    description:
      'Blockchain technology is enhancing security and privacy in electronic health records (EHRs).',
    img: blog10
  },
  {
    title: 'Medical Imaging with AI: Enhancing Diagnostic Accuracy',
    description:
      'AI is improving radiology and diagnostic imaging for faster and more precise disease detection.',
    img: blog11
  },
  {
    title: 'The Role of Big Data in Predictive Healthcare Analytics',
    description:
      'Data-driven insights are helping hospitals predict outbreaks and manage resources efficiently.',
    img: blog12
  }
]

const AllBlogs = () => {
  return (
    <div className='custom-container flex flex-col items-center gap-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className='bg-white rounded-lg overflow-hidden transition duration-300 cursor-pointer'
          >
            <div className='relative w-full h-48'>
              <Image
                src={blog.img}
                alt={blog.title}
                layout='fill'
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
            <div className='py-4'>
              <h3 className='text-lg font-semibold text-gray-900'>
                {blog.title}
              </h3>
              <p className='text-base text-[#6D787B] mt-2 truncate'>
                {blog.description}...
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className='h-[56px] px-[40px] py-[16px] border border-[#C2D2D6] text-[#338499] uppercase tracking-[1.4px] leading-[24px] font-[600] rounded-[28px]'>
        load more
      </button>
    </div>
  )
}

export default AllBlogs
