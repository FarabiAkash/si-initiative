import WorkProcess from "../../components/Services/WorkProcess.jsx"
import PageHeader from "../../components/shared/PageHeader"
import SuccessStories from "../../components/Home/SuccessStories.jsx"
import GetInTouch from "../../components/Services/GetInTouch.jsx"

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