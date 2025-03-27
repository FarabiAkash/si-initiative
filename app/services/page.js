import WorkProcess from "../../components/Services/WorkProcess"
import PageHeader from "../../components/shared/PageHeader"
import SuccessStories from "../../components/Home/SuccessStories"
import GetInTouch from "../../components/Services/GetInTouch"

const page = () => {
    return (
        <>
            <PageHeader
                title={'Innovative Healthcare Solutions for a Smarter Future'}
                subtitle={'Empowering healthcare providers with AI-driven, data-centric, and digital solutions for better patient outcomes'}
            />
            {/* <AllCoreService /> */}
            {/*<SpecializedServices /> */}
            <WorkProcess />
            <SuccessStories pageName={'services'} />
            <GetInTouch />
        </>
    )
}
export default page