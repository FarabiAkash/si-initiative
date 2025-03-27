import WorkProcess from "../../components/services/WorkProcess"
import PageHeader from "../../components/shared/PageHeader"
import SuccessStories from "../../components/Home/SuccessStories"
import GetInTouch from "../../components/services/GetInTouch"
import SpecializedServices from "../../components/services/SpecializedServices"
import AllCoreService from "../../components/services/AllCoreService"

const page = () => {
    return (
        <>
            <PageHeader
                title={'Innovative Healthcare Solutions for a Smarter Future'}
                subtitle={'Empowering healthcare providers with AI-driven, data-centric, and digital solutions for better patient outcomes'}
            />
            <AllCoreService /> 
           <SpecializedServices />
            <WorkProcess />
            <SuccessStories pageName={'services'} />
            <GetInTouch />
        </>
    )
}
export default page