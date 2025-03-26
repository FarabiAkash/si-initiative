import PageHeader from "@/components/shared/PageHeader"
import AllBlogs from '../../components/Blogs/AllBlogs.jsx'

const page = () => {
  return <div className=''>
    <PageHeader
      title={'Transforming Healthcare with Innovation: The Blog'}
      subtitle={'Stay ahead with expert insights, groundbreaking research, and the latest advancements in AI, digital health, and medical technology.'}
      tags={[
        'All',
        'Digital Health',
        'AI in Healthcare',
        'IoT & Smart Tech',
        'R&D Innovations',
        'Data & Security',
        'Cybersecurity',
        'Blockchain',
        'Telemedicine',
        'Cloud Computing',
        'Big Data'
      ]}
    />
    <AllBlogs />
  </div>
}
export default page
