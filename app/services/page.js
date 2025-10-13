import WorkProcess from "../../components/services/WorkProcess"
import PageHeader from "../../components/shared/PageHeader"
import SuccessStories from "../../components/Home/SuccessStories"
import GetInTouch from "../../components/services/GetInTouch"
import SpecializedServices from "../../components/services/SpecializedServices"
import AllCoreService from "../../components/services/AllCoreService"
import AllServicesWeOffer from '../../components/services/AllServicesWeOffer'
import pageHeaderBg from '../../public/assets/services/banner.jpg'

const page = () => {
    return (
        <>
            <PageHeader
                title={'Empowering Businesses with Innovation and Expertise'}
                subtitle={'Delivering innovative solutions that seamlessly adapt, scale efficiently, and empower businesses to thrive tomorrow.'}
                pageHeaderBg={pageHeaderBg}
            />
            <AllServicesWeOffer />
            {/* <AllCoreService /> */}
            {/* <SpecializedServices /> */}
            <WorkProcess />
            <SuccessStories pageName={'services'} />
            <GetInTouch />
        </>
    )
}
export default page