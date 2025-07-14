import WorkProcess from "../../components/services/WorkProcess"
import PageHeader from "../../components/shared/PageHeader"
import SuccessStories from "../../components/Home/SuccessStories"
import GetInTouch from "../../components/services/GetInTouch"
import SpecializedServices from "../../components/services/SpecializedServices"
import AllCoreService from "../../components/services/AllCoreService"
import AllServicesWeOffer from '../../components/services/AllServicesWeOffer'

const page = () => {
    return (
        <>
            <PageHeader
                title={'Meet the Team Powering CMED Tech’s Innovation'}
                subtitle={'Empowering healthcare providers with AI-driven, data-centric, and digital solutions for better patient outcomes'}
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