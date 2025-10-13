import PageHeader from "@/components/shared/PageHeader"
import IndustryWeWorkWith from '../../components/industries/IndustryWeWorkWith'
import SuccessStories from "@/components/Home/SuccessStories"
import GetInTouch from "@/components/services/GetInTouch"
import pageHeaderBg from '../../public/assets/industry/banner.jpg'


const page = () => {
    return (
        <>
            <PageHeader
                title={'Innovation That Transforms Industries and Sectors'}
                subtitle={'Partnering across diverse industries worldwide to accelerate meaningful progress and transformation in the digital era'}
                pageHeaderBg={pageHeaderBg}
            />
            <IndustryWeWorkWith />
            <SuccessStories pageName={'industries'} />
            <GetInTouch />
        </>
    )
}
export default page