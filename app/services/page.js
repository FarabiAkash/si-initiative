import AllCoreService from "../../components/Services/AllCoreService.jsx"
import PageHeader from "../../components/shared/PageHeader"

const page = () => {
    return (
        <>
            <PageHeader
                title={'Innovative Healthcare Solutions for a Smarter Future'}
                subtitle={'Empowering healthcare providers with AI-driven, data-centric, and digital solutions for better patient outcomes'}
            />
            <AllCoreService />
            {/*<SpecializedServices />
            <WorkProcess />
            <SuccessStories pageName={'services'} />
            <GetInTouch /> */}
        </>
    )
}
export default page